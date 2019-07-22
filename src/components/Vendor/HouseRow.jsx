import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './houserow.css';

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

	const onChangePrice = ({ currentTarget: { value } }) => {
		handleHousePriceChange(id, parseInt(value, 10));
	};

	const priceDisplay = (editedPrice) ? (
		<>
			<input
				type="number"
				defaultValue={price}
				onChange={onChangePrice}
				data-qa="edit-price-input"
			/>
			<Button
				onClick={onClickCancel}
				data-qa="cancel-edit-price-button"
			>
				Cancel
			</Button>
		</>
	) : (
		<>
			{`${price}€`}
			<Button
				onClick={onClickEdit}
				data-qa="edit-price-button"
			>
				Edit
			</Button>
		</>
	);

	return (
		<tr className="houseRow" data-qa="house-row">
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
	/** turns the <input /> for the price "off" by setting the house's editedPrice to null */
	cancelEditPrice: PropTypes.func.isRequired,
	/** changes the price field to <input /> editing the house's editedPrice property */
	handleHousePriceChange: PropTypes.func.isRequired,
	/** defaults to null, otherwise matches the number in the price <input /> when editing */
	editedPrice: PropTypes.number,
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

HouseRow.defaultProps = {
	editedPrice: null
};

export default HouseRow;
