import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'FormSlice',
    initialState: {},
    reducers: {
        setPayload: (state, { payload }) => {
            return payload
        }
    }
})

export const { setPayload } = formSlice.actions

export default formSlice.reducer;