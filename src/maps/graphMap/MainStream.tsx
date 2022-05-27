import {Color} from './index'
import {LargeReservoir} from './node/LargeReservoir'
import {MainSluice} from './node/MainSluice'

type Props = {
	topY: number,//svg画布中轴高度
	riverLength: number,// 河流长度
	riverWidth: number // 河道宽度
}

export function MainStream({topY, riverLength, riverWidth}: Props) {
	const bottomY = topY + riverWidth  // 下河道y值
	return (
		<>
			<line x1={60} x2={60+riverLength} y1={topY} y2={topY} style={{stroke: Color.borderColor, strokeWidth: 2}}/>
			<MainSluice x={630} y={topY} nodeName='洪河口'/>
			<MainSluice x={700} y={topY} nodeName='王家坝'/>
			<MainSluice x={770} y={topY} nodeName='曹台孜'/>
			<MainSluice x={875} y={topY} nodeName='润河集'/>
			<MainSluice x={950} y={topY} nodeName='临淮岗'/>
			<MainSluice x={1030} y={topY} nodeName='正阳关'/>
			<MainSluice x={1100} y={topY} nodeName='鲁台子'/>
			<MainSluice x={1240} y={topY} nodeName='凤台'/>
			<line x1={60} x2={60+riverLength} y1={bottomY} y2={bottomY} style={{stroke: Color.borderColor, strokeWidth: 2}}/>
		</>
	)
}
