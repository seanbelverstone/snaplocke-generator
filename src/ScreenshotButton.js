import React, { useState } from "react";
import html2canvas from "html2canvas";
import { Button } from "@mui/material";
import toTitleCase from "./utils";

const ScreenshotButton = (props) => {
	const { version } = props;
	const [disabled, setDisabled] = useState(true);

	setTimeout(() => {
		setDisabled(false)
	}, 2500)

	const screenshot = () => {
		let div = document.getElementById('cardArea');

		html2canvas(div, {
			allowTaint : true,
			scale: 2,
			useCORS: true
		}).then(
				function (canvas) {
					const a = document.createElement('a');
					a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
					a.download = `pokemon${toTitleCase(version).split(" ").join("")}SnappedList.jpg`;
					a.click();
				})
	}

	return (
		<Button variant="contained" color="success" disabled={disabled} onClick={screenshot} style={{ width: '100%', marginBottom: '30px', boxShadow: '0 0 5px 2.5px black' }}>Save results</Button>
	)
}

export default ScreenshotButton;