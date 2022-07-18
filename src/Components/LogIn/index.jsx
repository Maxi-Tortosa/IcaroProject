import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { userContext } from '../../Context/UserContext';
import LoginModal from '../Shared/Modals/LoginModal/index'

const LogIn = ({ setIsLoginOpen, isLoginOpen }) => {
	const { users } = useContext(userContext);
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState();
	const [passwordError, setPasswordError] = useState(false);
	const [hasError, setHasError] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const matchEmail = users.find((user) => user.email === userEmail);
		const matchPassword =
			matchEmail && matchEmail.password === userPassword ? true : false;

		console.log(matchEmail, matchPassword);

		if (matchEmail && matchPassword) {
			signInWithEmailAndPassword(auth, userEmail, userPassword);

			if (matchEmail.rol === 'estudiante') {
				setTimeout(() => {
					setIsLoginOpen(false);
					navigate('user');
				}, 1000);
			}
			if (matchEmail.rol === 'administrador') {
				setTimeout(() => {
					setIsLoginOpen(false);
					navigate('admin');
				}, 1000);
			}
		} else {
			console.log('usuario no existente');
		}
	};

	const handleChange = (e) => {
		if (e.target.value.length < 6 && e.target.value.length > 0) {
			setPasswordError(true);
		} else {
			setUserPassword(e.target.value);
			setPasswordError(false);
		}
	};

	/* Quedó terminado el inicio de sesión con Firebase */
	// auth
	// 	.signInWithEmailAndPassword(userEmail, userPassword)
	// 	.then(() => {
	// 		setUserEmail('');
	// 		setUserPassword('');
	// 		setHasError('');

	// 		setTimeout(() => setIsLogin(true), 2000);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});

	return (
		
			<LoginModal
				isLoginOpen={isLoginOpen}
				setIsLoginOpen={setIsLoginOpen}
				setUserEmail = {setUserEmail}
				handleChange = {handleChange}
				passwordError = {passwordError}
				hasError= {hasError}
				handleSubmit={handleSubmit}
			>
			</LoginModal>

			
	);
};

export default LogIn;
