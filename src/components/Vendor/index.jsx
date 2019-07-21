import React from 'react';
import PropTypes from 'prop-types';

import HouseRow from './HouseRow';

const Vendor = ({ displayName, logoThumb, houses }) => (
	<>
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
				{Object.entries(houses).map(([houseId, houseData]) => (
					<HouseRow
						key={houseId}
						id={houseId}
						exteriorImages={houseData.exteriorImages}
						name={houseData.name}
						price={houseData.price}
						size={houseData.size}
					/>
				))}
			</tbody>
		</table>
	</>
);

Vendor.propTypes = {
	displayName: PropTypes.string.isRequired,
	logoThumb: PropTypes.string.isRequired,
	houses: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Vendor;
