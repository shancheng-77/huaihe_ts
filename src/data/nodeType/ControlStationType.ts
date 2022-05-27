import {Location, Status} from './largeReservoirType'
import {v4 as uuidV4} from 'uuid'
export type Machine = {
	//装机台数
	machineNumber:number,
	//单机容量
	machineCapacity:number,
	//总容量
	totalCapacity:number,
	//单机流量
	machineFlow:number,
	//总流量
	totalFlow:number
}
export type ControlStationType = {
	id:string,
	name:string,
	type: 'controlStation',
	river: string,
	location: Location,
	status:Status,
	date:number,
	machineInfo:Machine
}
export const getControlStationData = (name:string,location:Location,river:string):ControlStationType => ({
	id:uuidV4(),
	name:name,
	type: 'controlStation',
	river: river,
	location: location,
	status:'normal',
	machineInfo:{
		machineNumber:10,
		machineCapacity:5,
		totalCapacity:50,
		machineFlow:8,
		totalFlow:40
	},
	date:Date.now()
})
