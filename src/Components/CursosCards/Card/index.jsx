import { Link } from "react-router-dom"
import styled from "styled-components"
import theme from '../../../Theme/base';

const Card = ({ isProximos, info, overridecolor, isMobile, comision }) => {
  const { clasesSemanales, duracion, modalidad } = info.detalles;
  const { fechaInicio } = info;

  return (
    <CardContainer isMobile={isMobile} isProximos={isProximos}>
      <TitleContainer
        to={`/cursos/${info.href}`}
        categoriacolor={info.CategoriaID}
        overridecolor={overridecolor}
      >
        <CardTitle
          isProximos={isProximos}
          isMobile={isMobile}
          categoriacolor={info.CategoriaID}
          overridecolor={overridecolor}
        >
          {info.nombre}
        </CardTitle>
      </TitleContainer>

      <CardContent isProximos={isProximos}>
        <>
          <CourseContent isItalic>{duracion || `  `}</CourseContent>
          <CourseContent>
            {comision?.precioComision
              ? `$${comision?.precioComision}`
              : info.precioInfo}
          </CourseContent>
          <VerMasButton to={`/cursos/${info.href}`}>Ver Mas</VerMasButton>
        </>
      </CardContent>
    </CardContainer>
  );
};

export default Card

const CardContainer = styled.div`
	width: ${({ isMobile, isProximos }) =>
		isProximos ? (isMobile ? "250px" : "29%") : isMobile ? "185px" : "20%"};
	max-width: ${({ isMobile, isProximos }) =>
		isProximos ? !isMobile && "295px" : !isMobile && "185px"};
	background: #ffffff;
	box-shadow: ${theme.shadow.boxShadow};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	font-family: ${theme.fontFamily.primary};
	justify-content: space-between;
	margin: ${({ isMobile }) => isMobile && "10px auto"};
	/* padding-top: ${({ isMobile }) => (isMobile ? "5%" : null)}; */
	padding: 20px;
`
const TitleContainer = styled(Link)`
	background-color: ${theme.color.white};
	/* width: 80%; */
	margin: auto;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
		color: ${({ isProximos, categoriacolor }) =>
			isProximos ? theme.color.black : theme.categories[categoriacolor]};
	}
`

const CardTitle = styled.h5`
	font-weight: 700;
	font-size: 1.12rem;
	text-align: center;
	margin: 0px;

	color: ${({ categoriacolor, overridecolor }) =>
		overridecolor
			? theme.categories[overridecolor]
			: theme.categories[categoriacolor]};
`
const CardContent = styled.div`
	/* padding: ${({ isProximos }) => (isProximos ? "0px" : "20px")}; */
	p {
		font-size: 1rem;
		line-height: 1.18rem;
		color: ${theme.color.black};
		span {
			font-weight: 700;
		}
	}
`
const CardInfoContainer = styled.div`
	padding: 20px;
`

const CourseContent = styled.p`
	font-family: ${theme.fontFamily.tertiary};
	${({ isItalic }) => isItalic && "font-style: italic;"}
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	color: #282828;
`
const ConoceMasBttn = styled(Link)`
	background: #1744ff;
	border-radius: 0px 0px 10px 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	font-family: ${theme.fontFamily.primary};
	text-decoration: none;
	font-weight: 600;
	color: white;
	margin: 0;
	text-align: center;
	padding: 9% 0 9% 0;
	cursor: pointer;
`

const VerMasButton = styled(Link)`
	display: block;
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	text-decoration-line: underline;
	cursor: pointer;
	color: #282828;
`
