import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import './App.css';
import camelToTitle from './utils';
import versions, { expansions } from './gameData';
import Results from './Results';
import snaplockeLogo from './assets/snaplockeLogo.png';

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
    <div className="page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			{/* <h1>Snaplocke Generator</h1> */}
			<img src={snaplockeLogo} alt="Snaplocke Generator logo" style={{ width: '100%' }} />
			<div id="form" style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
				<InputLabel id="demo-simple-select-label">Version</InputLabel>
				<Select
					labelId="version"
					id="version"
					value={selectedVersion || ""}
					label="Age"
					onChange={handleChange}
					style={{ width: '25%' }}
				>
					{Object.entries(versions).map(([generationName, generationValue]) => generationValue.map(val => (<MenuItem key={val} value={val || ""}>{camelToTitle(val)}</MenuItem>)))}
				</Select>
				{generationsWithExpansions.includes(selectedVersion) && renderExpansionCheckboxes()}


				<div className="misc">
					<FormControlLabel control={<Checkbox />} label="Ban Legendaries?" value={noLegendaries} onChange={handleSetLegendaries} />
				</div>
				<Button
					variant="contained"
					disabled={selectedVersion === "" || submitted}
					type="submit"
					style={{ height: '100px', width: '100px' }}
					onClick={submit}
				>
				Generate
				</Button>
			</div>
			{submitted && (<Results submitted={submitted} version={selectedVersion} noLegendaries={noLegendaries} expansions={Object.entries(expansionsSelected).flatMap(([key, value]) => value ? key : null).filter(item => item)} />)}
		</div>

  );
}

export default App;
