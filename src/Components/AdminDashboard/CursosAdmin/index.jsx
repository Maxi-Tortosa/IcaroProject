import styled from "styled-components"
import theme from "../../../Theme/base"

const CursosAdmin = ({ cursos }) => {
	// console.log("cursos", cursos)
	return (
		<div>
			<TitleContainer>
				<h3>Cursos</h3>
				<button>Nuevo Curso</button>
			</TitleContainer>
			<TableContent>
				<TableHeader>
					<TableColumn isHeader>Id</TableColumn>
					<TableColumn isHeader>Nombre Curso</TableColumn>
					<TableColumn isHeader>Categoria</TableColumn>
					<TableColumn isHeader>Modalidad</TableColumn>
				</TableHeader>

				{cursos.map((el, index) => {
					return (
						<TableRow key={index}>
							<TableColumn>{index + 1}</TableColumn>
							<TableColumn>{el.nombre}</TableColumn>
							<TableColumn>{el.categoria}</TableColumn>
							<TableColumn>{el.detalles?.modalidad}</TableColumn>
						</TableRow>
					)
				})}
			</TableContent>
		</div>
	)
}

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const TableContent = styled.div`
	width: 100%;
	padding: 10px 20px;
`
const TableHeader = styled.header`
	display: flex;
	gap: 10px;
	text-align: left;
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	color: ${theme.color.blue};
`
const TableRow = styled.div`
	display: flex;
	text-align: left;
	gap: 10px;
	padding: 10px 0;

	:hover {
		background-color: #f1f1f1;
		cursor: pointer;
	}
`
const TableColumn = styled.div`
	flex: 1;
	${({ isHeader }) => !isHeader && `color: ${theme.color.lightGrey};`}
`

export default CursosAdmin
