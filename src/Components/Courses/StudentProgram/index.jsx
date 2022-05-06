import theme from "../../../Theme/base"
import styled from "styled-components"
import LinearBttn from "../../Shared/Buttons/LinearBttn"

const StudentProgram = ({ course }) => {
	const { CategoriaID, planDeEstudioContent, PDF } = course

	return (
		<StudentProgramContainer>
			<Title colorFilter={CategoriaID}>Programa de estudio</Title>
			<MainContent>
				{planDeEstudioContent &&
					planDeEstudioContent.map((element, index) => {
						return (
							<ParragraphContainer key={index}>
								<Type>{Object.keys(element)}</Type>
								<Description>{Object.values(element)}</Description>
							</ParragraphContainer>
						)
					})}
			</MainContent>
			{PDF && (
				<DownloadLink href={PDF} target="_blank" rel="noreferrer">
					Descargar programa completo
				</DownloadLink>
			)}
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
	gap: 4%;
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

const DownloadLink = styled.a`
	text-decoration: none;
	background-color: ${theme.color.white};
	border: 1px solid ${theme.color.darkBlue};
	border-radius: 10px;
	padding: 10px 17px;
	${({ width }) => width && `width: ${width}`};
	${({ margin }) => margin && `margin: ${margin}`};
	${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 20px;
	text-align: center;
	color: ${theme.color.darkBlue};
	margin: 0;
`

export default StudentProgram
