import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { auth } from '../../Firebase/index';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = ({ history }) => {
	const [newUser, setNewUser] = useState({});
	const [createUser, setCreateUser] = useState(false);
	// const [errorPassword, setErrorPassword] = useState(false);
	const [alertErrorPassword, setAlertErrorPassword] = useState(false);
	// const [isLogged, setIsLogged] = useState(false);
	const [required, setRequired] = useState({});

	/*NEW USER */

	function handleChange(name, value, id) {
		setNewUser((newUser) => ({ ...newUser, [name]: value }));

		if (name === 'password' && value.length < 6 && value.length >= 0) {
			console.log('mal cotrasenia!');
			setAlertErrorPassword(true);
		} else {
			setAlertErrorPassword(false);
		}
	}

	/* REQUIRED VALIDATION */

	function inputValidation(newUser) {
		const errors = {};

		if (!newUser.name) {
			errors.name = 'Nombre es un campo requerido';
		}
		if (!newUser.lastname) {
			errors.lastname = 'Apellido es un campo requerido';
		}
		if (!newUser.email) {
			errors.email = 'Email es un campo requerido';
		}
		if (!newUser.dni) {
			errors.dni = 'DNI es un campo requerido';
		}
		if (!newUser.phonenumber) {
			errors.phonenumber = 'Teléfono es un campo requerido';
		}
		if (!newUser.password) {
			errors.password = 'Contraseña es un campo requerido';
		}
		if (!newUser.personalInformation) {
			errors.personalInformation =
				'Información profesional es un campo requerido';
		}

		return errors;
	}

	function handleSubmit(e) {
		e.preventDefault();
		setRequired(inputValidation(newUser));
		if (Object.keys(newUser).length === 7 && alertErrorPassword === false) {
			setCreateUser(true);
		} else {
			setCreateUser(false);
		}

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

	/* CREATE NEW USER */

	useEffect(() => {
		if (createUser) {
			console.log('Listo');
			setCreateUser(false);

			createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
				});

			// auth
			// 	.createUserWithEmailAndPassword(newUser.email, newUser.password)
			// 	.then(() => {
			// 		setCreateUser(
			// 			true
			// 		); /* DEBERÍAMOS CREAR UN USUARIO EN LA BASE DE DATOS */
			// 	})
			// 	.catch((err) => {
			// 		console.log(err);
			// 	});
		} else {
			console.log('falta algún dato');
		}
	}, [createUser, newUser]);

	console.log(required);
	console.log(alertErrorPassword);
	console.log(createUser);
	console.log(Object.keys(newUser).length);

	return (
		<Container>
			<div className='register'>
				<div className='registerImage'></div>
				<div className='registerData' id='form'>
					<p>Únete a Ícaro</p>
					<label htmlFor='name'>Nombre</label>
					<input
						id='name'
						name='name'
						type='text'
						placeholder={required.name ? required.name : null}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='lastname'>Apellido</label>
					<input
						id='lastname'
						name='lastname'
						type='text'
						placeholder={required.lastname ? required.lastname : null}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						name='email'
						type='text'
						placeholder={required.email ? required.email : null}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='dni'>DNI</label>
					<input
						id='dni'
						name='dni'
						type='text'
						placeholder={required.dni ? required.dni : null}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='phonenumber'>Telefono</label>
					<input
						id='phonenumber'
						name='phonenumber'
						type='text'
						placeholder={required.phonenumber ? required.phonenumber : null}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='password'>
						{alertErrorPassword
							? 'La Contrasenia debe ser mayor a 6 digitos'
							: 'Contrasena'}
					</label>
					<input
						id='password'
						name='password'
						type='password'
						placeholder={required.password ? required.password : null}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>

					<label htmlFor='personalInformation'>Informacion Profesional</label>
					<textarea
						id='personalInformation'
						name='personalInformation'
						rows='6'
						placeholder={
							required.personalInformation ? required.personalInformation : null
						}
						onChange={(e) =>
							handleChange(e.target.name, e.target.value)
						}></textarea>

					<button
						className='unirme'
						// disabled={errorPassword} VER SI SE DEJA ASÍ
						type='submit'
						onClick={handleSubmit}>
						Unirme
					</button>
				</div>
			</div>
		</Container>
	);
};

export default Register;

const Container = styled.div`

height: 100vh;
width: 100%;
background: #757575;
display:flex;	

	flex-direction: row;
	justify-content: center;
	align-items: center;



.register {
	width: 61.31rem;
	height: 41.25rem;
	max-width: 980px;
  max-height:660px;
	margin: auto 0;
	display:flex;	
	flex-direction: row;
	justify-content: center;
}

.registerImage{background-image:url('https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/registerImg.png?alt=media&token=c307e822-44e5-49b2-bdb1-d63e081ddf61');
background-size: cover;
width:50%;
border-radius: 10px 0 0 10px;}


.registerData {
padding:4% 0 4% 0;
width:50%;
display:flex;
flex-direction: column;
border-radius: 0 10px 10px 0;
background: white;

p{font-weight: 700;
	font-size: 1.25rem;
	line-height: 1.5rem;
margin-bottom: 3.5%;}

label{font-size: 1rem;
			line-height:	1.5rem;
			
				}

				input {border-radius: 5px;
					border: 1px solid #E6E6E6;
				height: 1.75rem;
				margin-bottom: 1%;
				padding: 0;
				}

					input:focus{
					border: 2px solid blue;
					outline:none;
					border-radius: 5px;
					font-size:1rem;
					font-family: 'Montserrat', sans-serif;
				
				}

				input:placeholder { display: none !important;}
				
				textarea{border-radius: 5px;
					border: 1px solid #E6E6E6;				
				margin-bottom: 1%;
				}

				textarea:focus{
					border: 2px solid blue;
					outline:none;
					border-radius: 5px;
					font-size:1rem;
					font-family: 'Montserrat', sans-serif;
				
				}

}

.registerData > * {width:73%;
	margin: 0 auto;
  font-family: 'Montserrat', sans-serif; }
	

		.unirme {
			height: 2.8rem;
		background: #1744FF;
		border-radius: 10px;
    border:unset;
		color: white;
		font-family: 'Montserrat', sans-serif;
		font-size: 1.25rem;
		line-height: 1.5rem;
		font-weight: 700;
		margin-top: 2%;
		}
	}
`;
