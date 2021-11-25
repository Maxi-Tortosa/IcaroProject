import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { projectContext } from '../../Context/ProjectContext';
import Register from '../RegisterContainer';
import QuienesSomos from '../../Components/QuienesSomos';
import Banners from '../../Components/Banners';
import ProximosCursos from '../../Components/Proximos cursos';

const HomeContainer = () => {
	const { course, setCourse } = useContext(projectContext);

	return (
		<Container>
			<ProximosCursos />
			<QuienesSomos />
			<Banners />
		</Container>
	);
};

export default HomeContainer;

const Container = styled.div`
	height: auto;
`;
