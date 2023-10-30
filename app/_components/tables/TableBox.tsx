"use client"

import { useState, createContext, useContext, useEffect } from 'react'
import Button from '../utils/Button'
import { useDispatch, useSelector } from 'react-redux'
import { modalToogle } from '@/app/_store/reducers/ModalReducer'
import LoadingSpinner from '../utils/LooadingSpinner'

export default function page(props: TableProps) {

    const {
        title,
        description,
        buttonDescription,
        tableHeaders,
        tableRow,
        tableData,
    } = props

    const [data, setData] = useState()

    useEffect(() => {
        setTimeout(() => {
            setData(tableData)
        }, 1000)
    }, [data])

    function openModal(modalName: string, modalData?: any) {
        dispatch(modalToogle({
            modalName, modalData
        }))
    }

    return (
        <div className='flex flex-col h-full'>
            <section className='flex mb-5 justify-between items-center bg-white'>
                <div>
                    <h1 className='text-xl text-gray-700 font-semibold'>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
                    <p className='mt-2'>{description}</p>
                </div>
                {/* I need to set form state everytime I click add customer or edit row */}
                <Button buttonType='A' description={buttonDescription} action={() => openModal('createClient')} />
            </section>
            <section className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50'>
                {data
                    ?
                    <table className='min-w-full text-left '>
                        <thead className='w-full sticky top-0 bg-white border-collapse border-b'>
                            <tr>
                                {tableHeaders.map((item: any, id: any) => (
                                    <th className='py-4' key={id}>{item}</th>
                                ))}
                                <th className='w-20 py-4'></th>
                            </tr>
                        </thead>
                        <tbody className='overflow-auto '>
                            {data.map((item: RowInterface) => tableRow(item))}
                        </tbody>
                    </table>
                    :
                    <LoadingSpinner />
                }
            </section>
        </div>
    )
}