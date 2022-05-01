import React, { useState, useEffect } from "react";

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}/`

export default function Fetcher() {

	// your task here is to fetch Pokemon from a given URL and just display is name
	// once a Pokemon is fetched, increment your id to fetch the next one on click

	// fetch one Pokemon data when this component in rendered
	// console.log(getPokemonUrl(1)) // delete this, only reason to log it is so linter doesn't cry before any code is written

	const [id, setId] = useState(1)
	const [pokemons, setPokemons] = useState([])
	
	console.log(pokemons);


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
	// 	// body of a function which is executed in hook, after first render

	// 	return () => {
	// 		// cleanup method which is executed when the component is unmounted from the DOM
	// 	}
	// }, [/* array of dependencies */])

	// return 2 elements:
	// 1st: a button which will trigger another fetch on click, for a Pokemon with next id
	// 2nd: Pokemons
	return (
		<div>
			<button onClick={() => setId(id + 1)}>FETCH</button>
			<ul>
				{(pokemons || []).map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
			{/* display pokemons in a list here, you can use your existing components from homework number 4 or just display a name */}
		</div>
	)
}