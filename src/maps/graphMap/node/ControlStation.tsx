import {Color} from '../index'
import {useDispatch} from 'react-redux'
import {setStatus} from '../../../store/reducer/graph/controlStation'
import {ControlStationType} from '../../../data/nodeType/ControlStationType'
import { useSelectPlus } from '../../../hooks/useSelectPlus'

type Props = {
	x: number,
	y: number,
	width?: number,
	height?: number,
    nodeName:string
}

export function ControlStation({x, y, width = 60, height = 25, nodeName}:Props) {
	const data = useSelectPlus('controlStation',nodeName)

	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(setStatus({id:data.id,status:'warning'}))
		console.log(data)
	}
	return (
		<>
			{/*<defs>*/}
			{/*    <linearGradient id={fillId} x1="0%" y1="100%" x2="0%" y2="0%">*/}
			{/*        <stop stopColor={bgColor} offset="0%"/>*/}
			{/*        <stop stopColor={bgColor} offset={waterLevel}/>*/}
			{/*        <stop stopColor={bgColor} stopOpacity="0" offset={waterLevel}/>*/}
			{/*        <stop stopColor={bgColor} stopOpacity="0" offset="100%"/>*/}
			{/*    </linearGradient>*/}
			{/*</defs>*/}
			<rect x={x} y={y} width={width} height={height}
				  style={{
					  fill: '#fff',
					  stroke: Color.borderColor,
					  strokeWidth: 2,
					  strokeDasharray: "5,5",
					  cursor: 'pointer'
				  }}
				onClick={handleClick}
			/>
			<text x={x+15} y={y+18}
				  style={{writingMode: 'horizontal-tb',fontSize:12, cursor: 'pointer', userSelect: 'none', fill: Color.fontColor}}
				  onClick={handleClick}
			>{nodeName}
			</text>
		</>
	)
}

export default ControlStation;
