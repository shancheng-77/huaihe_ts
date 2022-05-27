import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {nodeInfo} from "../../../data/nodeInfo";
import {statusPayload} from "./tributary";

const initialState = nodeInfo.floodArea
export const floodAreaSlice = createSlice({
    name:'floodArea',
    initialState,
    reducers: {
        setStatus:(state,action:PayloadAction<statusPayload>) => {
            const data = state.find(n => n.id === action.payload.id)
            if (data) data.status = action.payload.status
        }
    }
})
export const {setStatus} = floodAreaSlice.actions;
export default floodAreaSlice.reducer
