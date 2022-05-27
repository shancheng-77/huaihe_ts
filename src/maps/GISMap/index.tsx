import {useRef} from 'react'
import {Location} from '../../data/nodeType/largeReservoirType'
import { Map, APILoader } from '@uiw/react-baidu-map';
type Props = {
	width:number|string,
	height:number|string,
}
export function GISMap({width,height}:Props) {
	const mapRef = useRef();
	const location:Location = [113.965692,32.248077]
	// @ts-ignore
	return (
		<Map center={{lng:location[0],lat:location[1]}} enableScrollWheelZoom={true}/>
	)
}
