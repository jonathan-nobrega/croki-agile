"use client"
import { UsersIcon, FolderIcon, Square3Stack3DIcon, ViewColumnsIcon, Cog6ToothIcon, MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import seed from '../../seed.json'

const navigation = [
    { name: 'Clients', href: '#', icon: UsersIcon, current: true },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Backlog', href: '#', icon: Square3Stack3DIcon, current: false },
    { name: 'Kanban', href: '#', icon: ViewColumnsIcon, current: false },
    { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]

const tableHeaders = ['Name', 'Company', 'Email', 'Phone', 'Status']

const currentNavStyle = 'font-bold bg-gray-50 text-green-900 border-solid'
const otherNavStyle = 'font-medium hover:fopnt:semibold hover:bg-gray-50 hover:text-gray-900'

export default function Page() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleProfile = () => {
        setIsOpen(!isOpen)
    }

    const openModal = (item: any) => {
        console.log('clicked! ', item)
    }

    return (
        <div className="h-screen w-screen flex text-sm text-gray-500 bg-white">
            <nav className='p-5 w-64 max-h-full border-r'>
                <img
                    src='./croki-green.PNG'
                    className='h-12 rounded-md'
                />
                <ul className='mt-20 space-y-3'>
                    {navigation.map((item) => (
                        <li>
                            <a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center p-2 rounded-md transition ease-in-out ${item.current ? currentNavStyle : otherNavStyle}`}
                            >
                                <item.icon
                                    className='w-6 h-6 mr-2 text-gray-500'
                                />
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className='flex flex-col w-full h-full'>
                {/* Search bar*/}
                <section className=' h-16 w-auto px-7 py-3 flex items-center justify-between border-b'>
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
                                    className={`absolute w-32 text-left top-12 p-3 space-y-2 rounded-md bg-white shadow duration-300
                                    ${isOpen ? '' : 'hidden'}`}
                                >
                                    <li><a href='#' className=''>You profile</a></li>
                                    <li><a href='#' className=''>Sign out</a></li>
                                </ul>
                            ) : <></>}
                        </button>
                    </div>
                </section>
                {/* Main module */}
                <section
                    className='flex flex-col h-full p-12 '
                >
                    <div className='p-5 space-y-3 border rounded-lg h-full w-full shadow-md'>
                        <section className='flex mb-10 justify-between items-center'>
                            <div>
                                <h1 className='text-xl text-gray-700 font-semibold'>Clients</h1>
                                <p className='mt-2'>List of all customer entities including child and parent accounts.</p>
                            </div>
                            <button
                                className='p-2 font-semibold rounded-md bg-green-600 text-white transition duration-300 ease-in-out'
                            >
                                Add customer
                            </button>
                        </section>
                        <table className='min-w-full text-left'>
                            <thead className=''>
                                <tr className='w-full border-separate'>
                                    {tableHeaders.map((item, id) => (
                                        <th
                                            className='py-2 border-b'
                                            key={id}
                                        >
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className=''>
                                {seed.map((item) => (
                                    <tr
                                        key={item._id}
                                        className='w-full'
                                        onClick={openModal(item)}
                                    >
                                        <td className='py-3 border-b border-gray-100'>{item.name}</td>
                                        <td className='py-3 border-b border-gray-100'>{item.company}</td>
                                        <td className='py-3 border-b border-gray-100'>{item.email}</td>
                                        <td className='py-3 border-b border-gray-100'>{item.phone}</td>
                                        <td className='flex py-3 border-b border-gray-100'>
                                            {item.isActive ? (
                                                <div className='p-1 w-16 text-xs text-center font-semibold border border-green-400 bg-green-100 rounded-md'>Active</div>
                                            ) : (
                                                <div className='p-1 w-16 text-xs text-center font-semibold border border-red-400 bg-red-100 rounded-md'>Inactive</div>
                                            )}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        {/* <div className="table w-full ...">
                            <div className="table-header-group">
                                <div className="table-row">
                                    <div className="table-cell text-left space-y-3">Song</div>
                                    <div className="table-cell text-left space-y-3">Artist</div>
                                    <div className="table-cell text-left space-y-3">Year</div>
                                </div>
                            </div>
                            <div className="table-row-group space-y-3">
                                <div className="table-row">
                                    <div className="table-cell space-y-3">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                                    <div className="table-cell space-y-3">Malcolm Lockyer</div>
                                    <div className="table-cell space-y-3">1961</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell space-y-3">Witchy Woman</div>
                                    <div className="table-cell space-y-3">The Eagles</div>
                                    <div className="table-cell space-y-3">1972</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell space-y-3">Shining Star</div>
                                    <div className="table-cell space-y-3">Earth, Wind, and Fire</div>
                                    <div className="table-cell space-y-3">1975</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </main>
        </div >
    )
}
