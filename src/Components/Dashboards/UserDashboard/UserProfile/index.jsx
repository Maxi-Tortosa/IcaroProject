import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { userContext } from '../../../../Context/UserContext';
import { useIsMobile } from '../../../../Hooks/Client';
import theme from '../../../../Theme/base';

const UserProfile = () => {
	const mobile = useIsMobile();
	const { users } = useContext(userContext);
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const loggedUser = users.find((user) => user.dni === '32926900');
		setUserData(loggedUser);
	}, [users]);

	console.log(userData);

	return (
		<Container>
			<TitleContainer mobile={mobile}>
				<Title mobile={mobile}>Mi perfil</Title>
			</TitleContainer>
			<FormContainer>
				<FormLabel htmlFor='name'>Nombre</FormLabel>

				<FormInput
					type='text'
					name='name'
					defaultValue={userData && userData.name}
				/>
			</FormContainer>
		</Container>
	);
};

export default UserProfile;

const Container = styled.div`
	width: 90%;
	max-width: 1095px;
	background-color: 'white';
	padding: 0;
	margin: 0 auto 0 auto;
	background: #ffffff;
	box-shadow: 0px 0px 10px #dadada;
	border-radius: 5px;
`;

const TitleContainer = styled.div`
	display: ${({ mobile }) => (mobile ? null : 'flex')};
	flex-direction: ${({ mobile }) => (mobile ? null : 'row')};
	justify-content: ${({ mobile }) => (mobile ? null : 'space-between')};
	align-items: center;
	padding: 1.25rem 0 1.25rem 0;
	margin: 0 1.87rem;
`;
const Title = styled.h5`
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	margin: 0;
	font-weight: 700;
	font-size: ${({ mobile }) => (mobile ? null : '1.25rem')};
	line-height: 24px;
	color: #29343e;
`;

const FormContainer = styled.form``;

const FormLabel = styled.label``;

const FormInput = styled.input``;
