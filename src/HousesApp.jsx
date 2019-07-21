import React, { useEffect, useState } from 'react';
import { formatJsonForState } from './helpers/houses';
import Vendor from './components/Vendor';

import './main.css';

const HousesApp = () => {
	const [hasError, setError] = useState(false);
	const [vendors, setVendors] = useState({});

	const fetchHouses = () => {
		fetch('http://localhost:1337/houses')
			.then(response => response.json())
			.then(json => setVendors(formatJsonForState(json)))
			.catch(() => setError(true));
	};

	useEffect(() => {
		fetchHouses();
	}, []);

	return (
		<>
			{hasError && <span>here is an error</span>}
			<span>houses are here!</span>
			{Object.entries(vendors).map(([vendorId, vendorData]) => (
				<Vendor
					key={vendorId}
					displayName={vendorData.displayName}
					logoThumb={vendorData.logoThumb}
					houses={vendorData.houses}
				/>
			))}
		</>
	);
};

export default HousesApp;
