import {GraphMap} from '../../maps/graphMap'
import {Header} from './components/Header'
import {Main} from './components/main'

export function FontPage() {
	return (
		<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
			<Header style={{width:'100%',flex:'0 0 80px',backgroundColor:'#FFFFFF',borderBottom:'2px solid #F1F2F3'}}/>
			<Main style={{width:'100%',flex:1,minHeight:750}}/>
			<footer style={{width:'100%',flex:'0 0 50px'}}>
				@copyright
			</footer>
		</div>
	)
}
