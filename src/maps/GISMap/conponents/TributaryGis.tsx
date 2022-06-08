//@ts-ignore
import {MapvglLayer,MapvglView } from 'react-bmapgl'
import gcoord from "gcoord"
import {testGeoJson} from '../../../static/testGeoJson'
import {geoJson} from '../../../static/mapGeo'
import { useEffect } from 'react'
type Props = {
    info?:any
}
export function TributaryGis({info}:Props) {

    useEffect(() => {
        console.log(info,2);
    },[info])
    // 获取应该展示的图层
    const infoJson =( () => {
        const name = info.name;

        let i = JSON.parse(JSON.stringify(geoJson)).filter((n:any) => name.includes(n.properties.河流名称))
        
        if (name === '大洪河6') {
            i =  JSON.parse(JSON.stringify(testGeoJson))
        }
        console.log(name);
        
        if(i.length === 0) return []
        gcoord.transform(i[0],gcoord.WGS84,gcoord.GCJ02)
        gcoord.transform(i[0],gcoord.GCJ02,gcoord.BD09LL)
        return i
    })()
    return (
        <MapvglView >
        <MapvglLayer
            type="LineLayer"
            coordType='bd09ll'
            data={infoJson}
            options={{
                blend: 'lighter',
                width: 5,
                offset: 0,
                color: 'black',
                dashOffset:0
            }}
        />
    </MapvglView>
    )
}