import {Location, Status} from './largeReservoirType'
import {v4 as uuidV4} from 'uuid'

export type FloodAreaType = {
	id:string,
	name:string,
	location:Location,
	status:Status,
	area:number,
}
export const getFloodAreaData = (name:string,location:Location) :FloodAreaType => ({
	id: uuidV4(),
	name: name,
	location:location,
	status:'normal',
	area:1000
})
