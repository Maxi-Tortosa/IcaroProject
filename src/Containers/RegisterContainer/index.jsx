import styled from 'styled-components';
import { useState } from 'react';
import auth from '../../Firebase/index';
// import { withRouter } from "react-router";
// import { auth } from "../../Firebase"

const Register = ({ history }) => {
	const [newUser, setNewUser] = useState();
	const [createUser, setCreateUser] = useState(false);
	// const [errorPassword, setErrorPassword] = useState(false);
	const [alertErrorPassword, setAlertErrorPassword] = useState(false);
	// const [isLogged, setIsLogged] = useState(false);

	function handleChange(name, value, id) {
		setNewUser((newUser) => ({ ...newUser, [name]: value }));

		if (name === 'password' && value.length < 6 && value.length >= 1) {
			console.log('mal cotrasenia!');
			// setErrorPassword(true);
		} else {
			setAlertErrorPassword(false);
			// setErrorPassword(false);
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

		/* CREATE NEW USER */

		if (createUser) {
			auth
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
			<div className='register'>
				<div className='registerImage'></div>
				<div className='registerData' id='form'>
					<p>Únete a Ícaro</p>
					<label htmlFor='name'>Nombre</label>
					<input
						id='name'
						name='name'
						type='text'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='lastname'>Apellido</label>
					<input
						id='lastname'
						name='lastname'
						type='text'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						name='email'
						type='text'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='dni'>DNI</label>
					<input
						id='dni'
						name='dni'
						type='text'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='phonenumber'>Telefono</label>
					<input
						id='phonenumber'
						name='phonenumber'
						type='number'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor='password'>Contrasena</label>
					<input
						id='password'
						name='password'
						type='password'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					/>
					{alertErrorPassword && (
						<p>La Contrasenia debe ser mayor a 6 digitos</p>
					)}
					<label htmlFor='personalInformation'>Informacion Profesional</label>
					<textarea
						id='personalInformation'
						name='personalInformation'
						rows='6'
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
	margin: 10.61rem 0;
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
