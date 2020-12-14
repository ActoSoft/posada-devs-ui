import React from 'react';
import Copy from './Copy';
import Workshops from './Workshops';
import Meetups from './Meetups';
import Footer from './common/Footer';

const Landing = () => {
	return (
		<div className="landing">
			<Copy />
			<Workshops />
			<Meetups />
			<Footer />
		</div>
	);
};

export default Landing;
