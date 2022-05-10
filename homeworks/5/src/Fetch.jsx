import React, { useState, useEffect } from "react";

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}/`

export default function Fetcher() {
	const [id, setId] = useState(1)
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		let mounted = true
		if (mounted) {
			fetch(getPokemonUrl(id))
				.then(response => response.json()
					.then(json => setPokemons([...pokemons, json.name])
					))
		}
		return () => mounted = false
	}, [id])

	return (
		<div>
			<button onClick={() => setId(id + 1)}>FETCH</button>
			<ul>
				{pokemons.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	)
}