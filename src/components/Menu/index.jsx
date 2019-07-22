import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './menu.css';

const Menu = ({ onChangeAscendingOrder, onChangeSortMode, onClickSavePrices }) => (
	<menu className="menu">
		<li className="menu__item">Houses App</li>
		<li className="menu__item">
			<label htmlFor="sort-mode">Sort by: </label>
			<select id="sort-mode" onChange={onChangeSortMode} className="menu__select">
				<option value="">--</option>
				<option value="name">Name</option>
				<option value="price">Price</option>
				<option value="size">Size</option>
				<option value="id">ID</option>
			</select>
		</li>
		<li className="menu__item">
			<select
				aria-label="Toggle ascending or descending order."
				onChange={onChangeAscendingOrder}
				className="menu__select"
			>
				<option value="ascending">Ascending</option>
				<option value="descending">Descending</option>
			</select>
		</li>
		<li className="menu__item">
			<Button onClick={onClickSavePrices}>Save</Button>
		</li>
	</menu>
);

/** these are all fairly self-explanatory */
Menu.propTypes = {
	onChangeAscendingOrder: PropTypes.func.isRequired,
	onChangeSortMode: PropTypes.func.isRequired,
	onClickSavePrices: PropTypes.func.isRequired
};

export default Menu;
