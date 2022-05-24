import React from "react"
import ReactModal from "react-modal"
import styled from "styled-components"
import theme from "../../../../Theme/base"

const ConfirmationModal = ({
	modalIsOpen,
	closeModal,
	modalTitle,
	children,
	cancelButtonContent,
	confirmButtonContent,
	confirmButtonSubmit,
	withCloseButton,
	mainColor,
}) => {
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			width: "560px",
			// height: "250px",
			padding: "0 !important",
			borderRadius: "0px 0px 15px 15px",
		},
	}

	function handleCancel() {
		closeModal()
	}

	function handleConfirm() {
		//el submit
		confirmButtonSubmit()
		closeModal()
	}

	return (
		<ReactModal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
		>
			<ModalContentContainer>
				<HeaderTitle>
					<Title color={mainColor}>{modalTitle}</Title>
					{withCloseButton && <CloseButton onClick={closeModal}>x</CloseButton>}
				</HeaderTitle>
				{children}
				<ConfirationButtons>
					<CancelButton onClick={handleCancel}>
						{cancelButtonContent}
					</CancelButton>
					<ConfirmButton color={mainColor} onClick={handleConfirm}>
						{confirmButtonContent}
					</ConfirmButton>
				</ConfirationButtons>
			</ModalContentContainer>
		</ReactModal>
	)
}
const ModalContentContainer = styled.div`
	padding-top: 25px;
	display: flex;
	flex-direction: column;
	/* height: 100%; */
	justify-content: space-between;
`
const ConfirationButtons = styled.div`
	justify-self: flex-end;
	display: flex;
	margin-top: 35px;
`
const CancelButton = styled.button`
	font-family: "Montserrat";
	font-style: normal;
	font-size: 19px;
	line-height: 23px;
	text-align: center;
	color: ${theme.color.darkGrey};
	background-color: ${theme.color.white};
	border-color: ${theme.color.white};
	padding: 16px 40px;
	width: 50%;
	cursor: pointer;
`
const ConfirmButton = styled.button`
	font-family: "Montserrat";
	font-style: normal;
	font-size: 19px;
	line-height: 23px;
	text-align: center;
	color: ${theme.color.white};
	background-color: ${({ color }) => color};
	border-color: ${({ color }) => color};
	padding: 16px 40px;
	width: 50%;
	cursor: pointer;
`

const HeaderTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
`
const Title = styled.h3`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	width: 90%;
	color: ${({ color }) => (color ? color : theme.color.blue)};
`
const CloseButton = styled.div`
	background: transparent;
	border: unset;
	font-size: 20px;
	cursor: pointer;
`
export default ConfirmationModal
