async function getPokemons() {
	const url = 'https://pokeapi.co/api/v2/pokemon'

	console.log('Fetch started')

	try {
		const response = await fetch(url)

		console.log('Response', { response })

		if (response.status === 200) {
			const decodedData = await response.json()
			console.log('Decoded response', decodedData)
			return decodedData['results'];
		} else {
			console.log('Response status code is not OK!')
		}
	} catch (error) {
		console.error('Error:', error)
	} finally {
		console.log('Fetch finished!')
	}
}

// getPokemon();


document.addEventListener('DOMContentLoaded', async function () {
	const pokemons = await getPokemons();
	console.log(pokemons);
	pokemons.forEach(pokemon => {
		const li = document.createElement('li');
		const div = document.createElement('div');

		const img = document.createElement('img');
		img.src = 'https://archives.bulbagarden.net/media/upload/thumb/e/e5/051Dugtrio.png/250px-051Dugtrio.png'

		const p = document.createElement('p');
		p.innerHTML = capitalizeFirstLetter(pokemon['name']);

		div.appendChild(img);
		div.appendChild(p);
		li.appendChild(div);

		const list = document.getElementById('list');
		list.appendChild(li);
	});
}, false);

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}