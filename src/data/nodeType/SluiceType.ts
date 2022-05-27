import {v4 as uuidV4} from 'uuid'
import {Status,Location} from './largeReservoirType'
export type SluiceInfoType = {
	// 闸下水位
	waterLevelUnderSluice:number,
	// 闸上水位
	waterLevelOnTopSluice:number
}
export type SluiceType = {
	id:string,
	name:string,
	location:Location,
	status:Status,
	info:SluiceInfoType,
	date:number
}
export const getSluiceData = (name:string,location:Location):SluiceType => ({
	id: uuidV4(),
	name:name,
	location:location,
	status:'normal',
	info: {
		waterLevelOnTopSluice:30,
		waterLevelUnderSluice:30
	},
	date:Date.now()
})