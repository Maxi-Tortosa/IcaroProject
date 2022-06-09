import Card from '../../CursosCards/Card';
import DotIndicatorCards from '../../CursosCards/DotIndicatorCards/index';
import styled from 'styled-components';
import theme from '../../../Theme/base';
import { useIsMobile } from '../../../Hooks/Client';
import { useState } from 'react';

const SimilarCourses = ({ course, courseList }) => {
	const { CategoriaID } = course;
	const [index, setIndex] = useState(0);

	const mobile = useIsMobile();

	const getSimilarCourses = () => {
		const categoryList = courseList.filter(
			(elem) =>
				elem.CategoriaID === CategoriaID ||
				elem.nombre.includes(course.nombre) ||
				(course.CategoriaID2 && elem.CategoriaID2 === course.CategoriaID2)
		);
		const newList = categoryList.filter((item) => item !== course);
		return newList;
	};
	// getSimilarCourses();

	return (
		<SimilarCoursesContainer mobile={mobile}>
			<Title mobile={mobile}>Cursos Similares</Title>
			<CardsContainer
				length={getSimilarCourses().length}
				gap={1}
				mobile={mobile}
				index={index}>
				{getSimilarCourses().map((elem, index) => (
					<Card
						info={elem}
						key={index}
						isMobile={mobile}
						overridecolor={CategoriaID}
					/>
				))}
			</CardsContainer>
			{mobile && getSimilarCourses().length > 1 && (
				<DotIndicatorWrapper>
					<DotIndicatorCards
						index={index}
						setIndex={setIndex}
						length={getSimilarCourses().length}
						overrideColor='grey'
						course={course}
					/>
				</DotIndicatorWrapper>
			)}
		</SimilarCoursesContainer>
	);
};

const SimilarCoursesContainer = styled.div`
	margin: 50px 0;
	${({ mobile }) => mobile && 'padding: 0 1.93rem'};
	${({ mobile }) => mobile && 'overflow: hidden'};
`;
const Title = styled.h5`
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 20px;
	color: ${theme.color.darkGrey};
	margin: ${({ mobile }) => (mobile ? '' : '0px')};
`;

const getCalcString = (index, gap, positive) => {
	const sign = positive ? '' : '-';
	const percentage = index * 65;
	const action = positive ? '+' : '-';
	const pixels = index * gap;

	return `calc(${sign}${percentage}% ${action} ${pixels}px)`;
};

const isMobileStyles = (gap, length, index) => {
	return `
		overflow: hidden;
		min-height: 300px;
		display: grid;
		grid-template-columns: repeat(${length}, minmax(0, 1fr));
		column-gap: ${gap}px;
		width: calc(
			${length * 65}% +
				${gap * (length - 1)}px
		);
		margin-left: ${getCalcString(index, gap, false)};
		transition: margin .5s;
	`;
};

const desktopStyles = () => {
	return `
	width: 100%;
	padding: 20px 0;
	margin-left: ${({ containerPosition }) =>
		containerPosition > 0 && containerPosition}px;
	// transition: margin 1s;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 20px;
	flex-wrap: wrap;
`;
};

const CardsContainer = styled.div`
	${({ mobile, gap, length, index }) =>
		mobile ? isMobileStyles(gap, length, index) : desktopStyles()}
`;

const DotIndicatorWrapper = styled.div`
	margin: 20px auto;
	width: fit-content;
`;

export default SimilarCourses;
