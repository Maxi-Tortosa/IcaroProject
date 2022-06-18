import React, { useState } from 'react';

import AddButton from '../../../Shared/Buttons/AddButton';
import ModalConsulta from './ModalConsulta';
import styled from 'styled-components';
import theme from './../../../../Theme/base';
import { useIsMobile } from '../../../../Hooks/Client';

const Consultas = () => {
	const mobile = useIsMobile();
	const [modalOpen, setModalOpen] = useState(false);
	const modalEvent = () => setModalOpen(true);
	return (
		<ConsultasMainContainer mobile={mobile}>
			<TitleContainer mobile={mobile}>
				<Title mobile={mobile}>Consultas</Title>
				<AddButton alt='Nueva Consulta' clickEvent={modalEvent} />
			</TitleContainer>
			<MessageContainer>
				<Message></Message>
			</MessageContainer>
			{modalOpen && <ModalConsulta setModalOpen={setModalOpen} />}
		</ConsultasMainContainer>
	);
};

export default Consultas;

const ConsultasMainContainer = styled.div`
	width: ${({ mobile }) => (mobile ? '100%' : '35%')};
	height: 25.93rem;
	background: #ffffff;
	box-shadow: 0px 0px 10px #dadada;
	border-radius: 5px;
`;

const TitleContainer = styled.div`
	display: ${({ mobile }) => (mobile ? 'flex' : 'flex')};
	flex-direction: ${({ mobile }) => (mobile ? null : 'row')};
	justify-content: ${({ mobile }) => (mobile ? null : 'space-between')};
	align-items: center;
	padding: 1.25rem 0 1.75rem 0;
	margin: 0 1.87rem;
`;
const Title = styled.h5`
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	margin: 0;
	font-weight: 700;
	font-size: ${({ mobile }) => (mobile ? null : '1.25rem')};
	line-height: 24px;
	color: #29343e;
`;
const MessageContainer = styled.div``;
const Message = styled.div``;
