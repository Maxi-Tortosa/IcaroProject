import { useState } from "react"
import styled from "styled-components"
import theme from "../../../Theme/base"
import ReactModal from "react-modal"
import EditIcon from "../../Shared/Icons/Edit"
import DeleteIcon from "../../Shared/Icons/Delete"

const ContentAdmin = ({ content, name, tableContent }) => {
	const [modalIsOpen, setIsOpen] = useState(true)

	function openModal() {
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	}

	return (
		<div>
			<TitleContainer>
				<h3>{content}</h3>
				<button onClick={openModal}> + Nuevo {name}</button>
			</TitleContainer>
			<TableContent>
				<TableHeader>
					{tableContent.map((elem, index) => {
						return (
							<TableColumn key={index} isHeader>
								{elem}
							</TableColumn>
						)
					})}

					<TableColumn></TableColumn>
				</TableHeader>

				{content.map((el, index) => {
					return (
						<TableRow key={index}>
							<TableColumn>{index + 1}</TableColumn>
							<TableColumn>{el.nombre}</TableColumn>
							<TableColumn bgcolor={el.CategoriaID}>{el.categoria}</TableColumn>
							<TableColumn>{el.detalles?.modalidad}</TableColumn>
							<TableColumn>
								<EditIcon onClick={openModal} />
								<DeleteIcon onClick={openModal} />
							</TableColumn>
						</TableRow>
					)
				})}
			</TableContent>
			<ReactModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<p>hola</p>
				<button onClick={closeModal}> cerrar</button>
			</ReactModal>
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

export default ContentAdmin
