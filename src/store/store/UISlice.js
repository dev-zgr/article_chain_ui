import {createSlice} from "@reduxjs/toolkit";

export const UISlice = createSlice({
    name: 'UISlice',
    initialState: {
        showModal: false,
        opcode: 0,
        tx_id: 0,
    },
    reducers: {
        showModal: (state, action) => {
            state.showModal = true;
            state.opcode = action.payload;
        },
        hideModal: (state) => {
            state.showModal = false;
            state.opcode = 0;
        },
        setTxId: (state, action) => {
            state.tx_id = action.payload;
        }
    }
});


export const UIActions = UISlice.actions;