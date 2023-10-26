import { createSlice } from "@reduxjs/toolkit";
import { UsersIcon, FolderIcon, Square3Stack3DIcon, ViewColumnsIcon, Cog6ToothIcon, MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const initialState = [{
    _id: 1,
    name: 'Clients',
    href: '/home/clients',
    icon: UsersIcon,
    active: false
}, {
    _id: 2,
    name: 'Projects',
    href: '/home/projects',
    icon: FolderIcon,
    active: false
}, {
    _id: 3,
    name: 'Backlog',
    href: '#',
    icon: Square3Stack3DIcon,
    active: false
}, {
    _id: 4,
    name: 'Kanban',
    href: '#',
    icon: ViewColumnsIcon,
    active: false
}, {
    _id: 5,
    name: 'Settings',
    href: '#',
    icon: Cog6ToothIcon,
    active: false
}]

const navSlice = createSlice({
    name: 'NavSlice',
    initialState,
    reducers: {}
})

export default navSlice.reducer;