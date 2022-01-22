import { useState, useContext } from 'react';
import { projectContext } from '../../Context/ProjectContext';
import { getAuth } from '../../Firebase';
import { Link, Router } from 'react-router-dom';
import styled from 'styled-components';

const LogIn = () => {
	const { setModalOpen, course, setCourse, isLogin, setIsLogin } =
		useContext(projectContext);

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
			<div className='loginImage'>
				{/* <img src='./img/loginImg.png' alt='' />{' '} */}
			</div>
			<div className='loginData'>
				<p>Inicia Sesión</p>
				{/* { Ver de meter una validación con el hook de reactfire} */}
				{/*Ver de permitir el ingreso con un enter en el input */}
				<div className='input'>
					<label htmlFor='user'> Email </label>
					<input
						id='usuario'
						onChange={(e) => setUserEmail(e.target.value)}
						type='text'
						name='user'
					/>
				</div>
				<div className='input'>
					<label htmlFor='password'> Contraseña </label>
					<input
						onChange={handleChange}
						id='contraseña'
						type='password'
						name='password'
						className={passwordError ? 'passwordError' : 'ok'}
					/>
					{hasError ? <p> su contraseña no existe </p> : null}
				</div>
				<Link To=''>Olvidé mi contraseña</Link>
				<button type='submit' onClick={handleSubmit}>
					Inicia sesión
				</button>
				<Link to='/register'>¿No tenés cuenta? Únete a Icaro </Link>
				<button onClick={() => setModalOpen(false)}> X </button>
			</div>
		</Container>
	);
};

export default LogIn;

const Container = styled.div`
width 68%;
max-width: 980px;
height: 65vh;
position: absolute;
top: 9vh;
margin:0;
border: white;
background-color: white;
display:flex;
border-radius: 10px;



.loginImage{width:50%;

	background-image: url('./img/loginImg.png');
	background-position: right top;
	border-radius:  10px 0 0 10px;

// img {
// 	width:100%;
// 	height:100%;
// 	object-fit:cover;}
}

.loginData{
	width:50%;
	height:100%;
  display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	
	p {font-size: 1.25rem;
	font-weight: 700;}

	.input {display: flex;
	flex-direction:column;

	label { font-size: 1 rem;}
	input:placeholder { display: none;}


	}

	}

	.loginData > * {

		width: 72%;
		margin: 0 auto;
	}

	.passwordError {
		color: red;
		border-color: red;	}

	.passwordError::placeholder {
		color: red;}
`;
