import React, { useEffect, useState } from 'react';
import './main.css';

const HousesApp = () => {
	const [hasError, setError] = useState(false);
	const [houses, setHouses] = useState({});

	const fetchHouses = () => {
		fetch('http://localhost:1337/houses')
			.then(response => response.json())
			.then(json => setHouses(json))
			.catch(() => setError(true));
	};

	useEffect(() => {
		fetchHouses();
	}, []);

	return (
		<>
			{hasError && <span>here is an error</span>}
			<span>houses are here!</span>
			<p>{JSON.stringify(houses)}</p>
		</>
	);
};

export default HousesApp;
