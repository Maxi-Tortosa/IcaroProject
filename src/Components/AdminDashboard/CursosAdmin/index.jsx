import { useState } from "react"
import styled from "styled-components"
import theme from "../../../Theme/base"
import EditIcon from "../../Shared/Icons/Edit"
import { useNavigate } from "react-router-dom"
import DeleteIcon from "../../Shared/Icons/Delete"
import ConfirmationModal from "../../Shared/Modals/ConfirmationModal"

const CursosAdmin = ({ cursos }) => {
	const [modalIsOpen, setIsOpen] = useState(false)
	const [selectedCourse, setSelectedCourse] = useState()
	const navigate = useNavigate()

	function openDeleteModal(selected) {
		console.log("se hizo click", selected)
		setSelectedCourse(selected)
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	function handleClick() {
		navigate("/admin/new/curso", { replace: false })
	}

	return (
		<div>
			<TitleContainer>
				<h3>Cursos</h3>
				<button onClick={handleClick}> + Nuevo Curso</button>
			</TitleContainer>
			<TableContent>
				<TableHeader>
					<TableColumn isHeader>Id</TableColumn>
					<TableColumn isHeader>Nombre Curso</TableColumn>
					<TableColumn isHeader>Categoria</TableColumn>
					<TableColumn isHeader>Modalidad</TableColumn>
					<TableColumn></TableColumn>
				</TableHeader>

				{cursos.map((el, index) => {
					return (
						<TableRow key={index}>
							<TableColumn>{index + 1}</TableColumn>
							<TableColumn>{el.nombre}</TableColumn>
							<TableColumn bgcolor={el.CategoriaID}>{el.categoria}</TableColumn>
							<TableColumn>{el.detalles?.modalidad}</TableColumn>
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
				modalTitle="Eliminar curso"
				cancelButtonContent="Cancelar"
				confirmButtonContent="Eliminar"
				withCloseButton
				mainColor={theme.color.redError}
			>
				<ModalContent>
					<p>¿Confirma que desea eliminar el siguiente curso?</p>
					<b>{selectedCourse?.nombre}</b>
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

export default CursosAdmin
