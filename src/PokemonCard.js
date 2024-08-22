import React from 'react';
import toTitleCase from './utils';
import types from './assets/types/index.js';
import './styles/PokemonCard.css';


function PokemonCard(props) {
	const { pokemon, detailLevel, animation, noFairyInGame } = props;
	const irregularNames = ['meowstic-male', 'basculin-red-striped', 'aegislash-shield', 'wormadam-plant', 'gourgeist-average', 'giratina-altered', 'darmanitan-standard', 'tornadus-incarnate', 'landorus-incarnate', 'thundurus-incarnate', 'zygarde-50', 'deoxys-normal', 'oricorio-baile', 'wishiwashi-solo', 'lycanroc-midday', 'mimikyu-disguised', 'minior-red-meteor', 'morpeko-full-belly', 'indeedee-male', 'toxtricity-amped', 'eiscue-ice', 'basculegion-male', 'shaymin-land', 'enamorus-incarnate', 'urshifu-single-strike'];

	const renderTypes = () => {
		if (pokemon.data.types.length > 1) {
			if (noFairyInGame) {
				return (
					<>
						<img style={{ maxWidth: '70px'}} src={types[pokemon.data.types[0].type.name === 'fairy' ? 'normal' : pokemon.data.types[0].type.name]} alt={`A representation of the pokemon type ${pokemon.data.types[0].type.name}`} />
						{(pokemon.data.types[1].type.name !== 'fairy') ? (<img style={{ maxWidth: '70px'}} src={types[pokemon.data.types[1].type.name]} alt={`A representation of the pokemon type ${pokemon.data.types[1].type.name}`} />) : (<div style={{ height: '15px' }}></div>)}
					</>
				)
			} else {
				return (
					<>
					<img style={{ maxWidth: '70px'}} src={types[pokemon.data.types[0].type.name]} alt={`A representation of the pokemon type ${pokemon.data.types[0].type.name}`} />
					<img style={{ maxWidth: '70px'}} src={types[pokemon.data.types[1].type.name]} alt={`A representation of the pokemon type ${pokemon.data.types[1].type.name}`} />
				</>
				)
			}
		} else {
			return (
			<>
				<img style={{ maxWidth: '70px'}} src={types[pokemon.data.types[0].type.name === 'fairy' && noFairyInGame ? 'normal' : pokemon.data.types[0].type.name]} alt={`A representation of the pokemon type ${pokemon.data.types[0].type.name}`} />
				<div style={{ height: '15px' }}></div>
			</>
			)
		}
	}

  return (
		<>
		{/* Basic view */}
		{detailLevel === 'basic' ? (
			<div className="cardBasic" id={pokemon.name} style={{ animation: animation }}> {/* might change the color here */}
				<img className="cardImage" src={pokemon.data.sprites?.front_default || 'https://media1.tenor.com/m/Tya2Q6TPVXQAAAAC/slowpoke-thinking.gif'} alt={`The pokemon ${pokemon.name} in their default front sprite`}/>
				<p>{toTitleCase(irregularNames.includes(pokemon.name) ? pokemon.name.split('-')[0] : pokemon.name)}</p>
			</div>
		) : (
			// Detailed view
			<div className="cardDetailed" id={pokemon.name} style={{ animation: animation }}> {/* might change the color here */}
			<div className="imageAndType">
				<img className="cardImage" src={pokemon.data.sprites?.front_default || 'https://media1.tenor.com/m/Tya2Q6TPVXQAAAAC/slowpoke-thinking.gif'} alt={`The pokemon ${pokemon.name} in their default front sprite`}/>
				<div className="typesSection">
					{renderTypes()}
				</div>
			</div>
			<section>
				<span className="noto-sans-bold">{toTitleCase(irregularNames.includes(pokemon.name) ? pokemon.name.split('-')[0] : pokemon.name)}</span>
				<table>
					<tbody>
						<tr>
							<td>Base Stats</td>
						</tr>
						{pokemon.data.stats.map(stat => (
							<tr key={stat.stat.name}>
								<td>{`${toTitleCase(stat.stat.name)}: ${stat.base_stat}`}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
		)}
		</>
  );
}

export default PokemonCard;
