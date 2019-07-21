import React from 'react';
import PropTypes from 'prop-types';

const HouseRow = ({ id, exteriorImage, name, price, size }) => (
	<tr data-qa="house-row">
		<td><img src={exteriorImage} alt={`Preview for house ${name}.`} /></td>
		<td>{name}</td>
		<td>{`${price}€`}</td>
		<td>
			{`${size} sqm.`}
		</td>
		<td>{id}</td>
	</tr>
);

HouseRow.propTypes = {
	id: PropTypes.string.isRequired,
	exteriorImage: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	size: PropTypes.number.isRequired
};

export default HouseRow;
