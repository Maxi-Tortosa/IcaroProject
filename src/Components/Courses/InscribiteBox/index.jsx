import { useContext, useEffect, useState } from 'react';

import LinearBttn from '../../Shared/Buttons/LinearBttn';
import { Timestamp } from 'firebase/firestore';
import { projectContext } from '../../../Context/ProjectContext';
import styled from 'styled-components';
import theme from '../../../Theme/base';
import { useIsMobile } from '../../../Hooks/Client';

const InscribiteBox = ({ course }) => {
  const { nextCourses } = useContext(projectContext);
  const { CategoriaID } = course;
  const [courseDates, setCoursesDates] = useState([]);
  const mobile = useIsMobile();

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
    <InscribiteBoxContainer mobile={mobile}>
      <TitleBoxContainer mobile={mobile} colorFilter={CategoriaID}>
        <Title mobile={mobile}>Inscribite hoy</Title>
        <Description mobile={mobile}>12 cuotas sin interés de</Description>
        <Title mobile={mobile}>$2500</Title>
      </TitleBoxContainer>
      <IcribiteContent mobile={mobile}>
        <TableContent mobile={mobile}>
          <TableHeader mobile={mobile}>
            <TableColumn mobile={mobile} isHeader>
              {mobile ? 'Fecha' : 'Fecha de inicio/fin'}
            </TableColumn>
            {!mobile && (
              <TableColumn mobile={mobile} isHeader>
                Duración
              </TableColumn>
            )}
            <TableColumn mobile={mobile} isHeader>
              Días de cursado
            </TableColumn>
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
              <TableRow mobile={mobile}>
                <TableColumn mobile={mobile}>
                  {inicio} / {fin}
                </TableColumn>
                {!mobile && (
                  <TableColumn>
                    {periodo > 1 ? `${periodo} Meses` : `${periodo} Mes`}
                  </TableColumn>
                )}
                <TableColumn mobile={mobile}>
                  {nextCourse.infoCursado}
                </TableColumn>
                <TableColumn mobile={mobile}>
                  <LinearBttn mobile={mobile}>Inscribirme</LinearBttn>
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
  ${({ mobile }) => mobile && 'width:90%'};
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const TitleBoxContainer = styled.div`
  padding: ${({ mobile }) => (mobile ? '0.5rem' : '1.25rem')};
  border-radius: 10px 10px 0px 0px;
  background: ${({ colorFilter }) => theme.categories[colorFilter]};
  color: ${theme.color.white};
  text-align: center;
`;
const Title = styled.h5`
  font-family: ${theme.fontFamily.tertiary};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ mobile }) => (mobile ? '0.875rem' : '1.25rem')};
  line-height: 20px;
  color: ${theme.color.white};
  margin: 0px;
`;

const Description = styled.p`
  font-family: ${theme.fontFamily.primary};
  color: ${theme.color.white};
  font-style: normal;
  font-weight: normal;
  font-size: ${({ mobile }) => (mobile ? '0.75rem' : '1rem')};
  line-height: 24px;
  margin: 0px;
`;

const IcribiteContent = styled.div`
  display: block;
`;

const TableContent = styled.div`
  padding: ${({ mobile }) =>
    mobile ? '9px 5px 10px 13px ' : '20px 60px 60px 60px'};
`;
const TableHeader = styled.header`
  display: flex;
  gap: 30px;
  text-align: center;
  font-family: ${theme.fontFamily.tertiary};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ mobile }) => (mobile ? '10px' : '16px')};
  line-height: 24px;
  color: ${theme.color.darkBlue};
`;
const TableRow = styled.div`
  display: flex;
  text-align: center;
  gap: 30px;
  padding: 10px 0;
  font-size: ${({ mobile }) => mobile && '0.625rem'};
`;
const TableColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isHeader }) => !isHeader && `color: ${theme.color.grey};`}
`;

export default InscribiteBox;
