import { useSelector } from 'react-redux'
import { UsersIcon, FolderIcon, ViewColumnsIcon, Cog6ToothIcon, CalendarIcon, CreditCardIcon } from '@heroicons/react/24/outline'

export default function Navbar() {

    const currentModule = useSelector((state: any) => state.moduleSlice.title)

    const navigation: NavItem[] = [
        { _id: 1, title: 'Clients', href: '/home/clients', icon: UsersIcon },
        { _id: 2, title: 'Projects', href: '/home/projects', icon: FolderIcon },
        { _id: 3, title: 'Kanban', href: '/home/kanban', icon: ViewColumnsIcon },
        { _id: 4, title: 'Invoices', href: '/home/invoices', icon: CreditCardIcon },
        { _id: 5, title: 'Calendar', href: '/home/calendar', icon: CalendarIcon },
        { _id: 6, title: 'Settings', href: '/home/settings', icon: Cog6ToothIcon },
    ]

    const currentNavStyle = 'font-bold bg-gray-100 text-green-900 border-solid'
    const otherNavStyle = 'font-medium hover:bg-gray-50 hover:text-gray-900'

    return (
        <nav className='p-5 2xl:w-64 xl:w-56 w-5 max-h-full border-r'>
            <img
                src='/croki-green.PNG'
                className='h-auto w-auto rounded-md'
            />
            <ul className='mt-20 space-y-3'>
                {navigation.map((item: NavItem) => (
                    <li key={item._id}>
                        <a
                            href={item.href}
                            className={
                                `flex items-center p-2 rounded-md transition ease-in-out 
                                ${currentModule == item.title.toLowerCase() ? currentNavStyle : otherNavStyle}`
                            }
                        >
                            <item.icon
                                className='w-6 h-6 mr-2 text-gray-500'
                            />
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}