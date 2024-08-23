import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Modal, Select } from '@mui/material';
import './styles/App.css';
import toTitleCase from './utils';
import versions, { expansions, starters } from './gameData';
import Results from './Results';
import snaplockeLogo from './assets/snaplockeLogo.png';
import games from './assets/games';
import thanos from './assets/thanos.jpeg';
import ReactGA from 'react-ga4';

function App() {
	const [selectedVersion, setSelectedVersion] = useState("");
	const [versionRegion, setVersionRegion] = useState("");
	const [expansionsSelected, setExpansionsSelected] = useState({
		isleOfArmor: false,
		crownTundra: false,
		tealMask: false,
		indigoDisk: false
	});
	const [noLegendaries, setNoLegendaries]  = useState(false);
	const [starterOption, setStarterOption] = useState("");
	const [selectedStarter, setSelectedStarter] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const generationsWithExpansions = [...versions.galar, ...versions.paldea];
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	ReactGA.send({
		hitType: 'pageview'
	});
	
	// TODO: fix border addition moving other games, maybe add padding/margin

	const renderExpansionCheckboxes = () => {
		return (
			<div>
			<p>Include Expansions?</p>
			{expansions[selectedVersion === 'sword' || selectedVersion === 'shield' ? 'genEight' : 'genNine'].map(dlc => {
				return (
				<FormControlLabel key={dlc} control={<Checkbox checked={expansionsSelected[dlc] || false} />} label={toTitleCase(dlc)} value={expansionsSelected[dlc]} onChange={e => setExpansionsSelected({ ...expansionsSelected, [dlc]: e.target.checked })} />
			)})}
			</div>
		)
	}

	const handleChange = (e) => {
		setSubmitted(false);
		setStarterOption("");
		setSelectedVersion(e.target.getAttribute('value'))
		setSelectedStarter("");
		setVersionRegion(Object.entries(versions).filter(([name, array]) => array.includes(e.target.getAttribute('value')))[0][0])
		setExpansionsSelected({
			isleOfArmor: false,
			crownTundra: false,
			tealMask: false,
			indigoDisk: false
		})
	}

	const handleSetLegendaries = (e) => {
		setSubmitted(false);
		setNoLegendaries(e.target.checked)
	}

	const handleStarterOptions = (e) => {
		setSubmitted(false);
		setSelectedStarter('');
		setStarterOption(e.target.value);
	}

	const handleStarterSelect = (e) => {
		setSubmitted(false);
		setSelectedStarter(e.target.value);
	}

	const getStarters = () => {
		return starters[versionRegion].map(starter => (
			<MenuItem key={starter} value={starter}>{toTitleCase(starter)}</MenuItem>
		))
	}

	const submit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	}

  return (
    <div className="page">
			<img id="snaplockeLogo" src={snaplockeLogo} alt="Snaplocke Generator logo" />
			<div id="intro">
			<Button id="introModalButton" onClick={handleOpen} variant="contained">What is a Snaplocke?</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box id="modalBox" sx={{ boxShadow: 24, p: 4 }}>
					<Button className="modalCloseButton" onClick={handleClose} variant="contained">Close</Button>
					<div id="modalContent">
						<h3>What is a Snaplocke?</h3>
						<p>A snaplocke is a variation on a <a href="https://bulbapedia.bulbagarden.net/wiki/Nuzlocke_Challenge" target="_blank" rel="noreferrer">nuzlocke</a> in which half of a game's possible encounters are "snapped" as if Thanos had wiped them out of existence.</p>
						<img id="thanos" src={thanos} alt="Marvel Studio's Thanos snapping his fingers"/>
						<p> In reality, it means that the only pokemon left are considered eligible encounters. As far as I am aware, the nuzlocke variant appeared first in <a href="https://youtu.be/KU5WsWyqeDE?si=XjKOKbhxQ5uyQegl" target="_blank" rel="noreferrer">Flygon HG's excellent video</a>, where his chat voted on which Pokemon to remove. Without having a Twitch chat or large community to vote on the encounters, the next best option for someone else to try the format is to randomly remove them.</p>
						<h3>How to use the generator?</h3>
						<ul>
							<li>Choose a game from the list.</li>
							<li>Select some modifiers if you like, such as banning legendaries or the option to choose a starter.</li>
							<li>Click generate. This will list out all Pokemon available for that version.</li>
							<li>Snap Thanos' fingers! This will remove half of the available encounters from the list.</li>
						</ul>
						<p>And enjoy! I would recommend using the <b>Download results screenshot</b> button that appears post-snap, to keep your results safe for future reference.</p>
					</div>
				</Box>
			</Modal>

			</div>
			<div id="form">
				<div className="versionSelect">
					{games.map(game => (
						<div className="versionCard" key={game.value} onClick={handleChange} value={game.value} style={{ ...selectedVersion === game.value && { filter: "grayscale(0)", border: 'solid 2px gold', boxShadow: '0 0 5px 2.5px #fff, 0 0 10px 5px #f0f, 0 0 15px 7.5px #0ff' } }}>
							<img className="versionImage" src={game.src} alt={`The cover art for ${game.name}`}  value={game.value} />
							<span className="versionName" value={game.value} style={{ ...selectedVersion === game.value && { color: 'gold' } }}>{game.name}</span>
						</div>
					))}
				</div>

				{generationsWithExpansions.includes(selectedVersion) && renderExpansionCheckboxes()}


				{selectedVersion !== "" && (
					<>
						<div className="misc">
						<FormControlLabel className="banLegendariesCheckbox" control={<Checkbox />} label="Ban Legendaries?" value={noLegendaries} onChange={handleSetLegendaries} />
						{(selectedVersion !== 'letsGoPikachu' && selectedVersion !== 'letsGoEevee' && selectedVersion !== 'yellow') ? (<FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
							<InputLabel id="demo-simple-select-filled-label">Starter Options</InputLabel>
							<Select
								labelId="starterOptions"
								id="starterOptions"
								value={starterOption}
								onChange={handleStarterOptions}
								className="starterDropdown"
							>
								<MenuItem value="noPreference">No preference</MenuItem>
								<MenuItem value="leaveOne" disabled>Leave only 1</MenuItem>
								<MenuItem value="leaveOneOrZero" disabled>Leave 1 or 0</MenuItem>
								{/* TODO: remove disabled checks and implement functionality */}
								<MenuItem value="chooseOne">Choose one</MenuItem>
							</Select>
						</FormControl>) : (
							<p><i>Starter options are not available for Yellow, Let's Go, Pikachu! or Let's Go, Eevee!</i></p>
						)}
						{(starterOption === 'chooseOne' && selectedVersion !== "" && (selectedVersion !== 'letsGoPikachu' || selectedVersion !== 'letsGoEevee' || selectedVersion !== 'yellow')) && (
							<FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
								<InputLabel id="starterSelectLabel">Pick your starter</InputLabel>
								<Select
									labelId="starterSelect"
									id="starterSelect"
									value={selectedStarter}
									onChange={handleStarterSelect}
									className="starterDropdown"
								>
									{getStarters()}
								</Select>
							</FormControl>
						)}
					</div>
					{!submitted && (<Button
						className="generateButton"
						variant="contained"
						disabled={selectedVersion === "" || (selectedVersion !== 'letsGoPikachu' && selectedVersion !== 'letsGoEevee' && selectedVersion !== 'yellow' && starterOption === "") || (starterOption === "chooseOne" && selectedStarter === "")}
						type="submit"
						onClick={submit}
					>
					Generate
					</Button>)}
				</>
				)}
			</div>
			{submitted && (<Results submitted={submitted} version={selectedVersion} versionRegion={versionRegion} noLegendaries={noLegendaries} selectedStarter={selectedStarter} expansionsSelected={Object.entries(expansionsSelected).flatMap(([key, value]) => value ? key : null).filter(item => item)} />)}
			<span id="sourceDisclaimer">All images and information are obtained through <a href="https://pokeapi.co/docs/v2#info" target="blank" rel="noreferrer">PokeApi</a> and <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page" target="blank" rel="noreferrer">Bulbapedia</a>. All rights reserved.</span>
		</div>

  );
}

export default App;
