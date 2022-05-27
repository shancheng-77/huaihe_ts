import React from 'react'
import {GraphMap} from '../../../../maps/graphMap'

type Props = {
	style: React.CSSProperties
}

export function Content({style}: Props) {
	return (
		<div style={{...style, padding: 5, overflow: 'hidden'}} className='InfoBox'>
			<GraphMap/>
		</div>
	)
}
