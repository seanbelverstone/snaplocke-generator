import React, { useEffect, useState } from 'react';
import { gamesWithoutFairy, legendaries, pokemonPerVersion, starters } from './gameData';
import { Button, Switch, ToggleButton, ToggleButtonGroup } from '@mui/material';
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
	const { submitted, version, versionRegion, noLegendaries, twoPlayerMode, selectedStarter, playerTwoStarter, expansionsSelected } = props;
	// eslint-disable-next-line no-unused-vars
	const [pokemon, setPokemon] = useState([]);
	const [pokemonDetails, setPokemonDetails] = useState([]);
	const [playerTwoPokemonDetails, setPlayerTwoPokemonDetails] = useState([]);
	const [dataComplete, setDataComplete] = useState(false);
	const [deletedPokemon, setDeletedPokemon] = useState([]);
	const [animation, setAnimation] = useState('none');
	const [snapped, setSnapped] = useState(false);
	const [detailLevel, setDetailLevel] = useState('basic');
	const [playerTwoView, setPlayerTwoView] = useState(false);

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
		let finalPokemonList = pokemonListWithStarters();
		if (twoPlayerMode && playerTwoStarter !== '') {
			finalPokemonList = [playerTwoStarter, ...finalPokemonList];
		}
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
		for (let i = newPokemonList.length - 1; i >= (Math.ceil(pokemonDetails.length / 2)); i--) {
			deletedPokemonList.push(newPokemonList.splice(Math.floor(Math.random() * newPokemonList.length), 1));
		}
		const mainPokemonListNames = newPokemonList.flatMap(val => val).map(mon => mon.name);
		const deletedPokemonListNames = deletedPokemonList.flatMap(val => val).map(mon => mon.name);
		// if there is a starter selected and the name list includes it, we want to remove it from that list and re-add it to the "safe" mon list
		if (selectedStarter !== '' && deletedPokemonListNames.includes(selectedStarter)) {
			const index = deletedPokemonListNames.indexOf(selectedStarter);
			if (index > -1) {
				deletedPokemonList.splice(index, 1);
				newPokemonList.unshift(Object.values(pokemonDetails).filter(mon => mon.name === selectedStarter)[0]);
			}
		}
		// Sorting the deleted pokemon
		const sortedDeletedPokemonList = deletedPokemonList.flatMap(val => val).sort((a, b) => pokemonDetails.indexOf(a) - pokemonDetails.indexOf(b));
		// if player two's starter is in list 1, then we want to make sure it's in the correct list
		if (twoPlayerMode && playerTwoStarter !== '' && mainPokemonListNames.includes(playerTwoStarter)) {
			const index = mainPokemonListNames.indexOf(playerTwoStarter);
			if (index > -1) {
				newPokemonList.splice(index, 1);
				sortedDeletedPokemonList.unshift(Object.values(pokemonDetails).filter(mon => mon.name === playerTwoStarter)[0]);
			}
		}
		// redefining the deleted name list here to ensure we're not missing it.
		setDeletedPokemon(sortedDeletedPokemonList.map(mon => mon.name));
		setAnimation('fade 2s forwards');
		setSnapped(true);
		setTimeout(() => {
			setPokemonDetails(newPokemonList);
			twoPlayerMode && setPlayerTwoPokemonDetails(sortedDeletedPokemonList);
			setAnimation('none');
		}, 2000)

	};

	const handleDetailLevel = (event, value) => {
		if (value !== null) {
			setDetailLevel(value);
		}
	}

	const handlePlayerSwitch = (event, val) => {
		setPlayerTwoView(val);
	}

  return (
    <div className="results">
				{snapped ? (
					<ScreenshotButton version={version} detailLevel={detailLevel} />
				) : (
					<Button
						variant="contained"
						onClick={snap}
						disabled={snapped}
						id="snapButton"
					>
						<img id="gauntlet" src={snapImage} alt="The Infinity Gauntlet in a snapping pose." />
						<h3 id="snapButtonText">REMOVE HALF</h3>
					</Button>

				)}
				{dataComplete && playerTwoPokemonDetails.length > 0 && (
					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<h3>Player 1</h3>
						<Switch onChange={handlePlayerSwitch} />
						<h3>Player 2</h3>
					</div>
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
					{dataComplete && (playerTwoView ? playerTwoPokemonDetails : pokemonDetails)?.map(pokemon => (
						<PokemonCard key={pokemon.name} pokemon={pokemon} detailLevel={detailLevel} version={version} animation={deletedPokemon.includes(pokemon.name) ? animation : 'none'} noFairyInGame={gamesWithoutFairy.includes(version)} playerTwoView={playerTwoView}/>
						))}
				</div>
		</div>

  );
}

export default Results;
