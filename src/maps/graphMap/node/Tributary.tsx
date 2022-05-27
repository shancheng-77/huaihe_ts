/*
 * @Author: 山城月 1175869440@qq.com
 * @Date: 2022-05-20 15:25:51
 * @LastEditors: 山城月 1175869440@qq.com
 * @LastEditTime: 2022-05-23 19:20:10
 * @FilePath: \huaihe_ts\src\maps\graphMap\node\Tributary.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {TributaryType} from '../../../data/nodeType/TributaryType'
import { useSelectPlus } from '../../../hooks/useSelectPlus'

type Props = {
	// 起点x坐标
	x1: number,
	// 起点y坐标
	y1: number,
	// 终点x坐标
	x2: number,
	// 终点y坐标
	y2: number,
	// 是否展示名字
	showName?: boolean
	nameX?: number,
	nameY?: number,
	// 河流水平|竖直
	mode?:'level'|'vertical'
	// 文字纵向 | 横向
	textMode?: 'vertical-rl' | 'horizontal-tb',
	// 干流上方 | 下方
	direction?:'top'|'bottom'
	// 是否需要箭头
	hasMarker?: boolean,
	// 河流名称
	nodeName:string
}

export function Tributary({
							  x1,
							  x2,
							  y1,
							  y2,
							  showName = true,
							  nameX,
							  nameY,
							  mode='vertical',
							  textMode = 'vertical-rl',
							  hasMarker = true,
							  direction = 'top',
							  nodeName
						  }: Props) {

	const data = useSelectPlus('tributary',nodeName) || {name:nodeName}
	const bgColor = 'black';
	const endY = ((y2) => {
			const a = hasMarker ? y2 - 10 : y2
		 	const b =  mode === 'vertical' ? a : y2
		return direction === 'top'?b :b+20
	})(y2)
	const handleClick = () => {
		console.log(data)
	}
	return (
		<>
			<defs>
				<marker id="triangle" markerUnits="strokeWidth" markerWidth="5" markerHeight="4" refX="0" refY="2"
						orient="auto">
					<path d="M 0 0 L 5 2 L 0 4 z" fill={bgColor}/>
				</marker>
			</defs>
			{/*y+10是因为箭头高度为10*/}
			<line x1={x1} y1={y1} x2={mode==='level'?( hasMarker? x2-10 : x2) :x2} y2={endY}
				  style={{
					  stroke: bgColor,
					  cursor: 'pointer',
					  strokeWidth: 2,
					  markerEnd: hasMarker ? 'url(#triangle)' : undefined
				  }}
				onClick={handleClick}
			/>
			{
				showName &&
					<text x={nameX} y={nameY}
						  style={{
							  fill: 'black',
							  writingMode: textMode,
							  cursor: 'pointer',
							  userSelect: 'none',
							  fontSize: 12
						  }}
						onClick={() => handleClick()}
					>{data?.name}</text>
			}
		</>
	)
}
