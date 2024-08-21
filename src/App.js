import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import './App.css';
import camelToTitle from './utils';
import versions, { expansions } from './gameData';
import Results from './Results';
import snaplockeLogo from './assets/snaplockeLogo.png';
import games from './assets/games';

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
		setSelectedVersion(e.target.getAttribute('value'))
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
			<img src={snaplockeLogo} alt="Snaplocke Generator logo" style={{ width: '100%' }} />
			<div id="form" style={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
				<div className="versionSelect" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
					{games.map(game => (
						<div className="versionCard" onClick={handleChange} value={game.value} style={{ display: 'flex', flexDirection: 'column', margin: '2px', justifyContent: 'center', alignItems: 'center', ...selectedVersion === game.value && { filter: "grayscale(0)", border: 'solid 2px gold', boxShadow: '0 0 5px 2.5px #fff, 0 0 10px 5px #f0f, 0 0 15px 7.5px #0ff' } }}>
							<img className="versionImage" src={game.src} alt={`The cover art for ${game.name}`}  value={game.value} style={{ maxWidth: '96px' }} />
							<span value={game.value} style={{ ...selectedVersion === game.value && { color: 'gold' } }}>{game.name}</span>
						</div>
					))}
				</div>

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
