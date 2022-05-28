import ConfirmationModal from "../../Shared/Modals/ConfirmationModal"
import DeleteIcon from "../../Shared/Icons/Delete"
import EditIcon from "../../Shared/Icons/Edit"
import styled from "styled-components"
import theme from "../../../Theme/base"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { successToast, errorToast } from "../../Shared/Toasts/ToastList"
import ToastListContainer from "../../Shared/Toasts/ToastListContainer"

// import ToastList from '../../Shared/Toasts/ToastList';

const CursosAdmin = ({ cursos }) => {
	const [modalIsOpen, setIsOpen] = useState(false)
	const [selectedCourse, setSelectedCourse] = useState()
	const navigate = useNavigate()

	const [list, setList] = useState([])

	function showToast(type, content) {
		let selectedToast = []
		switch (type) {
			case "success":
				selectedToast = successToast(content, list)
				break
			case "error":
				selectedToast = errorToast(content, list)
				break
			default:
				break
		}
		setList([...list, selectedToast])
	}

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

	function handleDelete() {
		console.log("se elimino el elemento")
		// showToast('success', { success: 'Se ha eliminado el elemento' });
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
								<div onClick={(e) => showToast("error", "mensaje de exito")}>
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
				confirmButtonSubmit={handleDelete}
				withCloseButton
				mainColor={theme.color.redError}
			>
				<ModalContent>
					<p>¿Confirma que desea eliminar el siguiente curso?</p>
					<b>{selectedCourse?.nombre}</b>
				</ModalContent>
			</ConfirmationModal>
			{/* {visible && <ToastList />} */}
			<ToastListContainer
				toastlist={list}
				position="buttom-right"
				setList={setList}
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
