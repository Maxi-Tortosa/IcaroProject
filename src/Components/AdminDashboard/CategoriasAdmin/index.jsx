import { useState } from "react"
import styled from "styled-components"
import theme from "../../../Theme/base"
import EditIcon from "../../Shared/Icons/Edit"
import DeleteIcon from "../../Shared/Icons/Delete"
import { CATEGORYFIELDS } from "../../../Constants/Category"
import { useNavigate } from "react-router-dom"
import ConfirmationModal from "../../Shared/Modals/ConfirmationModal"

const CategoriasAdmin = ({ categorias }) => {
	const [modalIsOpen, setIsOpen] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState()
	const navigate = useNavigate()

	function openDeleteModal(selected) {
		console.log("se hizo click", selected)
		setSelectedCategory(selected)
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	function handleClick() {
		navigate("/admin/new/categoria", { replace: false })
	}

	return (
		<div>
			<TitleContainer>
				<h3>Categorias</h3>
				<button onClick={handleClick} className="nueva-categoria">
					+ Nueva Categoria
				</button>
			</TitleContainer>
			<TableContent>
				<TableHeader>
					{CATEGORYFIELDS.map((elem) => (
						<TableColumn key={elem.id} isHeader>
							{elem.nombre}
						</TableColumn>
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
								<div>
									<EditIcon />
								</div>
								<div onClick={(e) => openDeleteModal(el)}>
									<DeleteIcon />
								</div>
							</TableColumn>
						</TableRow>
					)
				})}
			</TableContent>
			<ConfirmationModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				modalTitle="Eliminar categoria"
				cancelButtonContent="Cancelar"
				confirmButtonContent="Eliminar"
				withCloseButton
				mainColor={theme.color.redError}
			>
				<ModalContent>
					<p>¿Confirma que desea eliminar la siguiente categoria?</p>
					<b>{selectedCategory?.Nombre}</b>
				</ModalContent>
			</ConfirmationModal>
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

const ModalContent = styled.div`
	width: 80%;
	margin: 0 auto;
	text-align: center;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	color: ${theme.color.lightGrey};
`

export default CategoriasAdmin
