import React, { useContext, useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

import AddButton from '../../../Shared/Buttons/AddButton';
import { AiOutlineMail } from 'react-icons/ai';
import ModalChat from './ModalChat';
import ModalConsulta from './ModalConsulta';
import db from '../../../../Firebase/index';
import styled from 'styled-components';
import theme from './../../../../Theme/base';
import { useIsMobile } from '../../../../Hooks/Client';
import { userContext } from './../../../../Context/UserContext';

const Consultas = ({ loggedUser }) => {
	const { currentUser } = useContext(userContext);
	const mobile = useIsMobile();
	const [modalOpen, setModalOpen] = useState(false);
	const [chatModalOpen, setChatModalOpen] = useState(false);
	const [consultas, setConsultas] = useState([]);
	const [currentConsultaId, setCurrentConsultaId] = useState(null);
	const modalEvent = () => setModalOpen(true);

	useEffect(() => {
		currentUser &&
			onSnapshot(
				collection(db, `Usuarios/${currentUser.uid}/Consultas`),
				(snapshot) =>
					setConsultas(
						snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
					),
				(error) => console.log('error', error)
			);
	}, [currentUser]);

	const handleMessageClick = (id) => {
		setCurrentConsultaId(id);
		setChatModalOpen(true);
	};

	return (
		<ConsultasMainContainer mobile={mobile}>
			<TitleContainer mobile={mobile}>
				<Title mobile={mobile}>Consultas</Title>
				<AddButton alt='Nueva Consulta' clickEvent={modalEvent} />
			</TitleContainer>
			<MessageContainer>
				{consultas &&
					consultas.map((item, i) => (
						<Message key={i} onClick={() => handleMessageClick(item.id)}>
							<AiOutlineMail size={18.5} />
							{item.motivo}
							<br />
							{item.mensajes &&
								item.mensajes[item.mensajes.length - 1].preguntaEstudiante}
						</Message>
					))}
			</MessageContainer>
			{chatModalOpen && (
				<ModalChat
					loggedUser={loggedUser}
					currentConsultaId={currentConsultaId}
					setChatModalOpen={setChatModalOpen}
				/>
			)}
			{modalOpen && (
				<ModalConsulta loggedUser={loggedUser} setModalOpen={setModalOpen} />
			)}
		</ConsultasMainContainer>
	);
};

export default Consultas;

const ConsultasMainContainer = styled.div`
	width: ${({ mobile }) => (mobile ? '100%' : '35%')};
	height: ${({ mobile }) => (mobile ? '20rem' : '25.93rem')};
	background: #ffffff;
	box-shadow: 0px 0px 10px #dadada;
	border-radius: 5px;
	margin-bottom: ${({ mobile }) => mobile && '2.5rem'};
`;

const TitleContainer = styled.div`
	display: ${({ mobile }) => (mobile ? 'flex' : 'flex')};
	flex-direction: ${({ mobile }) => (mobile ? 'row' : 'row')};
	justify-content: ${({ mobile }) =>
		mobile ? 'space-between' : 'space-between'};
	align-items: center;
	padding: 1.25rem 0 1.5rem 0;
	margin: 0 1.87rem;
`;
const Title = styled.h5`
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	margin: 0;
	font-weight: 700;
	font-size: ${({ mobile }) => (mobile ? '1rem' : '1.25rem')};
	line-height: ${({ mobile }) => (mobile ? '1.25rem' : '1.5rem')};
	color: #29343e;
`;
const MessageContainer = styled.div`
	height: 80%;
	overflow-y: scroll;
`;
const Message = styled.div`
	height: 25%;
	border-top: 1px solid ${theme.color.lightGrey};
	display: flex;
	flex-direction: row;
	cursor: pointer;
`;
