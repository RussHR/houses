import React from 'react';
import PropTypes from 'prop-types';

import HouseRow from './HouseRow';
import { sortHouses } from '../../helpers/houses';

import './vendor.css';

/**
 * Shows very basic info for a vendor.
 * Renders a table for all the houses they are selling.
 */
const Vendor = ({
	ascendingOrder,
	cancelEditPrice,
	displayName,
	handleHousePriceChange,
	id,
	logoThumb,
	houses,
	sortMode
}) => {
	const sortedHouses = sortHouses(houses, sortMode, ascendingOrder);

	const handleCancelPriceChangeAsVendor = (houseId) => {
		cancelEditPrice(id, houseId);
	};
	const handlePriceChangeAsVendor = (houseId, price) => {
		handleHousePriceChange(id, houseId, price);
	};

	return (
		<section className="vendor">
			<div className="vendor__displayInfo">
				<img src={logoThumb} alt={`Thumbnail for vendor ${displayName}.`} />
				<h2>{displayName}</h2>
			</div>
			<table className="vendor__table">
				<thead>
					<tr>
						<th>Preview Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Size</th>
						<th>ID</th>
					</tr>
				</thead>
				<tbody>
					{sortedHouses.map(([houseId, { editedPrice, exteriorImage, name, price, size }]) => (
						<HouseRow
							key={houseId}
							id={houseId}
							editedPrice={editedPrice}
							exteriorImage={exteriorImage}
							name={name}
							price={price}
							size={size}
							cancelEditPrice={handleCancelPriceChangeAsVendor}
							handleHousePriceChange={handlePriceChangeAsVendor}
						/>
					))}
				</tbody>
			</table>
		</section>
	);
};

Vendor.propTypes = {
	/** whether to list the sorted houses in ascending order */
	ascendingOrder: PropTypes.bool,
	/** sets a house's editedPrice property to null, and we need to pass along vendorId as well */
	cancelEditPrice: PropTypes.func.isRequired,
	/** name of the vendor */
	displayName: PropTypes.string.isRequired,
	/** edits a house's editedPrice, but we also need to give vendorId */
	handleHousePriceChange: PropTypes.func.isRequired,
	/** vendor id, only needed for updating the house prices */
	id: PropTypes.string.isRequired,
	/** img src for a logo of max dimensions 140x50 px */
	logoThumb: PropTypes.string.isRequired,
	/** houses belonging to the vendor; each key is the house's internal id */
	houses: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	/** how to sort the rows in vendor's house table */
	sortMode: PropTypes.oneOf(['', 'id', 'name', 'price', 'size'])
};

Vendor.defaultProps = {
	ascendingOrder: true,
	sortMode: ''
};

export default Vendor;
