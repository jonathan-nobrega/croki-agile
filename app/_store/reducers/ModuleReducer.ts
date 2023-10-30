import { createSlice } from "@reduxjs/toolkit";
import clientsSeed from '../../_seed/clients.seed.json'
import projectsSeed from '../../_seed/projects.seed.json'
import clientRow from '../../_components/tables/ClientRow'
import projectRow from "@/app/_components/tables/ProjectRow";

const modules = [
    {
        title: "clients",
        description: 'List of all customer entities including child and parent accounts.',
        buttonDescription: 'Add customer',
        tableHeaders: ['Name', 'Company', 'Email', 'Phone', 'Status'],
        tableRow: clientRow,
        tableData: clientsSeed,
        tableForm: 'clientForm',
        formData: {}
    },
    {
        title: 'projects',
        description: 'List of all projects related to clients.',
        actionButton: 'Add project',
        tableHeaders: ['Title', 'Client', 'Billing Method', 'Status'],
        tableRow: projectRow,
        tableData: projectsSeed,
        tableForm: 'projectForm',
        formData: {}
    }
]

const moduleSlice = createSlice({
    name: 'ModuleSlice',
    initialState: {},
    reducers: {
        setModule: (state, { payload }) => {
            return modules.find((module) => module.title == payload)
        }
    }
})

export const { setModule } = moduleSlice.actions

export default moduleSlice.reducer;