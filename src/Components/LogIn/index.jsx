import { useState, useContext } from 'react';
import { projectContext } from '../../Context/ProjectContext';
import { getAuth } from '../../Firebase';
import { Link, Router } from 'react-router-dom';
import styled from 'styled-components';

const LogIn = ({ setModalOpen }) => {
	const { course, setCourse, isLogin, setIsLogin } = useContext(projectContext);

	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState();
	const [passwordError, setPasswordError] = useState(false);
	const [hasError, setHasError] = useState(false);

	const handleSubmit = () => {
		ifMatch(userEmail, userPassword);
	};

	const handleChange = (e) => {
		if (e.target.value.length < 6 && e.target.value.length > 0) {
			setPasswordError(true);
		} else {
			setUserPassword(e.target.value);
			setPasswordError(false);
		}
	};

	const ifMatch = (userEmail, userPassword) => {
		/* Quedó terminado el inicio de sesión con Firebase */
		getAuth()
			.signInWithEmailAndPassword(userEmail, userPassword)
			.then(() => {
				setUserEmail('');
				setUserPassword('');
				setHasError('');

				setTimeout(() => setIsLogin(true), 2000);
			})
			.catch((err) => {
				setTimeout(() => {}, 1000);
			});
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
			<Link to='/register'>Registrate</Link>
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
