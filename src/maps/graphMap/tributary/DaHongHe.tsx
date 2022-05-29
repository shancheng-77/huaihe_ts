import {LargeReservoir} from '../node/LargeReservoir'
import {Tributary} from '../node/Tributary'
import React from 'react'
import ControlStation from '../node/ControlStation'
import {useSelectPlus} from '../../../hooks/useSelectPlus'


export function DaHongHe() {

	return (
		<>
			<Tributary x1={645} y1={290} x2={645} y2={415}
					   nameX={630} nameY={330}
					   nodeName='大洪河1'
			/>
			<ControlStation x={615} y={265} nodeName='班台'/>
			{/*洪河分洪道*/}
			<>
				<Tributary x1={675} y1={278} x2={815} y2={278}
						   nodeName={'洪河分洪道'}
						   nameX={730} nameY={270} textMode={"horizontal-tb"}
						   hasMarker={false} mode={'level'}
				/>
				<Tributary x1={815} y1={278} x2={815} y2={350}
						   nodeName={'洪河分洪道'}
						   showName={false}
				/>
			</>
			<Tributary x1={645} y1={235} x2={645} y2={265}
					   showName={false}
					   nodeName='大洪河2'
			/>
			<Tributary x1={610} y1={190} x2={645} y2={235}
					   hasMarker={false} showName={false}
					   nodeName='大洪河3'
			/>
			<Tributary x1={680} y1={190} x2={645} y2={235}
					   hasMarker={false} showName={false}
					   nodeName='大洪河4'
			/>
			<LargeReservoir cx={695} cy={180} nodeName='石漫滩'/>
			<LargeReservoir cx={600} cy={180} nodeName='宿鸭湖'/>
			<Tributary x1={600} y1={135} x2={600} y2={170}
					   showName={false}
					   nodeName='大洪河5'
			/>
			<Tributary x1={560} y1={90} x2={600} y2={135}
						showName={false} hasMarker={false}
						nodeName='大洪河6'
			/>
			<Tributary x1={635} y1={90} x2={600} y2={135}
					   showName={false} hasMarker={false}
					   nodeName='大洪河7'
			/>
			<LargeReservoir cx={550} cy={80} nodeName='薄山'/>
			<LargeReservoir cx={645} cy={80} nodeName='板桥'/>
		</>
	)
}
