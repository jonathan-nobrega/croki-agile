"use client"

import TableBox from '../../_components/tables/TableBox'
import TableModal from '@/app/_components/tables/TableModal'
import TableForm from '@/app/_components/forms/TableForm'
import { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModule } from '@/app/_store/reducers/ModuleReducer'

export default function page() {
    const dispatch = useDispatch()
    const props = useSelector((state: any) => state.moduleSlice)

    useEffect(() => {
        dispatch(setModule('clients'))
    }, [dispatch])

    return (
        <>
            <div className='flex flex-col h-full w-full p-5 space-y-3 border rounded-lg shadow-md'>
                {props.description && (
                    <>
                        <TableBox />
                        <TableModal child={
                            <TableForm form='clientForm' />
                        } />
                    </>
                )}
            </div>
        </>
    )
}