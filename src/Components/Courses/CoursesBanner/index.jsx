import styled from "styled-components"
import { hexcodeToRGBA } from "../../../Helpers/colors"
import theme from "../../../Theme/base"

const CoursesBanner = ({ src, course }) => {
	const { CategoriaID, categoria, detalles, href, nombre } = course
	return (
		<ImageContainer src={src} colorFilter={CategoriaID}>
			<StyledTextContainer>
				<BannerName>Curso</BannerName>
				<StyledH1>{nombre}</StyledH1>

				<StyledParragraph>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam,
				</StyledParragraph>
			</StyledTextContainer>
		</ImageContainer>
	)
}

const ImageContainer = styled.div`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	height: 420px;
	box-shadow: inset 0 0 0 1000px
		${({ colorFilter }) => hexcodeToRGBA(theme.categories[colorFilter], 0.75)};
`

const StyledTextContainer = styled.div`
	position: relative;
	top: 35%;
	width: 80%;
	/* max-width: 1095px; */
	margin: auto;
`

const BannerName = styled.h3`
	font-family: ${theme.fontFamily.primary};
	color: ${theme.color.white};
	margin: 0px;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
`

const StyledH1 = styled.h1`
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: 900;
	font-size: 48px;
	line-height: 48px;
	color: #ffffff;
	margin: 9px 0;
	width: 55%;
`

const StyledParragraph = styled.p`
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	color: ${theme.color.white};
	width: 70%;
`

export default CoursesBanner
