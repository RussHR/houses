/**
 * Formats respons from the /houses api endpoint for the app state.
 * @param {object} json - successful response from the server
 * @returns {object} state with keys pointing to vendor ids, and each has its own .houses
 */
// eslint-disable-next-line import/prefer-default-export
export function formatJsonForState({ results }) {
	const housesByVendor = {};

	/* eslint-disable camelcase */
	results.forEach(({
		internal_id,
		exterior_images,
		living_area_total,
		name,
		price,
		vendor_verbose: { id: vendorId, display_name, logo: { 'max-140x50': logoThumb } }
	}) => {
		if (!housesByVendor[vendorId]) {
			housesByVendor[vendorId] = {
				displayName: display_name,
				logoThumb,
				houses: {}
			};
		}

		housesByVendor[vendorId].houses[internal_id] = {
			editedPrice: null,
			exteriorImage: exterior_images[0]['fill-320x240'],
			name,
			price,
			size: living_area_total
		};
	});
	/* eslint-enable camelcase */

	return housesByVendor;
}

/**
 * Sorts houses based on the sortMode.
 * @param {object} houses - each house is an object with its internal id as the key
 * 	and its properties is the value: { price, name, size }
 * @param {string} sortMode - '', 'name', 'price', 'id', or 'size'
 * @returns {[array]} new, sorted array of the 1st param
 */
export function sortHouses(houses, sortMode = '', ascendingOrder = true) {
	const lowerVal = ascendingOrder ? -1 : 1;
	const higherVal = ascendingOrder ? 1 : -1;
	return Object.entries(houses)
		.sort(([idA, houseA], [idB, houseB]) => {
			if (sortMode === 'id') {
				return parseInt(idA, 10) < parseInt(idB, 10) ? lowerVal : higherVal;
				// eslint-disable-next-line no-else-return
			} else if (sortMode === 'price' || sortMode === 'size') {
				return houseA[sortMode] < houseB[sortMode] ? lowerVal : higherVal;
			} else if (sortMode === 'name') {
				return houseA.name.toLowerCase() < houseB.name.toLowerCase() ? lowerVal : higherVal;
			}

			return 0;
		});
}
