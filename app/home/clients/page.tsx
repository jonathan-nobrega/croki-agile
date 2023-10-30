"use client"

import TableBox from '../../_components/tables/TableBox'
import TableModal from '@/app/_components/tables/TableModal'
import TableForm from '@/app/_components/forms/TableForm'
import ClientRow from '@/app/_components/tables/ClientRow'
import clientsSeed from '../../_seed/clients.seed.json'

export default function page() {
    return (
        <div className='flex flex-col h-full w-full p-5 space-y-3 border rounded-lg shadow-md'>
            <TableBox
                title={'clients'}
                description={'List of all customer entities including child and parent accounts.'}
                buttonDescription={'Add customer'}
                tableHeaders={['Name', 'Company', 'Email', 'Phone', 'Status']}
                tableRow={ClientRow}
                tableData={clientsSeed}
            />
            <TableModal child={
                <TableForm form='clientForm' />
            } />
        </div>
    )
}