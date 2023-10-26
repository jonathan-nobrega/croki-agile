import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    open: false,
    action: null,
    form: null,
    data: {}
}

const modals = [
    {
        name: 'createClient',
        open: true,
        action: null,
        // form: () => <TableForm 
        data: {}
    }
]

const modalSlice = createSlice({
    name: 'ModalSlice',
    initialState,
    reducers: {
        modalToogle: (state, action) => {
            state.open = !state.open
        }
    }
})

export const { modalToogle } = modalSlice.actions

export default modalSlice.reducer;

// olhar esse post para criar modais reutilizaceis
// https://andremonteiro.pt/react-redux-modal/