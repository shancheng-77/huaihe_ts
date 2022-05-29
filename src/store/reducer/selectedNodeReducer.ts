import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {nodeInfo, NodeInfoProps} from '../../data/nodeInfo'
export type SelectedNodeAction = {
    nodeType: keyof NodeInfoProps
    nodeName:string
}
const initialState:SelectedNodeAction = {
    nodeType: 'largeReservoir',
    nodeName:'薄山'
}

export const selectedNodeReducer = createSlice({
    name:'selectedNode',
    initialState,
    reducers: {
        setSelectedNode:(state,action:PayloadAction<SelectedNodeAction>) => {
            state.nodeType = action.payload.nodeType
            state.nodeName = action.payload.nodeName
        }
    }
})
export const {setSelectedNode} = selectedNodeReducer.actions
export default selectedNodeReducer.reducer
