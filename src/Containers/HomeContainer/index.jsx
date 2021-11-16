import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { projectContext } from '../../Context/ProjectContext';
import Register from '../RegisterContainer';

const HomeContainer = () => {
	const { course, setCourse } = useContext(projectContext);

	return <Container></Container>;
};

export default HomeContainer;

const Container = styled.div`
	height: 150vh;
`;
