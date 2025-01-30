import { createSlice } from "@reduxjs/toolkit"
import { DummyData } from "../components/DummyData";
const data = DummyData;
const productSlicer = createSlice({
    name: "productSlicer",
    initialState: data,
    reducers: {
        addProduct: (state, action)=>{
            state.push(action.payload);
        },
        sortProduct: (state,action)=>{
            if(action.payload == "Ascending")
            {
                state.sort((a,b)=> a.id - b.id);
            }
            else{
                state.sort((a,b)=> b.id - a.id);
            }
        },
        
    }
})

export const {addProduct, sortProduct} = productSlicer.actions;
export default productSlicer.reducer;