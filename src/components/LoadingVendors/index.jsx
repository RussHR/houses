import React from 'react';

import './loadingvendors.css';

/**
 * Simple loading message when initially starting the app.
 */
const LoadingVendors = () => (
	<div>
		<div className="loadingVendors__bars" />
		<p className="loadingVendors__text">Loading vendor data...</p>
	</div>
);

export default LoadingVendors;
