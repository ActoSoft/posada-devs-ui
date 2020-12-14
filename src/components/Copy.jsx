import React from 'react';
import Link from './common/Link';
import Logo from '../assets/images/svgs/christmas.svg';

const Copy = () => {
	return (
		<section className="copy">
			<div className="copy-info">
				<h1>POSADA PARA DEVS</h1>
				<p>un copy mamalon</p>
			</div>
			<div className="copy-btn">
				<Link href="#workshops" text="Workshops" />
				<Link href="#meetups" text="Conferencias" />
			</div>
			<div className="copy-picture">
				<img src={Logo} alt="posada para devs" />
			</div>
		</section>
	);
};

export default Copy;
