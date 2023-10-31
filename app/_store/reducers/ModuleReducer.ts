import { createSlice } from "@reduxjs/toolkit";

const moduleSlice = createSlice({
    name: 'ModuleSlice',
    initialState: {},
    reducers: {
        setModule: (state, { payload }) => {
            return payload
        }
    }
})

export const { setModule } = moduleSlice.actions

export default moduleSlice.reducer;