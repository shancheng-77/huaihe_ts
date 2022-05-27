import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nodeInfo } from "../../../data/nodeInfo";
import { SluiceInfoType, SluiceType } from "../../../data/nodeType/SluiceType";
import { statusPayload} from './tributary'
const initialState: SluiceType[] = nodeInfo.sluice;
export type infoPayload = {
    id:string,
    info:SluiceInfoType
}
export const SluiceSlice = createSlice({
    name:'sluice',
    initialState,
    reducers: {
        setInfo:(state,action:PayloadAction<infoPayload>) => {
            const data = state.find(n => n.id === action.payload.id)
			if (data) data.info = action.payload.info
        },
        setStatus:(state,action:PayloadAction<statusPayload>) => {
			const data = state.find(n => n.id === action.payload.id)
			if (data) data.status = action.payload.status
		}
    }
})
export const {setInfo,setStatus} = SluiceSlice.actions
export default SluiceSlice.reducer