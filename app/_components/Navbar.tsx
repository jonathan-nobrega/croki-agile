import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const pathname = usePathname().split("/")[2] // Ex: if /home/projects, return 'projects'
    const navigation = useSelector((state: any) => state.navSlice )
    
    const currentNavStyle = 'font-bold bg-gray-50 text-green-900 border-solid'
    const otherNavStyle = 'font-medium hover:bg-gray-50 hover:text-gray-900'

    return (
        <nav className='p-5 w-64 max-h-full border-r'>
            <img
                src='/croki-green.PNG'
                className='h-12 rounded-md'
            />
            <ul className='mt-20 space-y-3'>
                {navigation.map((item: any) => (
                    <li key={item._id}>
                        <a
                            href={item.href}
                            className={
                                `flex items-center p-2 rounded-md transition ease-in-out 
                                ${pathname == item.name.toLowerCase() ? currentNavStyle : otherNavStyle}`
                            }
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