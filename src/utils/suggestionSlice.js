import { createSlice } from "@reduxjs/toolkit";


const suggestionSlice = createSlice({

    name:"suggestion",
    initialState:"",
    reducers:{
        SelectSuggetion:(state,action)=>{
            return action.payload;
        }
    }
})

export const {SelectSuggetion} = suggestionSlice.actions

export default suggestionSlice.reducer;