import React from 'react';
import PropTypes from 'prop-types';

import HouseRow from './HouseRow';

/**
 * Shows very basic info for a vendor.
 * Renders a table for all the houses they are selling.
 */
const Vendor = ({ displayName, logoThumb, houses }) => (
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
				{Object.entries(houses).map(([houseId, { exteriorImage, name, price, size }]) => (
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

Vendor.propTypes = {
	/** name of the vendor */
	displayName: PropTypes.string.isRequired,
	/** img src for a logo of max dimensions 140x50 px */
	logoThumb: PropTypes.string.isRequired,
	/** houses belonging to the vendor; each key is the house's internal id */
	houses: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Vendor;
