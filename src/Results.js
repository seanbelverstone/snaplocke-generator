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
		display all
		animation of snap?
		fade out half
	*/

	useEffect(() => {
		setDataComplete(false);
		getSprites();
	}, [submitted])

	const getSprites = () => {
		const pokemonList = noLegendaries ? pokemonPerVersion[version] : [...pokemonPerVersion[version], ...legendaries[version]];
		setPokemon(pokemonList)
		const spriteObj = {};
		const spritePromise = new Promise((resolve, reject) => {
			pokemonList.forEach(name => {
				fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
					.then(response => response.json())
					.then(data => {
						spriteObj[name] = data;
						resolve(spriteObj);
					});
				})
			})
			Promise.resolve(spritePromise).then(async value => {
				setPokemonDetails(value)
				setDataComplete(true);
		});
	}

  return (
    <div className="results">
			<h2>Results here!</h2>
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
				{dataComplete && pokemon.map(name => (
					<div id="card" key={name}>
						<img style={{ maxWidth: '96px', maxHeight: '96px' }} src={pokemonDetails[name]?.sprites?.front_default || 'https://media1.tenor.com/m/Tya2Q6TPVXQAAAAC/slowpoke-thinking.gif'} alt={`The pokemon ${name} in their default front sprite`}/>
						<p>{camelToTitle(name)}</p>
					</div>
					))}
			</div>
		</div>

  );
}

export default Results;
