import addtoCartReducer from "./addtocartSlicer";
import productReducer from "./productSlicer";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore(
    {
        reducer:{
            productSlicer: productReducer,
            addtocartSlicer: addtoCartReducer
        }
    }
)