import React, { useContext, useEffect, useState } from 'react';

import Certificados from './../../Components/Dashboards/UserDashboard/Certificado/index';
import Consultas from '../../Components/Dashboards/UserDashboard/Consultas';
import CursosInteres from './../../Components/Dashboards/UserDashboard/CursosInteres/index';
import Loader from '../../Components/Shared/Loader';
import Spacer from '../../Components/Shared/Spacer';
import TusCursos from '../../Components/Dashboards/UserDashboard/TusCursos';
import { projectContext } from '../../Context/ProjectContext';
import styled from 'styled-components';

const UserPage = () => {
	const { course, categories } = useContext(projectContext);
	const [pending, setPending] = useState(true);
	const sideMenuLinks = ['Inicio', 'Mis Cursos', 'Mis Consultas'];

	useEffect(() => {
		if (course.length > 0 && categories.length > 0) {
			setPending(false);
		}
	}, [course, categories]);

	return (
		<UserMainContainer>
			<TusCursos />
			<Consultas />
			<CursosInteres />
			<Certificados />
		</UserMainContainer>
	);
};

export default UserPage;

const UserMainContainer = styled.div`
	width: 90%;
	max-width: 1095px;
	background-color: 'white';
	padding: 6.45rem 0 5.2rem 0;
	margin: 0 auto 0 auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1.5%;
`;
