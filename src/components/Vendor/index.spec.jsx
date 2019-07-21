import { render } from 'enzyme';
import React from 'react';

import Vendor from './index';

let vendorWrapper;

describe('<Vendor />', () => {
	const houses = {
		/* eslint-disable */
		"1": {
			exteriorImage: 'otherexample.com',
			name: 'house 1',
			price: 3,
			size: 9
		},
		"2": {
			exteriorImage: 'otherexample.com',
			name: 'house 2',
			price: 4,
			size: 8
		}
		/* eslint-enable */
	};

	beforeAll(() => {
		vendorWrapper = render(
			<Vendor
				id="1"
				displayName="I am vendor"
				logoThumb="example.com"
				houses={houses}
				cancelEditPrice={jest.fn(() => null)}
				handleHousePriceChange={jest.fn(() => null)}
			/>
		);
	});

	test('shows the display name of a vendor', () => {
		expect(vendorWrapper.html()).toMatch('I am vendor');
	});

	test('shows the logoThumb of a vendor', () => {
		expect(vendorWrapper.html()).toMatch('src="example.com"');
	});

	test('renders a table for each house', () => {
		expect(vendorWrapper.find('[data-qa="house-row"]')).toHaveLength(2);
	});
});
