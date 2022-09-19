import { Component } from 'react'
import Portal from './Portal'

export default class Modal extends Component {
	render() {
		const { children, toggle, active } = this.props
		return (
			<Portal>
				{active && (
					<div style={style.wrapper}>
						<div style={style.window}>
							<button onClick={toggle} style={style.closeButtom}>
								<i className="fa-regular fa-circle-xmark"></i>
							</button>
							<div>{children}</div>
						</div>
					</div>
				)}
			</Portal>
		)
	}
}

const style = {
	wrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	window: {
		position: 'relative',
		background: '#fff',
		borderRadius: 5,
		padding: 35,
		zIndex: 10,
		minWidth: 360,
		boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
	},
	closeButtom: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
}
