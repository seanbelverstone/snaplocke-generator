import React, { useEffect, useState } from 'react';
import versions from './versions';
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
	const { returnData, version, noLegendaries, expansions } = props;
	
	// need to add/subtract version exclusives
	/* now that we have all of the pokemon in the regional dexes of these games
	we'll need to pare it down with making sure to only include single stage
	or fully evolved pokemon. That will reduce the number quite a bit and make
	the snap more effective
	*/




	// useEffect(() => {
	// 	fetch(`https://pokeapi.co/api/v2/evolution-chain?limit=3000`)
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		console.log(data);
	// 	});
	// }, [])
	console.log(returnData)

  return (
    <div className="results">
			Results here!
			{returnData?.pokemon_entries?.map(pokemon => (
				<p>{pokemon.pokemon_species.name}</p>
			))}
		</div>

  );
}

export default Results;
