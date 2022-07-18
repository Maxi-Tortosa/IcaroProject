import React, { useState, useContext, useEffect } from 'react';

import CurrentCourseCard from './../CurrentCourseCard/index';
import { projectContext } from '../../../../Context/ProjectContext';
import styled from 'styled-components';
import theme from '../../../../Theme/base';
import { useIsMobile } from '../../../../Hooks/Client';
import Loader from '../../../Shared/Loader';

const TusCursos = () => {
  const mobile = useIsMobile();
  const { course } = useContext(projectContext);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    if (course.length > 0) {
      setPending(false);
    }
  }, [course]);

  // useEffect(() => {
  // 	console.log(course[0]);
  // }, [course]);

  // const arr = course && course.slice(0, 4);

  return (
    <TusCursosMainContainer mobile={mobile}>
      <TitleContainer mobile={mobile}>
        <Title mobile={mobile}>Tus cursos</Title>
      </TitleContainer>
      {pending ? (
        <Loader />
      ) : (
        <>
          <CardContainer mobile={mobile}>
            {course.length > 0 ? (
              course.map((elem, index) => (
                <CurrentCourseCard key={index} course={elem} />
              ))
            ) : (
              <CardContainerText>
                No estás inscripto a ningún curso
              </CardContainerText>
            )}
          </CardContainer>
        </>
      )}
    </TusCursosMainContainer>
  );
};

export default TusCursos;

const TusCursosMainContainer = styled.div`
  width: 100%;
  height: ${({ mobile }) => (mobile ? '16rem' : '22.82rem')};
  background: #ffffff;
  box-shadow: 0px 0px 10px #dadada;
  border-radius: 5px;
  margin-bottom: ${({ mobile }) => (mobile ? '2.5rem' : '1.3%')};
  display: flex;
  flex-direction: column;
  padding: 0 0 1.5rem 0;
`;

const TitleContainer = styled.div`
  display: ${({ mobile }) => (mobile ? null : 'flex')};
  flex-direction: ${({ mobile }) => (mobile ? null : 'row')};
  justify-content: ${({ mobile }) => (mobile ? null : 'space-between')};
  align-items: center;
  padding: ${({ mobile }) =>
    mobile ? '1.25rem 0 0.5rem 0' : '1.25rem 0 1.25rem 0'};
  margin: 0 1.87rem;
`;
const Title = styled.h5`
  font-family: ${({ mobile }) =>
    mobile ? null : `${theme.fontFamily.primary}`};
  margin: 0;
  font-weight: 700;
  font-size: ${({ mobile }) => (mobile ? '1rem' : '1.25rem')};
  line-height: 24px;
  color: #29343e;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 0.62rem;
  height: ${({ mobile }) => (mobile ? '100%' : '74%')};
  margin: 0 1.87rem;
  flex: 1;

  ${({ mobile }) =>
    !mobile &&
    `::-webkit-scrollbar {
		height: 0.8rem;
	}`};
  ${({ mobile }) =>
    !mobile &&
    `::-webkit-scrollbar-thumb {
		
		background-color: ${theme.color.grey};
		border-radius: 10px;
	} `};
`;

const CardContainerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fontFamily.primary};
`;
