import {useCallback, useEffect, useRef, useState} from 'react'
import {Location} from '../../data/nodeType/largeReservoirType'
// @ts-ignore
import {Map, Marker,BMapGL} from 'react-bmapgl';
import { LargeReservoirGis } from './conponents/LargeReservoirGis';
import { RootState } from '../../store';
import {NodeInfoProps} from "../../data/nodeInfo";
import { useSelector } from 'react-redux';
import { useSelectPlus } from '../../hooks/useSelectPlus';
import { SelectedNodeAction } from '../../store/reducer/selectedNodeReducer';
import { TributaryGis } from './conponents/TributaryGis';

type NodeType = keyof NodeInfoProps
type Props = {
	width:number|string,
	height:number|string,
}

const SelectedNode = (nodeType:NodeType) => {
	if(nodeType === 'largeReservoir') return LargeReservoirGis
	if(nodeType === 'tributary') return TributaryGis
	return LargeReservoirGis;
}

export function GISMap({width,height}:Props) {

	// useEffect(() => {
	// 	console.log(showNode);
	// },[showNode])
	const mapRef = useRef();
	const [location,setLocation] = useState([113.965692,32.248077]);
	// 获取被选中点的名称和类型
	const showNode = useSelector((state:RootState) => state.selectedNode)
	// 获取选中点的详细信息
	const data = useSelectPlus(showNode.nodeType,showNode.nodeName)
	
	useEffect(() =>{
		console.log(data,3);
		
		setLocation(data.location)
	},[data])
	// const showElement = useE

	// @ts-ignore
	return (
		<Map
			style={{ height: height,width:width }}
			center={{lng:location[0], lat:location[1]}}
			zoom={12}
			heading={0}
			tilt={40}
			// onClick={e => console.log(e)}
			enableScrollWheelZoom
		>
			  {/* <Marker position={{lng:116.404449, lat:39.914889}}/> */}
			  {/* 渲染对应 元素 */}
			{SelectedNode(showNode.nodeType)({info:data})}
			{/* <TributaryGis/> */}
		</Map>
	)
}
