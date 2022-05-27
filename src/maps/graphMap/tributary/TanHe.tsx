import { Tributary } from "../node/Tributary";

export function TanHe() {
    return (
        <>
            <Tributary x1={700} y1={415} x2={700} y2={350}
                       nodeName={'潭河分河道'}
                       hasMarker={false}
                       showName={false}
            />
            <Tributary x1={700} y1={350} x2={820} y2={350}
                       nodeName={'潭河分河道'}
                       nameX={720} nameY={340} textMode={"horizontal-tb"}
                       hasMarker={false}
            />
            <Tributary x1={820} y1={350} x2={820} y2={415}
                       nodeName={'潭河分河道'}
                       showName={false}
            />
        </>
    )
}
