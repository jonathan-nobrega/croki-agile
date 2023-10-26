import { createSlice } from "@reduxjs/toolkit";

const initialState: FormInterface = {
    header: 'Client details',
    type: 'create',
    fields: [
        { id: 1, description: 'name', value: '', type: 'text', size: 1 },
        { id: 2, description: 'company', value: '', type: 'text', size: 1 },
        { id: 3, description: 'email', value: '', type: 'email', size: 1 },
        { id: 4, description: 'phone', value: '', type: 'text', size: 1 },
        { id: 5, description: 'address', value: '', type: 'text', size: 2 },
    ]
}

const clientFormSlice = createSlice({
    name: 'ClientFormSlice',
    initialState,
    reducers: {
        // close modal
        // send form
    }
})

export default clientFormSlice.reducer;