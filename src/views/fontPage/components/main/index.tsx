import React from 'react'
import {Left} from './Left'
import {Content} from './Content'
import {Right} from './Right'

type Props = {
	style:React.CSSProperties
}
export function Main({style}:Props) {
	return (
		<main style={{...style,padding:'10px 10px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
			<Left style={{flex:'1 0 300px',height:'100%'}}/>
			<Content style={{flex:'2 0 600px',height:'100%',margin:'0 10px'}}/>
			<Right style={{flex:'1 0 300px',height:'100%'}}/>
		</main>
	)
}
