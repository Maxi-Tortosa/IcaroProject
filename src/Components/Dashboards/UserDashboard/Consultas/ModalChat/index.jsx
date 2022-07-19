import React, { useContext, useEffect, useState } from 'react';
import {
	collection,
	doc,
	onSnapshot,
	setDoc,
	updateDoc,
} from 'firebase/firestore';

import EnviaBttn from '../../../../Shared/Buttons/EnviaBttn';
import TextareaAutosize from 'react-textarea-autosize';
import { VscClose } from 'react-icons/vsc';
import db from '../../../../../Firebase/index';
import { onChildChanged } from 'firebase/database';
import styled from 'styled-components';
import theme from '../../../../../Theme/base';
import { useIsMobile } from '../../../../../Hooks/Client';
import { userContext } from '../../../../../Context/UserContext';

const ModalChat = ({ currentConsultaId, setChatModalOpen }) => {
	const { currentUser } = useContext(userContext);
	const [messages, setMessages] = useState([]);
	const [reason, setReason] = useState('');
	const [question, setQuestion] = useState('');
	const mobile = useIsMobile();

	useEffect(() => {
		currentConsultaId &&
			onSnapshot(
				collection(db, `Usuarios/${currentUser.uid}/Consultas`),
				(snapshot) =>
					setMessages(
						snapshot.docs
							.filter((doc) => doc.id === currentConsultaId)
							.map((doc) => doc.data())
					),
				(error) => console.log('error', error)
			);
	}, [currentUser, currentConsultaId]);

	const handleInputChange = (e) => {
		setQuestion(e.target.value);
	};

	const handleSubmit = (e) => {
		const date = Date.now();
		const newMessage = {
			date: new Date(date).toLocaleDateString(),
			hour: new Date(date).toLocaleTimeString(),
			preguntaEstudiante: question,
		};

		let msgs = messages && messages[0].mensajes;

		const ref = doc(
			db,
			`Usuarios/${currentUser.uid}/Consultas`,
			currentConsultaId
		);

		updateDoc(ref, { mensajes: [...msgs, newMessage] });
	};

	return (
		<MainContainer>
			<button onClick={() => setChatModalOpen(false)}>X</button>
			<ModalContainer mobile={mobile}>
				<MessagesConainer>
					{messages &&
						messages[0] &&
						messages[0].mensajes &&
						messages[0].mensajes.map((msg, i) => (
							<Message key={i}> {msg.preguntaEstudiante}</Message>
						))}
				</MessagesConainer>
				<StyledForm mobile={mobile}>
					<FormLabel mobile={mobile} htmlFor='question'>
						Mensaje
						<TextareaAutosize
							onChange={handleInputChange}
							name='question'
							maxRows={3}
							minRows={3}
							className='styled-text-area'
						/>
					</FormLabel>
					<EnviaBttn
						fontFamily='Montserrat, sans-serif'
						fontSize='1.18rem'
						width={mobile ? '100%' : '58%'}
						margin={mobile ? '30px 0 0 0' : '20px 21%'}
						padding='16px'
						backgroundColor={theme.color.darkBlue}
						onClick={handleSubmit}
					/>
				</StyledForm>
			</ModalContainer>
		</MainContainer>
	);
};

export default ModalChat;

const MainContainer = styled.div`
	position: fixed;
	z-index: ${theme.zIndex.modals};
	height: 100%;
	width: 100%;
	background-color: #00000080;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: start;
`;

const ModalContainer = styled.div`
	margin: ${({ mobile }) => (mobile ? '0' : '5% 0 0 0')};
	width: ${({ mobile }) => (mobile ? '100%' : '35rem')};
	/* height: ${({ mobile }) => (mobile ? '100%' : '66%')}; */
	padding: ${({ mobile }) => (mobile ? '0' : '2rem 0')};
	background: white;
`;

const MessagesConainer = styled.div`
	height: 22.5rem;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;
const Message = styled.div`
	background: ${theme.color.lightGrey};
`;
const StyledForm = styled.form`
	width: 90%;
	margin: auto;
	height: 30%;

	.styled-text-area {
		display: block;
		width: 100%;
		border: 1px solid #e6e6e6;
		resize: none;
		margin-top: 10px;
		padding: 0;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		font-family: ${theme.fontFamily.primary};

		:focus {
			font-family: ${theme.fontFamily.primary};
			border: 1px solid ${theme.color.darkBlue};
			outline: none;
			border-radius: 5px;
			font-size: 1rem;
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

const FormLabel = styled.label`
	display: block;
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: normal;
	font-size: ${({ mobile }) => (mobile ? '0.87rem' : '1rem')};
	line-height: 24px;
	color: ${theme.color.grey};
	margin: 10px 0px;
`;

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
		border: 1px solid ${theme.color.darkBlue};
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
		color: ${theme.color.grey};
		margin: 10px 0px;
	}
`;
