import {Tributary} from "../node/Tributary";
import ControlStation from "../node/ControlStation";

export function BaiLuHe() {
    return (
        <>
            <Tributary x1={690} y1={590} x2={690} y2={475}
                       nodeName={'白露河1'}
                       direction={'bottom'}
                       nameX={700} nameY={500}
            />
            <ControlStation x={660} y={590} nodeName={'北庙集'}/>
            <Tributary x1={690} y1={645} x2={690} y2={615}
                       nodeName={'白露河2'}
                       showName={false}
                       direction={'bottom'}
            />
        </>
    )
}
