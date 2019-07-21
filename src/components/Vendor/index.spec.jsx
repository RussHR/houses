import { render } from 'enzyme';
import React from 'react';

import Vendor from './index';

describe('<Vendor />', () => {
	let renderedVendor;
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
		renderedVendor = render(
			<Vendor displayName="I am vendor" logoThumb="example.com" houses={houses} />
		);
	});

	test('shows the display name of a vendor', () => {
		expect(renderedVendor.html()).toMatch('I am vendor');
	});

	test('shows the logoThumb of a vendor', () => {
		expect(renderedVendor.html()).toMatch('src="example.com"');
	});

	test('renders a table for each house', () => {
		expect(renderedVendor.find('[data-qa="house-row"]')).toHaveLength(2);
	});
});
