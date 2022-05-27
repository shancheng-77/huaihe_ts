import {Tributary} from "../node/Tributary";
import ControlStation from "../node/ControlStation";
import {LargeReservoir} from "../node/LargeReservoir";

export function PiHe() {
    return (
        <>
            <Tributary x1={1025} y1={605} x2={1025} y2={475}
                       nodeName={'淠河1'}
                        nameX={1040} nameY={500}
                       direction={'bottom'}
            />
            <ControlStation x={995} y={605} nodeName={'横排头'}/>

            <>

                <Tributary x1={1025} y1={660} x2={1025} y2={630}
                           nodeName={'淠河2'}
                           showName={false}
                           direction={"bottom"}
                />
                <Tributary x1={985} y1={700} x2={1025} y2={660}
                           nodeName={'淠河3'}
                           showName={false}
                           hasMarker={false}
                />
                <LargeReservoir cx={975} cy={710} nodeName={'响洪旬'}/>
                <Tributary x1={1065} y1={700} x2={1025} y2={660}
                           nodeName={'淠河4'}
                           showName={false}
                           hasMarker={false}
                />
                <LargeReservoir cx={1075} cy={710} nodeName={'佛子岭'}/>
            </>
            <>
               <Tributary x1={1075} y1={755} x2={1075} y2={720}
                          nodeName={'淠河5'}
                          showName={false}
                          direction={"bottom"}
               />
               <Tributary x1={1035} y1={800} x2={1075} y2={755}
                          nodeName={'淠河6'}
                          showName={false}
                          hasMarker={false}
               />
               <LargeReservoir cx={1020} cy={810} nodeName={'白莲岸'}/>
               <Tributary x1={1115} y1={800} x2={1075} y2={755}
                          nodeName={'淠河7'}
                          showName={false}
                          hasMarker={false}
               />
               <LargeReservoir cx={1125} cy={810} nodeName={'磨子潭'}/>
           </>
        </>
    )
}
