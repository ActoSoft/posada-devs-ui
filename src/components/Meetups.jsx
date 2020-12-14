import React from 'react';
import SectionTitle from './common/SectionTitle';
import Meetups from '../assets/images/svgs/meetups.svg';
import CharacterList from './common/CharacterList';
import Section from './common/Section';
import { meetups } from '../services/mockData';

const Workshops = () => {
	return (
		<Section id="meetups">
			<SectionTitle image={Meetups} title="CONFERENCIAS" />
			<CharacterList data={meetups} />
		</Section>
	);
};

export default Workshops;
