import ReactModal from "react-modal"
import styled from "styled-components"
import theme from "../../../../Theme/base"
import BlueButton from "../../Shared/Buttons/BlueButton"
import LinearBttn from "../../Shared/Buttons/LinearBttn"

const AdminModal = ({ modalIsOpen, closeModal, fieldsList, type }) => {
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			width: "900px",
		},
	}
	return (
		<ReactModal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
		>
			<ModalContainer>
				<HeaderTitle>
					<Title>{type} </Title>
					<CloseButton onClick={closeModal}>X</CloseButton>
				</HeaderTitle>
				<StyledForm>
					{fieldsList.map((elem) => (
						<FormLabel key={elem.id}>
							{elem.nombre}
							<FormInput type={elem.type} />
						</FormLabel>
					))}
					<SubmitContainer>
						<LinearBttn>Cancelar</LinearBttn>
						<BlueButton
							width="100%"
							borderRadius="10px"
							padding="5px 13px"
							backgroundColor={theme.color.darkBlue}
						>
							Guardar
						</BlueButton>
					</SubmitContainer>
				</StyledForm>
			</ModalContainer>
		</ReactModal>
	)
}

const ModalContainer = styled.div`
	padding: 20px;
`
const HeaderTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	/* justify-content: flex-end;
	 */
`
const Title = styled.h3`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	width: 90%;
	color: #1744ff;
`
const CloseButton = styled.div`
	background: transparent;
	border: unset;
	font-size: 20px;
	cursor: pointer;
`

const StyledForm = styled.form`
	width: 500px;
	margin: 0 auto;

	.styled-text-area {
		display: block;
		width: 100%;
		height: 35px !important;
		border: 1px solid #e6e6e6;
		resize: none;
		margin-top: 20px;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		font-family: ${theme.fontFamily.primary};

		::placeholder {
			display: block;
			font-family: ${theme.fontFamily.primary};
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 24px;
			color: ${theme.color.lightGrey};
			margin: 10px 0px;
		}

		:focus {
			font-family: ${theme.fontFamily.primary};
			border: 2px solid ${theme.color.darkBlue};
			outline: none;
			border-radius: 5px;
			font-size: 1rem;
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 24px;
		}
	}
`

const FormLabel = styled.label`
	display: block;
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	color: ${theme.color.lightGrey};
	margin: 10px 0px;
	text-transform: capitalize;
`

const FormInput = styled.input`
	display: block;
	width: 100%;
	height: 30px;
	border: 1px solid #e6e6e6;
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;

	:focus {
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		border: 2px solid ${theme.color.darkBlue};
		outline: none;
		border-radius: 5px;
		font-size: 1rem;
		font-family: ${theme.fontFamily.primary};
	}

	::placeholder {
		display: block;
		font-family: ${theme.fontFamily.primary};
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		color: ${theme.color.lightGrey};
		margin: 10px 0px;
	}
`
const SubmitContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`

export default AdminModal
