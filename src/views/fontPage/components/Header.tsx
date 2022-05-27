import React from 'react'

type Props = {
	style: React.CSSProperties
}
const liContent = ['地图','数据']
export function Header({style}:Props) {
	return (
		<header style={{...style,display:'flex',justifyContent:'start',alignItems:'center',padding:'0 20px'}}>
			<span style={{fontSize:25}}>数字淮河系统</span>
			<ul style={{display:'flex',flexBasis:500,fontSize:18,justifyContent:'center',height:'100%'}}>
				{liContent.map(l => (
					<li key={l} style={{width:100,height:'100%',display:'grid',placeItems:'center',cursor:'pointer'}}>
						{l}
					</li>
				))}
			</ul>
		</header>
	)
}
