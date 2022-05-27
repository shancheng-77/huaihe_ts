import {Tributary} from "../node/Tributary";
import ControlStation from "../node/ControlStation";
import {LargeReservoir} from "../node/LargeReservoir";

export function ShiHe() {
    return (
        <>
            <Tributary x1={765} y1={590} x2={765} y2={475}
                       nodeName={'史河1'}
                       direction={'bottom'}
                       nameY={500} nameX={775}
            />
            <ControlStation x={740} y={590} nodeName={'蒋家集'}/>
            <Tributary x1={765} y1={645} x2={765} y2={615}
                       nodeName={'史河2'}
                       showName={false}
                       direction={'bottom'}
            />
            <Tributary x1={730} y1={690} x2={765} y2={645}
                       nodeName={'史河3'}
                       showName={false}
                       hasMarker={false}
            />
            <LargeReservoir cx={720} cy={700} nodeName={'鲇鱼山'}/>
            <Tributary x1={800} y1={690} x2={765} y2={645}
                       nodeName={'史河4'}
                       showName={false}
                       hasMarker={false}
            />
            <LargeReservoir cx={810} cy={700} nodeName={'梅山'}/>
        </>
    )
}
