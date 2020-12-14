import React from 'react';
import SectionTitle from './common/SectionTitle';
import Worshops from '../assets/images/svgs/workshops.svg';
import CharacterList from './common/CharacterList';
import Section from './common/Section';
import { workshops } from '../services/mockData';

const Workshops = () => {
	return (
		<Section id="workshops">
			<SectionTitle image={Worshops} title="WORKSHOPS" />
			<CharacterList data={workshops} />
		</Section>
	);
};

export default Workshops;
