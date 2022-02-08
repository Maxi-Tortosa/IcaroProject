import { useState, useContext } from 'react';
import { projectContext } from '../../Context/ProjectContext';
import auth from '../../Firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogIn = ({ setIsModalOpen }) => {
	const { setIsLogin } = useContext(projectContext);

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
		auth
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
			<div className='background'></div>
			<div className='modal'>
				<div className='loginImage'></div>
				<div className='loginData'>
					<p>Inicia Sesión</p>
					{/* Ver de meter una validación con el hook de reactfire */}
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
					<Link className='forgot' to='/'>
						Olvidé mi contraseña
					</Link>
					<button className='submit' type='submit' onClick={handleSubmit}>
						Inicia sesión
					</button>
					<Link className='register' to='/register'>
						¿No tenés cuenta? Únete a Icaro{' '}
					</Link>
					<button className='close' onClick={() => setIsModalOpen(false)}>
						{' '}
						x{' '}
					</button>
				</div>
			</div>
		</Container>
	);
};

export default LogIn;

const Container = styled.div`
position: fixed;

width: 100%;
height: 100vh;
z-index: 3;

.background{width:100%;
	height: 100%;
	background-color: black;
opacity: 0.4;}

.modal{
	z-index: 4;
width 68%;
max-width: 980px;
height: 65vh;
min-height: 500px;
position: absolute;
top: 17%;
left: 24%;
margin:0;
border: white;
background-color: white;
display:flex;
border-radius: 10px;
font-family: 'Montserrat', sans-serif;

.loginImage{width:50%;

	background-image: url('./img/loginImg.png');
	background-position: right top;
	border-radius:  10px 0 0 10px;

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
	margin-top: 3%;

	label { font-size: 1 rem;
	margin-bottom: 1%;}

	input {border-radius: 5px;
		border: 1px solid #E6E6E6;
	height: 1.875rem;
	}

	input:focus{
		border: 2px solid blue;
		outline:none;
		border-radius: 5px;
		font-size:1rem;
		font-family: 'Montserrat', sans-serif;
	
	}

	input:placeholder { display: none;}
	
  }
	.forgot {margin-top: 1% ;
		color: black;}

	.submit {height: 2.8rem;
		background: #1744FF;
		border-radius: 10px;
    border:unset;
		color: white;
		font-family: 'Montserrat', sans-serif;
		font-size: 1.25rem;
		line-height: 1.5rem;
		font-weight: 500;
		margin-top: 9%;
		}

	.register{color:black;
			font-weight: 500 !important;
		text-align:center;
	margin-top: 5% !important;}

	.close{ background: transparent;
					border:unset;				
			font-size:1.6rem ;				
		position: absolute;
		bottom:92%;
	  left: 60%}

		.close:hover{cursor:pointer}

	}



	.loginData > * {

		width: 72%;
		margin: 0 auto;
		font-weight: 400;
	}

	.passwordError {
		color: red;
		border-color: red;	}

	.passwordError::placeholder {
		color: red;}
	}`;
