import React, { useEffect, useState } from 'react';
import { formatJsonForState } from './helpers/houses';
import Menu from './components/Menu';
import Vendor from './components/Vendor';

import 'normalize.css';
import './main.css';

const HousesApp = () => {
	const [hasError, setError] = useState(false);
	const [vendors, setVendors] = useState({});
	const [sortMode, setSortMode] = useState('');
	const [ascendingOrder, setAscendingOrder] = useState(true);

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
	const handleHousePriceChange = (vendorId, houseId, price) => {
		const newLocalVendorData = { ...vendors };
		newLocalVendorData[vendorId].houses[houseId].editedPrice = price;
		setVendors(newLocalVendorData);
	};
	const cancelEditPrice = (vendorId, houseId) => {
		const newLocalVendorData = { ...vendors };
		newLocalVendorData[vendorId].houses[houseId].editedPrice = null;
		setVendors(newLocalVendorData);
	};
	const onClickSavePrices = () => {
		const newLocalVendorData = { ...vendors };
		const objForConsoleLogging = { update: [] };

		Object.keys(newLocalVendorData).forEach(vendorId => {
			const vendor = newLocalVendorData[vendorId];
			Object.keys(vendor.houses).forEach(houseId => {
				const house = vendor.houses[houseId];
				if (house.editedPrice) {
					objForConsoleLogging.update.push({
						id: houseId,
						price: house.editedPrice
					});
					house.price = house.editedPrice;
					house.editedPrice = null;
				}
			});
		});

		console.log(JSON.stringify(objForConsoleLogging)); // eslint-disable-line no-console
		setVendors(newLocalVendorData);
	};

	return (
		<>
			{hasError && <span>here is an error</span>}
			<Menu
				onChangeSortMode={onChangeSortMode}
				onChangeAscendingOrder={onChangeAscendingOrder}
				onClickSavePrices={onClickSavePrices}
			/>

			{Object.entries(vendors).map(([vendorId, { displayName, logoThumb, houses }]) => (
				<Vendor
					key={vendorId}
					id={vendorId}
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
