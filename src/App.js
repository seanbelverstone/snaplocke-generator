import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import './App.css';
import camelToTitle from './utils';

function App() {

	const [formData, setFormData] = useState({
		version: {
			genOne: {
				red: true,
				blue: false,
				yellow: false
			},
			genTwo: {
				gold: false,
				silver: false,
				crystal: false
			},
			genThree: {
				ruby: false,
				sapphire: false,
				emerald: false,
				fireRed: false,
				leafGreen: false
			},
			genFour: {
				diamond: false,
				pearl: false,
				platinum: false,
				heartgold: false,
				soulsilver: false
			},
			genFive: {
				black: false,
				white: false,
				blackTwo: false,
				whiteTwo: false
			},
			genSix: {
				x: false,
				y: false,
				omegaRuby: false,
				alphaSapphire: false
			},
			genSeven: {
				sun: false,
				moon: false,
				ultraSun: false,
				ultraMoon: false,
				letsGoPikachu: false,
				letsGoEevee: false
			},
			genEight: {
				sword: false,
				shield: false,
				expansions: {
					theIsleOfArmor: false,
					theCrownTundra: false,
				},
				brilliantDiamond: false,
				shiningPearl: false,
				legendsArceus: false
			},
			genNine: {
				scarlet: false,
				violet: false,
				expansions: {
					theTealMask: false,
					theIndigoDisk: false
				}
			}
		},
		noLegendaries: false
	});

	const getData = () => fetch('https://pokeapi.co/api/v2/version?limit=50')
		.then(response => response.json())
		.then(data => {
			return data;
		});
	
	getData();

	const generate = (event) => {
		event.preventDefault();
		// if all is selected, get all pokemon
		// else, get the generation's key and use that to 
	};

	const areSelectionsEmpty = () => {
		const flattenedFormData = Object.entries(formData.version);
		return !flattenedFormData.some(([key, value]) => Object.values(value).some(item => typeof item === 'boolean' && item))
	}

  return (
    <div className="page">
			<h1>Snaplocke Generator</h1>
			<div id="form" onSubmit={generate}>
				<p>Version</p>
				{areSelectionsEmpty() && <p className="error">At least one game must be selected.</p>}
				<form>
					<div className="genGroup">
						{Object.entries(formData.version).map(([generationName, generationValue]) => (
							<div key={generationName} className="generation">
								<p className="genTitle">{camelToTitle(generationName)}</p>
							{Object.entries(generationValue).map(([key, value]) => {
								if (key !== 'expansions') {
								  return (
										<FormControlLabel
											key={key}
											control={<Checkbox defaultChecked={key === 'red'} />}
											label={camelToTitle(key)}
											value={formData.version[generationName][value]}
											onChange={e => setFormData(
												{ ...formData, version: {
													...formData.version, [generationName]: {
														...formData.version[generationName], [key]: e.target.checked
													}
												}
											}
											)} />)
								}
								return (
									<div>
										<span>Include Expansions?</span>
										{Object.entries(value).map(([expName, expValue]) => {
										if (expName !== 'expansions') {
											return (
											<FormControlLabel
												key={expName}
												control={<Checkbox />}
												label={camelToTitle(expName)}
												value={formData.version[generationName].expansions[expName]}
												onChange={e => setFormData(
													{ ...formData, version: {
														...formData.version, [generationName]: {
															...formData.version[generationName], expansions: {
																...formData.version[generationName].expansions, [key]: e.target.checked
															}
														}
													}
												})} />
										)
								}
								return <React.Fragment />
							})}
									</div>
								)
							}
							)
							}
						</div>
					))}
					</div>
					<div className="misc">
						<FormControlLabel control={<Checkbox />} label="Ban Legendaries?" value={formData.noLegendaries} onChange={e => setFormData({ ...formData, noLegendaries: e.target.checked })} />
					</div>
					<Button
						variant="outlined"
						disabled={areSelectionsEmpty()}
						type="submit">Generate</Button>
				</form>
			</div>
		</div>

  );
}

export default App;
