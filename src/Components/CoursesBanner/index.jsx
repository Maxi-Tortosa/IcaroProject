import styled from "styled-components"
import theme from "../../Theme/base"
import IngresaBttn from "../Buttons/IngresaBttn"

const CoursesBanner = ({ src }) => {
	return (
		<ImageContainer src={src}>
			<StyledTextContainer>
				{/* <StyledH1>NUESTRO COMPROMISO ES CON EL FUTURO</StyledH1>
				<StyledParragraph>
					Encuentra con Icaro la oportunidad de aprender como nunca antes lo
					habías hecho. Donde quiera que estés, te invitamos a formar parte de
					nuestra comunidad y prepararte para el futuro.
				</StyledParragraph> */}
				{/* <IngresaBttn /> */}
			</StyledTextContainer>
		</ImageContainer>
	)
}

const ImageContainer = styled.div`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	height: 420px;
`

const StyledTextContainer = styled.div`
	position: relative;
	top: 30%;
	width: 80%;
	max-width: 1095px;
	margin: auto;
`

const StyledH1 = styled.h1`
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: 900;
	font-size: 48px;
	line-height: 48px;
	color: #ffffff;
	width: 55%;
`

const StyledParragraph = styled.p`
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 24px;
	color: #ffffff;
	width: 80%;
`

export default CoursesBanner
