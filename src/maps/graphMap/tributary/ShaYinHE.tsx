// type Props {

import ControlStation from "../node/ControlStation";
import { LargeReservoir } from "../node/LargeReservoir";
import { Sluice } from "../node/Sluice";
import { Tributary } from "../node/Tributary";

// }
export function ShaYinHe() {
    return (
        <>
            {/* // 主河道 */}
            <Tributary x1={1070} y1={385} x2={1070} y2={415} nodeName='沙颖河1'/>
            <Sluice x={1040} y={360} width={60} height={25} nodeName='颖上闸'/>
            <Tributary x1={1070} y1={330} x2={1070} y2={360} nodeName='沙颖河2'/>
            <Sluice x={1040} y={305} width={60} height={25} nodeName='阜阳闸'/>
            <Tributary x1={1070} y1={275} x2={1070} y2={305} nodeName='沙颖河3'/>
            <ControlStation x={1040} y={250} nodeName='周口'/>
            {/* // 左下侧河道 */}
            <Tributary x1={1020} y1={215} x2={1050} y2={215} mode={'level'} nodeName='沙颖河4'/>
            <Tributary x1={965} y1={185} x2={1020} y2={215} showName={false} hasMarker={false} nodeName='沙颖河5'/>
            <LargeReservoir cx={935} cy={182} nodeName='孤石滩'/>
            <Tributary x1={965} y1={245} x2={1020} y2={215} showName={false} hasMarker={false} nodeName='沙颖河6'/>
            <LargeReservoir cx={935} cy={248} nodeName='燕山'/>
            {/* // 左上侧河道 */}
            <Tributary x1={1050} y1={110} x2={1050} y2={250} showName={false} nodeName='沙颖河7'/>
            <Tributary x1={990} y1={110} x2={1050} y2={110} showName={false} hasMarker={false} nodeName='沙颖河7'/>
            <LargeReservoir cx={960} cy={110} nodeName='白龟山'/>
            <Tributary x1={900} y1={110} x2={930} y2={110} showName={false} mode={'level'} nodeName='沙颖河8'/>
            <LargeReservoir cx={870} cy={110} nodeName='昭平台'/>
            {/* // 右侧河道 */}
            <Tributary x1={1080} y1={215} x2={1080} y2={250} showName={false} nodeName='沙颖河9'/>
            <Tributary x1={1115} y1={170} x2={1080} y2={215} showName={false} hasMarker={false} nodeName='沙颖河9'/>
            <LargeReservoir cx={1130} cy={160} nodeName='白沙'/>

        </>
    )
}