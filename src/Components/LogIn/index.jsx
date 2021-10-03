import styled from 'styled-components';

const LogIn = ({ setModalOpen, setUserData, userData }) => {
	const handleLogIn = () => {
		console.log('holis');
	};

	const handleClose = () => {
		setModalOpen(false);
	};

	const handleChange = (e) => {
		setUserData(e.target.value);
	};

	return (
		<Container>
			<div>
				<label htmlFor='user'> Usuario </label>
				<input
					onChange={handleChange}
					type='email'
					name='user'
					placeholder='Correo electrónico'
				/>
			</div>
			<div>
				<label htmlFor='password'> Contraseña </label>
				<input type='password' name='password' placeholder='Contraseña' />
			</div>

			<button onClick={handleLogIn}> Ingresar </button>
			<button onClick={handleClose}> X </button>
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
