import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { projectContext } from '../../../../Context/ProjectContext';
import styled from 'styled-components';
import theme from '../../../../Theme/base';
import { useIsMobile } from '../../../../Hooks/Client';

const CursosInteres = () => {
	const { course } = useContext(projectContext);
	const mobile = useIsMobile();
	const relatedCourses = course.slice(0, 7);

	return (
		<CursosDeInteresMainContainer mobile={mobile}>
			<TitleContainer>
				<Title mobile={mobile}>Estos cursos pueden interesarte</Title>
			</TitleContainer>
			<CourseContainer>
				<CourseList>
					{/*Hacer alguna lógica que recomiende cursos de la misma categoría que el último realizado */}
					{relatedCourses &&
						relatedCourses.map((elem, index) => (
							<CourseItem key={index}>
								<Link to={`/cursos/${elem.href}`}>{elem.nombre}</Link>
							</CourseItem>
						))}
				</CourseList>
			</CourseContainer>
		</CursosDeInteresMainContainer>
	);
};

export default CursosInteres;

const CursosDeInteresMainContainer = styled.div`
	width: ${({ mobile }) => (mobile ? '100%' : '29%')};
	height: 25.93rem;
	background: #ffffff;
	box-shadow: 0px 0px 10px #dadada;
	border-radius: 5px;
`;
const TitleContainer = styled.div`
	display: ${({ mobile }) => (mobile ? null : 'flex')};
	flex-direction: ${({ mobile }) => (mobile ? null : 'row')};
	justify-content: ${({ mobile }) => (mobile ? null : 'space-between')};
	align-items: center;
	padding: 1.06rem 0 0.8rem 0;
	margin: 0 1.87rem;
`;

const Title = styled.h5`
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	margin: 0;
	font-weight: 700;
	font-size: ${({ mobile }) => (mobile ? null : '1.25rem')};
	line-height: 24px;
	color: #29343e;
`;

const CourseContainer = styled.div``;

const CourseList = styled.ul`
	list-style-image: url('https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/listItemIcon.png?alt=media&token=d72206bb-61ef-497f-b875-cc41468df603');
	padding: 0 2rem;
	list-style-position: inside;
`;

const CourseItem = styled.li`
	font-family: 'Montserrat';
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	margin: 0 0 0.6rem 0;
	font-weight: 400;
	font-size: ${({ mobile }) => (mobile ? null : '1rem')};
	line-height: 1.25rem;

	a {
		color: ${theme.color.darkGrey};
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
`;
