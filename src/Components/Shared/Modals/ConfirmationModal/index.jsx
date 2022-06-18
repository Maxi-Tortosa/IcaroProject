import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import theme from '../../../../Theme/base';
import { useIsMobile } from '../../../../Hooks/Client';
import { VscClose } from 'react-icons/vsc';


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
	const mobile = useIsMobile();

	const customStyles = {
		overlay: { zIndex: `${theme.zIndex.modals}` },
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '560px',
			// height: "250px",
			padding: '0 !important',
			borderRadius: '0px 0px 15px 15px',
		},
	};

	const customMobileStyles = {
		overlay: { zIndex: `${theme.zIndex.modals}` },
		content: {
			width: '100%',
			height: '100vh',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			display: 'flex',
			alignItems: 'center',
		},
	};

	function handleCancel() {
		closeModal();
	}

	function handleConfirm() {
		//el submit
		confirmButtonSubmit();
		closeModal();
	}

	return (
		<ReactModal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={mobile ? customMobileStyles : customStyles}>
			<ModalContentContainer mobile={mobile}>
				<HeaderTitle mobile={mobile}>
					<Title mobile={mobile} color={mainColor}>
						{modalTitle}
					</Title>
					{withCloseButton && (
						<CloseButton mobile={mobile} onClick={closeModal}>
							<VscClose size={20}
							/>
						</CloseButton>
					)}
				</HeaderTitle>
				{children}
				<ConfirationButtons mobile={mobile}>
					<CancelButton mobile={mobile} onClick={handleCancel}>
						{cancelButtonContent}
					</CancelButton>
					<ConfirmButton
						mobile={mobile}
						color={mainColor}
						onClick={handleConfirm}>
						{confirmButtonContent}
					</ConfirmButton>
				</ConfirationButtons>
			</ModalContentContainer>
		</ReactModal>
	);
};
const ModalContentContainer = styled.div`
	padding-top: 25px;
	display: flex;
	flex-direction: column;
	/* height: 100%; */
	justify-content: space-between;
	p,
	b {
		${({ mobile }) => (mobile ? 'font-size: 0.87rem' : null)};
	}
`;
const ConfirationButtons = styled.div`
	${({ mobile }) => (mobile ? null : 'justify-self: flex-end')};
	display: flex;
	margin-top: ${({ mobile }) => (mobile ? '11.87rem' : '35px')};
	${({ mobile }) => (mobile ? 'flex-direction: column-reverse' : null)};
	${({ mobile }) => (mobile ? 'align-items: center' : null)};
`;
const CancelButton = styled.button`
	font-family: 'Montserrat';
	font-style: normal;
	font-size: 19px;
	line-height: 23px;
	text-align: center;
	color: ${theme.color.darkGrey};
	background-color: ${theme.color.white};
	border-color: ${theme.color.white};
	padding: 16px 40px;
	width: ${({ mobile }) => (mobile ? '80%' : '50%')};
	cursor: pointer;
	border: ${({ mobile }) => (mobile ? 'unset' : null)};
`;
const ConfirmButton = styled.button`
	font-family: 'Montserrat';
	font-style: normal;
	font-size: 19px;
	line-height: 23px;
	text-align: center;
	color: ${theme.color.white};
	background-color: ${({ color }) => color};
	border-color: ${({ color }) => color};
	padding: ${({ mobile }) => (mobile ? '16px 33px' : '16px 40px')};
	width: ${({ mobile }) => (mobile ? '80%' : '50%')};
	cursor: pointer;
	border: ${({ mobile }) => (mobile ? 'unset' : null)};
`;

const HeaderTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: ${({ mobile }) => (mobile ? 'column-reverse' : 'row')};
`;
const Title = styled.h3`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	width: 90%;
	color: ${({ color }) => (color ? color : theme.color.blue)};
	margin-bottom: ${({ mobile }) => (mobile ? '2.5rem' : null)}; ;
`;
const CloseButton = styled.div`
	background: transparent;
	border: unset;
	cursor: pointer;
	align-self: ${({ mobile }) => (mobile ? 'flex-end' : null)};
`;
export default ConfirmationModal;
