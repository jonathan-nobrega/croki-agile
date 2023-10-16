"use client"

import Navbar from '../_components/Navbar'
import SearchBar from '../_components/SearchBar'

export default function Page({ children }: { children: React.ReactNode }) {

    return (
        <div className="h-screen w-screen flex text-sm text-gray-500 bg-white">
            <Navbar />
            <main className='flex flex-col w-full h-full overflow-auto'>
                <SearchBar />
                <section id="module-wrapper" className='p-8 h-full overflow-hidden'>
                    {children}
                </section>
            </main>
        </div >
    )
}
