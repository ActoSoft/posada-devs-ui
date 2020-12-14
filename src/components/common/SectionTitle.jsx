import React from 'react';

const SectionTitle = ({ image, title }) => {
	return (
		<div className="section-title">
			<img src={image} alt={title} />
			<div className="section-title__text">
				<span>{title}</span>
			</div>
		</div>
	);
};

export default SectionTitle;
