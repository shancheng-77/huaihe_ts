import {nodeInfo} from '../../../data/nodeInfo'
import {TributaryType, WaterLevelInfo,} from '../../../data/nodeType/TributaryType'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Status} from '../../../data/nodeType/largeReservoirType'

type waterLevelInfoPayload = {
	id:string,
	waterLevelInfo:WaterLevelInfo
}
export type statusPayload = {
	id:string,
	status:Status
}
const initialState:TributaryType[] = nodeInfo.tributary

export const tributarySlice = createSlice({
	name:'tributary',
	initialState,
	reducers: {
		setWaterLevelInfo:(state,action:PayloadAction<waterLevelInfoPayload>) => {
			//@ts-ignore
			const data = state.find(n => n.id === action.payload.id)
			if(data) data.waterLevelInfo = action.payload.waterLevelInfo

		},
		setStatus:(state,action:PayloadAction<statusPayload>) => {
			const data = state.find(n => n.id === action.payload.id)
			if (data) data.status = action.payload.status
		}
	}
})
export const {setWaterLevelInfo} = tributarySlice.actions
export default tributarySlice.reducer
