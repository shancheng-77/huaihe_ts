import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {nodeInfo} from "../../../data/nodeInfo";
import {statusPayload} from "./tributary";

const initialState = nodeInfo.floodStorageArea
export const floodStorageAreaSlice = createSlice({
    name:'floodStorageArea',
    initialState,
    reducers: {
        setStatus:(state,action:PayloadAction<statusPayload>) => {
            const data = state.find(n => n.id === action.payload.id)
            if (data) data.status = action.payload.status
        }
    }
})
export const {setStatus} = floodStorageAreaSlice.actions;
export default floodStorageAreaSlice.reducer
