import React from 'react';

const Button = ({ text, href }) => {
	return (
		<a href={href} className="btn">
			{text}
		</a>
	);
};

export default Button;
