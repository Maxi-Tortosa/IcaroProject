import styled from 'styled-components';
import { useState } from 'react';
import LogIn from '../LogIn';

const Header = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleClick = () => {
		setModalOpen(true);
	};

	return (
		<Container>
			<button className='ingresa' onClick={handleClick}>
				Ingresá
			</button>

			<button>Unete a Ícaro</button>

			{modalOpen ? <LogIn setModalOpen={setModalOpen} /> : null}
		</Container>
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
`;
