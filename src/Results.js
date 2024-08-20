import React, { useEffect, useState } from 'react';
import { legendaries, pokemonPerVersion } from './gameData';
import { Button } from '@mui/material';
import snapImage from './assets/snap.png';
import thanos from './assets/thanos.jpeg';
import PokemonCard from './PokemonCard';
import snapSound from './assets/snapSound.mp3';

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
	const [deletedPokemon, setDeletedPokemon] = useState([]);
	const [animation, setAnimation] = useState('none');
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
		const audio = new Audio(snapSound);
		audio.play();

		const newPokemonList = [ ...pokemonDetails ];
		const deletedPokemonList = [];
		for (let i = newPokemonList.length; i >= (Math.ceil(pokemonDetails.length / 2)); i--) {
			deletedPokemonList.push(newPokemonList.splice(Math.floor(Math.random() * newPokemonList.length), 1));
		}

		setDeletedPokemon(deletedPokemonList.flatMap(val => val).map(mon => mon.name));
		setAnimation('fade 2s forwards');
		setSnapped(true);
		setTimeout(() => {
			setPokemonDetails(newPokemonList);
			setAnimation('none');
		}, 2000)

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
								<img id="img" src={thanos} alt="thanos" style={{ maxWidth: '192px' }} />
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
					<PokemonCard key={pokemon.name} pokemon={pokemon} animation={deletedPokemon.includes(pokemon.name) ? animation : 'none'} />
					))}
				{snapped && (
					<Button
					variant="contained"
					color="success"
					style={{ width: '100%', margin: '10px 0' }}
					>
					Export List
					</Button>
				)}
			</div>
		</div>

  );
}

export default Results;
