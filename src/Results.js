import React, { useEffect, useState } from 'react';
import { legendaries, pokemonPerVersion } from './gameData';
import camelToTitle from './utils';

/* this page will list out the pokemon in different layouts:
 - basic
 		Just the pokemon names, typing and a sprite
 - detailed
 		includes everything above and
		base stats
		abilities
*/

function Results(props) {
	const { submitted, version, noLegendaries, expansions } = props;
	const [pokemon, setPokemon] = useState([]);
	const [pokemonDetails, setPokemonDetails] = useState({});
	const [dataComplete, setDataComplete] = useState(false);
	/* 
		click a button to snap	
		animation of snap - fade out half
	*/

	useEffect(() => {
		setDataComplete(false);
		getSprites();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [submitted])

	const getSprites = async () => {
		const pokemonList = noLegendaries ? pokemonPerVersion[version] : [...pokemonPerVersion[version], ...legendaries[version]];
		setPokemon(pokemonList)
		const spritePromise = pokemonList.map(async name => {
			return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
				.then(response => response.json())
				.then(data => ({name: name, data: data}))
			});
			const resolvedPromises = await Promise.all(spritePromise);
			setPokemonDetails(resolvedPromises)
			setDataComplete(true);
	}

  return (
    <div className="results">
			<h2>Results here!</h2>
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
				{dataComplete && pokemonDetails?.map(pokemon => (
					<div id="card" key={pokemon.name}>
						<img style={{ maxWidth: '96px', maxHeight: '96px', imageRendering: 'pixelated' }} src={pokemon.data.sprites?.front_default || 'https://media1.tenor.com/m/Tya2Q6TPVXQAAAAC/slowpoke-thinking.gif'} alt={`The pokemon ${pokemon.name} in their default front sprite`}/>
						<p>{camelToTitle(pokemon.name)}</p>
					</div>
					))}
			</div>
		</div>

  );
}

export default Results;
