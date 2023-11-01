import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./reducers/ModalReducer"
import moduleSlice from "./reducers/ModuleReducer"

const store = configureStore({
    reducer: {
        moduleSlice,
        modalSlice,
    }
})

export default store