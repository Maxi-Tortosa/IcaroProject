import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { auth } from '../../Firebase/index';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AlertIcon from '../../Components/AlertIcon';

const Register = ({ history }) => {
	const [newUser, setNewUser] = useState({});
	const [createUser, setCreateUser] = useState(false);
	const [alertErrorPassword, setAlertErrorPassword] = useState(false);
	const [required, setRequired] = useState({});

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

	function handleSubmit(e) {
		e.preventDefault();

		if (Object.keys(newUser).length === 7 && alertErrorPassword === false) {
			setCreateUser(true);
		} else {
			setCreateUser(false);
		}

		/* HACER VALIDACIÓN DE SI EXISTE O NO EL USUARIO */
		/* VER SI EXISTE FORMA DE EXTRAER LA LISTA DE USUARIOS DE AUTH */
	}

	function handleBlur(e) {
		inputValidation(newUser, e.target.name);
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

	/* CREATE NEW USER */

	useEffect(() => {
		if (createUser) {
			console.log('Listo');
			setCreateUser(false);

			createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
				.then((userCredential) => {
					// Signed in
					// const user = userCredential.user;
					// ...
				})
				.catch((error) => {
					// const errorCode = error.code;
					// const errorMessage = error.message;
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
		}
		// else {
		// 	console.log('falta algún dato');
		// }
	}, [createUser, newUser, required]);

	console.log(required);

	return (
		<Container>
			<div className='register'>
				<div className='registerImage'></div>
				<div className='registerData' id='form'>
					<p>Únete a Ícaro</p>
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
						Email{required.email === 'required' ? <AlertIcon /> : null}
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
							<span class='alertErrorPassword'>
								(Debe contener al menos 6 caracteres)
							</span>
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
							Object.keys(required).length === 0 ||
							alertErrorPassword
								? 'disabled'
								: null
						}
						disabled={
							Object.values(required).includes('required') ||
							Object.keys(newUser).length !== 7 ||
							alertErrorPassword
								? true
								: false
						}
						className='unirme'
						// disabled={errorPassword} VER SI SE DEJA ASÍ
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
.required{ border-color: #C01E3B !important;}

#disabled {background: grey; cursor:default;}

width: 100%;
background: #757575;
display:flex;	
padding: 10.30rem 0;

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
			display: flex;
			flex-direction: row;
			align-items: center;			
			svg{

				margin-left: 1rem;
								}
				}

				

				input {border-radius: 5px;
					border: 1px solid #E6E6E6;
				height: 1.75rem;
				margin-bottom: 1%;
				padding: 0;
				font-size:1rem;
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
				.alertErrorPassword{color:#C01E3B;}

}

.registerData > * {width:73%;
	margin: 0 auto;
  font-family: 'Montserrat', sans-serif; }
	

		.unirme {
			cursor: pointer;
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
