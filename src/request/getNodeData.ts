import {NodeInfoProps} from "../data/nodeInfo";
import {getTributaryData} from "../data/nodeType/TributaryType";

/**
 * 模拟请求某节点七天内数据
 * @param nodeType 节点类型
 * @param nodeName 节点名称
 */
type NodeType = keyof NodeInfoProps
export function getNodeData(nodeType:NodeType,nodeName:string) {
    // 生成50 - 100 的数组
    const data = Array(7).fill(0).map(n => Math.floor(Math.random()*50+50))
    return new Promise((resolve,reject) => {
        resolve(data)
    })
}
