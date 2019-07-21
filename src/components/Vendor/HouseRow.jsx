import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Contains all the information shown for a house.
 * Rendered alongside other houses under the same vendor.
 */
const HouseRow = ({ id, exteriorImage, name, price, size, handleHousePriceChange }) => {
	const [editingPrice, setEditingPrice] = useState(false);
	
	const onClickEditButton = () => {
		setEditingPrice(true);
	};

	const onChangePrice = ({ currentTarget: { value }}) => {
		handleHousePriceChange(id, value);
	};

	const priceDisplay = editingPrice ? (
		<input type="number" defaultValue={price} onChange={onChangePrice} />
	) : (
		<>{`${price}€`} <button onClick={setEditingPrice}>Edit</button></>
	);
	return (
		<tr data-qa="house-row">
			<td><img src={exteriorImage} alt={`Preview for house ${name}.`} /></td>
			<td>{name}</td>
			<td>{priceDisplay}</td>
			<td>
				{`${size} sqm.`}
			</td>
			<td>{id}</td>
		</tr>
	);
};

HouseRow.propTypes = {
	/** internal id of the house */
	id: PropTypes.string.isRequired,
	/** img src for the first 320x240 px image of the house */
	exteriorImage: PropTypes.string.isRequired,
	/** potentially non-unique, supplied by the vendor */
	name: PropTypes.string.isRequired,
	/** cost in euros */
	price: PropTypes.number.isRequired,
	/** units are square meters */
	size: PropTypes.number.isRequired
};

export default HouseRow;
