import { configureStore, createReducer } from "@reduxjs/toolkit";
// import { createAction } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   } from 'redux-persist';

const myReducer = createReducer(10, {});

export const store = configureStore({
    reducer: {
    myVale: myReducer,
},

});

// export const persistor = persistStore(store);