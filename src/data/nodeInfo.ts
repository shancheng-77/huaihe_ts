import {v4 as uuidV4} from 'uuid'
import {getTributaryData, TributaryType} from './nodeType/TributaryType'
import {getLargeReservoirData, LargeReservoirType} from './nodeType/largeReservoirType'
import {ControlStationType, getControlStationData} from './nodeType/ControlStationType'
import {getSluiceData, SluiceType} from './nodeType/SluiceType'
import {FloodAreaType, getFloodAreaData} from "./nodeType/FloodAreaType";
import {FloodStorageAreaType, getFloodStorageAreaData} from "./nodeType/FloodStorageAreaType";
export type NodeInfoProps = {
	tributary: TributaryType[];
	largeReservoir: LargeReservoirType[];
	controlStation: ControlStationType[];
	sluice:SluiceType[];
	floodArea:FloodAreaType[],
	floodStorageArea:FloodStorageAreaType[]
}
// const tributaryData =
export const nodeInfo:NodeInfoProps = {
	tributary:[
		getTributaryData('大洪河1', [114.300576,32.870515]),
		getTributaryData('大洪河2', [114.300576,32.870515]),
		getTributaryData('大洪河3', [114.300576,32.870515]),
		getTributaryData('大洪河4', [114.300576,32.870515]),
		getTributaryData('大洪河5', [114.300576,32.870515]),
		getTributaryData('大洪河6', [114.300576,32.870515]),
		getTributaryData('大洪河7', [114.300576,32.870515]),
		getTributaryData('大洪河8', [114.300576,32.870515]),
		getTributaryData('洪河分洪道',[0,0]),

		getTributaryData('潭河分河道',[0,0]),

		getTributaryData('润河', [0,0]),

		getTributaryData('沙颖河1', [0,0]),
		getTributaryData('沙颖河2', [0,0]),
		getTributaryData('沙颖河3', [0,0]),
		getTributaryData('沙颖河4', [0,0]),
		getTributaryData('沙颖河5', [0,0]),
		getTributaryData('沙颖河6', [0,0]),
		getTributaryData('沙颖河7', [0,0]),
		getTributaryData('沙颖河8', [0,0]),
		getTributaryData('沙颖河9', [0,0]),

		getTributaryData('白露河1',[0,0]),
		getTributaryData('白露河2',[0,0]),

		getTributaryData('史河1',[0,0]),
		getTributaryData('史河2',[0,0]),
		getTributaryData('史河3',[0,0]),
		getTributaryData('史河4',[0,0]),

		getTributaryData('淠河1',[0,0]),
		getTributaryData('淠河2',[0,0]),
		getTributaryData('淠河3',[0,0]),
		getTributaryData('淠河4',[0,0]),
		getTributaryData('淠河5',[0,0]),
		getTributaryData('淠河6',[0,0]),
		getTributaryData('淠河7',[0,0]),
		getTributaryData('淠河8',[0,0])
	],
	largeReservoir: [
		getLargeReservoirData('薄山',[113.954867,32.651731],'大洪河'),
		getLargeReservoirData('板桥',[113.599575,32.969612],'大洪河'),
		getLargeReservoirData('宿鸭湖',[114.254084,32.98977],'大洪河'),
		getLargeReservoirData('石漫滩',[113.563684,33.287683],'大洪河'),

		getLargeReservoirData('燕山',[0,0],'沙颖河'),
		getLargeReservoirData('孤石滩',[0,0],'沙颖河'),
		getLargeReservoirData('白龟山',[0,0],'沙颖河'),
		getLargeReservoirData('昭平台',[0,0],'沙颖河'),
		getLargeReservoirData('白沙',[0,0],'沙颖河'),

		getLargeReservoirData('鲇鱼山',[0,0],'史河'),
		getLargeReservoirData('梅山',[0,0],'史河'),

		getLargeReservoirData('响洪旬',[0,0],'淠河'),
		getLargeReservoirData('佛子岭',[0,0],'淠河'),
		getLargeReservoirData('白莲岸',[0,0],'淠河'),
		getLargeReservoirData('磨子潭',[0,0],'淠河'),
	],
	controlStation: [
		getControlStationData('班台',[114.254084,32.98977],'大洪河'),
		getControlStationData('周口',[114.254084,32.98977],'颖上河'),
		getControlStationData('北庙集',[0,0],'白露河'),
		getControlStationData('蒋家集',[0,0],'史河'),
		getControlStationData('横排头',[0,0],'淠河')
	],
	sluice: [
		getSluiceData('洪河口',[0,0]),
		getSluiceData('王家坝',[0,0]),
		getSluiceData('曹台孜',[0,0]),
		getSluiceData('润河集',[0,0]),
		getSluiceData('临淮岗',[0,0]),
		getSluiceData('正阳关',[0,0]),
		getSluiceData('洪河口',[0,0]),
		getSluiceData('鲁台子',[0,0]),
		getSluiceData('凤台',[0,0]),
		getSluiceData('阜阳闸',[0,0]),
		getSluiceData('颖上闸',[0,0]),


	],
	floodArea: [
		getFloodAreaData('南润段',[0,0]),
		getFloodAreaData('邱家湖',[0,0]),
		getFloodAreaData('姜唐湖',[0,0])
	],
	floodStorageArea: [
		getFloodStorageAreaData('潭洼',[0,0]),
		getFloodStorageAreaData('城西湖',[0,0]),
		getFloodStorageAreaData('城东湖',[0,0]),
	]
}

