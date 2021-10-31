import { useState, useEffect, useUSer } from 'react';
import styled from 'styled-components';

const LogIn = ({ setModalOpen, isLogin, setIsLogin }) => {
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState();
	const [passwordError, setPasswordError] = useState(false);
	const [hasError, setHasError] = useState(false);

	const handleSubmit = () => {
		let account = { userEmail, userPassword };

		if (account) {
			ifMatch(account);
		}
		// 	await firebase
		// 		.auth()
		// 		.createUserWithEmailAndPassword(userEmail, userPassword);
	};

	const handleChange = (e) => {
		if (e.target.value.length < 6 && e.target.value.length > 0) {
			setPasswordError(true);
		} else {
			setUserPassword(e.target.value);
			setPasswordError(false);
		}
	};

	const ifMatch = (param) => {
		if (param.userEmail.length > 0 && param.userPassword.length > 0) {
			if (param.userEmail === 'Maxi' && param.userPassword === '123456') {
				setIsLogin(true);
			} else {
				setIsLogin(false);
				setHasError(true);
			}
		} else {
			setIsLogin(false);
			setHasError(true);
		}
	};

	return (
		<Container>
			{/* { Ver de meter una validación con el hook de reactfire} */}
			{/*Ver de permitir el ingreso con un enter en el input */}
			<div>
				{hasError ? <p> su contraseña no existe </p> : null}
				<label htmlFor='user'> Usuario </label>
				<input
					id='usuario'
					onChange={(e) => setUserEmail(e.target.value)}
					type='text'
					name='user'
					placeholder='Correo electrónico'
				/>
			</div>
			<div>
				<label htmlFor='password'> Contraseña </label>
				<input
					onChange={handleChange}
					id='contraseña'
					type='password'
					name='password'
					placeholder='Contraseña'
					className={passwordError ? 'passwordError' : 'ok'}
				/>
			</div>

			<button type='submit' onClick={handleSubmit}>
				Ingresar
			</button>
			<button> Recuperar contraseña </button>
			<button onClick={() => setModalOpen(false)}> X </button>
		</Container>
	);
};

export default LogIn;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	position: absolute;
	top: 10px;
	right: 100px;
	border: solid;
	padding: 10px;
	background-color: white;

	.passwordError {
		color: red;
		border-color: red;
	}

	.passwordError::placeholder {
		color: red;
	}
`;
