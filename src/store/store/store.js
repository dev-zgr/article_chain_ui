import {configureStore} from "@reduxjs/toolkit";
import {UISlice} from "./UISlice";
import {loginSlice} from "./AccountDetailsSlice";

const store = configureStore({
    reducer: {
        UISlice : UISlice.reducer,
        loginSlice: loginSlice.reducer,
    }
});

export default store;