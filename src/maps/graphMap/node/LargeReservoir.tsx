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
import {useDispatch, useSelector} from "react-redux";
import {setSelectedNode} from "../../../store/reducer/selectedNodeReducer";
import {RootState} from "../../../store";
import {useEffect, useState} from "react";

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

	// 从仓库获取数据
	const data:LargeReservoirType = useSelectPlus('largeReservoir',nodeName) || {name:nodeName}
	const selectedNode = useSelector((state:RootState) => state.selectedNode);
	// 边框颜色
	const [borderColor,setBorderColor] = useState(Color.borderColor);
	// 信息框展示
	const [isInfoBox,setIsInfoBox] = useState<boolean>(false);
	// 背景颜色
	const [bgColor,setBgColor] = useState<string>(Color.normalBgColor)
	const [waterLevel,setWaterLevel] = useState<string>()

	const dispatch = useDispatch()
	const fillId = uuidV4()

	// 数据变化时更改水位占比以及背景颜色
	useEffect(() => {
		const waterLevelInfo = data.waterLevelInfo
		const status = data.status
		// 计算水位占比
		const w = waterLevelInfo.now / waterLevelInfo.max
		setWaterLevel(w*100+'%')
		setBgColor(() => {
			if (status === 'warning') return Color.warningBgColor;
			if (status === 'disaster') return Color.disasterBgColor;
			return Color.normalBgColor
		})
	},[data])

	// 是否为选中节点
	useEffect(() => {
		setBorderColor(
			selectedNode.nodeType === data.type && selectedNode.nodeName === nodeName ?
					Color.selectedColor :
					Color.borderColor
		)
	},[selectedNode])


	const handleClick = () => {
		console.log(data)
		dispatch(setSelectedNode({nodeType:"largeReservoir",nodeName}))
	}
	return (
		<>
			<defs>
				<linearGradient id={fillId} x1="0%" y1="100%" x2="0%" y2="0%">
					<stop stopColor={bgColor} offset="0%"/>
					<stop stopColor={bgColor} offset={waterLevel}/>
					<stop stopColor={bgColor} stopOpacity="0" offset={waterLevel}/>
					<stop stopColor={bgColor} stopOpacity="0" offset="100%"/>
				</linearGradient>
			</defs>
			<ellipse cx={cx} cy={cy} rx={width / 2} ry={height / 2}
					 style={{
						 fill: 'url(#' + fillId + ')',
						 stroke: borderColor,
						 strokeWidth: 2,
						 cursor: 'pointer'
					 }}
					 onClick= {handleClick}
					 onMouseOver={() => setIsInfoBox(true)}
					 onMouseOut={() => setIsInfoBox(false)}
			/>
			<text x={cx-18} y={cy+5} style={{fill:Color.fontColor,cursor:'pointer',userSelect:'none',fontSize:12}}
				  onClick= {handleClick}
				  onMouseOver={() => setIsInfoBox(true)}
				  onMouseOut={() => setIsInfoBox(false)}
			>
				{nodeName.length === 2 ? nodeName.split('').join('\xa0\xa0\xa0') : nodeName}
			</text>
			{
				isInfoBox ? <g>
					<rect x={cx} y={cy} width={90} height={80} style={{fill:Color.infoBoxColor,color:'black'}}/>
					<text x={cx+5} y={cy+20} style={{fill:'#eee',cursor:'pointer',userSelect:'none',fontSize:12}}>
						{nodeName}
					</text>
					<text x={cx+5} y={cy+40} style={{fill:'#eee',cursor:'pointer',userSelect:'none',fontSize:12}}>
						水位：{data.waterLevelInfo.now}
					</text>
					<text x={cx+5} y={cy+60} style={{fill:'#eee',cursor:'pointer',userSelect:'none',fontSize:12}}>
						状态：{data.status}
					</text>
				</g> : null
			}
		</>
	)
}
