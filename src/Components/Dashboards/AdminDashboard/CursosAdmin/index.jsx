import { Link } from "react-router-dom"
import ConfirmationModal from "../../../Shared/Modals/ConfirmationModal"
import DeleteIcon from "../../../Shared/Icons/DeleteIcon"
import EditIcon from "../../../Shared/Icons/EditIcon"
import styled from "styled-components"
import theme from "../../../../Theme/base"
import { CURSOSROWS } from "../../../../Constants/Cursos"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { successToast, errorToast } from "../../../Shared/Toasts/ToastList"
import ToastListContainer from "../../../Shared/Toasts/ToastListContainer"
import Spacer from "../../../Shared/Spacer"

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
		showToast("success", "Se ha eliminado el elemento")
	}

	return (
		<div>
			<TitleContainer>
				<h3></h3>
				<NewCourseButton onClick={handleClick}> + Nuevo Curso</NewCourseButton>
			</TitleContainer>
			<TableContent>
				<TableHeader>
					{CURSOSROWS.map((elem) => (
						<TableColumn key={elem.id} isHeader>
							{elem.nombre}
						</TableColumn>
					))}
				</TableHeader>

				{cursos.map((el, index) => {
					return (
						<TableRow key={index}>
							<TableColumn>{index + 1}</TableColumn>
							<TableColumn>{el.nombre}</TableColumn>
							<TableColumn bgcolor={el.CategoriaID}>{el.categoria}</TableColumn>
							<TableColumn>{el.detalles?.modalidad}</TableColumn>
							<TableColumn isEditDelete>
								<EditContainer to={`/admin/edit/${el.href}`}>
									<EditIcon />
								</EditContainer>
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
			<ToastListContainer
				toastlist={list}
				position="buttom-right"
				setList={setList}
			/>
			<Spacer height={100} />
		</div>
	)
}

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const NewCourseButton = styled.button`
	background-color: ${theme.color.darkBlue};
	color: ${theme.color.white};
	padding: 10px 25px;
	border-radius: 10px;
	border: 1px solid ${theme.color.darkBlue};
	cursor: pointer;
	margin: 10px;
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 24px;
	text-align: center;
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
	color: ${theme.color.darkGrey};
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
	${({ isEditDelete }) =>
		isEditDelete && "display: flex; justify-content: space-evenly"};
	text-align: center;
`
const EditContainer = styled(Link)`
	text-decoration: none;
	color: ${theme.color.darkGrey};
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
