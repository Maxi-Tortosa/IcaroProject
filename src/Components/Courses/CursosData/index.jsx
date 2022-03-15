import styled from "styled-components"
import theme from "../../../Theme/base"

const CursosData = ({ course }) => {
	const { CategoriaID } = course
	const { duracion, proximoInicio, modalidad, certificacion } = course.detalles
	return (
		<CousosDataContainer>
			<CoursosInfo>
				<CousosDataTitle colorCategorie={CategoriaID}>Duracion</CousosDataTitle>
				<CousosDataContent>{duracion}</CousosDataContent>
			</CoursosInfo>
			<CoursosInfo>
				<CousosDataTitle colorCategorie={CategoriaID}>
					Próximo inicio
				</CousosDataTitle>
				<CousosDataContent>
					{proximoInicio ? proximoInicio : "24 de abril"}
				</CousosDataContent>
			</CoursosInfo>
			<CoursosInfo>
				<CousosDataTitle colorCategorie={CategoriaID}>
					Modalidad
				</CousosDataTitle>
				<CousosDataContent>{modalidad}</CousosDataContent>
			</CoursosInfo>
			<CoursosInfo>
				<CousosDataTitle colorCategorie={CategoriaID}>
					Certificación
				</CousosDataTitle>
				<CousosDataContent>
					{certificacion ? certificacion : "Universitaria"}
				</CousosDataContent>
			</CoursosInfo>
		</CousosDataContainer>
	)
}

const CousosDataContainer = styled.div`
	display: flex;
	gap: 40px;
	margin: 40px 0;
	/* width: 70%; */
`
const CoursosInfo = styled.div`
	width: 20%;
`

const CousosDataTitle = styled.h3`
	font-family: ${theme.fontFamily.tertiary};
	color: ${({ colorCategorie }) => theme.categories[colorCategorie]};
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 20px;
	margin: 0px;
`

const CousosDataContent = styled.p`
	font-family: ${theme.fontFamily.tertiary};
	color: ${theme.color.lightGrey};
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
	margin: 0px;
`

export default CursosData
