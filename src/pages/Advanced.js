import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { set } from '../redux/advanced'

import './Advanced.css'

export default function Advanced() {
	const dispatch = useDispatch()

	const value = useSelector(state => state.advanced.value)

	return (
		<div>
			<div>
				This is an advanced implementation of a counter.
			</div>
			<div className="counter">
				{value}
				<button
					type="button"
					onClick={() => dispatch(set(value + 1))}>
					Increment
				</button>
			</div>
		</div>
	)
}

Advanced.meta = () => {
	return {
		title: 'Advanced'
	}
}