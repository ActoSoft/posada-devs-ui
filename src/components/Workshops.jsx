import React from 'react';
import SectionTitle from './common/SectionTitle';
import Worshops from '../assets/images/svgs/workshops.svg';
import CharacterList from './common/CharacterList';
import Section from './common/Section';
import { MockData } from '../services/mockData';

const Workshops = () => {
	const { conferences } = MockData;
	return (
		<Section id="workshops">
			<SectionTitle image={Worshops} title="WORKSHOPS" />
			<CharacterList data={conferences} />
		</Section>
	);
};

export default Workshops;
