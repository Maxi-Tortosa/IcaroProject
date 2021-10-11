import { useState, useEffect, useUSer } from 'react';
import '@firebase/auth';
import { getFirebase } from '../../Firebase';

import styled from 'styled-components';

const LogIn = ({ setModalOpen }) => {
	const [userEmail, setUserEmail] = useState();
	const [userPassword, setUserPassword] = useState();

	const firebase = getFirebase();

	const user = useUSer();

	const handleLogIn = async () => {
		await firebase.auth().signInWithEmailAndPassword(userEmail, userPassword);
	};

	// useEffect(() => {}, []);

	return (
		<Container>
			{/* { Ver de meter una validación con el hook de reactfire} */}
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

			<button onClick={handleLogIn}> Ingresar </button>
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
