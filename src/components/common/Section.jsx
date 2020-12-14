import React from 'react';

const Section = (props) => {
	return (
		<section className="section" {...props}>
			{props.children}
		</section>
	);
};

export default Section;
