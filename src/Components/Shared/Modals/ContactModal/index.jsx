import React from "react"
import ReactModal from "react-modal"
import styled from "styled-components"
import theme from "../../../../Theme/base"
import TextareaAutosize from "react-textarea-autosize"
import EnviaBttn from "../../Buttons/EnviaBttn"

const ContactModal = ({ modalIsOpen, closeModal }) => {
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			width: "500px",
			padding: "40px",
		},
	}
	return (
		<ReactModal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
		>
			<HeaderTitle>
				<Title>Contactanos</Title>
				<CloseButton onClick={closeModal}>X</CloseButton>
			</HeaderTitle>
			<Parragraph>
				Escríbenos y nos contactaremos para brindarte toda la información que
				necesites
			</Parragraph>
			<StyledForm>
				<FormLabel htmlFor="fullname">
					Nombre
					<FormInput id="fullname" name="fullname" type="text" />
				</FormLabel>
				<FormLabel htmlFor="telefono">
					Telefono
					<FormInput id="telefono" name="telefono" type="etelefono" />
				</FormLabel>
				<FormLabel htmlFor="correo-electronico">
					Correo Electronico
					<FormInput
						id="correo-electronico"
						name="correo-electronico"
						type="text"
					/>
				</FormLabel>
				<FormLabel htmlFor="question">
					<TextareaAutosize
						minRows={3}
						placeholder={"Mensaje"}
						className="styled-text-area"
					/>
				</FormLabel>
				<EnviaBttn
					width="100%"
					margin=" 20px 0"
					borderRadius="10px"
					padding="10px"
					backgroundColor={theme.color.darkBlue}
				/>
			</StyledForm>
		</ReactModal>
	)
}
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

const Parragraph = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	margin: 20px auto;
	color: #3d3d3d;
`
const StyledForm = styled.form`
	width: 90%;
	margin: auto;

	.styled-text-area {
		display: block;
		width: 100%;
		height: 35px !important;
		border: none;
		border-bottom: 1px solid #e6e6e6;
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
`

const FormInput = styled.input`
	display: block;
	width: 100%;
	height: 30px;
	border: none;
	border-bottom: 1px solid #e6e6e6;
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
export default ContactModal
