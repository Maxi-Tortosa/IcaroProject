import theme from "../../../Theme/base"
import styled from "styled-components"
import LinearBttn from "../../Buttons/LinearBttn"

const InscribiteBox = ({ course }) => {
	const { CategoriaID } = course

	return (
		<InscribiteBoxContainer>
			<TitleBoxContainer colorFilter={CategoriaID}>
				<Title>Inscribite hoy</Title>
				<Description>12 cuotas sin interés de</Description>
				<Title>$2500</Title>
			</TitleBoxContainer>
			<IcribiteContent>
				<TableContent>
					<TableHeader>
						<TableColumn isHeader>Fecha de inicio/fin</TableColumn>
						<TableColumn isHeader>Duración</TableColumn>
						<TableColumn isHeader>Días de cursado</TableColumn>
						<TableColumn>{""}</TableColumn>
					</TableHeader>
					<TableRow>
						<TableColumn>07/12 - 08/02</TableColumn>
						<TableColumn>2 meses</TableColumn>
						<TableColumn>Martes y jueves de 20 a 22 Hs.</TableColumn>
						<TableColumn>
							<LinearBttn>Inscribirme</LinearBttn>
						</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>07/12 - 08/02</TableColumn>
						<TableColumn>2 meses</TableColumn>
						<TableColumn>Martes y jueves de 20 a 22 Hs.</TableColumn>
						<TableColumn>
							<LinearBttn>Inscribirme</LinearBttn>
						</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>07/12 - 08/02</TableColumn>
						<TableColumn>2 meses</TableColumn>
						<TableColumn>Martes y jueves de 20 a 22 Hs.</TableColumn>
						<TableColumn>
							<LinearBttn>Inscribirme</LinearBttn>
						</TableColumn>
					</TableRow>
				</TableContent>
			</IcribiteContent>
		</InscribiteBoxContainer>
	)
}

const InscribiteBoxContainer = styled.div`
	margin: auto;
	background: #ffffff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
`

const TitleBoxContainer = styled.div`
	padding: 20px;
	border-radius: 10px 10px 0px 0px;
	background: ${({ colorFilter }) => theme.categories[colorFilter]};
	color: ${theme.color.white};
	text-align: center;
`
const Title = styled.h5`
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 20px;
	color: ${theme.color.white};
	margin: 0px;
`

const Description = styled.p`
	font-family: ${theme.fontFamily.primary};
	color: ${theme.color.white};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	margin: 0px;
`

const IcribiteContent = styled.div`
	display: block;
`

const TableContent = styled.div`
	padding: 20px 60px 60px 60px;
`
const TableHeader = styled.header`
	display: flex;
	gap: 30px;
	text-align: center;
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	color: ${theme.color.blue};
`
const TableRow = styled.div`
	display: flex;
	text-align: center;
	gap: 30px;
	padding: 10px 0;
`
const TableColumn = styled.div`
	flex: 1;
	${({ isHeader }) => !isHeader && `color: ${theme.color.lightGrey};`}
`

export default InscribiteBox
