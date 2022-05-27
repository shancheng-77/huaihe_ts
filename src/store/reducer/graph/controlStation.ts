import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {nodeInfo} from '../../../data/nodeInfo'
import {ControlStationType, Machine} from '../../../data/nodeType/ControlStationType'
import {statusPayload} from './tributary'

export type machineInfoPayload = {
	id:string,
	machineInfo: Machine
}
const initialState:ControlStationType[] = nodeInfo.controlStation

export const controlStationSlice = createSlice({
	name:'controlStation',
	initialState,
	reducers: {
		setMachineInfo: (state,action:PayloadAction<machineInfoPayload>) => {
			const data = state.find(n => n.id === action.payload.id)
			if (data) data.machineInfo = action.payload.machineInfo
		},
		setStatus:(state,action:PayloadAction<statusPayload>) => {
			const data = state.find(n => n.id === action.payload.id)
			if (data) data.status = action.payload.status
		}
	}
})
export const {setMachineInfo,setStatus} = controlStationSlice.actions
export default controlStationSlice.reducer
