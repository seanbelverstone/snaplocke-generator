import React, { useEffect, useState } from 'react';
import { gamesWithoutFairy, legendaries, pokemonPerVersion, starters } from './gameData';
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import snapImage from './assets/snap.png';
import PokemonCard from './PokemonCard';
import snapSound from './assets/snapSound.mp3';
import './styles/Results.css';
import ScreenshotButton from './ScreenshotButton';

/* this page will list out the pokemon in different layouts:
 - basic
 		Just the pokemon names, typing and a sprite
 - detailed
 		includes everything above and
		base stats
		abilities
*/


function Results(props) {
	const { submitted, version, versionRegion, noLegendaries, selectedStarter, expansionsSelected } = props;
	// eslint-disable-next-line no-unused-vars
	const [pokemon, setPokemon] = useState([]);
	const [pokemonDetails, setPokemonDetails] = useState([]);
	const [dataComplete, setDataComplete] = useState(false);
	const [deletedPokemon, setDeletedPokemon] = useState([]);
	const [animation, setAnimation] = useState('none');
	const [snapped, setSnapped] = useState(false);
	const [detailLevel, setDetailLevel] = useState('basic');

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
		// if legendaries are allowed, append them to the list
		const pokemonList = noLegendaries ? pokemonPerVersion[version] : [...pokemonPerVersion[version], ...legendaries[version]];
		// if a specific starter has been chosen, append it to the list
		const pokemonListWithStarters = () => {
			if (version !== 'letsGoPikachu' || version !== 'letsGoEevee' || version !== 'yellow') {
				return selectedStarter === '' ? [...starters[versionRegion], ...pokemonList] : [selectedStarter, ...pokemonList]
			}
			return pokemonList;
		}
		const finalPokemonList = pokemonListWithStarters();
		// if an expansion/s has/have been selected, add their pokemon to the list
		expansionsSelected.length > 0 && expansionsSelected.forEach(exp => finalPokemonList.push(...pokemonPerVersion[exp][version]));
		setPokemon(finalPokemonList)
		const spritePromise = finalPokemonList.map(async name => {
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
		// maps through the copied list and pushes half randomly to the deleted pokemon list
		for (let i = newPokemonList.length; i >= (Math.ceil(pokemonDetails.length / 2)); i--) {
			deletedPokemonList.push(newPokemonList.splice(Math.floor(Math.random() * newPokemonList.length), 1));
		}
		const deletedPokemonListNames = deletedPokemonList.flatMap(val => val).map(mon => mon.name);
		// if there is a starter selected and the name list includes it, we want to remove it from that list and re-add it to the "safe" mon list
		if (selectedStarter !== '' && deletedPokemonListNames.includes(selectedStarter)) {
			const index = deletedPokemonListNames.indexOf(selectedStarter);
			if (index > -1) {
				deletedPokemonList.splice(index, 1);
				newPokemonList.unshift(Object.values(pokemonDetails).filter(mon => mon.name === selectedStarter)[0]);
			}
		}
		// redefining the deleted name list here to ensure we're not missing it.
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
    <div className="results">
				{snapped ? (
					<ScreenshotButton version={version}/>
				) : (
					<Button
						variant="contained"
						onClick={snap}
						disabled={snapped}
						id="snapButton"
					>
						<img id="gauntlet" src={snapImage} alt="The Infinity Gauntlet in a snapping pose." />
						<h3>REMOVE HALF</h3>
					</Button>

				)}
				
				<ToggleButtonGroup
					color="primary"
					value={detailLevel}
					exclusive
					onChange={handleDetailLevel}
					aria-label="detail level"
					id="detailGroup"
				>
					<ToggleButton value="basic" aria-label="basic">
						Basic
					</ToggleButton>
					<ToggleButton value="detailed" aria-label="detailed">
						Detailed
					</ToggleButton>
				</ToggleButtonGroup>
				<div id="output"></div>
				<div id="cardArea">
					{dataComplete && pokemonDetails?.map(pokemon => (
						<PokemonCard key={pokemon.name} pokemon={pokemon} detailLevel={detailLevel} version={version} animation={deletedPokemon.includes(pokemon.name) ? animation : 'none'} noFairyInGame={gamesWithoutFairy.includes(version)}/>
						))}
				</div>
		</div>

  );
}

export default Results;
