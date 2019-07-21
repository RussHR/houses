import { render } from 'enzyme';
import React from 'react';

import HouseRow from './HouseRow';

describe('<HouseRow />', () => {
	let renderedHouseRow;
	const props = {
		id: 'id4',
		exteriorImage: 'otherexample.com',
		name: 'house 1',
		price: 3,
		size: 9
	};

	beforeAll(() => {
		renderedHouseRow = render(
			<HouseRow {...props} />
		);
	});

	test('shows the id of a house', () => {
		expect(renderedHouseRow.html()).toMatch('id4');
	});

	test('shows the exteriorImage of a house', () => {
		expect(renderedHouseRow.html()).toMatch('src="otherexample.com"');
	});
	test('shows the name of a house', () => {
		expect(renderedHouseRow.html()).toMatch('house 1');
	});
	test('shows the price of a house', () => {
		expect(renderedHouseRow.html()).toMatch('3&#x20AC;');
	});
	test('shows the size of a house', () => {
		expect(renderedHouseRow.html()).toMatch('9 sqm.');
	});
});
