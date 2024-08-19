import React, { useEffect, useState } from 'react';
import versions, { legendaries } from './gameData';
import { camelToHyphen } from './utils';

/* this page will list out the pokemon in different layouts:
 - basic
 		Just the pokemon names, typing and a sprite
 - detailed
 		includes everything above and
		base stats
		abilities
*/

function Results(props) {
	const { dexData, version, noLegendaries, expansions } = props;
	/* 
		only show final evos
		include pokemon that don't evolve from that game
		add/subtract version exclusives
		get pokemon details 
		display all
		animation of snap?
		fade out half
	*/

	useEffect(() => {

			fetch(`https://pokeapi.co/api/v2/pokedex?limit=50`)
			.then(evoResponse => evoResponse.json())
			.then(evoData => {
				console.log(evoData)
				// evoData.results.filter(line => )
				})
			// });
			// console.log(dexData);
	}, [dexData])

  return (
    <div className="results">
			<h2>Results here!</h2>
			{version === 'x' || version === 'y' || version === 'sun' || version === 'moon' || version === 'ultraSun' || version === 'ultraMoon' || expansions.length > 0 ?
				Object.entries(dexData).map(([key, value]) => value.map(val => <p>{val.pokemon_species.name}</p>))
			: dexData?.pokemon_entries?.map(pokemon => (
				<p>{pokemon.pokemon_species.name}</p>
				))
			}			
		</div>

  );
}

export default Results;
