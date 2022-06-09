import React, { useContext, useEffect, useState } from 'react';

import { hexcodeToRGBA } from '../../../../Helpers/colors';
import { projectContext } from '../../../../Context/ProjectContext';
import styled from 'styled-components';
import theme from '../../../../Theme/base';
import { useIsMobile } from '../../../../Hooks/Client';

const CurrentCourseCard = ({ course }) => {
	const { nextCourses } = useContext(projectContext);
	const [currentCourse, setCurrentCourse] = useState();
	const mobile = useIsMobile();

	useEffect(() => {
		setCurrentCourse(
			nextCourses.find(
				(elem, index, array) => elem.nombreCurso === 'Consultoría Ambiental'
			)
		);
	}, [nextCourses, currentCourse]);

	const fechaInicio =
		currentCourse && currentCourse.fechaInicio.toDate().toJSON().slice(0, 10);
	const fechaFin =
		currentCourse && currentCourse.fechaFin.toDate().toJSON().slice(0, 10);

	return (
		<CurrentCourseCardContainer>
			<BannerContainer
				src={course.bannerImage}
				colorFilter={course.CategoriaID}></BannerContainer>
			<Container mobile={mobile}>
				<ContainerTitle mobile={mobile}>{course.nombre}</ContainerTitle>
				<ContainerParagraph mobile={mobile}>
					{fechaInicio} / {fechaFin}
				</ContainerParagraph>
			</Container>
		</CurrentCourseCardContainer>
	);
};

export default CurrentCourseCard;

const CurrentCourseCardContainer = styled.div`
	width: 20rem !important;
	margin: 0 0 0.5rem 0;
	background: #ffffff;
	border: 1px solid #c1c1c1;
	border-radius: 10px;
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
`;

const BannerContainer = styled.div`
	height: 42%;
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	box-shadow: inset 0 0 0 1000px
		${({ colorFilter }) => hexcodeToRGBA(theme.categories[colorFilter], 0.75)};
`;

const Container = styled.div`
	flex: 1;
	width: 77.5%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ContainerTitle = styled.h5`
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	font-size: ${({ mobile }) => (mobile ? null : '1rem')};
	font-weight: ${({ mobile }) => (mobile ? null : '600')};
	line-height: ${({ mobile }) => (mobile ? null : '1.25rem')};
	margin: ${({ mobile }) => (mobile ? null : '0 0 1.2rem 0')};
	text-align: center;
	color: #363636;
`;
const ContainerParagraph = styled.p`
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	font-size: ${({ mobile }) => (mobile ? null : '1rem')};
	font-weight: ${({ mobile }) => (mobile ? null : '400')};
	line-height: ${({ mobile }) => (mobile ? null : '1.25rem')};
	margin: ${({ mobile }) => (mobile ? null : '0 0 1.2rem 0')};
	text-align: center;
	color: #363636;
`;
