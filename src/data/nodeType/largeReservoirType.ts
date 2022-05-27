import {v4 as uuidV4} from 'uuid'
import exp from 'constants'
export type Location = [number, number]
export type Status = 'normal' | 'warning' | 'disaster'

export type LargeReservoirState = {
	maxGateFlow: number, // 最大过闸流量
	sluiceNumber: number, // 闸孔数
	sluiceOpenNumber: number, // 开启闸门数
	sluiceWidth: number, // 闸孔宽度
	sluiceHeight: number // 闸孔高度
	entryRate: number // 入水速率
}

export type WaterLevelInfo = {
	normal: number;
	warning: number;
	disaster: number;
	now: number; // 当前水位
}

export type LargeReservoirType = {
	id: string
	name: string;
	type: 'largeReservoir';
	river: string;
	state: LargeReservoirState;
	location: Location;
	status: Status;
	waterLevelInfo: WaterLevelInfo,
	date:number
}

export const getLargeReservoirData = (name: string, location: Location, river: string): LargeReservoirType => ({
	id: uuidV4(),
	name: name,
	type: 'largeReservoir',
	river: river,
	location: location,
	state: {
		maxGateFlow: 5, // 最大过闸流量
		sluiceNumber: 10, // 闸孔数
		sluiceOpenNumber: 5, // 开启闸门数
		sluiceWidth: 50, // 闸孔宽度
		sluiceHeight: 50, // 闸孔高度
		entryRate: 30 // 入水速率
	},
	status: 'normal',
	waterLevelInfo: {
		normal: 150,
		warning: 200,
		disaster: 250,
		now: 280 // 当前水位
	},
	date:Date.now()
})
