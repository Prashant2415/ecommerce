import { createSlice } from "@reduxjs/toolkit"
import { DummyData } from "../components/DummyData";
const data = DummyData;
const productSlicer = createSlice({
    name: "productSlicer",
    initialState: {
        searchItem:"",
        data
    },
    reducers: {
        addProduct: (state, action)=>{
            state.data.push(action.payload);
        },
        sortProduct: (state,action)=>{
            if(action.payload == "Ascending")
            {
                state.data.sort((a,b)=> a.id - b.id);
            }
            else{
                state.data.sort((a,b)=> b.id - a.id);
            }
        },
        searchProduct: (state, action)=>{
            console.log(action.payload);
            state.searchItem = action.payload;
        }
    }
})

export const {addProduct, sortProduct, searchProduct} = productSlicer.actions;
export default productSlicer.reducer;