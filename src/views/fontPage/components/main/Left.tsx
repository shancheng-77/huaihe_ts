import React from 'react'

type Props = {
	style:React.CSSProperties
}
export function Left({style}: Props) {
	return (
		<div style={{...style,display:'flex',flexDirection:'column',justifyContent:'space-around',padding:10}} className='InfoBox'>
			<div style={{flex:'4 0 200px',width:'100%',display:'grid',placeItems:'center'}}>
				<div className='chartsTitle'>
					<span>全部指标</span>
				</div>
				{/*<Sheet/>*/}
			</div>
			{/*<div style={{flex:'3 0 150px',width:'100%',display:'flex',justifyContent:'space-around'}}>*/}
			{/*	<DemoGauge/>*/}
			{/*	<DemoGauge/>*/}
			{/*</div>*/}
			<div style={{flex:'6 0 300px',width:'100%',display:'grid',placeItems:'center',marginTop:10}}>
				<div className='chartsTitle'>
					<span>水位变化曲线</span>
				</div>
				{/*<DemoLine/>*/}
			</div>
		</div>
	)
}
