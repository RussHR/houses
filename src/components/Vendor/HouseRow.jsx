import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Contains all the information shown for a house.
 * Rendered alongside other houses under the same vendor.
 */
const HouseRow = ({
	id,
	exteriorImage,
	name,
	price,
	size,
	handleHousePriceChange,
	cancelEditPrice,
	editedPrice
}) => {	
	const onClickEdit = () => {
		handleHousePriceChange(id, price);
	};

	const onClickCancel = () => {
		cancelEditPrice(id);
	};

	const onChangePrice = ({ currentTarget: { value }}) => {
		handleHousePriceChange(id, parseInt(value, 10));
	};

	const priceDisplay = (editedPrice) ? (
		<>
			<input type="number" defaultValue={price} onChange={onChangePrice} />
			<button onClick={onClickCancel}>Cancel</button>
		</>
	) : (
			<>{`${price}€`} <button onClick={onClickEdit}>Edit</button></>
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
