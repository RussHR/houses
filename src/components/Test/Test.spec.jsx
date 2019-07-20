import { render } from 'enzyme';
import React from 'react';

import Test from './Test';

test('<Test />', () => {
	expect(render(<Test />)).toBeTruthy();
});
