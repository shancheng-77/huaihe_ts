import {RootState} from '../store'
import {useSelector} from 'react-redux'
import {nodeInfo} from '../data/nodeInfo'

// type name = A<P<'controlStation'>>
export const useSelectPlus = (type:keyof RootState,name:string) => {
	// @ts-ignore
	return useSelector((state:RootState) => state[type]?.find(n => n.name === name))


}
