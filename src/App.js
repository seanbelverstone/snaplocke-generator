import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Modal, Select } from '@mui/material';
import './styles/App.css';
import toTitleCase from './utils';
import versions, { expansions, starters } from './gameData';
import Results from './Results';
import snaplockeLogo from './assets/snaplockeLogo.png';
import games from './assets/games';
import thanos from './assets/thanos.jpeg';

function App() {
	const [selectedVersion, setSelectedVersion] = useState("");
	const [versionRegion, setVersionRegion] = useState("");
	const [expansionsSelected, setExpansionsSelected] = useState({
		isleOfArmor: false,
		crownTundra: false,
		tealMask: false, // teal mask
		indigoDisk: false // indigo disk
	});
	const [noLegendaries, setNoLegendaries]  = useState(false);
	const [starterOption, setStarterOption] = useState("");
	const [selectedStarter, setSelectedStarter] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const generationsWithExpansions = [...versions.galar, ...versions.paldea];
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
	
	// Maybe have an option to either choose a starter/a starter is chosen randomly/two or all starters can be snapped
	// fix border addition moving other games, maybe add padding/margin

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

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
		width: '50%',
		height: '500px',
		overflowY: 'scroll',
		display: 'flex',
		flexDirection: 'column'
	};

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<img src={snaplockeLogo} alt="Snaplocke Generator logo" style={{ width: '100%' }} />
			<div id="intro" style={{  }}>
			<Button onClick={handleOpen} variant="contained">What is a Snaplocke?</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box id="modalBox" sx={style}>
					<Button onClick={handleClose} variant="contained" style={{ position: 'absolute', right: '3%' }}>Close</Button>
					<h3>What is a Snaplocke?</h3>
					<p>A snaplocke is a variation on a <a href="https://bulbapedia.bulbagarden.net/wiki/Nuzlocke_Challenge" target="_blank" rel="noreferrer">nuzlocke</a> in which half of a game's possible encounters are "snapped" as if Thanos had wiped them out of existence.</p>
					<img src={thanos} alt="Marvel Studio's Thanos snapping his fingers"/>
					<p> In reality, it means that the only pokemon left are considered eligible encounters. As far as I am aware, the nuzlocke variant appeared first in <a href="https://youtu.be/KU5WsWyqeDE?si=XjKOKbhxQ5uyQegl" target="_blank" rel="noreferrer">Flygon HG's excellent video</a>, where his chat voted on which Pokemon to remove. Without having a Twitch chat or large community to vote on the encounters, the next best option for someone else to try the format is to randomly remove them.</p>
					<h3>How to use the generator?</h3>
					<ul>
						<li>Choose a game from the list.</li>
						<li>Select some modifiers if you like, such as banning legendaries or the option to choose a starter.</li>
						<li>Click generate. This will list out all Pokemon available for that version.</li>
						<li>Snap Thanos' fingers! This will remove half of the available encounters from the list.</li>
					</ul>
					<p>And enjoy! I would recommend taking a screenshot of the page to keep your results safe for future reference.</p>
					<Button onClick={handleClose} variant="contained">Close</Button>
				</Box>
			</Modal>

			</div>
			<div id="form" style={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
				<div className="versionSelect" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
					{games.map(game => (
						<div className="versionCard" key={game.value} onClick={handleChange} value={game.value} style={{ display: 'flex', flexDirection: 'column', margin: '2px', justifyContent: 'center', alignItems: 'center', ...selectedVersion === game.value && { filter: "grayscale(0)", border: 'solid 2px gold', boxShadow: '0 0 5px 2.5px #fff, 0 0 10px 5px #f0f, 0 0 15px 7.5px #0ff' } }}>
							<img className="versionImage" src={game.src} alt={`The cover art for ${game.name}`}  value={game.value} style={{ maxWidth: '96px' }} />
							<span value={game.value} style={{ ...selectedVersion === game.value && { color: 'gold' } }}>{game.name}</span>
						</div>
					))}
				</div>

				{generationsWithExpansions.includes(selectedVersion) && renderExpansionCheckboxes()}


				{selectedVersion !== "" && (
					<>
						<div className="misc">
						<FormControlLabel control={<Checkbox />} label="Ban Legendaries?" value={noLegendaries} onChange={handleSetLegendaries} />
						{(selectedVersion !== 'letsGoPikachu' && selectedVersion !== 'letsGoEevee' && selectedVersion !== 'yellow') ? (<FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
							<InputLabel id="demo-simple-select-filled-label">Starter Options</InputLabel>
							<Select
								labelId="demo-simple-select-filled-label"
								id="demo-simple-select-filled"
								value={starterOption}
								onChange={handleStarterOptions}
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
								<InputLabel id="demo-simple-select-filled-label">Pick your starter</InputLabel>
								<Select
									labelId="demo-simple-select-filled-label"
									id="demo-simple-select-filled"
									value={selectedStarter}
									onChange={handleStarterSelect}
								>
									{getStarters()}
								</Select>
							</FormControl>
						)}
					</div>
					<Button
						variant="contained"
						disabled={selectedVersion === "" || (selectedVersion !== 'letsGoPikachu' && selectedVersion !== 'letsGoEevee' && selectedVersion !== 'yellow' && starterOption === "") || (starterOption === "chooseOne" && selectedStarter === "") || submitted}
						type="submit"
						style={{ height: '100px', width: '100px' }}
						onClick={submit}
					>
					Generate
					</Button>
				</>
				)}
			</div>
			{submitted && (<Results submitted={submitted} version={selectedVersion} versionRegion={versionRegion} noLegendaries={noLegendaries} selectedStarter={selectedStarter} expansionsSelected={Object.entries(expansionsSelected).flatMap(([key, value]) => value ? key : null).filter(item => item)} />)}
			<span>All images and information are obtained through <a href="https://pokeapi.co/docs/v2#info" target="blank" rel="noreferrer">PokeApi</a> and <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page" target="blank" rel="noreferrer">Bulbapedia</a>. All rights reserved.</span>
		</div>

  );
}

export default App;
