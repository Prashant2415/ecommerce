import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { DummyData } from "../components/DummyData";
const data = DummyData;
export const fetchProduct = createAsyncThunk('fetchProduct',async()=>{
    const response = await fetch("http://localhost:8081/getProducts");
    return response.json();
})

const productSlicer = createSlice({
    name: "productSlicer",
    initialState: {
        searchItem:"",
        data: null,
        isLoading: false,
        isError: false
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
            state.searchItem = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.pending, (state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data= action.payload;
        })
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            console.log("Error ",action.payload)
            state.isError = true;
        })
    }
})

export const {addProduct, sortProduct, searchProduct} = productSlicer.actions;
export default productSlicer.reducer;