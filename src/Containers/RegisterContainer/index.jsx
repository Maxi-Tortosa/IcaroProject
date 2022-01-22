import styled from 'styled-components';
import { useState, useEffect, createElement } from 'react';
import { getAuth } from '../../Firebase/index';
// import { withRouter } from "react-router";
// import { auth } from "../../Firebase"

const Register = ({ history }) => {
	const [newUser, setNewUser] = useState();
	const [createUser, setCreateUser] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);
	const [alertErrorPassword, setAlertErrorPassword] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	function handleChange(name, value, id) {
		setNewUser((newUser) => ({ ...newUser, [name]: value }));

		if (name === 'password' && value.length < 6 && value.length >= 1) {
			console.log('mal cotrasenia!');
			setErrorPassword(true);
		} else {
			setErrorPassword(false);
		}
	}

	console.log(newUser);

	function handleSubmit(e) {
		e.preventDefault();

		/* REQUIRED VALIDATION */

		const form = document.getElementById(`form`).children;
		const children = [].slice.call(form);
		const inputs = children.filter((input) => input.tagName === 'INPUT');

		inputs.map((input) =>
			input.value === ''
				? input.insertAdjacentElement(
						'afterend',
						document.createElement('p')
				  ) && input.classList.add('required')
				: setCreateUser(true)
		);

		const required = document.getElementsByClassName('required');
		const requiredInputs = [].slice.call(required);

		console.log(requiredInputs);

		requiredInputs.map(
			(req) => (req.nextSibling.textContent = 'Este campo es obligatorio')
		);

		/* NEW USER */

		if (createUser) {
			getAuth()
				.createUserWithEmailAndPassword(newUser.email, newUser.password)
				.then(() => {
					setCreateUser(
						true
					); /* DEBERÍAMOS CREAR UN USUARIO EN LA BASE DE DATOS */
				})
				.catch((err) => {
					setTimeout(() => {}, 1000);
				});
		}

		// if (errorPassword) {
		// 	setAlertErrorPassword(true);
		// } else {
		// 	setAlertErrorPassword(false);
		// }

		/* HACER VALIDACIÓN DE SI EXISTE O NO EL USUARIO */
		/* VER SI EXISTE FORMA DE EXTRAER LA LISTA DE USUARIOS DE AUTH */
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

	//chequear que sean required los inputs y que no te dejen hacer el submit si no esta completo todo
	return (
		<Container>
			<form id='form'>
				<p>This is the register page</p>
				<label htmlFor='name'>Nombre *</label>
				<input
					id='name'
					name='name'
					type='text'
					placeholder='Nombre'
					onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<label htmlFor='lastname'>Apellido *</label>
				<input
					id='lastname'
					name='lastname'
					type='text'
					placeholder='apellido'
					onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<label htmlFor='email'>Email *</label>
				<input
					id='email'
					name='email'
					type='text'
					placeholder='email'
					onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<label htmlFor='dni'>DNI *</label>
				<input
					id='dni'
					name='dni'
					type='number'
					placeholder='dni'
					onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<label htmlFor='phonenumber'>Telefono *</label>
				<input
					id='phonenumber'
					name='phonenumber'
					type='number'
					placeholder='telefono'
					onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<label htmlFor='password'>Contrasena *</label>
				<input
					id='password'
					name='password'
					type='password'
					placeholder='contrasena'
					onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				{alertErrorPassword && <p>La Contrasenia debe ser mayor a 6 digitos</p>}
				<label htmlFor='personalInformation'>Informacion Profesional *</label>
				<input
					id='personalInformation'
					name='personalInformation'
					type='text'
					placeholder='informacion-profesional'
					onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>

				<button
					className='unirme'
					// disabled={errorPassword} VER SI SE DEJA ASÍ
					type='submit'
					onClick={handleSubmit}>
					Unirme
				</button>
			</form>
		</Container>
	);
};

export default Register;

const Container = styled.div`
	max-width: 1200px;
	height: 70vh;
	margin: 5% auto;
	display: flex;
	align-items: center;
	form {
		display: flex;
		flex-direction: column;

		.unirme {
			width: 30%;
		}
	}
`;
