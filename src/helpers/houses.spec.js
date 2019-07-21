import { formatJsonForState } from './houses';

/* eslint-disable */
const exampleRes = {
	"success": true,
	"results": [
		{
			"id": "fertighaus.house.3800",
			"internal_id": 3800,
			"name": "SOLUTION 78 V3",
			"slug": "solution-78-v3-2",
			"price": 83701,
			"price_label": "Ausbauhaus",
			"reference_image": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_exterior_0.original.jpg?t=d71e402e",
			"price_ready": null,
			"price_fitting": 83701,
			"outside_measurements_length": null,
			"outside_measurements_width": null,
			"price_lego": null,
			"listing": null,
			"listing_short": null,
			"url": "\/haeuser\/solution-78-v3-2\/",
			"living_area_total": 78.12,
			"number_rooms": 2,
			"features_verbose": null,
			"net_floor_area_total": 0,
			"net_floor_area_per_room": null,
			"exterior_images": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_exterior_0.fill-320x240.jpg?t=8f148b8f",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_exterior_0.width-312x223.jpg?t=68c893a2",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_exterior_0.width-750x340.jpg?t=d614ad9e"
				}
			],
			"floor_plans": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/solution78v3_floorplan2.fill-320x240.jpg?t=11471d7b",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/solution78v3_floorplan2.width-312x223.jpg?t=359c45e9",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/solution78v3_floorplan2.width-750x340.jpg?t=293cddb3"
				}
			],
			"vendor_verbose": {
				"id": 136,
				"display_name": "Living Fertighaus AT",
				"url": "\/anbieter\/living-fertighaus-at\/",
				"logo": {
					"max-140x50": "https:\/\/cdn.fertighaus.de\/images\/livinghaus03.max-140x50.jpg?t=532fb863",
					"original": "https:\/\/cdn.fertighaus.de\/images\/livinghaus03.original.jpg?t=4b2a84b9"
				},
				"plan": "premium_branding",
				"branding_eye_catcher": false,
				"delivery_regions_mismatch_message": false
			},
			"listing_tracking_json": {
				"vendor__short_name": "Living Fertighaus AT",
				"vendor__id": 136,
				"vendor__name": "Living Fertighaus AT GmbH",
				"name": "SOLUTION 78 V3",
				"id": 3800,
				"vendor__plan": "premium_branding",
				"price_fitting": 83701,
				"has_exterior": true,
				"vendor__delivery_regions_mismatch_message": false
			},
			"energy_standard_name": "Niedrigenergiehaus",
			"form": 1,
			"construction_method": 1,
			"construction_method_name": "Fertighaus",
			"form_name": "Bungalow",
			"expansion_stages": [
				1,
				1
			],
			"interior_images": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_interior_1.fill-320x240.jpg?t=4d545a3a",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_interior_1.width-312x223.jpg?t=a21abf3c",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_interior_1.width-750x340.jpg?t=2320231e"
				},
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_interior_0.fill-320x240.jpg?t=1f9f9dbd",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_interior_0.width-312x223.jpg?t=7a17a1d1",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_interior_0.width-750x340.jpg?t=bd82812c"
				},
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_interior_2.fill-320x240.jpg?t=3616d4a2",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_interior_2.width-312x223.jpg?t=3fd975ab",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/solution-78-v3_interior_2.width-750x340.jpg?t=5a345268"
				}
			],
			"utilization": 1,
			"utilization_name": "Einfamilienhaus",
			"heat_transfer_coefficient": 0.17,
			"number_storeys": 1,
			"roof_shape_name": "Satteldach",
			"top_placement": 0
		},
		{
			"id": "fertighaus.house.2671",
			"internal_id": 2671,
			"name": "Dordogne",
			"slug": "dordogne",
			"price": 227909,
			"price_label": "Schl\u00fcsselfertig",
			"reference_image": "https:\/\/cdn.fertighaus.de\/images\/dordogne_exterior1.original.jpg?t=56c6d2b4",
			"price_ready": 227909,
			"price_fitting": null,
			"outside_measurements_length": null,
			"outside_measurements_width": null,
			"price_lego": null,
			"listing": null,
			"listing_short": null,
			"url": "\/haeuser\/dordogne\/",
			"living_area_total": 109.2,
			"number_rooms": 5.5,
			"features_verbose": null,
			"net_floor_area_total": null,
			"net_floor_area_per_room": null,
			"exterior_images": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/dordogne_exterior1.fill-320x240.jpg?t=0b2d07b1",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/dordogne_exterior1.width-312x223.jpg?t=5b711b27",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/dordogne_exterior1.width-750x340.jpg?t=89b773ac"
				}
			],
			"floor_plans": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/dordogne_floor_plans_0.fill-320x240.jpg?t=84766e63",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/dordogne_floor_plans_0.width-312x223.jpg?t=063380eb",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/dordogne_floor_plans_0.width-750x340.jpg?t=f6f9ccce"
				}
			],
			"vendor_verbose": {
				"id": 43,
				"display_name": "GUSSEK HAUS",
				"url": "\/anbieter\/gussek-haus\/",
				"logo": {
					"max-140x50": "https:\/\/cdn.fertighaus.de\/images\/GussekHaus.max-140x50.png?t=6627b86d",
					"original": "https:\/\/cdn.fertighaus.de\/images\/GussekHaus.original.png?t=f320b547"
				},
				"plan": "premium_branding",
				"branding_eye_catcher": false,
				"delivery_regions_mismatch_message": true
			},
			"listing_tracking_json": {
				"price_ready": 227909,
				"vendor__short_name": "GUSSEK HAUS",
				"vendor__id": 43,
				"vendor__name": "GUSSEK HAUS Franz Gussek GmbH & Co.KG",
				"name": "Dordogne",
				"id": 2671,
				"has_exterior": true,
				"vendor__plan": "premium_branding",
				"vendor__delivery_regions_mismatch_message": true
			},
			"energy_standard_name": "KFW 55",
			"form": 1,
			"construction_method": 1,
			"construction_method_name": "Fertighaus",
			"form_name": "Bungalow",
			"expansion_stages": [
				3,
				3
			],
			"interior_images": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/dordogne_interior1.fill-320x240.jpg?t=902327e8",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/dordogne_interior1.width-312x223.jpg?t=e13eec5f",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/dordogne_interior1.width-750x340.jpg?t=61bbdbaf"
				},
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/dordogne_interior2.fill-320x240.jpg?t=4884f112",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/dordogne_interior2.width-312x223.jpg?t=af6e7a1a",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/dordogne_interior2.width-750x340.jpg?t=762863a1"
				},
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/dordogne_interior3.fill-320x240.jpg?t=f31519be",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/dordogne_interior3.width-312x223.jpg?t=5d801027",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/dordogne_interior3.width-750x340.jpg?t=0b957311"
				}
			],
			"utilization": 1,
			"utilization_name": "Einfamilienhaus",
			"heat_transfer_coefficient": 0.133,
			"number_storeys": 1,
			"roof_shape_name": "Satteldach",
			"top_placement": 0
		},
		{
			"id": "fertighaus.house.91",
			"internal_id": 91,
			"name": "Mainz 128 Reihenhaus",
			"slug": "mainz-128-rh",
			"price": 161150,
			"price_label": "Schl\u00fcsselfertig",
			"reference_image": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_exterior1.original.jpg?t=74ae00f0",
			"price_ready": 161150,
			"price_fitting": null,
			"outside_measurements_length": 10,
			"outside_measurements_width": 6.2,
			"price_lego": null,
			"listing": null,
			"listing_short": null,
			"url": "\/haeuser\/mainz-128-rh\/",
			"living_area_total": 122,
			"number_rooms": 5,
			"features_verbose": null,
			"net_floor_area_total": null,
			"net_floor_area_per_room": null,
			"exterior_images": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_exterior1.fill-320x240.jpg?t=8d5e6726",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_exterior1.width-312x223.jpg?t=01748c79",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_exterior1.width-750x340.jpg?t=d55214b6"
				},
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_exterior2.fill-320x240.jpg?t=d962df0d",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_exterior2.width-312x223.jpg?t=3a3236b6",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_exterior2.width-750x340.jpg?t=0880353e"
				}
			],
			"floor_plans": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_floorplan1.fill-320x240.jpg?t=5722129d",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_floorplan1.width-312x223.jpg?t=2380e865",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_floorplan1.width-750x340.jpg?t=208d1a6e"
				},
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_floorplan2.fill-320x240.jpg?t=535e7ce4",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_floorplan2.width-312x223.jpg?t=c621f632",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_floorplan2.width-750x340.jpg?t=fb40861f"
				},
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_floorplan3.fill-320x240.jpg?t=8551b2e3",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_floorplan3.width-312x223.jpg?t=5eb4df63",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/rh-mainz128-elegance_floorplan3.width-750x340.jpg?t=3828ed91"
				}
			],
			"vendor_verbose": {
				"id": 33,
				"display_name": "Town & Country Haus",
				"url": "\/anbieter\/town-country-haus\/",
				"logo": {
					"max-140x50": "https:\/\/cdn.fertighaus.de\/images\/TownCountryHaus.max-140x50.png?t=0b407efa",
					"original": "https:\/\/cdn.fertighaus.de\/images\/TownCountryHaus.original.png?t=301d2a50"
				},
				"plan": "premium_branding",
				"branding_eye_catcher": false,
				"delivery_regions_mismatch_message": false
			},
			"listing_tracking_json": {
				"price_ready": 161150,
				"vendor__short_name": "Town & Country Haus",
				"vendor__id": 33,
				"vendor__name": "Town & Country Haus",
				"name": "Mainz 128 Reihenhaus",
				"id": 91,
				"has_exterior": true,
				"vendor__plan": "premium_branding",
				"vendor__delivery_regions_mismatch_message": false
			},
			"energy_standard_name": "Niedrigenergiehaus",
			"form": 2,
			"construction_method": 2,
			"construction_method_name": "Massivhaus",
			"form_name": "Satteldach-Klassiker",
			"expansion_stages": [
				3,
				3
			],
			"interior_images": null,
			"utilization": 3,
			"utilization_name": "Reihenhaus",
			"heat_transfer_coefficient": 0.34,
			"number_storeys": 2.5,
			"roof_shape_name": "Satteldach",
			"top_placement": 0
		},
		{
			"id": "fertighaus.house.2678",
			"internal_id": 2678,
			"name": "Meran",
			"slug": "meran",
			"price": 306428,
			"price_label": "Schl\u00fcsselfertig",
			"reference_image": "https:\/\/cdn.fertighaus.de\/images\/meran_exterior1.original.jpg?t=5d1e2380",
			"price_ready": 306428,
			"price_fitting": null,
			"outside_measurements_length": null,
			"outside_measurements_width": null,
			"price_lego": null,
			"listing": null,
			"listing_short": null,
			"url": "\/haeuser\/meran\/",
			"living_area_total": 156.51,
			"number_rooms": 7.5,
			"features_verbose": null,
			"net_floor_area_total": null,
			"net_floor_area_per_room": null,
			"exterior_images": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/meran_exterior1.fill-320x240.jpg?t=2c135e05",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/meran_exterior1.width-312x223.jpg?t=2830677a",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/meran_exterior1.width-750x340.jpg?t=af323b45"
				}
			],
			"floor_plans": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/meran_floor_plans_0.fill-320x240.jpg?t=3ad1be6c",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/meran_floor_plans_0.width-312x223.jpg?t=2bc35603",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/meran_floor_plans_0.width-750x340.jpg?t=fe6ff4ea"
				}
			],
			"vendor_verbose": {
				"id": 43,
				"display_name": "GUSSEK HAUS",
				"url": "\/anbieter\/gussek-haus\/",
				"logo": {
					"max-140x50": "https:\/\/cdn.fertighaus.de\/images\/GussekHaus.max-140x50.png?t=6627b86d",
					"original": "https:\/\/cdn.fertighaus.de\/images\/GussekHaus.original.png?t=f320b547"
				},
				"plan": "premium_branding",
				"branding_eye_catcher": false,
				"delivery_regions_mismatch_message": true
			},
			"listing_tracking_json": {
				"price_ready": 306428,
				"vendor__short_name": "GUSSEK HAUS",
				"vendor__id": 43,
				"vendor__name": "GUSSEK HAUS Franz Gussek GmbH & Co.KG",
				"name": "Meran",
				"id": 2678,
				"has_exterior": true,
				"vendor__plan": "premium_branding",
				"vendor__delivery_regions_mismatch_message": true
			},
			"energy_standard_name": "KFW 55",
			"form": 1,
			"construction_method": 1,
			"construction_method_name": "Fertighaus",
			"form_name": "Bungalow",
			"expansion_stages": [
				3,
				3
			],
			"interior_images": [
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/meran_interior1.fill-320x240.jpg?t=ccd24804",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/meran_interior1.width-312x223.jpg?t=62f412d6",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/meran_interior1.width-750x340.jpg?t=5a284e3a"
				},
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/meran_interior2.fill-320x240.jpg?t=211054e0",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/meran_interior2.width-312x223.jpg?t=dc8ec02e",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/meran_interior2.width-750x340.jpg?t=b5611f99"
				},
				{
					"fill-320x240": "https:\/\/cdn.fertighaus.de\/images\/meran_interior3.fill-320x240.jpg?t=9422848e",
					"width-312x223": "https:\/\/cdn.fertighaus.de\/images\/meran_interior3.width-312x223.jpg?t=96b2f61b",
					"width-750x340": "https:\/\/cdn.fertighaus.de\/images\/meran_interior3.width-750x340.jpg?t=4c89d0ed"
				}
			],
			"utilization": 1,
			"utilization_name": "Einfamilienhaus",
			"heat_transfer_coefficient": 0.139,
			"number_storeys": 1,
			"roof_shape_name": "Walmdach",
			"top_placement": 0
		}
	],
	"payload": { top_placement: [] },
	"total_count": 239
};
/* eslint-enable */

describe('helpers/houses', () => {
	let formattedState;

	describe('formatJsonForState', () => {
		beforeAll(() => {
			formattedState = formatJsonForState(exampleRes);
		});

		test('creates keys for each house based on id', () => {
			expect(formattedState).toHaveProperty('33');
			expect(formattedState).toHaveProperty('43');
			expect(formattedState).toHaveProperty('136');
		});

		test('gives vendors the right properties', () => {
			const vendor = formattedState['33'];
			expect(vendor).toHaveProperty('displayName');
			expect(vendor).toHaveProperty('logoThumb');
			expect(vendor).toHaveProperty('houses');
		});

		test('gives houses the right properties', () => {
			const vendor = formattedState['33'];
			expect(vendor.houses).toHaveProperty('91');
			const house = vendor.houses['91'];

			expect(house).toHaveProperty('exteriorImages');
			expect(house).toHaveProperty('name');
			expect(house).toHaveProperty('price');
			expect(house).toHaveProperty('size');
		});

		test('adds multiple houses to the same vendor', () => {
			const vendor = formattedState['43'];
			expect(vendor.houses).toHaveProperty('2671');
			expect(vendor.houses).toHaveProperty('2678');
		});
	});
});
