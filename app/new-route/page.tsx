"use client"
import { UsersIcon, FolderIcon, Square3Stack3DIcon, ViewColumnsIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Clients', href: '#', icon: UsersIcon, current: true },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Backlog', href: '#', icon: Square3Stack3DIcon, current: false },
    { name: 'Kanban', href: '#', icon: ViewColumnsIcon, current: false },
]

const currentNavStyle = 'bg-gray-100 text-gray-900'
const otherNavStyle = ''

export default function handler() {
    return (
        <div className="h-screen flex bg-white">
            <section className=' w-64 border-2 border-r-gray-100'>
                <img>
                </img>
                <nav className='mt-5 px-2 space-y-1'>
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={item.current ? currentNavStyle : otherNavStyle}
                        >
                            <item.icon
                                className='w-6 h-6'
                            />
                            {item.name}
                        </a>
                    ))}
                </nav>
            </section>
        </div>
    )
}
