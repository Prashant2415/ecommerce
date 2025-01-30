import { createSlice } from "@reduxjs/toolkit";

const addtocartSlicer = createSlice({
    name: "addtocartSlicer",
    initialState: [],
    reducers: {
        addToCart: (state, action)=>{
            state.push(action.payload);
        }
    }
})

export const {addToCart} = addtocartSlicer.actions;
export default addtocartSlicer.reducer;