"use client"
import { UsersIcon, FolderIcon, Square3Stack3DIcon, ViewColumnsIcon, Cog6ToothIcon, MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const navigation = [
    { name: 'Clients', href: '#', icon: UsersIcon, current: true },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Backlog', href: '#', icon: Square3Stack3DIcon, current: false },
    { name: 'Kanban', href: '#', icon: ViewColumnsIcon, current: false },
    { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]

const currentNavStyle = 'bg-gray-50 text-green-900 border-solid'
const otherNavStyle = ' hover:bg-gray-50 hover:text-gray-900'

export default function Page() {
    const [isOpen, setIsOpen] = useState(true)

    const toggleProfile = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="h-screen flex text-sm text-gray-500 bg-white">
            <nav className='p-5 w-64 rounded-md shadow'>
                <img
                    src='./croki-green.PNG'
                    className='h-12 rounded-md'
                />
                <ul className='mt-20 space-y-3'>
                    {navigation.map((item) => (
                        <li >
                            <a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center p-2 rounded-md font-bold ${item.current ? currentNavStyle : otherNavStyle}`}
                            >
                                <item.icon
                                    className='w-6 h-6 mr-2'
                                />
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className='w-full'>
                {/* Search bar*/}
                <section className=' h-auto w-auto px-7 py-3 flex items-center justify-between shadow'>
                    <div className='h-auto flex'>
                        <MagnifyingGlassIcon
                            className='w-5 mr-3'
                        />
                        <input
                            placeholder='Search...'
                            className=' w-96 outline-none'
                        />
                    </div>
                    <div className='h-auto space-x-5 justify-self-end items-center flex'>
                        <button>
                            <BellIcon
                                className='w-6'
                            />
                        </button>
                        <div
                            className='h-7 border-r border-gray-300 shadow'
                        />
                        <button
                            className='flex items-center space-x-2 ease-in-out'
                            onClick={toggleProfile}
                        >
                            <img
                                className='h-8 rounded-full '
                                src='./panda.png'
                            />
                            <span className=''>
                                Mr. Panda
                            </span>
                            <ChevronDownIcon
                                className='w-4'
                            />
                            {isOpen ? (
                                <ul
                                    className={`absolute w-32 text-left top-12 p-3 space-y-2 rounded-md bg-white shadow ease-in-out transition-opacity
                                    ${isOpen ? ' opacity-100' : ' opacity-0'}`}
                                >
                                    <li><a href='#' className=''>You profile</a></li>
                                    <li><a href='#' className=''>Sign out</a></li>
                                </ul>
                            ) : <></>}
                        </button>
                    </div>
                </section>
            </main>
        </div >
    )
}
