import {FloodAreaType} from "../../../data/nodeType/FloodAreaType";
import {Color} from "../index";
import {Tributary} from "./Tributary";
import {useSelectPlus} from "../../../hooks/useSelectPlus";
import {useDispatch} from "react-redux";
import {setSelectedNode} from "../../../store/reducer/selectedNodeReducer";

type FloodAreaProps = {
    rectX:number,
    rectY:number,
    rectWidth?:number,
    rectHeight?:number,
    direction?:'top'|'bottom',
    nodeName:string
}
type FloodAreaWithRiverProps = FloodAreaProps & {
    entryX:number,
    outX:number,
    riverHeight?:number,
}
export function FloodArea({
    rectX,
    rectY,
    rectWidth=60,
    rectHeight=25,
    direction='top',
    nodeName
}:FloodAreaProps) {

    const textX = rectX+rectWidth/5
    const textY = rectY+rectHeight/1.5

    const data = useSelectPlus('floodArea',nodeName) || {name:nodeName}
    const dispatch = useDispatch()
    const handleClick = () => {
        console.log(data)
        dispatch(setSelectedNode({nodeType:'floodArea',nodeName}))
    }
    return (
       <>
           <rect x={rectX} y={rectY} width={rectWidth} height={rectHeight}
                 style={{fill: '#214891', stroke: Color.borderColor, strokeWidth: 2,cursor:'pointer'}}
                 onClick={handleClick}
           />
           <text x={textX} y={textY} style={{cursor:'pointer',userSelect:'none',fill:Color.fontColor2,fontSize:12}}
                 onClick={handleClick}
           >
               {nodeName}
           </text>
       </>
    )
}

export function FloodAreaWithRiver({
    rectX,
    rectY,
    rectWidth=60,
    rectHeight=25,
    direction='top',
    nodeName,
    entryX,
    outX,
    riverHeight=30
                                   }:FloodAreaWithRiverProps) {
    const riverStartY = direction === 'top' ? rectY+rectHeight+riverHeight : rectY-riverHeight;
    const riverEndY = direction === 'top' ? riverStartY - riverHeight : riverStartY+riverHeight;
    return (
        <>
            <Tributary x1={entryX} y1={riverStartY}
                       x2={entryX} y2={direction === 'top' ?riverEndY+20 : riverEndY}
                       nodeName={nodeName+'entry'} showName={false}
            />
            <Tributary x1={outX} y1={riverEndY}
                       x2={outX} y2={direction === 'bottom' ? riverStartY+20 : riverStartY}
                       nodeName={nodeName+'out'} showName={false}
            />
            <FloodArea rectX={rectX} rectY={rectY}
                       nodeName={nodeName}
                       rectWidth={rectWidth} rectHeight={rectHeight}
                       direction={direction}
            />
        </>
    )
}
