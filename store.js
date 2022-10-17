import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlices';

export default store = configureStore({
    reducer: {
        nav: navReducer
    }
})