"use client"

import { useState, createContext, useContext, useEffect } from 'react'
import Button from '../utils/Button'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../utils/LoadingSpinner'
import HeaderList from './HeaderList'
import BodyList from './BodyList'
import { openModal } from '@/app/_store/reducers/ModalReducer'

export default function page(props: TableProps) {

    const {
        title,
        description,
        buttonDescription,
        buttonForm,
        tableHeaders,
        tableRow,
        tableData,
    } = props
    const dispatch = useDispatch()
    const [data, setData] = useState()

    useEffect(() => {
        setTimeout(() => {
            setData(tableData)
        }, 100)
    }, [data])

    function actionButton() {
        dispatch(openModal({ 
            layout: buttonForm 
        }))
    }

    return (
        <div className='flex flex-col h-full'>
            <section className='flex mb-5 justify-between items-center bg-white'>
                <div>
                    <h1 className='text-xl text-gray-700 font-semibold'>
                        {title.charAt(0).toUpperCase() + title.slice(1)}
                    </h1>
                    <p className='mt-2'>
                        {description}
                    </p>
                </div>
                <Button
                    type='A'
                    description={buttonDescription}
                    action={actionButton}
                />
            </section>
            <section className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50'>
                {data
                    ?
                    <table className='min-w-full text-left '>
                        <HeaderList tableHeaders={tableHeaders} />
                        <BodyList tableRow={tableRow} data={data} />
                    </table>
                    :
                    <LoadingSpinner />
                }
            </section>
        </div>
    )
}