import React, {useEffect, useState} from 'react';
import { Table, Tag, Space } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import {v4 as uuidV4} from 'uuid'
import {useSelector} from "react-redux";
import {RootState} from "../store";
interface DataType {
    key: string;
    data:string;
    waterLevel:number;
    flow:number,
    pH:number;
    nh3:number;
}

const columns: ColumnsType<DataType> = [
    {
        title:'日期',
        dataIndex:'data',
        key:'data',
        width:80,
    },
    {
        title:'水位',
        dataIndex:'waterLevel',
        key:'waterLevel',
        width:80,
        render:(text) => {
            const color = text > 90 ? 'red' : 'black'
            return (
                <span style={{color}}>
                    {text}
                </span>
            )
        }
    },
    {
        title:'流量',
        dataIndex:'flow',
        key:'flow',
        width:80,
        render:(text) => {
            const color = text > 15 ? 'red' : 'black'
            return (
                <span style={{color}}>
                    {text+' '+(text > 15 ?'↑':'')}
                </span>
            )
        }
    },
    {
        title:'ph',
        dataIndex:'pH',
        key:'pH',
        width:80
    },
    {
        title:'氨氮',
        dataIndex:'nh3',
        key:'nh3',
        width:80
    }


];

const getData = (data:string):DataType => ({
    key: uuidV4(),
    data:data,
    waterLevel:Math.floor(Math.random()*50+50),
    flow:Math.floor(Math.random()*10+10),
    pH:Math.floor(Math.random()*8+2),
    nh3:Math.floor(Math.random()*5+5)
})

export function MyTable() {
    const selectedInfo = useSelector((state:RootState) => state.selectedNode);

    const [data,setData] = useState<DataType[]>([])
    // 模拟请求data
    useEffect(() => {
        setData(Array(7).fill(0).map((n,i) => {
            return getData('05-0'+(i+1))
        }))
    },[selectedInfo])

    return (
        <Table columns={columns}
               dataSource={data}
               style={{width:'100%',height:300}}
               pagination={false}
               scroll={{ y: 240 }}
        />
    )
}
