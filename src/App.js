import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import './App.css';
import camelToTitle, { camelToHyphen } from './utils';
import versions, { expansions } from './versions';
import Results from './Results';

function App() {

	const [selectedVersion, setSelectedVersion] = useState("");
	const [expansionsSelected, setExpansionsSelected] = useState({
		theIsleOfArmor: false,
		theCrownTundra: false,
		theTealMask: false,
		theIndigoDisk: false
	});
	const [noLegendaries, setNoLegendaries]  = useState(false);
	const [returnData, setReturnData] = useState({});
	const generationsWithExpansions = [...versions.galar, ...versions.paldea];
	
	const renderExpansionCheckboxes = () => {
		console.log(expansionsSelected)
		if (selectedVersion === 'sword' || selectedVersion === 'shield') {
			return (
				<div>
				<p>Include Expansions?</p>
				{expansions.genEight.map(dlc => {
					return (
					<FormControlLabel key={dlc} control={<Checkbox checked={expansionsSelected[dlc] || false} />} label={camelToTitle(dlc)} value={expansionsSelected[dlc]} onChange={e => setExpansionsSelected({ ...expansionsSelected, [dlc]: e.target.checked })} />
				)})}
				</div>
			)
		}
		if (selectedVersion === 'scarlet' || selectedVersion === 'violet') {
			return (
				<div>
				<p>Include Expansions?</p>
				{expansions.genNine.map(dlc => (
					<FormControlLabel key={dlc} control={<Checkbox checked={expansionsSelected[dlc] || false} />} label={camelToTitle(dlc)} value={expansionsSelected[dlc]} onChange={e => setExpansionsSelected({ ...expansionsSelected, [dlc]: e.target.checked })} />
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
		const regionName = Object.entries(versions).find(([versionName, versionData]) => versionData.includes(selectedVersion))[0];
		fetch(`https://pokeapi.co/api/v2/pokedex/${camelToHyphen(regionName)}?limit=50`)
			.then(response => response.json())
			.then(data => {
				setReturnData(data);
				console.log(data);
			});
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
						disabled={selectedVersion === ""}
						type="submit">Generate</Button>
				</form>
			</div>
			{Object.keys(returnData).length !== 0 && (<Results returnData={returnData} version={selectedVersion} noLegendaries={noLegendaries} expansions={expansionsSelected} />)}
		</div>

  );
}

export default App;
