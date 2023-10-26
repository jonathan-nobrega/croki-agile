"use client"

import Navbar from '../_components/Navbar'
import SearchBar from '../_components/SearchBar'
import store from '../_store'
import { Provider } from 'react-redux'

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <main className="h-screen w-screen flex text-sm text-gray-500 bg-white">
                <Navbar />
                <section className='flex flex-col w-full h-full overflow-auto'>
                    <SearchBar />
                    <section id="module-wrapper" className='p-8 h-full overflow-hidden'>
                        {children}
                    </section>
                </section>
            </main >
        </Provider>
    )
}
