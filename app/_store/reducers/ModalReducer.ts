import modalEscapeHandlers from "@/app/_hooks/modalEscapeHandlers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    headerText: '',
    bodyText: '',
    type: '',
    actionDescription: '',
    payload: null,
}

const modalSlice = createSlice({
    name: 'ModalSlice',
    initialState,
    reducers: {
        openModal: (state) => {
            // const { layout } = action.payload
            return {
                ...state,
                isOpen: true,
                // layout: layout,
            }
        },
        closeModal: (state) => {
            return {
                ...state,
                isOpen: false
            }
        }
    }
})

export const { openModal,closeModal } = modalSlice.actions

export default modalSlice.reducer;