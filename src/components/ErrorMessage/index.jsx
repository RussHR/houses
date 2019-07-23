import React from 'react';

import './errormessage.css';

/**
 * Appears if there's an error fetching the vendor data.
 */
const ErrorMessage = () => (
	<p className="errorMessage">
		Uh oh! Something went wrong. Refresh and try again.
		<span role="img" aria-label="Monkey covering eyes.">🙈</span>
	</p>
);

export default ErrorMessage;
