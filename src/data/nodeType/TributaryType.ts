import {Location, Status} from './largeReservoirType'
import {v4 as uuidV4} from 'uuid'

type TributaryState = {
	entryRate: number // 入水速率
	// 出水速率
	outRate: number
}

export type WaterLevelInfo = {
	normal: number;
	warning: number;
	disaster: number;
	now: number; // 当前水位
}
export type TributaryType = {
	id: string;
	name: string;
	type: 'tributary';
	state: TributaryState;
	location: Location;
	status: Status;
	waterLevelInfo: WaterLevelInfo,
	date:number
}
// 生成假数据的函数
export const getTributaryData = (name: string, location: Location): TributaryType => ({
	id: uuidV4(),
	name: name,
	type: 'tributary',
	location: location,
	status: 'normal',
	state: {
		entryRate: 20,
		outRate: 20
	},
	waterLevelInfo: {
		normal: 100,
		warning: 150,
		disaster: 200,
		now: 120
	},
	date:Date.now()
})
