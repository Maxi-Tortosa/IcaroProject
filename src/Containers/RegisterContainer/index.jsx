import { doc, setDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';

import AlertIcon from '../../Components/Shared/Icons/AlertIcon';
import { auth } from '../../Firebase/index';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import db from '../../Firebase';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';

const Register = ({ history }) => {
	const { users, pending, setPending, currentUser, setCurrentUser } =
		useContext(userContext);
	const [newUser, setNewUser] = useState({});
	const [repeatUser, setRepeatUser] = useState(false);
	const [alertErrorPassword, setAlertErrorPassword] = useState(false);
	const [required, setRequired] = useState({});
	let navigate = useNavigate();

	/*NEW USER */

	function handleChange(name, value, id) {
		setNewUser((newUser) => ({ ...newUser, [name]: value }));

		if (name === 'password' && value.length < 6 && value.length > 0) {
			setAlertErrorPassword(true);
		} else {
			setAlertErrorPassword(false);
		}
	}

	/* REQUIRED VALIDATION */

	function inputValidation(newUser, name) {
		if (name === 'name') {
			if (!newUser.name || newUser.name === '') {
				setRequired({ ...required, [name]: 'required' });
			} else {
				setRequired({ ...required, [name]: 'ok' });
			}
		}
		if (name === 'lastname') {
			if (!newUser.lastname || newUser.lastname === '') {
				setRequired({ ...required, [name]: 'required' });
			} else {
				setRequired({ ...required, [name]: 'ok' });
			}
		}

		if (name === 'email') {
			if (!newUser.email || newUser.email === '') {
				setRequired({ ...required, [name]: 'required' });
			} else {
				setRequired({ ...required, [name]: 'ok' });
			}
		}

		if (name === 'dni') {
			if (!newUser.dni || newUser.dni === '') {
				setRequired({ ...required, [name]: 'required' });
			} else {
				setRequired({ ...required, [name]: 'ok' });
			}
		}

		if (name === 'phonenumber') {
			if (!newUser.phonenumber || newUser.phonenumber === '') {
				setRequired({ ...required, [name]: 'required' });
			} else {
				setRequired({ ...required, [name]: 'ok' });
			}
		}

		if (name === 'password') {
			if (!newUser.password || newUser.password === '') {
				setRequired({ ...required, [name]: 'required' });
			} else {
				setRequired({ ...required, [name]: 'ok' });
			}
		}

		if (name === 'personalInformation') {
			if (!newUser.personalInformation || newUser.personalInformation === '') {
				setRequired({ ...required, [name]: 'required' });
			} else {
				setRequired({ ...required, [name]: 'ok' });
			}
		}
	}

	function handleBlur(e) {
		inputValidation(newUser, e.target.name);
	}

	/*CREATE USER */

	function handleSubmit(e) {
		e.preventDefault();

		const repeatUser = users.find((user) => user.email === newUser.email);

		if (repeatUser) {
			setRepeatUser(true);
		} else {
			setRepeatUser(false);
			createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
				.then((userCredential) => {
					const userId = userCredential.user.uid;
					setDoc(doc(db, 'Usuarios', userId), {
						...newUser,
						rol: 'estudiante',
					});
				})
				.catch((error) => {
					// const errorCode = error.code;
					console.log(error.message);
				});
			// .finally(() => {
			// 	setTimeout(() => {
			// 		navigate('/');
			// 	}, 1500);
			// });
		}
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

	return (
		<Container>
			<div className='register'>
				<div className='registerImage'></div>
				<div className='registerData' id='form'>
					<p>??nete a ??caro</p>
					<label htmlFor='name'>
						Nombre {required.name === 'required' ? <AlertIcon /> : null}
					</label>
					<input
						id='name'
						className={required.name === 'required' ? 'required' : null}
						name='name'
						type='text'
						onBlur={handleBlur}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='lastname'>
						Apellido {required.lastname === 'required' ? <AlertIcon /> : null}
					</label>
					<input
						id='lastname'
						className={required.lastname === 'required' ? 'required' : null}
						name='lastname'
						type='text'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						onBlur={handleBlur}
					/>
					<label htmlFor='email'>
						Email
						{required.email === 'required' ? (
							<AlertIcon />
						) : repeatUser ? (
							'Usuario ya existente'
						) : null}
					</label>
					<input
						id='email'
						className={required.email === 'required' ? 'required' : null}
						name='email'
						type='text'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						onBlur={handleBlur}
					/>
					<label htmlFor='dni'>
						DNI {required.dni === 'required' ? <AlertIcon /> : null}
					</label>
					<input
						id='dni'
						className={required.dni === 'required' ? 'required' : null}
						name='dni'
						type='text'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						onBlur={handleBlur}
					/>
					<label htmlFor='phonenumber'>
						Telefono{' '}
						{required.phonenumber === 'required' ? <AlertIcon /> : null}
					</label>
					<input
						id='phonenumber'
						className={required.phonenumber === 'required' ? 'required' : null}
						name='phonenumber'
						type='text'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						onBlur={handleBlur}
					/>
					<label htmlFor='password'>
						Contrasena {required.password === 'required' ? <AlertIcon /> : null}{' '}
						{alertErrorPassword ? (
							<span class='alertErrorPassword'> (M??nimo de 6 caracteres) </span>
						) : null}
					</label>
					<input
						id='password'
						className={required.password === 'required' ? 'required' : null}
						name='password'
						type='password'
						onBlur={handleBlur}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='personalInformation'>
						Informacion Profesional
						{required.personalInformation === 'required' ? <AlertIcon /> : null}
					</label>
					<textarea
						id='personalInformation'
						className={
							required.personalInformation === 'required' ? 'required' : null
						}
						name='personalInformation'
						rows='6'
						onBlur={handleBlur}
						onChange={(e) =>
							handleChange(e.target.name, e.target.value)
						}></textarea>

					<button
						id={
							Object.values(required).includes('required') ||
							Object.keys(newUser).length < 7 ||
							alertErrorPassword
								? 'disabled'
								: null
						}
						disabled={
							Object.values(required).includes('required') ||
							Object.keys(newUser).length < 7 ||
							alertErrorPassword
								? true
								: false
						}
						className='unirme'
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
	.required {
		border-color: #c01e3b !important;
	}

	#disabled {
		background: grey;
		cursor: default;
	}

	width: 100%;
	background: #757575;
	display: flex;
	padding: 10.3rem 0;

	flex-direction: row;
	justify-content: center;
	align-items: center;

	.register {
		width: 61.31rem;
		height: 41.25rem;
		max-width: 980px;
		max-height: 660px;
		margin: auto 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.registerImage {
		background-image: url('https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/registerImg.png?alt=media&token=c307e822-44e5-49b2-bdb1-d63e081ddf61');
		background-size: cover;
		width: 50%;
		border-radius: 10px 0 0 10px;
	}

	.registerData {
		padding: 4% 0 4% 0;
		width: 50%;
		display: flex;
		flex-direction: column;
		border-radius: 0 10px 10px 0;
		background: white;

		p {
			font-weight: 700;
			font-size: 1.25rem;
			line-height: 1.5rem;
			margin-bottom: 3.5%;
		}

		label {
			font-size: 1rem;
			line-height: 1.5rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			svg {
				margin-left: 1rem;
			}
		}

		input {
			border-radius: 5px;
			border: 1px solid #e6e6e6;
			height: 1.75rem;
			margin-bottom: 1%;
			padding: 0;
			font-size: 1rem;
		}

		input:focus {
			border: 2px solid blue;
			outline: none;
			border-radius: 5px;
			font-size: 1rem;
			font-family: 'Montserrat', sans-serif;
		}

		textarea {
			border-radius: 5px;
			border: 1px solid #e6e6e6;
			margin-bottom: 1%;
			font-size: 1rem;
		}

		textarea:focus {
			border: 2px solid blue;
			outline: none;
			border-radius: 5px;
			font-size: 1rem;
			font-family: 'Montserrat', sans-serif;
		}
		.alertErrorPassword {
			color: #c01e3b;
			margin-left: 0.5rem;
		}
	}

	.registerData > * {
		width: 73%;
		margin: 0 auto;
		font-family: 'Montserrat', sans-serif;
	}

	.unirme {
		cursor: pointer;
		height: 2.8rem;
		background: #1744ff;
		border-radius: 10px;
		border: unset;
		color: white;
		font-family: 'Montserrat', sans-serif;
		font-size: 1.25rem;
		line-height: 1.5rem;
		font-weight: 700;
		margin-top: 2%;
	}
`;
