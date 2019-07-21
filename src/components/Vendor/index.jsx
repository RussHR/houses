import React from 'react';
import PropTypes from 'prop-types';

import HouseRow from './HouseRow';

/**
 * Shows very basic info for a vendor.
 * Renders a table for all the houses they are selling.
 */
const Vendor = ({ displayName, logoThumb, houses, sortMode }) => {
	const sortedHouses = Object.entries(houses)
		.sort(([idA, houseA], [idB, houseB]) => {
			if (sortMode === 'id') {
				return parseInt(idA, 10) < parseInt(idB, 10) ? -1 : 1;
			// eslint-disable-next-line no-else-return
			} else if (sortMode === 'price' || sortMode === 'size') {
				return houseA[sortMode] < houseB[sortMode] ? -1 : 1;
			} else if (sortMode === 'name') {
				return houseA.name.toLowerCase() < houseB.name.toLowerCase() ? -1 : 1;
			}

			return 0;
		});

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
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

Vendor.propTypes = {
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
	sortMode: ''
};

export default Vendor;
