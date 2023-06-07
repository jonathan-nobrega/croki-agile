"use client"

import TableModal from '../../components/TableModal'
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import ClientsTable from '../../components/ClientsTable'

export default function Page() {

    return (
        <div className="h-screen w-screen flex text-sm text-gray-500 bg-white">
            <Navbar />
            <main className='flex flex-col w-full h-full overflow-auto'>
                <TableModal />
                <SearchBar />
                {/* Module wrapper */}
                <section className='p-12 h-full overflow-hidden'>
                    {/* Clients Module */}
                    <ClientsTable />
                </section>
            </main>
        </div >
    )
}
