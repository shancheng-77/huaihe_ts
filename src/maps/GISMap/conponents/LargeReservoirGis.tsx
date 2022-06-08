import { LargeReservoirType } from "../../../data/nodeType/largeReservoirType"
// @ts-ignore
import {Marker} from 'react-bmapgl'
import { useEffect } from "react"
import { useSelectPlus } from "../../../hooks/useSelectPlus"
import { SelectedNodeAction } from "../../../store/reducer/selectedNodeReducer"

type Props = {
    info:any
}
export function LargeReservoirGis({info}:Props) {
    
    // const data = useSelectPlus(info.nodeType,info.nodeName)

    useEffect(() => {
        console.log(info,1);     
    },[info])


    return (
        <>
            <Marker position={{lng:info.location[0], lat:info.location[1]}}/>
        </>
    )
}