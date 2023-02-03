import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './Slice.jsx'
const store = configureStore({
   reducer : {
    dataKey : dataReducer
   }
})

export default store;