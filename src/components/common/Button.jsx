import React from 'react';

const Button = ({ text, type = 'button' }) => {
	return (
		<button className="btn" type={type}>
			{text}
		</button>
	);
};

export default Button;
