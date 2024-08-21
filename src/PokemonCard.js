import React from 'react';
import camelToTitle from './utils';


function PokemonCard(props) {
	const { pokemon, animation } = props;
	const irregularNames = ['meowstic-male', 'basculin-red-striped', 'aegislash-shield', 'wormadam-plant', 'gourgeist-average', 'giratina-altered', 'darmanitan-standard', 'tornadus-incarnate', 'landorus-incarnate', 'thundurus-incarnate', 'zygarde-50', 'deoxys-normal', 'oricorio-baile', 'wishiwashi-solo', 'lycanroc-midday', 'mimikyu-disguised', 'minior-red-meteor', 'morpeko-full-belly', 'indeedee-male', 'toxtricity-amped', 'eiscue-ice']

  return (
		<div className="card" id={pokemon.name} style={{ animation: animation, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue', margin: '2px', borderRadius: '5%' }}> {/* might change the color here */}
			<img className="cardImage" style={{ maxWidth: '96px', maxHeight: '96px', imageRendering: 'pixelated' }} src={pokemon.data.sprites?.front_default || 'https://media1.tenor.com/m/Tya2Q6TPVXQAAAAC/slowpoke-thinking.gif'} alt={`The pokemon ${pokemon.name} in their default front sprite`}/>
			<p>{camelToTitle(irregularNames.includes(pokemon.name) ? pokemon.name.split('-')[0] : pokemon.name)}</p>
		</div>

  );
}

export default PokemonCard;
