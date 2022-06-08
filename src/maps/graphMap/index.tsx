import React, {useEffect, useRef, useState} from 'react'
// @ts-ignore
import { MapInteractionCSS } from 'react-map-interaction';
import {glMatrix,mat4} from 'gl-matrix'
import {MainStream} from './MainStream'
import {DaHongHe} from './tributary/DaHongHe'
import { RunHe } from './tributary/RunHe'
import { ShaYinHe } from './tributary/ShaYinHE'
import {FloodAreaWithRiver} from "./node/FloodArea";
import {FloodStorageAreaWithRiver} from "./node/FloodStorageArea";
import {TanHe} from "./tributary/TanHe";
import {BaiLuHe} from "./tributary/BaiLuHe";
import { ShiHe } from './tributary/ShiHe';
import { PiHe } from './tributary/PiHe';

// type Props = {
// 	width: number,
// 	height: number,
// }

export const Color = {
	borderColor: 'rgb(47,46,46)',
	fontColor:'rgb(0,0,0)',
	fontColor2:'rgb(255,255,255)',
	selectedColor:'rgb(44,123,149)',
	infoBoxColor:'rgba(44,123,149,0.9)',
	normalBgColor:'rgb(56,165,202)',
	warningBgColor:'rgb(151,123,40)',
	disasterBgColor:'rgb(174,26,38)'
}

export function GraphMap() {
    const [viewBoxX,setViewBoxX] = useState(410)
	const [viewBoxY,setViewBoxY] = useState(20)
	const [viewBoxHeight, setViewBoxHeight] = useState(900)
	const [viewBoxWidth, setViewBoxWidth] = useState(800)


	const riverWidth = 60;

	// useEffect(() => {
	// 	const svgMap = document.querySelector('#svgMap')
	// 	console.log(svgMap?.getBoundingClientRect())
	// 	let scale = 1;
	// 	let initOffset = {
	// 		x:viewBoxX,
	// 		y:viewBoxY
	// 	}
	// 	let v = {
	// 		x:viewBoxX,
	// 		y:viewBoxY
	// 	}
	// 	svgMap?.addEventListener('wheel',(e) => {
	// 		// e.stopPropagation()
	// 		e.preventDefault()
	// 		// console.log(e)
	// 		// @ts-ignore
	// 		const {clientX, clientY, deltaY } = e;
	// 		scale = scale + (deltaY > 0 ? 0.1 : -0.1);
	// 		scale = scale > 5 ? 5 : scale;
	// 		scale = scale < 0.2 ? 0.2 :scale
	// 		// scale = Math.max(scale > 0 ? scale : 5, 0.1);
	// 		const top = viewBoxY;
	// 		const left = viewBoxX;
	// 		const right = viewBoxWidth+left;
	// 		const bottom = viewBoxHeight+top;
	// 		const o = new Float32Array([
	// 			left, top, 1, 1,
	// 			right, top, 1, 1,
	// 			right, bottom, 1, 1,
	// 			left, bottom, 1, 1
	// 		]);
	// 		const x = clientX * (1 - scale);
	// 		const y = clientY * (1 - scale);
	// 		const t = new Float32Array([
	// 			scale, 0, 0, 0,
	// 			0, scale, 0, 0,
	// 			0, 0, 1, 0,
	// 			0, 0, 0, 1
	// 		]);
	// 		const m = new Float32Array([
	// 			1, 0, 0, 0,
	// 			0, 1, 0, 0,
	// 			0, 0, 1, 0,
	// 			x, y, 0, 1
	// 		]);
	// 		// 在XY轴上进行缩放
	// 		let res1 = mat4.multiply(new Float32Array([
	// 			0, 0, 0, 0,
	// 			0, 0, 0, 0,
	// 			0, 0, 0, 0,
	// 			0, 0, 0, 0
	// 		]), t, o);
	// 		// 在XY轴上进行平移
	// 		const res2 = mat4.multiply(new Float32Array([
	// 			0, 0, 0, 0,
	// 			0, 0, 0, 0,
	// 			0, 0, 0, 0,
	// 			0, 0, 0, 0
	// 		]), m, res1);
	// 		setViewBoxX(res2[0])
	// 		setViewBoxY(res2[1])
	// 		setViewBoxWidth(res2[4]- res2[0])
	// 		setViewBoxHeight(res2[9] - res2[1])
	// 	})
	// 	const mouseMove = (e:any) => {
	// 		e = e as MouseEvent
	// 		// console.log(initOffset,1)
	// 		svgMap?.setAttribute('viewBox',`${v.x - e.offsetX + initOffset.x} ${v.y} ${viewBoxWidth} ${viewBoxHeight}`)
	// 		svgMap?.setAttribute('viewBox',`${v.x} ${v.y - e.offsetY + initOffset.y} ${viewBoxWidth} ${viewBoxHeight}`)
	//
	// 		v = {
	// 			x:v.x + e.offsetX - initOffset.x,
	// 			y:v.y + e.offsetY - initOffset.y
	// 		}
	// 		// console.log(svgMap?.getAttribute('viewBox'))
	// 		initOffset.x = e.offsetX
	// 		initOffset.y = e.offsetY
	// 		// console.log(initOffset,2)
	// 	}
	// 	svgMap?.addEventListener('mousedown',(e:any) => {
	// 		initOffset = {
	// 			x:e.offsetX,
	// 			y:e.offsetY
	// 		}
	// 		svgMap?.addEventListener('mousemove',mouseMove)
	// 	})
	// 	svgMap?.addEventListener('mouseup',(e) => {
	// 		setViewBoxX(v.x)
	// 		setViewBoxY(v.y)
	// 		svgMap?.removeEventListener('mousemove',mouseMove)
	// 	})
	// 	svgMap?.addEventListener('mouseout',(e) => {
	// 		setViewBoxX(v.x)
	// 		setViewBoxY(v.y)
	// 		svgMap?.removeEventListener('mousemove',mouseMove)
	// 	})
	// },[])

	return (
		//根据 2700*920绘制，使用viewBox来选取展示的位置
		<>
			{/*<button onClick={() => setViewBoxWidth(viewBoxWidth+100)}>+</button>*/}
			<svg height='100%' width='100%' id='svgMap' viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}>
				<DaHongHe/>
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
