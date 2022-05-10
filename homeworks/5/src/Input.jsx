import React, { useState } from "react";

export default function Input() {
	const [input, setInput] = useState({});
	const [circles, setCircles] = useState({})

	const handleSubmit = (event) => {
		event.preventDefault()
		setCircles({ ...input })
	}

	const handleChange = (event, num) => {
		const name = event.target.name;
		const value = event.target.value;
		setInput(values => ({ ...values, [num]: { ...values[num], [name]: value } }))
	}

	const addAnotherForm = () => {
		const length = Object.keys(input).length
		setInput(values => ({ ...values, [length]: { x: 0, y: 0, r: 0, color: 'blue' } }))
	}

	return (
		<div>
			<button onClick={addAnotherForm}>Add another form</button>
			{Object.entries(input).map(
				([formNum, inputData]) =>
					<CircleForm key={formNum} handleSubmit={handleSubmit} handleChange={handleChange} value={inputData} num={formNum} />)}
			<svg viewBox="0 0 600 600" style={{ maxWidth: 'min(600px, 80vw)', maxHeight: 'min(600px, 80vh)' }}>
				{Object.entries(circles).map(
					([circleNum, circleData]) =>
						<Circle key={circleNum} circleData={circleData} />)}
			</svg>
		</div>
	)
}

function Circle(props) {
	const { x, y, r, color } = props.circleData
	return (
		<circle cx={x} cy={y} r={r} fill={color} stroke="black" strokeWidth="2" />
	)
}

function CircleForm(props) {
	const { handleSubmit, handleChange, value, num } = props
	const { x, y, r, color } = value;


	return (
		<form onSubmit={handleSubmit}>
			<label>X:
				<input
					type="text"
					name="x"
					value={x}
					onChange={e => handleChange(e, num)}
				/>
			</label>
			<label>Y:
				<input
					type="text"
					name="y"
					value={y}
					onChange={e => handleChange(e, num)}
				/>
			</label>
			<label>R:
				<input
					type="text"
					name="r"
					value={r}
					onChange={e => handleChange(e, num)}
				/>
			</label>
			<label>Color:
				<select name="color" value={color} onChange={e => handleChange(e, num)}>
					<option value="blue">Blue</option>
					<option value="red">Red</option>
					<option value="yellow">Yellow</option>
					<option value="green">Green</option>
				</select>
			</label>
			<input type="submit" />
		</form>
	)
}
