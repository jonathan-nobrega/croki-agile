"use client"

import Navbar from '../_components/nav/Navbar'
import SearchBar from '../_components/search/SearchBar'
import store from '../_store'
import { Provider } from 'react-redux'

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <main className="h-screen w-screen flex text-sm text-gray-500 bg-white">
                <Navbar />
                <section className='flex flex-col w-full h-full overflow-auto'>
                    <SearchBar />
                    <section id="module-wrapper" className=' p-6 h-full overflow-hidden'>
                        <div className='flex flex-col h-full w-full p-5 space-y-3 border rounded-lg shadow-md'>
                            {children}
                        </div>
                    </section>
                </section>
            </main >
        </Provider>
    )
}
