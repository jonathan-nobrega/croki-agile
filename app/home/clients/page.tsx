"use client"

import TableBox from '../../_components/tables/TableBox'
import data from '../../_seed/clients.seed.json'

export default function page() {

    const props = {
        title: "Clients",
        description: 'List of all customer entities including child and parent accounts.',
        actionButton: 'Add customer',
        headers: ['Name', 'Company', 'Email', 'Phone', 'Status'],
        data: data
    }

    return (
        <TableBox props={props} />
    )
}