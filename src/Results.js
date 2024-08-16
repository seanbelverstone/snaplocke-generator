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
	console.log(legendaries);
	/* 
		only show final evos
		add/subtract version exclusives
		get pokemon details 
		display all
		animation of snap?
		fade out half
	*/




	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=3000`)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			fetch(`https://pokeapi.co/api/v2/evolution-chain/138`)
			.then(evoResponse => evoResponse.json())
			.then(evoData => {
				console.log(evoData)
			})
			
		});
	}, [])

  return (
    <div className="results">
			<h2>Results here!</h2>
			{dexData?.pokemon_entries?.map(pokemon => (
				<p>{pokemon.pokemon_species.name}</p>
			))}
		</div>

  );
}

export default Results;
