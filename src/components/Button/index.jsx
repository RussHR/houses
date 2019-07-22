import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ children, onClick }) => (
	<button type="button" onClick={onClick} className="button">
		{children}
	</button>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Button;
