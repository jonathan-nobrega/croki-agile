"use client"

import { setModule } from "@/app/_store/reducers/ModuleReducer"
import { useDispatch } from "react-redux"

export default function page() {

    const state = {
        title: "calendar",
        // description: 'List of all customer entities including child and parent accounts.',
        // buttonDescription: 'Add client',
        // tableHeaders: ['Name', 'Company', 'Email', 'Phone', 'Status'],
        // tableData: clientsSeed,
        // tableForm: 'ClientForm',
    }

    const dispatch = useDispatch()
    dispatch(setModule(state))

    return (
        <div className='flex flex-col h-full w-full p-5 space-y-3 border rounded-lg shadow-md'>
        </div>
    )
}

