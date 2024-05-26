import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    userName:"",
    email: "",
    researchField: ""
};
export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState:{
        isLoggedIn:false,
        accountDetails: defaultState
    },
    reducers:{
        toggleLoggedIn :(state,action) =>{
            state.isLoggedIn = action.payload;
        },
        setAccountDetails: (state,action) =>{
            state.accountDetails = action.payload;
        },
        logout: (state) => {
            state.accountDetails = defaultState;
            state.isLoggedIn = false;
        },
        login: (state,action) =>{
            state.accountDetails = action.payload;
            state.isLoggedIn = true;
        }
    }
})

export const loginActions = loginSlice.actions;
