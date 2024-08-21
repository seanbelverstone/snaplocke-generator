import React, { useEffect, useState } from 'react';
import { legendaries, pokemonPerVersion } from './gameData';
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import snapImage from './assets/snap.png';
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
	const [detailLevel, setDetailLevel] = useState('basic');
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

	const scrollToResults = () => {
		var element = document.querySelector('.results');
    var headerOffset = 10;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
		})
	}

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
			setTimeout(() => {
				scrollToResults();
			}, 1000)


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

	const handleDetailLevel = (event, value) => {
		setDetailLevel(value);
	}

  return (
    <div className="results" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				{!snapped ? (
					<Button
						variant="outlined"
						onClick={snap}
						style={{ width: 'min-content', display: 'flex', flexDirection: 'column' }}
						disabled={snapped}
					>
						<img src={snapImage} alt="The Infinity Gauntlet in a snapping pose." style={{ maxWidth: '192px' }} />
						<span>REMOVE HALF</span>
					</Button>

				) : (
					<ToggleButtonGroup
					color="primary"
					value={detailLevel}
					exclusive
					onChange={handleDetailLevel}
					aria-label="detail level"
				>
					<ToggleButton value="basic" aria-label="basic">
						Basic
					</ToggleButton>
					<ToggleButton value="detailed" aria-label="detailed">
						Detailed
					</ToggleButton>
				</ToggleButtonGroup>
					// <Button
					// 	variant="contained"
					// 	color="success"
					// 	style={{ width: '100%', margin: '10px 0' }}
					// >
					// Export List
					// </Button>
				)}
				<div style={{ width: '80%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
					{dataComplete && pokemonDetails?.map(pokemon => (
						<PokemonCard key={pokemon.name} pokemon={pokemon} detailLevel={detailLevel} animation={deletedPokemon.includes(pokemon.name) ? animation : 'none'} />
						))}
				</div>
		</div>

  );
}

export default Results;
