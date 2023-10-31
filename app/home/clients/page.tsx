"use client"

import { useDispatch } from 'react-redux'
import { setModule } from '@/app/_store/reducers/ModuleReducer'
import TableHeaders from '@/app/_components/tables/TableHeader'
import TableBody from '@/app/_components/tables/TableBody'
import TableModal from '@/app/_components/tables/TableModal'
import clientsSeed from '../../_seed/clients.seed.json'


export default function page() {

    const state = {
        title: "clients",
        description: 'List of all customer entities including child and parent accounts.',
        buttonDescription: 'Add client',
        tableHeaders: ['Name', 'Company', 'Email', 'Phone', 'Status'],
        tableData: clientsSeed,
        tableForm: 'ClientForm',
    }

    const dispatch = useDispatch()
    dispatch(setModule(state))

    return (
        <div className='flex flex-col h-full w-full p-5 space-y-3 border rounded-lg shadow-md'>
            <TableHeaders />
            <TableBody />
            <TableModal />
        </div>
    )
}

