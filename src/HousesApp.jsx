import React, { useEffect, useState } from 'react';
import { formatJsonForState } from './helpers/houses';
import Vendor from './components/Vendor';

import './main.css';

const HousesApp = () => {
	const [hasError, setError] = useState(false);
	const [vendors, setVendors] = useState({});
	const [sortMode, setSortMode] = useState('');
	const [ascendingOrder, setAscendingOrder] = useState(true);
	const [pricesToEdit, setPricesToEdit] = useState({});

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

	/** sorting functionality */
	const onChangeSortMode = ({ currentTarget: { value } }) => {
		setSortMode(value);
	};
	const onChangeAscendingOrder = ({ currentTarget: { value } }) => {
		setAscendingOrder(value === 'ascending');
	};

	/** price editing functionality */
	const handleHousePriceChange = (id, price) => {
		const newPricesToEdit = { ...pricesToEdit };
		newPricesToEdit[id] = price;
		setPricesToEdit(newPricesToEdit);
	};
	const cancelEditPrice = (id) => {
		const newPricesToEdit = { ...pricesToEdit };
		delete newPricesToEdit[id];
		setPricesToEdit(newPricesToEdit);
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
			<select aria-label="Toggle ascending or descending order." onChange={onChangeAscendingOrder}>
				<option value="ascending">Ascending</option>
				<option value="descending">Descending</option>
			</select>

			{Object.entries(vendors).map(([vendorId, { displayName, logoThumb, houses }]) => (
				<Vendor
					key={vendorId}
					displayName={displayName}
					logoThumb={logoThumb}
					houses={houses}
					sortMode={sortMode}
					ascendingOrder={ascendingOrder}
					handleHousePriceChange={handleHousePriceChange}
					cancelEditPrice={cancelEditPrice}
				/>
			))}
		</>
	);
};

export default HousesApp;
