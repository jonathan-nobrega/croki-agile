"use client"

import { setModule } from "@/app/_store/reducers/ModuleReducer"
import { useDispatch } from "react-redux"

export default function page() {

    const state = {
        title: "invoices",
        // description: 'List of all customer entities including child and parent accounts.',
        // buttonDescription: 'Add client',
        // tableHeaders: ['Name', 'Company', 'Email', 'Phone', 'Status'],
        // tableData: clientsSeed,
        // tableForm: 'ClientForm',
    }

    const dispatch = useDispatch()
    dispatch(setModule(state))

    return (
        <>
        </>
    )
}

