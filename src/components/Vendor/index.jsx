import React from 'react';
import PropTypes from 'prop-types';

import HouseRow from './HouseRow';
import { sortHouses } from '../../helpers/houses';

/**
 * Shows very basic info for a vendor.
 * Renders a table for all the houses they are selling.
 */
const Vendor = ({
	ascendingOrder,
	displayName,
	handleHousePriceChange,
	logoThumb,
	houses,
	sortMode
}) => {
	const sortedHouses = sortHouses(houses, sortMode, ascendingOrder);

	return (
		<div>
			{displayName}
			<img src={logoThumb} alt={`Thumbnail for vendor ${displayName}.`} />
			<table>
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
					{sortedHouses.map(([houseId, { exteriorImage, name, price, size }]) => (
						<HouseRow
							key={houseId}
							id={houseId}
							exteriorImage={exteriorImage}
							name={name}
							price={price}
							size={size}
							handleHousePriceChange={handleHousePriceChange}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

Vendor.propTypes = {
	/** whether to list the sorted houses in ascending order */
	ascendingOrder: PropTypes.bool,
	/** name of the vendor */
	displayName: PropTypes.string.isRequired,
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
