import React from 'react';
import PropTypes from 'prop-types';

const HouseRow = ({ id, exteriorImages, name, price, size }) => (
	<tr>
		<td><img src={exteriorImages[0]['fill-320x240']} alt={`Preview for house ${name}.`} /></td>
		<td>{name}</td>
		<td>{`${price}€`}</td>
		<td>
			{`${size}m`}
			<sup>2</sup>
		</td>
		<td>{id}</td>
	</tr>
);

HouseRow.propTypes = {
	id: PropTypes.string.isRequired,
	exteriorImages: PropTypes.arrayOf(PropTypes.object).isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	size: PropTypes.number.isRequired
};

export default HouseRow;
