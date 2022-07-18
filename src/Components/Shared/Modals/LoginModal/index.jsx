import { Link } from 'react-router-dom';
import React from 'react';
import ReactModal from 'react-modal';
import { VscClose } from 'react-icons/vsc';
import styled from 'styled-components';
import theme from '../../../../Theme/base';

const LoginModal = ({
	isLoginOpen,
	setIsLoginOpen,
	setUserEmail,
	handleChange,
	passwordError,
	hasError,
	handleSubmit,
}) => {
	console.log(isLoginOpen);

	const closeModal = () => {
		setIsLoginOpen(false);
	};
	const customStyles = {
		overlay: { position: 'fixed', zIndex: `${theme.zIndex.modals}` },
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '80%',
			maxWidth: '1020px',
			overflow: 'hidden',
			borderRadius: '15px',
			padding: '0',
		},
	};

	return (
		<ReactModal
			isOpen={isLoginOpen}
			onRequestClose={closeModal}
			closeTimeoutMS={500}
			style={customStyles}>
			<Container>
				<div class='loginImage'></div>
				<form class='loginData'>
					<p>Inicia Sesión</p>
					{/* Ver de meter una validación con el hook de reactfire */}
					{/*Ver de permitir el ingreso con un enter en el input */}
					<div className='input'>
						<label htmlFor='user'> Email </label>
						<input
							id='usuario'
							onChange={(e) => setUserEmail(e.target.value)}
							type='text'
							name='user'
						/>
					</div>
					<div className='input'>
						<label htmlFor='password'> Contraseña </label>
						<input
							onChange={handleChange}
							id='contraseña'
							type='password'
							name='password'
							className={passwordError ? 'passwordError' : 'ok'}
						/>
						{hasError ? <p> su contraseña no existe </p> : null}
					</div>
					<Link className='forgot' to='/'>
						Olvidé mi contraseña
					</Link>
					<button className='submit' type='submit' onClick={handleSubmit}>
						Inicia sesión
					</button>
					<Link onClick={closeModal} className='register' to='/register'>
						¿No tenés cuenta? Únete a Icaro{' '}
					</Link>
					<button className='close' onClick={closeModal}>
						<VscClose size={20} />
					</button>
				</form>
			</Container>
		</ReactModal>
	);
};

const Container = styled.div`
	z-index: ${theme.zIndex.logInModal};

	height: 65vh;
	min-height: 500px;

	top: 17%;
	left: 24%;
	margin: 0;
	border: white;
	background-color: white;
	display: flex;
	border-radius: 10px;
	font-family: 'Montserrat', sans-serif;

	.loginImage {
		width: 50%;
		background-image: url('https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/loginImg.png?alt=media&token=70a74179-9437-4a47-9efb-0f70d0281341');
		background-position: right top;
		border-radius: 10px 0 0 10px;
	}

	.loginData {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		p {
			font-size: 1.25rem;
			font-weight: 700;
		}

		.input {
			display: flex;
			flex-direction: column;
			margin-top: 3%;

			label {
				font-size: 1 rem;
				margin-bottom: 1%;
			}

			input {
				border-radius: 5px;
				border: 1px solid #e6e6e6;
				height: 1.875rem;
				font-size: 1rem;
				font-family: 'Montserrat', sans-serif;
			}

			input:focus {
				border: 2px solid blue;
				outline: none;
				border-radius: 5px;
				font-size: 1rem;
				font-family: 'Montserrat', sans-serif;
			}

			input:placeholder {
				display: none;
			}
		}
		.forgot {
			margin-top: 1%;
			color: black;
		}

		.submit {
			height: 2.8rem;
			background: #1744ff;
			border-radius: 10px;
			border: unset;
			color: white;
			font-family: 'Montserrat', sans-serif;
			font-size: 1.25rem;
			line-height: 1.5rem;
			font-weight: 700;
			margin-top: 9%;
			cursor: pointer;
		}

		.register {
			color: black;
			font-weight: 500 !important;
			text-align: center;
			margin-top: 5% !important;
		}

		.close {
			background: transparent;
			border: unset;
			font-size: 1.6rem;
			position: absolute;
			bottom: 90%;
			left: 60%;
		}

		.close:hover {
			cursor: pointer;
		}
	}

	.loginData > * {
		width: 72%;
		margin: 0 auto;
		font-weight: 400;
	}

	.passwordError {
		color: red;
		border-color: red;
	}

	.passwordError::placeholder {
		color: red;
	}
`;

export default LoginModal;
