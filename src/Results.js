import React, { useEffect, useState } from 'react';
import { legendaries, pokemonPerVersion } from './gameData';
import camelToTitle from './utils';
import { Button } from '@mui/material';
import snapImage from './assets/snap.png';
import thanos from './assets/thanos.jpeg';

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
	const [pokemonDetails, setPokemonDetails] = useState([]);
	const [dataComplete, setDataComplete] = useState(false);
	const [snapped, setSnapped] = useState(false);
	/* 
		click a button to snap	
		animation of snap - fade out half
	*/

	useEffect(() => {
		setDataComplete(false);
		setSnapped(false);
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

	const snap = () => {
		// play snap sound
		const newPokemonList = [ ...pokemonDetails ];
		for (let i = newPokemonList.length; i >= (Math.ceil(pokemonDetails.length / 2)); i--) {
			newPokemonList.splice(Math.floor(Math.random() * newPokemonList.length), 1);
		}
		// before setting new list:
		// find names in the window and append a class with animation for dissolve
		// items removed from list get dissolve (dust?) effect applied
		// then new list is set
		setPokemonDetails(newPokemonList);
		setSnapped(true);
	};

  return (
    <div className="results" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				<div style={{ width: '80%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
				<Button
					variant="outlined"
					onClick={snap}
					style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
					disabled={snapped}
					>
						{snapped ? (
							<>
								<img src={thanos} alt="thanos" style={{ maxWidth: '192px' }} />
								<span style={{ color: 'red' }}>I AM INEVITABLE</span>
							</>
						) : (
							<>
								<img src={snapImage} alt="The Infinity Gauntlet in a snapping pose." style={{ maxWidth: '192px' }} />
								<span>REMOVE HALF</span>
							</>
						)}

				</Button>
				{dataComplete && pokemonDetails?.map(pokemon => (
					<div id="card" key={pokemon.name} className={pokemon.name}>
						<img style={{ maxWidth: '96px', maxHeight: '96px', imageRendering: 'pixelated' }} src={pokemon.data.sprites?.front_default || 'https://media1.tenor.com/m/Tya2Q6TPVXQAAAAC/slowpoke-thinking.gif'} alt={`The pokemon ${pokemon.name} in their default front sprite`}/>
						<p>{camelToTitle(pokemon.name)}</p>
					</div>
					))}
			</div>
		</div>

  );
}

export default Results;
