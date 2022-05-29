import {configureStore} from '@reduxjs/toolkit'
import controlStationReducer from './reducer/graph/controlStation'
import largeReservoirReducer from './reducer/graph/largeReservoir'
import tributaryReducer from './reducer/graph/tributary'
import sluiceReducer from './reducer/graph/sluice'
import floodAreaReducer from "./reducer/graph/floodArea";
import floodStorageAreaReducer from "./reducer/graph/floodStorageArea";
import selectedNodeReducer from "./reducer/selectedNodeReducer";
export const store = configureStore({
	reducer: {
		controlStation:controlStationReducer,
		largeReservoir:largeReservoirReducer,
		tributary:tributaryReducer,
		sluice:sluiceReducer,
		floodArea: floodAreaReducer,
		floodStorageArea:floodStorageAreaReducer,
		selectedNode:selectedNodeReducer
	},
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
