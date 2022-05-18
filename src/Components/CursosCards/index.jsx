import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';

import Card from './Card';
import CategoriesMobile from '../CategoriesMobile';
import Loader from '../Shared/Loader';
import { projectContext } from '../../Context/ProjectContext';
import styled from 'styled-components';
import theme from '../../Theme/base';
import { useIsMobile } from '../../Hooks/Client';

const CursosCards = ({ isProximos }) => {
	const { course } = useContext(projectContext);
	const { categories } = useContext(projectContext);
	const { nextCourses } = useContext(projectContext);

	const [pending, setPending] = useState(true);
	const [toggleState, setToggleState] = useState(0);
	const [selectedCategorie, setSelectedCategorie] = useState(
		categories.length > 0 ? categories[0].Nombre : 'Programación'
	);
	const [courseDates, setCoursesDates] = useState([]);
	const mobile = useIsMobile();

	useEffect(() => {
		if (course.length > 0 || categories.length > 0 || nextCourses.length > 0) {
			setPending(false);
		}
	}, [course, categories, nextCourses]);

	useEffect(() => {
		let nextDates = [];
		const date = Timestamp.now().toDate();
		if (course && nextCourses) {
			var nextCoursesInfo = nextCourses.reduce((arr, e) => {
				arr.push(
					Object.assign(
						{},
						e,
						course.find((a) => a.nombre === e.nombreCurso)
					)
				);
				return arr;
			}, []);
			nextCoursesInfo.map((course) =>
				course.fechaInicio.toDate() > date
					? (nextDates = [...nextDates, course])
					: null
			);

			return setCoursesDates(nextDates);
		}
	}, [nextCourses, course]);

	const getCategorias = () => {
		const categCopy = categories.sort(function (a, b) {
			return a.Orden - b.Orden;
		});
		return categCopy;
	};

	const getSelectedCourses = (courseList) => {
		const localCursosCopy = courseList.filter(
			(elem) =>
				elem.categoria === selectedCategorie ||
				elem.categoria2 === selectedCategorie
		);

		return localCursosCopy;
	};

	const toggleTab = (index, nombre) => {
		setToggleState(index);
		setSelectedCategorie(nombre);
	};

	return (
		<MainContainer mobile={mobile} id={isProximos ? 'proximos' : 'cursos'}>
			<Container mobile={mobile}>
				{isProximos ? (
					<Title mobile={mobile}>Próximos cursos</Title>
				) : (
					<Title mobile={mobile}>Conocé nuestros cursos y diplomaturas</Title>
				)}
				{pending ? (
					<Loader />
				) : (
					<>
						{mobile ? (
							<CategoriesMobile
								toggleTab={toggleTab}
								categories={getCategorias}
							/>
						) : (
							<Categories>
								{getCategorias().map(({ Nombre, CategoriaID }, index) => (
									<Category
										id={CategoriaID}
										onClick={() => toggleTab(index, Nombre)}
										key={index}
										isActive={toggleState === index}>
										{Nombre}
									</Category>
								))}
							</Categories>
						)}

						<CardsContainer isProximos={isProximos} mobile={mobile}>
							{getSelectedCourses(isProximos ? courseDates : course).map(
								(elem, index) => (
									<Card
										isProximos={isProximos}
										info={elem}
										key={index}
										overridecolor={
											selectedCategorie ===
											'Diplomaturas y Programas Especializados'
												? elem.CategoriaID2
												: null
										}
									/>
								)
							)}
						</CardsContainer>
					</>
				)}
			</Container>
		</MainContainer>
	);
};

export default CursosCards;

const MainContainer = styled.div`
	width: ${({ mobile }) => (mobile ? '85%' : '80%')};
	max-width: 1095px;
	margin: ${({ mobile }) => (mobile ? 'auto' : '50px auto')};
`;
const Container = styled.div`
	font-family: ${theme.fontFamily.primary};
	margin: ${({ mobile }) => (mobile ? 'auto' : '50px auto')};
	overflow: ${({ mobile }) => (mobile ? 'hidden' : null)}; ;
`;

const Title = styled.h3`
	width: ${({ mobile }) => (mobile ? '90%' : null)};
	margin: ${({ mobile }) => (mobile ? '0 auto 5% 0' : ' 0 0 5% 0')};

	font-size: ${({ mobile }) => (mobile ? '1.5rem' : ' 2.5rem')};
	padding: ${({ mobile }) => (mobile ? '0' : ' 0 20px')};
	font-weight: 700;
	line-height: ${({ mobile }) => (mobile ? '1.625' : '2.5rem')};
`;
const Categories = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 0 3.3% 0;
`;

const Category = styled.button`
	white-space: ${({ mobile }) => (mobile ? 'wrap' : 'nowrap')};
	padding: 10px;
	margin: 10px;
	text-decoration: none;
	font-weight: 700;
	font-size: 1.25rem;
	cursor: pointer;
	line-height: 143%;
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	border: none;
	background-color: ${theme.color.white};
	color: ${({ isActive }) =>
		isActive ? theme.color.white : theme.color.darkGrey};
	background: ${({ isActive }) =>
		isActive ? theme.color.gradient : theme.color.white};
	/* transition: background 1s ease-out; */
`;
const CardsContainer = styled.div`
	width: ${({ mobile }) => (mobile ? '1000px' : '100%')};
	display: flex;
	flex-direction: row;
	justify-content: ${({ mobile }) => (mobile ? 'start' : 'center')};
	gap: ${({ mobile }) => (mobile ? '22px' : '40px')};
	flex-wrap: ${({ mobile }) => (mobile ? 'no-wrap' : 'wrap')};
	overflow-x: ${({ mobile }) => (mobile ? 'scroll' : 'null')};
`;
