import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useReducer";

 export let store = configureStore({
    reducer:{
        userdata:useReducer
    }
})

