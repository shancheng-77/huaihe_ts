import {nodeInfo} from '../../../data/nodeInfo'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LargeReservoirType,WaterLevelInfo,LargeReservoirState} from '../../../data/nodeType/largeReservoirType'
import {statusPayload} from './tributary'

type waterLevelInfoPayload = {
	id:string,
	waterLevelInfo:WaterLevelInfo
}
type statePayload = {
	id:string,
	state:LargeReservoirState
}
const initialState:LargeReservoirType[] = nodeInfo.largeReservoir

export const largeReservoirSlice = createSlice({
	name:'largeReservoir',
	initialState,
	reducers: {
		setWaterLevelInfo:(state,action:PayloadAction<waterLevelInfoPayload>) => {
			const data = state.find(n => n.id === action.payload.id)
			if (data) data.waterLevelInfo = action.payload.waterLevelInfo
		},
		setState:(state,action:PayloadAction<statePayload>) => {
			const data = state.find(n => n.id === action.payload.id)
			if (data) data.state = action.payload.state
		},
		setStatus:(state,action:PayloadAction<statusPayload>) => {
			const data = state.find(n => n.id === action.payload.id)
			if (data) data.status = action.payload.status
		}
	}
})
export const {setWaterLevelInfo,setState,setStatus} = largeReservoirSlice.actions
export default largeReservoirSlice.reducer
