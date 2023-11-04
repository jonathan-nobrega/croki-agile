"use client"

import { setModule } from "@/app/_store/reducers/ModuleReducer"
import { useDispatch } from "react-redux"

import projectsSeed from '../../_seed/projects.seed.json'
import TableHeaders from "@/app/_components/tables/TableHeader"
import TableModal from "@/app/_components/tables/TableModal"
import KanbanBody from "@/app/_components/kanban/KanbanBody"

export default function page() {

    const state = {
        title: "kanban",
        description: 'Manage your projects by dragging and dropping items to the appropriate column',
        buttonDescription: 'Add project',
        // tableHeaders: ['Name', 'Company', 'Email', 'Phone', 'Status'],
        tableData: projectsSeed,
        tableForm: 'ProjectForm',
    }

    const dispatch = useDispatch()
    dispatch(setModule(state))

    return (
        <>
            <TableHeaders />
            <KanbanBody />
            <TableModal />
        </>
    )
}

