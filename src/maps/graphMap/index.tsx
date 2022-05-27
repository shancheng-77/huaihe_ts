/*
 * @Author: 山城月 1175869440@qq.com
 * @Date: 2022-05-19 10:58:19
 * @LastEditors: 山城月 1175869440@qq.com
 * @LastEditTime: 2022-05-23 19:35:07
 * @FilePath: \huaihe_ts\src\maps\graphMap\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {useState} from 'react'
import {MainStream} from './MainStream'
import {DaHongHe} from './tributary/DaHongHe'
import { RunHe } from './tributary/RunHe'
import { ShaYinHe } from './tributary/ShaYinHE'
import {FloodAreaWithRiver} from "./node/FloodArea";
import {FloodStorageAreaWithRiver} from "./node/FloodStorageArea";
import {TanHe} from "./tributary/TanHe";
import {BaiLuHe} from "./tributary/BaiLuHe";
import {ShiHe} from "./tributary/ShiHe";
import {PiHe} from "./tributary/PiHe";

// type Props = {
// 	width: number,
// 	height: number,
// }

export const Color = {
	borderColor: 'rgb(47,46,46)',
	fontColor:'rgb(0,0,0)',
	fontColor2:'rgb(255,255,255)'
}

export function GraphMap() {
	const [viewBoxHeight, setViewBoxHeight] = useState(820)
	const [viewBoxWidth, setViewBoxWidth] = useState(800)
	const riverWidth = 60;
	const topY = 415;
	const bottomY = 415 + riverWidth;

	return (
		//根据 2700*920绘制，使用viewBox来选取展示的位置
		<>
			{/*<button onClick={() => setViewBoxWidth(viewBoxWidth+100)}>+</button>*/}
			<svg height='100%' width='100%' viewBox={`480 41 ${viewBoxWidth} ${viewBoxHeight}`}>
				<DaHongHe x={645} topY={topY}/>
				<TanHe/>
				<FloodStorageAreaWithRiver rectX={705} rectY={360} nodeName={'潭洼'} entryX={715} outX={805}/>
				<FloodAreaWithRiver rectX={825} rectY={360} nodeName={'南润段'} entryX={830} outX={870}/>
				<RunHe/>
				<FloodAreaWithRiver rectX={900} rectY={360} nodeName={'邱家湖'} entryX={910} outX={950}/>
				<FloodAreaWithRiver rectX={965} rectY={360} nodeName={'姜唐湖'} entryX={975} outX={1015}/>
				<ShaYinHe/>
				<FloodAreaWithRiver rectX={1070} rectY={505}
									nodeName={'城西湖'}
									entryX={1080} outX={1130}
									rectWidth={75} rectHeight={30}
									riverHeight={30}
									direction={'bottom'}
				/>
				<MainStream topY={415} riverLength={2240} riverWidth={riverWidth}/>
				<BaiLuHe/>
				<ShiHe/>
				<FloodStorageAreaWithRiver rectX={840} rectY={505}
										   nodeName={'城西湖'}
										   entryX={860} outX={950}
										   rectWidth={130} rectHeight={35}
										   direction={'bottom'}
				/>
				<FloodStorageAreaWithRiver rectX={985} rectY={510}
										   nodeName={'城东湖'}
										   hasEntry={false} outX={995}
										   rectWidth={25} rectHeight={90}
										   textMode={'vertical-rl'}
										   direction={'bottom'}
				/>
				<PiHe/>
			</svg>
		</>
	)
}
