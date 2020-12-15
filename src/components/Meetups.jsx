import React from 'react';
import SectionTitle from './common/SectionTitle';
import Meetups from '../assets/images/svgs/meetups.svg';
import CharacterList from './common/CharacterList';
import Section from './common/Section';
import { MockData } from '../services/mockData';

const Workshops = () => {
	const { conferences } = MockData;
	return (
		<Section id="meetups">
			<SectionTitle image={Meetups} title="CONFERENCIAS" />
			<CharacterList data={conferences} />
		</Section>
	);
};

export default Workshops;
