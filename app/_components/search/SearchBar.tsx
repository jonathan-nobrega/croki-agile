import { UsersIcon, FolderIcon, Square3Stack3DIcon, ViewColumnsIcon, Cog6ToothIcon, MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleProfile = () => {
        setIsOpen(!isOpen)
    }
    return (
        <section className=' h-14 w-auto px-7 py-3 flex items-center justify-between border-b'>
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
                <div className='h-7 border-r border-gray-300 shadow' />
                <button
                    className='flex items-center space-x-2 ease-in-out'
                    onClick={toggleProfile}
                >
                    <img
                        className='h-8 rounded-full '
                        src='/panda.png'
                    />
                    <span className=''>
                        Mr. Panda
                    </span>
                    <ChevronDownIcon
                        className='w-4'
                    />
                    {isOpen && (
                        <ul
                            className={`absolute w-32 text-left top-12 p-3 space-y-2 rounded-md bg-white shadow duration-300
                        ${isOpen ? '' : 'hidden'}`}
                        >
                            <li key='profile' ><a href='#' className=''>You profile</a></li>
                            <li key='sign-out' ><a href='#' className=''>Sign out</a></li>
                        </ul>
                    )}
                </button>
            </div>
        </section>
    )
}