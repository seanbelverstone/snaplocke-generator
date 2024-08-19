import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import './App.css';
import camelToTitle from './utils';
import versions, { expansions } from './gameData';
import Results from './Results';

function App() {

	const [selectedVersion, setSelectedVersion] = useState("");
	const [expansionsSelected, setExpansionsSelected] = useState({
		isleOfArmor: false,
		crownTundra: false,
		kitakami: false, // teal mask
		blueberry: false // indigo disk
	});
	const [noLegendaries, setNoLegendaries]  = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const generationsWithExpansions = [...versions.galar, ...versions.paldea];
	
	const renderExpansionCheckboxes = () => {
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
					<FormControlLabel key={dlc.name} control={<Checkbox checked={expansionsSelected[dlc.route] || false} />} label={camelToTitle(dlc.name)} value={expansionsSelected[dlc.route]} onChange={e => setExpansionsSelected({ ...expansionsSelected, [dlc.route]: e.target.checked })} />
				))}
				</div>
			)
		}
	}

	const handleChange = (e) => {
		setSubmitted(false);
		setSelectedVersion(e.target.value)
		setExpansionsSelected({
			isleOfArmor: false,
			crownTundra: false,
			kitakami: false,
			blueberry: false
		})
	}

	const handleSetLegendaries = (e) => {
		setSubmitted(false);
		setNoLegendaries(e.target.checked)
	}

	const submit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	}

  return (
    <div className="page">
			<h1>Snaplocke Generator</h1>
			<div id="form" onSubmit={submit}>
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
						<FormControlLabel control={<Checkbox />} label="Ban Legendaries?" value={noLegendaries} onChange={handleSetLegendaries} />
					</div>
					<Button
						variant="outlined"
						disabled={selectedVersion === ""}
						type="submit">Generate</Button>
				</form>
			</div>
			{submitted && (<Results submitted={submitted} version={selectedVersion} noLegendaries={noLegendaries} expansions={Object.entries(expansionsSelected).flatMap(([key, value]) => value ? key : null).filter(item => item)} />)}
		</div>

  );
}

export default App;
