import React from 'react';

import './errormessage.css';

/**
 * Simple loading message when initially starting the app.
 */
const ErrorMessage = () => (
	<p className="errorMessage">
		Uh oh! Something went wrong. Refresh and try again.
		<span role="img" aria-label="Monkey covering eyes.">🙈</span>
	</p>
);

export default ErrorMessage;
