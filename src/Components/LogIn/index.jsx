import { useState, useEffect, useUSer } from 'react';
import styled from 'styled-components';

const LogIn = ({ setModalOpen }) => {
	const [userEmail, setUserEmail] = useState();
	const [userPassword, setUserPassword] = useState();

	// const handleLogIn = async () => {
	// 	await firebase
	// 		.auth()
	// 		.createUserWithEmailAndPassword(userEmail, userPassword);
	// };

	return (
		<Container>
			{/* { Ver de meter una validación con el hook de reactfire} */}
			{/*Ver de permitir el ingreso con un enter en el input */}
			<div>
				<label htmlFor='user'> Usuario </label>
				<input
					onChange={(e) => setUserEmail(e.target.value)}
					type='email'
					name='user'
					placeholder='Correo electrónico'
				/>
			</div>
			<div>
				<label htmlFor='password'> Contraseña </label>
				<input
					onChange={(e) => setUserPassword(e.target.value)}
					type='password'
					name='password'
					placeholder='Contraseña'
				/>
			</div>

			<button type='submit'> Ingresar </button>
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
	right: 150px;
`;
