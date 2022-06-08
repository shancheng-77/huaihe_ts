import React from 'react'
import { useSelector } from 'react-redux'
// import {GraphMap} from '../../../../maps/graphMap'
import {GISMap} from '../../../../maps/GISMap'
import { RootState } from '../../../../store'

type Props = {
	style: React.CSSProperties
}

export function Right({style}: Props) {

	return (
		<div style={{...style, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
			<div className='InfoBox' style={{flex: 1}}>
				<GISMap width={'100%'} height={'100%'}/>
			</div>
			<div className='InfoBox' style={{flex: 1, marginTop: 10}}>
				
			</div>
		</div>
	)
}
