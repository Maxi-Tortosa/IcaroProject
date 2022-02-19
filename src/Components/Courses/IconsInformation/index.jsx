import theme from "../../../Theme/base"
import styled from "styled-components"

const IconsInformation = ({ course }) => {
	const { detalles } = course
	const icons = {
		beneficioCurso: "/img/beneficio-curso.png",
		certificacionCurso: "/img/certificacion-curso.png",
		modalidadCurso: "/img/modalidad-curso.png",
		requisitosCurso: "/img/requisitos-curso.png",
	}

	return (
		<IconsInformationContainer>
			<IconContainer>
				<Icon src={icons.modalidadCurso} alt="modalidad curso" />
				<Details>
					{detalles.modalidad
						? detalles.modalidad
						: "Clases en vivo, 1 vez a la semana, 2 horas"}
				</Details>
			</IconContainer>
			<IconContainer>
				<Icon src={icons.beneficioCurso} alt="modalidad curso" />
				<Details>
					{detalles.beneficio
						? detalles.beneficio
						: "Docentes avalados por su experiencia en el rubro"}
				</Details>
			</IconContainer>
			<IconContainer>
				<Icon src={icons.certificacionCurso} alt="modalidad curso" />
				<Details>
					{detalles.requisitos
						? detalles.requisitos
						: "Requisitos: Computadora compatible con OpenGl 4.1 y conexión a internet"}
				</Details>
			</IconContainer>
			<IconContainer>
				<Icon src={icons.requisitosCurso} alt="modalidad curso" />
				<Details>
					{detalles.modalidad
						? detalles.modalidad
						: "Clases en vivo, 1 vez a la semana, 2 horas"}
				</Details>
			</IconContainer>
		</IconsInformationContainer>
	)
}

const IconsInformationContainer = styled.div`
	margin: 50px 0;

	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	/* flex-grow: 1; */
`

const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	align-items: center;
	width: 135px;
`
const Icon = styled.img`
	height: 80px;
	width: 80px;
`

const Details = styled.p`
	font-family: ${theme.fontFamily.primary};
	color: ${theme.color.black};
	text-align: center;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	margin: 0px;
`

export default IconsInformation
