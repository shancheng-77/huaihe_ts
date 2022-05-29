import ReactECharts from 'echarts-for-react';
import React, {useEffect, useState} from "react";
import {getNodeData} from "../request/getNodeData";
import {RootState} from "../store";
import {useSelector} from "react-redux";
import {SelectedNodeAction} from "../store/reducer/selectedNodeReducer";
type Props = {
    style:React.CSSProperties
}
export function LineCharts({style}:Props) {

    const selectedNodeInfo:SelectedNodeAction = useSelector((state:RootState) => state.selectedNode)
    const [data,setData] = useState<number[]>([]);

    useEffect(() => {
        getNodeData(selectedNodeInfo.nodeType,selectedNodeInfo.nodeName).then(d => {
            // console.log(d)
            setData(d as number[])
        })
    },[selectedNodeInfo])

    const option = {
        grid:{
            top:50,
            right:30,
            bottom:30,
            left:30
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '水位',
                type: 'line',
                data: data,
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    silent:true,
                    data: [
                        { type: 'average', name: 'Avg' },
                        {
                            name:'警戒水位',
                            yAxis:90,
                            lineStyle:{
                                color:'red'
                            }
                        }
                    ]
                }
            },
        ]
    };

    return (
        <>
            <ReactECharts option={option} style={{...style}}/>
        </>
    )
}

