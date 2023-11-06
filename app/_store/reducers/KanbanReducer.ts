import { createSlice } from "@reduxjs/toolkit"

const initialState: KanbanState = {
    currentCards: [],
    draggingCard: '',
    hoveredColumn: '',
}

const kanbanSlice = createSlice({
    name: 'KanbanSlice',
    initialState,
    reducers: {
        setCards: (state, { payload }: { payload: any }) => {
            state.currentCards = payload
        },
        setDraggingCard: (state, { payload }: { payload: any }) => {
            return {
                ...state,
                draggingCard: payload
            }
        },
        setCardColumn: (state, action) => {
            const { draggingCard, columnTitle } = action.payload
            const newCards = state.currentCards.map((card) => {
                if (card._id == draggingCard) card.status = columnTitle
                return card
            })
            state.currentCards = newCards
        }
    }
})

export const {
    setCards, setDraggingCard, setCardColumn
} = kanbanSlice.actions

export default kanbanSlice.reducer;