import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { getAuth } from '../../Firebase/';
// import { withRouter } from "react-router";
// import { auth } from "../../Firebase"

const Register = ({ history }) => {
	const [newUSer, setNewUser] = useState({});
	const [errorPassword, setErrorPassword] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	function handleChange(name, value) {
		console.log(name, value);
		if (name === 'password' && value.length < 6 && value.length >= 1) {
			console.log('mal cotrasenia!');
			setErrorPassword(true);
		} else {
			setErrorPassword(false);
			setNewUser((newUSer) => ({ ...newUSer, [name]: value }));
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		console.log('bien contrasenia!');
		setErrorPassword(false);
		console.log('acc', newUSer);
		setIsLogged(true);

		/* HACER VALIDACIÓN DE SI EXISTE O NO EL USUARIO */
		/* VER SI EXISTE FORMA DE EXTRAER LA LISTA DE USUARIOS DE AUTH */

		// getAuth()
		// 	.createUserWithEmailAndPassword(userEmail, userPassword)
		// 	.then(() => {
		// 		setUserEmail('');
		// 		setUserPassword('');
		// 		setHasError('');

		// 		setTimeout(() => setIsLogin(true), 2000);
		// 	})
		// 	.catch((err) => {
		// 		setTimeout(() => {}, 1000);
		// 	});
	}

	//investigar tema seguridad para el auth

	// const handleSignUp = useCallback(
	// 	async (event) => {
	// 		event.preventDefault()
	// 		// const { email, password } = event.target.elements;
	// 		const { email, password } = newUSer

	// 		try {
	// 			await auth.createUserWithEmailAndPassword(email, password)
	// 			history.push("/")
	// 		} catch (error) {
	// 			alert(error)
	// 		}
	// 	},
	// 	[history]
	// )

	console.log(newUSer);
	//chequear que sean required los inputs y que no te dejen hacer el submit si no esta completo todo
	return (
		<Container>
			<form>
				<p>This is the register page</p>
				<label htmlFor='name'>
					Nombre *
					<input
						required
						id='name'
						name='name'
						type='text'
						placeholder='Nombre'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
				</label>
				<label htmlFor='lastname'>
					Apellido *
					<input
						required
						id='lastname'
						name='lastname'
						type='text'
						placeholder='apellido'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
				</label>
				<label htmlFor='email'>
					Email *
					<input
						required
						id='email'
						name='email'
						type='text'
						placeholder='email'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
				</label>
				<label htmlFor='dni'>
					DNI *
					<input
						required
						id='dni'
						name='dni'
						type='number'
						placeholder='dni'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
				</label>
				<label htmlFor='phonenumber'>
					Telefono *
					<input
						required
						id='phonenumber'
						name='phonenumber'
						type='number'
						placeholder='telefono'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
				</label>
				<label htmlFor='password'>
					Contrasena *
					<input
						required
						id='password'
						name='password'
						type='password'
						placeholder='contrasena'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						param={errorPassword}
					/>
				</label>
				{errorPassword && <p>La Contrasenia debe ser mayor a 6 digitos</p>}
				<label htmlFor='personalInformation'>
					Informacion Profesional *
					<input
						required
						id='personalInformation'
						name='personalInformation'
						type='text'
						placeholder='informacion-profesional'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
				</label>

				<button
					className='unirme'
					disabled={errorPassword}
					type='submit'
					onClick={(e) => handleSubmit(e)}>
					Unirme
				</button>
			</form>
		</Container>
	);
};

export default Register;

const Container = styled.div`
	max-width: 1200px;
	height: 68vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	form {
		display: flex;
		flex-direction: column;

		.unirme {
			width: 20%;
		}
	}
`;
