import { UsersIcon, FolderIcon, Square3Stack3DIcon, ViewColumnsIcon, Cog6ToothIcon, MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Clients', href: '#', icon: UsersIcon, current: true },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Backlog', href: '#', icon: Square3Stack3DIcon, current: false },
    { name: 'Kanban', href: '#', icon: ViewColumnsIcon, current: false },
    { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]

const currentNavStyle = 'font-bold bg-gray-50 text-green-900 border-solid'
const otherNavStyle = 'font-medium hover:bg-gray-50 hover:text-gray-900'

export default function Navbar() {
    return (
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
    )
}