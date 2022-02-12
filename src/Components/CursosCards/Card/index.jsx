import styled from "styled-components"
import theme from "../../../Theme/base"
import { Link } from "react-router-dom"

const Card = ({ isProximos, info }) => {
	const { clasesSemanales, duracion, modalidad } = info.detalles

	return (
		<CardContainer isProximos={isProximos}>
			<TitleContainer
				to={`/cursos/${info.href}`}
				categoriacolor={info.CategoriaID}
			>
				<CardTitle isProximos={isProximos} categoriacolor={info.CategoriaID}>
					{info.nombre}
				</CardTitle>
			</TitleContainer>

			<CardContent isProximos={isProximos}>
				{isProximos ? (
					<>
						<CardInfoContainer>
							<p>
								<span>Fecha de inicio:</span> XX de octubre
							</p>
							<p>
								<span>Duración:</span> {duracion}
							</p>
							<p>
								<span>Modalidad:</span> {modalidad}
							</p>
							<p>
								<span>Clases semanales:</span> {clasesSemanales}
							</p>
						</CardInfoContainer>
						<ConoceMasBttn to={`/cursos/${info.href}`}>
							Conoce Mas
						</ConoceMasBttn>
					</>
				) : (
					<>
						<CourseContent isItalic>{duracion || `  `}</CourseContent>
						<CourseContent>$20.000</CourseContent>
						<VerMasButton to={`/cursos/${info.href}`}>Ver Mas</VerMasButton>
					</>
				)}
			</CardContent>
		</CardContainer>
	)
}

export default Card

const CardContainer = styled.div`
	width: ${({ isProximos }) => (isProximos ? "29%" : "20%")};
	/* margin: 10px 20px; */
	/* ${({ isProximos }) => (isProximos ? "29%" : "20%")}; */
	${({ isProximos }) => isProximos && "padding-top: 30px;  margin: 10px 20px;"}
	background: #ffffff;
	box-shadow: ${theme.shadow.boxShadow};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	font-family: ${theme.fontFamily.primary};
	justify-content: space-between;

	&:hover {
		box-shadow: ${theme.shadow.boxShadowDarker};
		transition: box-shadow 1s ease-out;
	}
`
const TitleContainer = styled(Link)`
	background-color: ${theme.color.white};
	width: 80%;
	margin: auto;
	text-decoration: none;

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

	color: ${({ isProximos, categoriacolor }) =>
		isProximos ? theme.color.black : theme.categories[categoriacolor]};
`
const CardContent = styled.div`
	padding: ${({ isProximos }) => (isProximos ? "0px" : "20px")};

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
