import jestTester from './jest-tester';

describe('jestTester', () => {
	test('returns 3', () => {
		expect(jestTester()).toBe(3);
	});
});
