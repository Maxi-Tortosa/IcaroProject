import { useState } from "react"
import styled from "styled-components"
import theme from "../../../Theme/base"
import EditIcon from "../../Icons/Edit"
import DeleteIcon from "../../Icons/Delete"
import AdminModal from "../../Modals/AdminModal"
import { CATEGORYFIELDS } from "../../../Constants/Category"

const CategoriasAdmin = ({ categorias }) => {
	const [modalIsOpen, setIsOpen] = useState(false)
	// console.log("cursos", curso s)
	function openModal() {
		setIsOpen(true)
	}
	function closeModal() {
		setIsOpen(false)
	}

	return (
		<div>
			<TitleContainer>
				<h3>Categorias</h3>
				<button onClick={openModal}> + Nueva Categoria</button>
			</TitleContainer>
			<TableContent>
				<TableHeader>
					{CATEGORYFIELDS.map((elem) => (
						<TableColumn isHeader>{elem.nombre}</TableColumn>
					))}
				</TableHeader>

				{categorias.map((el, index) => {
					return (
						<TableRow key={index}>
							<TableColumn>{index + 1}</TableColumn>
							<TableColumn>{el.Nombre}</TableColumn>
							<TableColumn bgcolor={el.CategoriaID}>
								{theme.categories[el.CategoriaID]}
							</TableColumn>
							<TableColumn>
								<EditIcon />
								<DeleteIcon />
							</TableColumn>
						</TableRow>
					)
				})}
			</TableContent>
			<AdminModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				fieldsList={CATEGORYFIELDS}
				type="Nueva Categoria"
			/>
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
	background-color: ${({ bgcolor }) => bgcolor && theme.categories[bgcolor]};
	color: ${({ bgcolor }) => bgcolor && theme.color.white};

	.edit {
		:hover {
			color: ${theme.color.darkBlue};
		}
	}

	.delete {
		:hover {
			color: red;
		}
	}
`

export default CategoriasAdmin
