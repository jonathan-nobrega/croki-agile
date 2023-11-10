"use client"

import { Fragment, useEffect } from "react"
import { useDispatch } from "react-redux"

import invoicesSeed from '../../_seed/invoices.seed.json'
import { setModule } from "@/app/_store/reducers/ModuleReducer"
import TableHeaders from "@/app/_components/tables/TableHeader"
import TableBody from "@/app/_components/tables/TableBody"
import TableModal from "@/app/_components/tables/TableModal"

export default function page() {

    const state = {
        title: "invoices",
            description: 'List of invoices related to projects.',
            buttonDescription: 'Create invoice',
            tableHeaders: ['No.', 'Description', 'Bill to', 'Amount', 'Due date', 'Status'],
            tableData: invoicesSeed,
            // tableForm: 'ClientForm',
    }

    const dispatch = useDispatch()
    dispatch(setModule(state))

    return (
        <Fragment>
            <TableHeaders />
            <TableBody />
            <TableModal />
        </Fragment>
    )
}

