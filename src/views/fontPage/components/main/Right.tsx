import React from 'react'
// import {GraphMap} from '../../../../maps/graphMap'
import {GISMap} from '../../../../maps/GISMap'

type Props = {
	style: React.CSSProperties
}

export function Right({style}: Props) {
	return (
		<div style={{...style, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
			<div className='InfoBox' style={{flex: 1}}>
			</div>
			<div className='InfoBox' style={{flex: 1, marginTop: 10}}>
				<GISMap width={200} height={200}/>
			</div>
		</div>
	)
}
