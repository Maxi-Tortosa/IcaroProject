import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';

import LinearBttn from '../../Buttons/LinearBttn';
import db from '../../../Firebase';
import { projectContext } from '../../../Context/ProjectContext';
import styled from 'styled-components';
import theme from '../../../Theme/base';

const InscribiteBox = ({ course }) => {
	const { nextCourses, nombres } = useContext(projectContext);
	const { CategoriaID } = course;

	const [courseDates, setCoursesDates] = useState([]);

	useEffect(() => {
		let nextDates = [];
		const date = Timestamp.now().toDate();

		nextCourses
			.filter((crs) => crs.nombreCurso === course.nombre)
			.map((course) =>
				course.fechaInicio.toDate() > date
					? (nextDates = [...nextDates, course])
					: null
			);

		return setCoursesDates(nextDates);
	}, [nextCourses, course]);

	/*CÓDIGO PARA AGREGAR CURSOS PRÓXIMOS AUTOMÁTICAMENTE */

	// useEffect(() => {
	// 	const fec1 = new Date('Jul 9, 2022');
	// 	const parse1 = Timestamp.fromDate(fec1);

	// 	const fec2 = new Date('Aug 9, 2022');
	// 	const parse2 = Timestamp.fromDate(fec2);

	// 	console.log(nombres);

	// 	nombres.map((nombre) =>
	// 		addDoc(collection(db, 'FechasCursos'), {
	// 			nombreCurso: nombre,
	// 			fechaInicio: parse1,
	// 			fechaFin: parse2,
	// 			infoCursado: 'Esto es un ejemplo',
	// 		})
	// 	);
	// }, []);

	return (
		<InscribiteBoxContainer>
			<TitleBoxContainer colorFilter={CategoriaID}>
				<Title>Inscribite hoy</Title>
				<Description>12 cuotas sin interés de</Description>
				<Title>$2500</Title>
			</TitleBoxContainer>
			<IcribiteContent>
				<TableContent>
					<TableHeader>
						<TableColumn isHeader>Fecha de inicio/fin</TableColumn>
						<TableColumn isHeader>Duración</TableColumn>
						<TableColumn isHeader>Días de cursado</TableColumn>
						<TableColumn>{''}</TableColumn>
					</TableHeader>
					{courseDates.map((nextCourse) => {
						const inicio = nextCourse.fechaInicio
							.toDate()
							.toJSON()
							.slice(0, 10);
						const fin = nextCourse.fechaFin.toDate().toJSON().slice(0, 10);
						const periodo = Math.floor(
							(nextCourse.fechaFin.toDate() - nextCourse.fechaInicio.toDate()) /
								(1000 * 60 * 60 * 24) /
								30
						);
						return (
							<TableRow>
								<TableColumn>
									{inicio} / {fin}
								</TableColumn>
								<TableColumn>
									{periodo > 1 ? `${periodo} Meses` : `${periodo} Mes`}
								</TableColumn>
								<TableColumn>{nextCourse.infoCursado}</TableColumn>
								<TableColumn>
									<LinearBttn>Inscribirme</LinearBttn>
								</TableColumn>
							</TableRow>
						);
					})}
				</TableContent>
			</IcribiteContent>
		</InscribiteBoxContainer>
	);
};

const InscribiteBoxContainer = styled.div`
	margin: auto;
	background: #ffffff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
`;

const TitleBoxContainer = styled.div`
	padding: 20px;
	border-radius: 10px 10px 0px 0px;
	background: ${({ colorFilter }) => theme.categories[colorFilter]};
	color: ${theme.color.white};
	text-align: center;
`;
const Title = styled.h5`
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 20px;
	color: ${theme.color.white};
	margin: 0px;
`;

const Description = styled.p`
	font-family: ${theme.fontFamily.primary};
	color: ${theme.color.white};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	margin: 0px;
`;

const IcribiteContent = styled.div`
	display: block;
`;

const TableContent = styled.div`
	padding: 20px 60px 60px 60px;
`;
const TableHeader = styled.header`
	display: flex;
	gap: 30px;
	text-align: center;
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	color: ${theme.color.blue};
`;
const TableRow = styled.div`
	display: flex;
	text-align: center;
	gap: 30px;
	padding: 10px 0;
`;
const TableColumn = styled.div`
	flex: 1;
	${({ isHeader }) => !isHeader && `color: ${theme.color.lightGrey};`}
`;

export default InscribiteBox;
