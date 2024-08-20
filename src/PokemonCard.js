import React from 'react';
import camelToTitle from './utils';


function PokemonCard(props) {
	const { pokemon, animation } = props;

  return (
		<div className="card" id={pokemon.name} style={{ animation: animation }}>
			<img className="cardImage" style={{ maxWidth: '96px', maxHeight: '96px', imageRendering: 'pixelated' }} src={pokemon.data.sprites?.front_default || 'https://media1.tenor.com/m/Tya2Q6TPVXQAAAAC/slowpoke-thinking.gif'} alt={`The pokemon ${pokemon.name} in their default front sprite`}/>
			<p>{camelToTitle(pokemon.name)}</p>
		</div>

  );
}

export default PokemonCard;
