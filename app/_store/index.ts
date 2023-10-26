import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./reducers/NavReducer";
// import clientsSlice from "./reducers/ClientsReducer";
import clientFormSlice from "./reducers/clients/ClientsFormReducer";
import modalSlice from "./reducers/ModalReducer"
import moduleSlice from "./reducers/ModuleReducer"

const store = configureStore({
    reducer: {
        navSlice,
        // clientsSlice,
        clientFormSlice,
        moduleSlice,
        modalSlice,
    }
})

export default store

// olhar esse post para criar modais reutilizaceis
// https://andremonteiro.pt/react-redux-modal/