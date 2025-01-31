import { createSlice } from "@reduxjs/toolkit";

const addtocartSlicer = createSlice({
    name: "addtocartSlicer",
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state, action)=>{
            state.data.push({...action.payload, quantity: 1});
        },
        increment: (state,action)=>{
            const cartValue = state.data.find((item)=> item.id === action.payload)
            if(cartValue)
            {
                cartValue.quantity+= 1;
            }
        },
        decrement: (state,action)=>{
            const cartValue = state.data.find((item)=> item.id === action.payload)
            if(cartValue && cartValue.quantity > 1)
            {
                cartValue.quantity-= 1;
            }
        },
        remove: (state,action)=>{
            const removeValue = state.data.find((item)=> item.id === action.payload)
            if(removeValue)
            {
                state.data.pop();
            }
        }
    }
})

export const {addToCart, increment , decrement, remove} = addtocartSlicer.actions;
export default addtocartSlicer.reducer;