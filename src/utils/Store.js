import {configureStore } from  "@reduxjs/toolkit"
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import suggestionSlice from "./suggestionSlice";
import chatSlice from "./chatSlice";

const Store  = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        suggestion:suggestionSlice,
        chat:chatSlice
    }
})

export default Store ;