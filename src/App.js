import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import './App.css';
import camelToTitle from './utils';
import versions, { expansions } from './versions';

function App() {

	const [selectedVersion, setSelectedVersion] = useState("");
	const [expansionsSelected, setExpansionsSelected] = useState({
		theIsleOfArmor: false,
		theCrownTundra: false,
		theTealMask: false,
		theIndigoDisk: false
	});
	const [noLegendaries, setNoLegendaries]  = useState(false);
	const generationsWithExpansions = [...versions.genEight, ...versions.genNine];

	const getData = () => fetch('https://pokeapi.co/api/v2/version?limit=50')
		.then(response => response.json())
		.then(data => {
			return data;
		});
	
	getData();

	// const areSelectionsEmpty = () => {
	// 	const flattenedFormData = Object.entries(formData.version);
	// 	return !flattenedFormData.some(([key, value]) => Object.values(value).some(item => typeof item === 'boolean' && item))
	// }

	// const checkExpansion = (generation) => {
	// 	if (typeof generation?.sword !== 'undefined') {
	// 		return generation?.sword || generation?.shield
	// 	}
	// 	if (typeof generation?.scarlet !== 'undefined') {
	// 		return generation?.scarlet || generation?.violet;
	// 	}
	// 	return true;
	// }\

	const renderExpansionCheckboxes = () => {
		console.log(expansionsSelected)
		if (selectedVersion === 'sword' || selectedVersion === 'shield') {
			return (
				<div>
				<p>Include Expansions?</p>
				{expansions.genEight.map(dlc => {
					console.log('dlc: ', dlc)
					return (
					<FormControlLabel control={<Checkbox checked={expansionsSelected[dlc] || false} />} label={camelToTitle(dlc)} value={expansionsSelected[dlc]} onChange={e => setExpansionsSelected({ ...expansionsSelected, [dlc]: e.target.checked })} />
				)})}
				</div>
			)
		}
		if (selectedVersion === 'scarlet' || selectedVersion === 'violet') {
			return (
				<div>
				<p>Include Expansions?</p>
				{expansions.genNine.map(dlc => (
					<FormControlLabel control={<Checkbox checked={expansionsSelected[dlc] || false} />} label={camelToTitle(dlc)} value={expansionsSelected[dlc]} onChange={e => setExpansionsSelected({ ...expansionsSelected, [dlc]: e.target.checked })} />
				))}
				</div>
			)
		}
	}

	const handleChange = (e) => {
		setSelectedVersion(e.target.value)
		setExpansionsSelected({
			theIsleOfArmor: false,
			theCrownTundra: false,
			theTealMask: false,
			theIndigoDisk: false
		})
	}

	const generate = (event) => {
		event.preventDefault();
		// if all is selected, get all pokemon from those games
	}; 

  return (
    <div className="page">
			<h1>Snaplocke Generator</h1>
			<div id="form" onSubmit={generate}>
				<form>
					<InputLabel id="demo-simple-select-label">Version</InputLabel>
					<Select
						labelId="version"
						id="version"
						value={selectedVersion || ""}
						label="Age"
						onChange={handleChange}
					>
						{Object.entries(versions).map(([generationName, generationValue]) => generationValue.map(val => (<MenuItem key={val} value={val || ""}>{camelToTitle(val)}</MenuItem>)))}
					</Select>
					{generationsWithExpansions.includes(selectedVersion) && renderExpansionCheckboxes()}


					<div className="misc">
						<FormControlLabel control={<Checkbox />} label="Ban Legendaries?" value={noLegendaries} onChange={e => setNoLegendaries(e.target.checked)} />
					</div>
					<Button
						variant="outlined"
						// disabled={areSelectionsEmpty()}
						type="submit">Generate</Button>
				</form>
			</div>
		</div>

  );
}

export default App;
