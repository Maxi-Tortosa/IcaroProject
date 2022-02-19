import theme from "../../../Theme/base"
import styled from "styled-components"
import LinearBttn from "../../Buttons/LinearBttn"

const StudentProgram = ({ course }) => {
	const { CategoriaID, planDeEstudioContent } = course
	console.log(planDeEstudioContent)

	return (
		<StudentProgramContainer>
			<Title colorFilter={CategoriaID}>Programa de estudio</Title>
			<MainContent>
				{planDeEstudioContent &&
					planDeEstudioContent.map((element, index) => {
						console.log("elem", element)
						return (
							<ParragraphContainer key={index}>
								<Type>{Object.keys(element)}</Type>
								<Description>{Object.values(element)}</Description>
							</ParragraphContainer>
						)
					})}
			</MainContent>
			<LinearBttn>Descargar progama completo</LinearBttn>
		</StudentProgramContainer>
	)
}

const StudentProgramContainer = styled.div``

const Title = styled.h5`
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 20px;
	color: ${({ colorFilter }) => theme.categories[colorFilter]};
	margin: 0px;
`
const MainContent = styled.div`
	margin: 30px 0;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
`

const ParragraphContainer = styled.div`
	width: 48%;
`
const Type = styled.p`
	font-family: ${theme.fontFamily.tertiary};
	color: ${theme.color.lightGrey};
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 18px;
`

const Description = styled.p`
	font-family: ${theme.fontFamily.primary};
	color: ${theme.color.lightGrey};
	text-align: justify;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 18px;
`

export default StudentProgram
