import { useState } from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import './App.css';

function App() {

	const [formData, setFormData] = useState({
		generations: {
			genOne: true,
			genTwo: false,
			genThree: false,
			genFour: false,
			genFive: false,
			genSix: false,
			genSeven: false,
			genEight: false,
			genNine: false,
			all: false
		},
		noLegendaries: false
	});

	const getData = () => fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
		.then(response => response.json())
		.then(data => {
			return data;
		});
	
	getData();

	const generate = () => {
		// console.log(form);
	};

	const generationsEmpty = !(Object.values(formData.generations).some(datum => datum));

  return (
    <div className="page">
			<h1>Snaplocke Generator</h1>
			<div id="form">
				<p>Generation</p>
				<form>
					<div className="genGroup">
						<div>
							<FormControlLabel control={<Checkbox defaultChecked />} label="Gen 1" value={formData.genOne} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, genOne: e.target.checked } })} />
							<FormControlLabel control={<Checkbox />} label="Gen 2"  value={formData.genTwo} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, genTwo: e.target.checked } })} />
							<FormControlLabel control={<Checkbox />} label="Gen 3"  value={formData.genThree} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, genThree: e.target.checked } })} />
						</div>
						<div>
							<FormControlLabel control={<Checkbox />} label="Gen 4"  value={formData.genFour} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, genFour: e.target.checked } })} />
							<FormControlLabel control={<Checkbox />} label="Gen 5"  value={formData.genFive} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, genFive: e.target.checked } })} />
							<FormControlLabel control={<Checkbox />} label="Gen 6"  value={formData.genSix} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, genSix: e.target.checked } })} />
						</div>
						<div>
							<FormControlLabel control={<Checkbox />} label="Gen 7"  value={formData.genSeven} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, genSeven: e.target.checked } })} />
							<FormControlLabel control={<Checkbox />} label="Gen 8"  value={formData.genEight} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, genEight: e.target.checked } })} />
							<FormControlLabel control={<Checkbox />} label="Gen 9"  value={formData.genNine} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, genNine: e.target.checked } })} />
						</div>
						<div>
							<FormControlLabel control={<Checkbox />} label="All"  value={formData.all} onChange={e => setFormData({ ...formData, generations: { ...formData.generations, all: e.target.checked } })} />
						</div>
						{generationsEmpty && <p className="error">At least one generation must be selected.</p>}
					</div>
					<div className="misc">
						<FormControlLabel control={<Checkbox />} label="Ban Legendaries?" value={formData.noLegendaries} onChange={e => setFormData({ ...formData, noLegendaries: e.target.checked })} />
					</div>
				</form>
				<Button variant="outlined" disabled={generationsEmpty} onClick={generate}>Generate</Button>
			</div>
		</div>

  );
}

export default App;
