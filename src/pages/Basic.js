import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { set } from '../redux/basic'

import './Basic.css'

export default function Basic() {
	const dispatch = useDispatch()

	const value = useSelector(state => state.basic.value)

	return (
		<div>
			<div>
				This is a basic implementation of a counter.
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

Basic.meta = () => {
	return {
		title: 'Basic'
	}
}