/*
 * @Author: 山城月 1175869440@qq.com
 * @Date: 2022-05-19 22:10:00
 * @LastEditors: 山城月 1175869440@qq.com
 * @LastEditTime: 2022-05-23 19:12:49
 * @FilePath: \huaihe_ts\src\maps\graphMap\node\LargeReservoir.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {LargeReservoirType} from '../../../data/nodeType/largeReservoirType'
import {v4 as uuidV4} from 'uuid'
import {Color} from '../index'
import { useSelectPlus } from '../../../hooks/useSelectPlus';

type Props = {
	// 椭圆中心点x坐标
	cx: number;
	// 椭圆中心点y坐标
	cy: number;
	// 椭圆总高度
	width?: number;
	// 椭圆总宽度
	height?: number;
	// 水库名称
	nodeName:string;

	// data?: LargeReservoirType
}

export const LargeReservoir = ({cx, cy, width = 60, height = 20, nodeName}: Props) => {


	const data = useSelectPlus('largeReservoir',nodeName) || {name:nodeName}
	const fillId = uuidV4()
	const handleClick = () => {
		console.log(data)
	}
	return (
		<>
			{/*<defs>*/}
			{/*	<linearGradient id={fillId} x1="0%" y1="100%" x2="0%" y2="0%">*/}
			{/*		<stop stopColor={bgColor} offset="0%"/>*/}
			{/*		<stop stopColor={bgColor} offset={waterLevel}/>*/}
			{/*		<stop stopColor={bgColor} stopOpacity="0" offset={waterLevel}/>*/}
			{/*		<stop stopColor={bgColor} stopOpacity="0" offset="100%"/>*/}
			{/*	</linearGradient>*/}
			{/*</defs>*/}
			<ellipse cx={cx} cy={cy} rx={width / 2} ry={height / 2}
					 style={{
						 fill: 'url(#' + fillId + ')',
						 stroke: Color.borderColor,
						 strokeWidth: 2,
						 cursor: 'pointer'
					 }}
				onClick= {handleClick}
			/>
			<text x={cx-18} y={cy+5} style={{fill:Color.fontColor,cursor:'pointer',userSelect:'none',fontSize:12}}
				  onClick= {handleClick}>
				{nodeName.length === 2 ? nodeName.split('').join('\xa0\xa0\xa0') : nodeName}
			</text>
		</>
	)
}
