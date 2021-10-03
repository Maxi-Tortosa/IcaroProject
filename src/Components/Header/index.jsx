import styled from 'styled-components';
import { useState } from 'react';
import LogIn from '../LogIn';

const Header = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [userData, setUserData] = useState();

	const handleClick = () => {
		setModalOpen(true);
	};

	console.log(userData);

	return (
		<Container>
			<button className='ingresa' onClick={handleClick}>
				Ingresá
			</button>

			{modalOpen ? (
				<LogIn
					setModalOpen={setModalOpen}
					setUserData={setUserData}
					userData={userData}
				/>
			) : null}
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
