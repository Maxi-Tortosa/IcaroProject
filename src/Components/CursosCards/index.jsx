import { useContext, useEffect, useState } from 'react';

import Card from './Card';
import CategoriesMobile from '../CategoriesMobile';
import DotIndicatorCards from './DotIndicatorCards';
import Loader from '../Shared/Loader';
import ProximosCard from './ProximosCard';
import { Timestamp } from 'firebase/firestore';
import { projectContext } from '../../Context/ProjectContext';
import styled from 'styled-components';
import theme from '../../Theme/base';
import { useIsMobile } from '../../Hooks/Client';
import { sortArrayByOrdenValue } from '../../Utils';

const CursosCards = ({ isProximos }) => {
  const { course } = useContext(projectContext);
  const { categories } = useContext(projectContext);
  const { nextCourses } = useContext(projectContext);

  const [nextCoursesList, setNextCoursesList] = useState();
  const [pending, setPending] = useState(true);
  const [toggleState, setToggleState] = useState(0);
  const [selectedCategorie, setSelectedCategorie] = useState(
    categories.length > 0 ? categories[0].Nombre : 'Programación'
  );
  const [courseDates, setCoursesDates] = useState([]);
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);

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
      setNextCoursesList(nextCoursesInfo);
      setCoursesDates(nextDates);
    }
  }, [nextCourses, course]);

  const getCategorias = () => {
    if (isProximos) {
      let categoriasArray = [];
      nextCoursesList.map((a) => categoriasArray.push(a.categoria));
      const filtered = categories.filter((cat) =>
        categoriasArray.includes(cat.Nombre)
      );
      return sortArrayByOrdenValue(filtered);
    } else {
      return sortArrayByOrdenValue(categories);
    }
  };

  const getSelectedCourses = (courseList) => {
    if (isProximos) {
      const localCursosCopy = nextCoursesList.filter(
        (elem) =>
          elem.categoria === selectedCategorie ||
          elem.categoria2 === selectedCategorie
      );
      return localCursosCopy;
    } else {
      const localCursosCopy = courseList.filter(
        (elem) =>
          elem.categoria === selectedCategorie ||
          elem.categoria2 === selectedCategorie
      );

      return localCursosCopy;
    }
  };

  const toggleTab = (index, nombre) => {
    setToggleState(index);
    setSelectedCategorie(nombre);
  };

  return (
    <MainContainer isMobile={isMobile} id={isProximos ? 'proximos' : 'cursos'}>
      <Container isMobile={isMobile} isProximos={isProximos}>
        {isProximos ? (
          <Title isMobile={isMobile}>Próximos cursos</Title>
        ) : (
          <Title isMobile={isMobile}>
            Conocé nuestros cursos y diplomaturas
          </Title>
        )}
        {pending ? (
          <Loader />
        ) : (
          <>
            {isMobile ? (
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
                    isActive={toggleState === index}
                  >
                    {Nombre}
                  </Category>
                ))}
              </Categories>
            )}

            <CardsContainer
              length={
                getSelectedCourses(isProximos ? courseDates : course).length
              }
              gap={isProximos ? 10 : 5}
              isProximos={isProximos}
              isMobile={isMobile}
              index={index}
            >
              {getSelectedCourses(isProximos ? courseDates : course).map(
                (elem, index) =>
                  isProximos ? (
                    <ProximosCard
                      isProximos={isProximos}
                      info={elem}
                      comision={
                        nextCoursesList.filter(
                          (item) => item.nombreCurso === elem.nombre
                        )[0]
                      }
                      key={index}
                      isMobile={isMobile}
                      overridecolor={
                        selectedCategorie ===
                        'Diplomaturas y Programas Especializados'
                          ? elem.CategoriaID2
                          : null
                      }
                    />
                  ) : (
                    <Card
                      isProximos={isProximos}
                      info={elem}
                      key={index}
                      comision={
                        nextCoursesList.filter(
                          (item) => item.nombreCurso === elem.nombre
                        )[0]
                      }
                      isMobile={isMobile}
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
            {isMobile &&
              getSelectedCourses(isProximos ? courseDates : course).length >
                1 && (
                <DotIndicatorWrapper>
                  <DotIndicatorCards
                    index={index}
                    setIndex={setIndex}
                    selectedCategorie={selectedCategorie}
                    length={
                      getSelectedCourses(isProximos ? courseDates : course)
                        .length
                    }
                    overrideColor="grey"
                  />
                </DotIndicatorWrapper>
              )}
          </>
        )}
      </Container>
    </MainContainer>
  );
};

const DotIndicatorWrapper = styled.div`
  margin: 20px auto;
  width: fit-content;
`;

const getCalcString = (index, gap, positive, isProximos) => {
  const sign = positive ? '' : '-';
  const percentage = index * (isProximos ? 100 : 65);
  const action = positive ? '+' : '-';
  const pixels = index * gap;

  return `calc(${sign}${percentage}% ${action} ${pixels}px ${
    !isProximos ? '+ 18%' : ''
  })`;
};

const MainContainer = styled.div`
  width: ${({ isMobile }) => (isMobile ? '90%' : '80%')};
  overflow: hidden;
  max-width: ${({ isMobile }) => !isMobile && '1095px'};
  margin: ${({ isMobile }) => (isMobile ? '0 auto' : '50px auto')};
`;
const Container = styled.div`
  font-family: ${theme.fontFamily.primary};
  margin: ${({ isMobile }) => (isMobile ? 'auto' : '50px auto')};
  margin-bottom: ${({ isProximos }) => isProximos && '0'};
`;

const Title = styled.h3`
  width: ${({ isMobile }) => (isMobile ? '90%' : null)};
  margin: ${({ isMobile }) => (isMobile ? '0 auto 5% 0' : ' 0 0 5% 0')};

  font-size: ${({ isMobile }) => (isMobile ? '1.5rem' : ' 2.5rem')};
  padding: ${({ isMobile }) => (isMobile ? '0' : ' 0 20px')};
  font-weight: 700;
  line-height: ${({ isMobile }) => (isMobile ? '1.625' : '2.5rem')};
`;
const Categories = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 3.3% 0;
`;

const Category = styled.button`
  white-space: ${({ isMobile }) => (isMobile ? 'wrap' : 'nowrap')};
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
`;
const isMobileStyles = (gap, length, index, isProximos) => {
  return `
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(${length}, minmax(0, 1fr));
		column-gap: ${gap}px;
		width: calc(
			${length * (isProximos ? 100 : 65)}% +
				${gap * (length - 1)}px
		);
		margin-left: ${getCalcString(index, gap, false, isProximos)};
		transition: margin .5s;
	`;
};
const desktopStyles = () => {
  return `
	width: 100%;
	transition: margin 1s ease 0s;
	display: flex;
	flex-flow: row wrap;
	-webkit-box-pack: center;
	justify-content: center;
	gap: 40px;
`;
};

const CardsContainer = styled.div`
  ${({ isMobile, gap, length, index, isProximos }) =>
    isMobile ? isMobileStyles(gap, length, index, isProximos) : desktopStyles()}
`;

export default CursosCards;
