import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./reducers/NavReducer";
import modalSlice from "./reducers/ModalReducer"
import moduleSlice from "./reducers/ModuleReducer"

const store = configureStore({
    reducer: {
        navSlice,
        moduleSlice,
        modalSlice,
    }
})

export default store