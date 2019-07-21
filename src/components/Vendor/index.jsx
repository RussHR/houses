import React from 'react';
import PropTypes from 'prop-types';

import HouseRow from './HouseRow';

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
	displayName: PropTypes.string.isRequired,
	logoThumb: PropTypes.string.isRequired,
	houses: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Vendor;
