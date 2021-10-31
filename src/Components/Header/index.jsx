import styled from 'styled-components';
import { useState } from 'react';
import LogIn from '../LogIn';

const Header = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [isLogin, setIsLogin] = useState(false);

	const handleClick = () => {
		setModalOpen(true);
	};

	return (
		<>
			{isLogin ? (
				<Container>
					<p>Estás logueado</p>
					<button onClick={() => setIsLogin(false)}>Cerrar sesión</button>
				</Container>
			) : (
				<Container>
					<button className='ingresa' onClick={handleClick}>
						Ingresá
					</button>

					<button className='unete'>Unete a Ícaro</button>

					{modalOpen ? (
						<LogIn
							setModalOpen={setModalOpen}
							isLogin={isLogin}
							setIsLogin={setIsLogin}
						/>
					) : null}
				</Container>
			)}
		</>
	);
};

export default Header;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: right;
	position: relative;

	.ingresa {
		margin: 10px 10px 10px 10px;
	}

	.unete {
		margin: 10px 10px 10px 10px;
	}
`;
