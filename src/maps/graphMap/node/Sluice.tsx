import { useEffect } from 'react'
import {LargeReservoirType} from '../../../data/nodeType/largeReservoirType'
import { SluiceType } from '../../../data/nodeType/SluiceType'
import { useSelectPlus } from '../../../hooks/useSelectPlus'
import {Color} from '../index'

type Props = {
	// 左上角x坐标
	x: number,
	// 左上角y坐标
	y: number,
	//宽度
	width?: number,
	//高度
	height?: number,
	nodeName:string
}

export function Sluice({x, y, width = 25, height = 60, nodeName}: Props) {
	
	const data:SluiceType[] = useSelectPlus('sluice',nodeName);
	const handleClick = () => {
		console.log(data);
	}
	return (
		<>
			<rect x={x} y={y} width={width} height={height}
				  style={{cursor: 'pointer', fill:'#fff',stroke: Color.borderColor, strokeWidth: 2}}
				onClick={handleClick}
			/>
			<text x={x+13} y={y+17} style={{writingMode:'horizontal-tb',fontSize:12,cursor:'pointer',userSelect:'none',fill:Color.fontColor}}
				onClick={handleClick}
			>{nodeName}</text>

		</>
	)
}
