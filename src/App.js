import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [apiResponse, setApiResponse] = useState(null);

	// Fetch API:
	useEffect(() => {
		axios
			.get("http://ec2-52-91-153-74.compute-1.amazonaws.com:8080/test/hola")
			.then((res) => {
				const response = res.data;
				setApiResponse(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="App">
			<h1>TestApp - Frontend!</h1>
			<h2>Api Dice: {apiResponse}</h2>
		</div>
	);
}

export default App;
