import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    draggingCard: null
}

const kanbanSlice = createSlice({
    name: 'KanbanSlice',
    initialState,
    reducers: {
        setDraggingCard: (state, { payload }: { payload: any }) => {
            return {
                ...state,
                draggingCard: payload
            }
        }
    }
})

export const { setDraggingCard } = kanbanSlice.actions

export default kanbanSlice.reducer;