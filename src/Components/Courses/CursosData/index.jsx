import styled from 'styled-components';
import theme from '../../../Theme/base';
import { useIsMobile } from '../../../Hooks/Client';

const CursosData = ({ course }) => {
  const { CategoriaID } = course;
  const { duracion, proximoInicio, modalidad, certificacion } = course.detalles;
  const mobile = useIsMobile();

  return (
    <CousosDataContainer mobile={mobile}>
      <CoursosInfo mobile={mobile}>
        <CousosDataTitle mobile={mobile} colorCategorie={CategoriaID}>
          Duracion
        </CousosDataTitle>
        <CousosDataContent mobile={mobile}>{duracion}</CousosDataContent>
      </CoursosInfo>
      <CoursosInfo mobile={mobile}>
        <CousosDataTitle mobile={mobile} colorCategorie={CategoriaID}>
          Próximo inicio
        </CousosDataTitle>
        <CousosDataContent mobile={mobile}>
          {proximoInicio ? proximoInicio : '24 de abril'}
        </CousosDataContent>
      </CoursosInfo>
      <CoursosInfo mobile={mobile}>
        <CousosDataTitle mobile={mobile} colorCategorie={CategoriaID}>
          Modalidad
        </CousosDataTitle>
        <CousosDataContent mobile={mobile}>{modalidad}</CousosDataContent>
      </CoursosInfo>
      <CoursosInfo mobile={mobile}>
        <CousosDataTitle mobile={mobile} colorCategorie={CategoriaID}>
          Certificación
        </CousosDataTitle>
        <CousosDataContent mobile={mobile}>
          {certificacion ? certificacion : 'Universitaria'}
        </CousosDataContent>
      </CoursosInfo>
    </CousosDataContainer>
  );
};

const CousosDataContainer = styled.div`
  display: flex;
  gap: ${({ mobile }) => !mobile && '2.5rem'};
  margin: ${({ mobile }) => (mobile ? '1.25rem 8.5%' : '2.5rem 0')};
  ${({ mobile }) => mobile && 'justify-content:space-between'};
  ${({ mobile }) => mobile && 'flex-wrap: wrap'};

  /* width: 70%; */
`;
const CoursosInfo = styled.div`
  width: ${({ mobile }) => (mobile ? '45%' : '20%')};
  ${({ mobile }) => mobile && 'margin-bottom: 0.5rem'};
`;

const CousosDataTitle = styled.h3`
  font-family: ${theme.fontFamily.tertiary};
  color: ${({ colorCategorie }) => theme.categories[colorCategorie]};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ mobile }) => (mobile ? '1rem' : '1.25rem')};
  line-height: 1.25rem;
  margin: 0px;
`;

const CousosDataContent = styled.p`
  font-family: ${theme.fontFamily.tertiary};
  color: ${theme.color.grey};
  font-style: normal;
  font-weight: normal;
  font-size: ${({ mobile }) => (mobile ? '0.875rem' : '1.25rem')};
  line-height: 1.5rem;
  margin: 0px;
`;

export default CursosData;
