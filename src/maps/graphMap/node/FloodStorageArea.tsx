
import {Color} from "../index";
import {Tributary} from "./Tributary";
import {useSelectPlus} from "../../../hooks/useSelectPlus";
import {useDispatch} from "react-redux";
import {setSelectedNode} from "../../../store/reducer/selectedNodeReducer";

type FloodStorageAreaProps = {
    rectX:number,
    rectY:number,
    rectWidth?:number,
    rectHeight?:number,
    direction?:'top'|'bottom',
    textMode?:'vertical-rl' | 'horizontal-tb'
    nodeName:string
}
type FloodStorageAreaWithRiverProps = FloodStorageAreaProps & {
    entryX?:number,
    outX:number,
    riverHeight?:number,
    hasEntry?:boolean,
}
export function FloodStorageArea({
                              rectX,
                              rectY,
                              rectWidth=110,
                              rectHeight=25,
                              textMode='horizontal-tb',
                              nodeName
                          }:FloodStorageAreaProps) {

    const textX = textMode === 'horizontal-tb' ? rectX+rectWidth/2.5 : rectX+rectWidth/2;
    const textY = textMode === 'horizontal-tb' ?rectY+rectHeight/1.5 :rectY+rectHeight/3

    const data = useSelectPlus('floodStorageArea',nodeName) || {name:nodeName}
    const dispatch = useDispatch();
    const handleClick = () => {
        console.log(data);
        dispatch(setSelectedNode({nodeType:"floodStorageArea",nodeName}))
    }
    return (
        <>
            <rect x={rectX} y={rectY} width={rectWidth} height={rectHeight}
                  style={{fill: '#41f642', stroke: Color.borderColor, strokeWidth: 2,cursor:'pointer'}}
                  onClick={handleClick}
            />
            <text x={textX} y={textY} style={{cursor:'pointer',userSelect:'none',fill:Color.fontColor,fontSize:12,writingMode:textMode}}
                  onClick={handleClick}
            >
                {nodeName}
            </text>
        </>
    )
}

export function FloodStorageAreaWithRiver({
                                       rectX,
                                       rectY,
                                       rectWidth=110,
                                       rectHeight=25,
                                       direction='top',
                                       nodeName,
                                        textMode,
                                       entryX,
                                       outX,
                                       hasEntry=true,
                                       riverHeight=30
                                   }:FloodStorageAreaWithRiverProps) {
    const riverStartY = direction === 'top' ? rectY+rectHeight+riverHeight : rectY-riverHeight;
    const riverEndY = direction === 'top' ? riverStartY - riverHeight : riverStartY+riverHeight;
    return (
        <>
            {
                hasEntry&&entryX ?  <Tributary x1={entryX} y1={riverStartY}
                                       x2={entryX} y2={direction === 'top' ?riverEndY+20 : riverEndY}
                                       nodeName={nodeName+'entry'} showName={false}
                /> : <Tributary x1={0} y1={0} x2={0} y2={0} nodeName={''}/>
            }
            <Tributary x1={outX} y1={riverEndY}
                       x2={outX} y2={direction === 'bottom' ? riverStartY+20 : riverStartY}
                       nodeName={nodeName+'out'} showName={false}
            />
            <FloodStorageArea rectX={rectX} rectY={rectY}
                       nodeName={nodeName}
                       rectWidth={rectWidth} rectHeight={rectHeight}
                       textMode={textMode}
                       direction={direction}
            />
        </>
    )
}
