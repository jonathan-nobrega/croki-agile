"use client"

import TableBox from '../../_components/tables/TableBox'
import data from '../../_seed/projects.seed.json'

export default function page() {

    const props = {
        title: 'Projects',
        description: 'List of all projects related to clients.',
        actionButton: 'Add project',
        headers: ['Title', 'Client', 'Billing Method', 'Status'],
        data
    }

    return (
        <TableBox props={props} />
    )
}