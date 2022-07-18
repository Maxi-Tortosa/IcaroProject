import Icons from './Icons';
import styled from 'styled-components';
import theme from '../../../Theme/base';
import { useGetColors, useIsMobile } from '../../../Hooks/Client';

const IconsInformation = ({ course }) => {
  const { detalles, CategoriaID } = course;

  const mobile = useIsMobile();

  return (
    <IconsInformationContainer mobile={mobile}>
      <IconContainer mobile={mobile}>
        <Icons.ModalidadCurso fill={useGetColors(CategoriaID)} />
        <Details mobile={mobile}>
          {detalles.modalidad
            ? detalles.modalidad
            : 'Clases en vivo, 1 vez a la semana, 2 horas'}
        </Details>
      </IconContainer>
      <IconContainer mobile={mobile}>
        <Icons.BeneficioCurso fill={useGetColors(CategoriaID)} />
        <Details mobile={mobile}>
          {detalles.beneficio
            ? detalles.beneficio
            : 'Docentes avalados por su experiencia en el rubro'}
        </Details>
      </IconContainer>
      <IconContainer mobile={mobile}>
        <Icons.CertificacionCurso fill={useGetColors(CategoriaID)} />
        <Details mobile={mobile}>
          {detalles.certificacion
            ? detalles.certificacion
            : 'Certificación universitaria con el aval de la UNC'}
        </Details>
      </IconContainer>
      <IconContainer mobile={mobile}>
        <Icons.RequisitosCurso fill={useGetColors(CategoriaID)} />
        <Details mobile={mobile}>
          {detalles.requisitos
            ? detalles.requisitos
            : 'Requisitos: Computadora compatible con OpenGl 4.1 y conexión a internet'}
        </Details>
      </IconContainer>
    </IconsInformationContainer>
  );
};

const IconsInformationContainer = styled.div`
	margin: ${({ mobile }) => (mobile ? '2.12rem 0 1.31rem 0' : '50px 0')};

	display: flex;
	justify-content: space-between;
	${({ mobile }) => mobile && 'flex-wrap:wrap'};
	padding: ${({ mobile }) => (mobile ? '0 1.93rem' : '0 20px')};
	/* flex-grow: 1; */
`;

const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	align-items: center;
	width: ${({ mobile }) => (mobile ? '42.5%' : '135px')};
	${({ mobile }) => mobile && 'margin-bottom:1.25rem'};
`;

const Details = styled.p`
	font-family: ${theme.fontFamily.primary};
	color: ${theme.color.black};
	text-align: center;
	font-style: normal;
	font-weight: normal;
	font-size: ${({ mobile }) => (mobile ? '13px' : '16px')};
	line-height: 24px;
	margin: 0px;
`;

export default IconsInformation;
