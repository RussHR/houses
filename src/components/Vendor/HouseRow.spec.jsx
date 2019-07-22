import { shallow } from 'enzyme';
import React from 'react';

import HouseRow from './HouseRow';

let props,
	propsWithEditedPrice,
	houseRowWrapper,
	houseRowWrapperWithInput,
	cancelEditPriceMock,
	handleHousePriceChangeMock;

describe('<HouseRow />', () => {
	beforeAll(() => {
		cancelEditPriceMock = jest.fn(() => null);
		handleHousePriceChangeMock = jest.fn(() => null);

		props = {
			id: 'id4',
			exteriorImage: 'otherexample.com',
			name: 'house 1',
			price: 3,
			size: 9,
			cancelEditPrice: cancelEditPriceMock,
			handleHousePriceChange: handleHousePriceChangeMock
		};

		propsWithEditedPrice = {
			...props,
			editedPrice: 5
		};

		houseRowWrapper = shallow(<HouseRow {...props} />);
		houseRowWrapperWithInput = shallow(<HouseRow {...propsWithEditedPrice} />);
	});

	test('shows the id of a house', () => {
		expect(houseRowWrapper.html()).toMatch('id4');
	});

	test('shows the exteriorImage of a house', () => {
		expect(houseRowWrapper.html()).toMatch('src="otherexample.com"');
	});
	test('shows the name of a house', () => {
		expect(houseRowWrapper.html()).toMatch('house 1');
	});
	test('shows the price of a house', () => {
		expect(houseRowWrapper.html()).toMatch('3€');
	});
	test('shows the size of a house', () => {
		expect(houseRowWrapper.html()).toMatch('9 sqm.');
	});

	test('should show the price in an input if the house has an editedPrice', () => {
		expect(houseRowWrapper.find('[data-qa="edit-price-input"]')).toHaveLength(0);
		expect(houseRowWrapperWithInput.find('[data-qa="edit-price-input"]')).toHaveLength(1);
	});

	test('calls handleHousePriceChange on clicking the edit button', () => {
		const editPriceButton = houseRowWrapper.find('[data-qa="edit-price-button"]');
		editPriceButton.simulate('click');
		expect(handleHousePriceChangeMock.mock.calls).toHaveLength(1);
	});

	test('calls handleHousePriceChange on editing the price input field', () => {
		const editPriceInput = houseRowWrapperWithInput.find('[data-qa="edit-price-input"]');
		editPriceInput.simulate('change', { currentTarget: { value: 123 } });
		expect(handleHousePriceChangeMock.mock.calls).toHaveLength(2);
	});

	test('calls cancelEditPrice upon clicking the cancel button', () => {
		const editPriceButton = houseRowWrapperWithInput.find('[data-qa="cancel-edit-price-button"]');
		editPriceButton.simulate('click');
		expect(cancelEditPriceMock.mock.calls).toHaveLength(1);
	});
});
