import modalEscapeHandlers from "@/app/_hooks/modalEscapeHandlers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    payload: {},
}

const modalSlice = createSlice({
    name: 'ModalSlice',
    initialState,
    reducers: {
        openModal: (state, { payload }: { payload?: any }) => {
            return {
                isOpen: true,
                payload: payload,
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

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer;