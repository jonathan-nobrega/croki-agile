import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./reducers/ModalReducer"
import moduleSlice from "./reducers/ModuleReducer"
import kanbanSlice from "./reducers/KanbanReducer"

const store = configureStore({
    reducer: {
        moduleSlice,
        modalSlice,
        kanbanSlice,
    }
})

export default store