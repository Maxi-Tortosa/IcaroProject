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
      <CourseContainer mobile={mobile}>
        <CourseList mobile={mobile}>
          {/*cuando la base de datos traiga el curso inscripto del alumno ahi vamos a importar getSimilarCourses que va a renderizar los demas cursos */}
          {relatedCourses &&
            relatedCourses.map((elem, index) => (
              <CourseItem mobile={mobile} key={index}>
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
	height: ${({ mobile }) => (mobile ? '13.25rem' : '25.93rem')};
	background: #ffffff;
	box-shadow: 0px 0px 10px #dadada;
	border-radius: 5px;
	margin-bottom: ${({ mobile }) => mobile && '2.5rem'};
	display: ${({ mobile }) => (mobile ? 'flex' : 'flex')};
	flex-direction: ${({ mobile }) => (mobile ? 'column' : 'column')};
`;
const TitleContainer = styled.div`
	display: ${({ mobile }) => (mobile ? null : 'flex')};
	flex-direction: ${({ mobile }) => (mobile ? null : 'row')};
	justify-content: ${({ mobile }) => (mobile ? null : 'space-between')};
	align-items: center;
	padding: 1.06rem 0 0.85rem 0;
	margin: 0 1.87rem;
`;

const Title = styled.h5`
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	margin: 0;
	font-weight: 700;
	font-size: ${({ mobile }) => (mobile ? '1rem' : '1.25rem')};
	line-height: 1.5rem;
	color: #29343e;
`;

const CourseContainer = styled.div`
	display: ${({ mobile }) => (mobile ? 'flex' : 'flex')};
	flex-direction: ${({ mobile }) => (mobile ? 'column' : 'column')};
`;

const CourseList = styled.ul`
	list-style-image: url('https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/listItemIcon.png?alt=media&token=d72206bb-61ef-497f-b875-cc41468df603');
	padding: ${({ mobile }) => (mobile ? '0 2rem' : '0 2rem')};
	margin: ${({ mobile }) => mobile && '0'};
	list-style-position: inside;
	height: ${({ mobile }) => mobile && '8.75rem'};
	${({ mobile }) => mobile && 'overflow-y:scroll'};
`;

const CourseItem = styled.li`
	font-family: 'Montserrat';
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	margin: 0 0 0.6rem 0;
	font-weight: 400;
	line-height: 1.25rem;

	a {
		color: ${theme.color.darkGrey};
		text-decoration: none;
		font-size: ${({ mobile }) => (mobile ? '0.875rem' : '1rem')};
	}
	a:hover {
		text-decoration: underline;
	}
`;
