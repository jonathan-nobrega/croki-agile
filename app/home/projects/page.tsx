"use client"

import { useDispatch } from 'react-redux'
import { setModule } from '@/app/_store/reducers/ModuleReducer'
import TableHeaders from '@/app/_components/tables/TableHeader'
import TableBody from '@/app/_components/tables/TableBody'
import TableModal from '@/app/_components/tables/TableModal'
import projectsSeed from '../../_seed/projects.seed.json'

export default function page() {

    const state = {
        title: 'projects',
        description: 'List of all projects related to clients.',
        buttonDescription: 'Add project',
        tableHeaders: ['Title', 'Client', 'Billing Method', 'Status'],
        tableData: projectsSeed,
        tableForm: 'ProjectForm',
    }

    const dispatch = useDispatch()
    dispatch(setModule(state))

    return (
        <>
            <TableHeaders />
            <TableBody />
            <TableModal />
        </>
    )
}