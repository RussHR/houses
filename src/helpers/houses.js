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
			exteriorImages: exterior_images,
			name,
			price,
			size: living_area_total
		};
	});
	/* eslint-enable camelcase */

	return housesByVendor;
}
