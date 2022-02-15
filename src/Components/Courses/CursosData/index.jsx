import styled from "styled-components"
import { hexcodeToRGBA } from "../../../Helpers/colors"
import theme from "../../../Theme/base"

const CursosData = ({ course }) => {
	const { CategoriaID } = course
	// const { duracion, proximoInicio, modalidad, certificacion } = course.detalles
	return (
		<CousosDataContainer>
			<CoursosInfo>
				<CousosDataTitle colorCategorie={CategoriaID}>Duracion</CousosDataTitle>
				<CousosDataContent>8 semanas (8 clases)</CousosDataContent>
			</CoursosInfo>
			<CoursosInfo>
				<CousosDataTitle colorCategorie={CategoriaID}>
					Próximo inicio
				</CousosDataTitle>
				<CousosDataContent>24 de diciembre</CousosDataContent>
			</CoursosInfo>
			<CoursosInfo>
				<CousosDataTitle colorCategorie={CategoriaID}>
					Modalidad
				</CousosDataTitle>
				<CousosDataContent>Online en vivo</CousosDataContent>
			</CoursosInfo>
			<CoursosInfo>
				<CousosDataTitle colorCategorie={CategoriaID}>
					Certificación
				</CousosDataTitle>
				<CousosDataContent>Universitaria</CousosDataContent>
			</CoursosInfo>
		</CousosDataContainer>
	)
}

const CousosDataContainer = styled.div`
	display: flex;
	gap: 40px;
	margin: 40px 0;
	width: 70%;
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
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
	margin: 0px;
`

export default CursosData
