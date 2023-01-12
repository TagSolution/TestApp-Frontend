import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [apiResponse, setApiResponse] = useState(null);
	const [images, setImages] = useState([]);

	// API:
	useEffect(() => {}, []);

	// Functions:
	function onImageChange(e) {
		setImages([...e.target.files]);
	}
	function handleSubmit() {
		const formData = new FormData();
		formData.append("file", images[0]);
		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};
		axios
			.post(
				"https://testapp-tag.herokuapp.com/storage/upload",
				formData,
				config
			)
			.then((res) => {
				console.log(res);
				const imageUrl = res.data.imageUrl;
				setApiResponse(imageUrl);
			})
			.catch((e) => console.log(e));
	}

	return (
		<div className="App">
			<h1 className="title">TestApp - Frontend!</h1>

			<div className="aws-container">
				<div className="aws-input">
					<input
						type="file"
						name="inputImage"
						id="inputImg"
						onChange={onImageChange}
					/>
					<button type="submit" onClick={handleSubmit}>
						Send
					</button>
				</div>
				{apiResponse ? (
					<img src={apiResponse} alt="SavedImage" />
				) : (
					"Suba una imagen!"
				)}
			</div>
		</div>
	);
}

export default App;
