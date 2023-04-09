import { configureStore, createReducer } from "@reduxjs/toolkit";
// import { createAction } from "@reduxjs/toolkit";

const myReducer = createReducer(10, {});

export const store = configureStore({
    reducer: {
    myVale: myReducer,
},

});

