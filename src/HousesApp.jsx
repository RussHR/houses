import React, { useEffect, useState } from 'react';
import { formatJsonForState } from './helpers/houses';
import Vendor from './components/Vendor';

import './main.css';

const HousesApp = () => {
	const [hasError, setError] = useState(false);
	const [vendors, setVendors] = useState({});
	const [sortMode, setSortMode] = useState('');

	/** house fetching functionality */
	const fetchHouses = () => {
		fetch('http://localhost:1337/houses')
			.then(response => response.json())
			.then(json => setVendors(formatJsonForState(json)))
			.catch(() => setError(true));
	};
	useEffect(() => {
		fetchHouses();
	}, []);

	/** sort mode setting functionality */
	const onChangeSortMode = ({ currentTarget: { value } }) => {
		setSortMode(value);
	};

	return (
		<>
			{hasError && <span>here is an error</span>}
			<span>houses are here!</span>
			<label htmlFor="sort-mode">Sort by:</label>
			<select id="sort-mode" onChange={onChangeSortMode}>
				<option value="">--</option>
				<option value="name">Name</option>
				<option value="price">Price</option>
				<option value="size">Size</option>
				<option value="id">ID</option>
			</select>
			{Object.entries(vendors).map(([vendorId, { displayName, logoThumb, houses }]) => (
				<Vendor
					key={vendorId}
					displayName={displayName}
					logoThumb={logoThumb}
					houses={houses}
					sortMode={sortMode}
				/>
			))}
		</>
	);
};

export default HousesApp;
