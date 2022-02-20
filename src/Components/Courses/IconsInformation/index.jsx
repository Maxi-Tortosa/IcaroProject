import theme from "../../../Theme/base"
import styled from "styled-components"
import Icons from "./Icons"

const IconsInformation = ({ course }) => {
	const { detalles, CategoriaID } = course

	return (
		<IconsInformationContainer>
			<IconContainer>
				<Icons.ModalidadCurso fill={theme.categories[CategoriaID]} />
				<Details>
					{detalles.modalidad
						? detalles.modalidad
						: "Clases en vivo, 1 vez a la semana, 2 horas"}
				</Details>
			</IconContainer>
			<IconContainer>
				<Icons.BeneficioCurso fill={theme.categories[CategoriaID]} />
				<Details>
					{detalles.beneficio
						? detalles.beneficio
						: "Docentes avalados por su experiencia en el rubro"}
				</Details>
			</IconContainer>
			<IconContainer>
				<Icons.CertificacionCurso fill={theme.categories[CategoriaID]} />
				<Details>
					{detalles.certificacion
						? detalles.certificacion
						: "Certificación universitaria con el aval de la UNC"}
				</Details>
			</IconContainer>
			<IconContainer>
				<Icons.RequisitosCurso fill={theme.categories[CategoriaID]} />
				<Details>
					{detalles.requisitos
						? detalles.requisitos
						: "Requisitos: Computadora compatible con OpenGl 4.1 y conexión a internet"}
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
