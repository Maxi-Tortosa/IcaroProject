import { useContext, useEffect, useState } from 'react';

import LinearBttn from '../../Shared/Buttons/LinearBttn';
import { Timestamp } from 'firebase/firestore';
import { projectContext } from '../../../Context/ProjectContext';
import styled from 'styled-components';
import theme from '../../../Theme/base';
import { useIsMobile } from '../../../Hooks/Client';
import { turnTimestampIntoDate } from '../../../Utils';
import PreInscribirmeModal from '../../Shared/Modals/PreInscribirmeModal';
import InscribirmeModal from '../../Shared/Modals/InscribirmeModal';

const InscribiteBox = ({ course }) => {
  const { nextCourses } = useContext(projectContext);
  const { CategoriaID } = course;
  const [courseDates, setCoursesDates] = useState([]);
  const mobile = useIsMobile();
  const [preinscripcionModalOpen, setPreinscripcionModalOpen] = useState(false);
  const [inscripcionModalOpen, setInscripcionModalOpen] = useState(false);

  useEffect(() => {
    const date = Timestamp.now().toDate();

    const filteredComision = nextCourses.filter((crs) => {
      return (
        crs.nombreCurso === course.nombre && crs.fechaInicio.toDate() > date
      );
    });

    return setCoursesDates(filteredComision);
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

  function openPreinscripcionModal() {
    setPreinscripcionModalOpen(true);
  }

  function closePreinscripcionModal() {
    setPreinscripcionModalOpen(false);
  }

  function openInscripcionModal() {
    setInscripcionModalOpen(true);
  }

  function closeInscripcionModal() {
    setInscripcionModalOpen(false);
  }

  return (
    <InscribiteBoxContainer mobile={mobile}>
      <TitleBoxContainer mobile={mobile} colorFilter={CategoriaID}>
        <Title mobile={mobile}>Inscribite hoy</Title>
        {courseDates.length > 1 && (
          <>
            <Description mobile={mobile}>12 cuotas sin interés de</Description>
            <Title mobile={mobile}>${courseDates[0]?.precioComision}</Title>
          </>
        )}
      </TitleBoxContainer>
      <IcribiteContent mobile={mobile}>
        {courseDates.length < 1 ? (
          <NoComisionBox>
            <p>
              ¡Dejanos tus datos y nos comunicaremos apenas se abra una
              comisión!{' '}
            </p>
            <LinearBttn mobile={mobile} onClick={openPreinscripcionModal}>
              Pre-inscribirme
            </LinearBttn>
          </NoComisionBox>
        ) : (
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
              <TableColumn extraSpace={11}>{''}</TableColumn>
            </TableHeader>
            {courseDates.map((nextCourse) => {
              const inicio = turnTimestampIntoDate(nextCourse.fechaInicio);
              const fin = turnTimestampIntoDate(nextCourse.fechaFin);
              const periodo = Math.floor(
                (nextCourse.fechaFin.toDate() -
                  nextCourse.fechaInicio.toDate()) /
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
                      {nextCourse.duracionSemanas
                        ? nextCourse.duracionSemanas
                        : periodo}
                    </TableColumn>
                  )}
                  <TableColumn mobile={mobile}>
                    {nextCourse.diaDeClases}
                  </TableColumn>
                  <TableColumn mobile={mobile}>
                    <LinearBttn mobile={mobile} onClick={openInscripcionModal}>
                      Inscribirme
                    </LinearBttn>
                  </TableColumn>
                </TableRow>
              );
            })}
          </TableContent>
        )}
      </IcribiteContent>
      <PreInscribirmeModal
        modalIsOpen={preinscripcionModalOpen}
        closeModal={closePreinscripcionModal}
        cursoInteres={course}
      />
      <InscribirmeModal
        modalIsOpen={inscripcionModalOpen}
        closeModal={closeInscripcionModal}
        cursoInteres={course}
        comision={courseDates[0]}
      />
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
  ${({ extraSpace }) => extraSpace && `padding: ${extraSpace}px`}
`;

const NoComisionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 60px 60px 60px;
`;

export default InscribiteBox;
