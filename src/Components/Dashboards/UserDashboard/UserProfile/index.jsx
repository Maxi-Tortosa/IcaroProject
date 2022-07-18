import React, { useContext, useEffect, useRef, useState } from 'react';

import BlueButton from '../../../Shared/Buttons/BlueButton';
import styled from 'styled-components';
import theme from '../../../../Theme/base';
import { useIsMobile } from '../../../../Hooks/Client';
import { userContext } from '../../../../Context/UserContext';

const UserProfile = () => {
	const mobile = useIsMobile();
	const { users } = useContext(userContext);
	const [userData, setUserData] = useState({});
	const [newPassword, setNewPassword] = useState({});
	const [alertErrorPassword, setAlertErrorPassword] = useState({});
	const currentPassword = useRef(null);

	useEffect(() => {
		const loggedUser = users.find((user) => user.dni === '32926900');
		setUserData(loggedUser);
	}, [users]);

	function handleChange(name, value, id) {
		setNewPassword((newUser) => ({ ...newUser, [name]: value }));

		if (name === 'newPassword') {
			if ((value.length < 6) & (value.length > 0)) {
				setAlertErrorPassword((current) => ({ ...current, [name]: true }));
			} else {
				setAlertErrorPassword((current) => ({ ...current, [name]: false }));
			}
		}
		if (name === 'repeatNewPassword') {
			if (value !== newPassword.newPassword) {
				setAlertErrorPassword((current) => ({ ...current, [name]: true }));
			} else {
				setAlertErrorPassword((current) => ({ ...current, [name]: false }));
			}
		}
	}

	const saveNewData = (alertErrorPassword) => {
		if (
			!alertErrorPassword.newPassword & !alertErrorPassword.repeatNewPassword
		) {
			if (currentPassword.current.value === userData.password) {
				console.log(currentPassword.current.value);
			}
		}
	};

	console.log(users);
	return (
		<Container>
			<TitleContainer mobile={mobile}>
				<Title mobile={mobile}>Mi perfil</Title>
			</TitleContainer>

			<FormContainer>
				<FieldContainer>
					<FormField>
						<FormLabel htmlFor='name'>Nombre</FormLabel>

						<FormInput
							type='text'
							name='name'
							defaultValue={userData && userData.name}
							disabled
						/>
					</FormField>
					<FormField>
						<FormLabel htmlFor='name'>Apellido</FormLabel>

						<FormInput
							type='text'
							name='name'
							defaultValue={userData && userData.lastname}
							disabled
						/>
					</FormField>
					<FormField>
						<FormLabel htmlFor='name'>Mail</FormLabel>

						<FormInput
							type='text'
							name='name'
							defaultValue={userData && userData.email}
							disabled
						/>
					</FormField>
					<FormField>
						<FormLabel htmlFor='name'>Teléfono</FormLabel>

						<FormInput
							type='text'
							name='name'
							defaultValue={userData && userData.phonenumber}
							disabled
						/>
					</FormField>

					<FormField>
						<FormLabel htmlFor='dni'>DNI</FormLabel>

						<FormInput
							type='text'
							name='dni'
							defaultValue={userData && userData.dni}
							disabled
						/>
					</FormField>

					<FormField>
						<FormLabel htmlFor='currentPassword'>Contraseña actual</FormLabel>

						<FormInput
							type='text'
							name='currentPassword'
							ref={currentPassword}
						/>
					</FormField>
					<FormField>
						<FormLabel htmlFor='newPassword'>
							Contraseña nueva{' '}
							{alertErrorPassword.newPassword && (
								<span class='alertErrorPassword'>
									{' '}
									(Mínimo de 6 caracteres){' '}
								</span>
							)}
						</FormLabel>

						<FormInput
							type='text'
							name='newPassword'
							onChange={(e) => handleChange(e.target.name, e.target.value)}
						/>
					</FormField>
					<FormField>
						<FormLabel htmlFor='repeatNewPassword'>
							Repita contraseña nueva{' '}
							{alertErrorPassword.repeatNewPassword && (
								<span class='alertErrorPassword'>
									{' '}
									(Las contraseñas no coinciden){' '}
								</span>
							)}
						</FormLabel>

						<FormInput
							type='text'
							name='repeatNewPassword'
							onChange={(e) => handleChange(e.target.name, e.target.value)}
						/>
					</FormField>
				</FieldContainer>
				<BlueButton
					alignSelf='flex-end'
					padding='0.5rem 3.8rem'
					borderRadius='10px'
					margin='4rem 0 3.65rem 0'
					onClick={() => saveNewData(alertErrorPassword)}>
					Guardar
				</BlueButton>
			</FormContainer>
		</Container>
	);
};

export default UserProfile;

const Container = styled.div`
	width: 100%;
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

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin: 0.65rem 1.87rem 0 1.87rem;
`;
const FieldContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 20px;
	row-gap: 2rem;
`;
const FormField = styled.div`
	height: 4.25rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 235px;
`;

const FormLabel = styled.label`
	font-family: 'Montserrat';
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.25rem;
	color: #29343e;
`;

const FormInput = styled.input`
	box-sizing: border-box;
	font-family: 'Montserrat';
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.25rem;
	color: #29343e;
	border: 1px solid #a8a8a8;
	box-sizing: border-box;
	padding: 0.5rem 0 0.5rem 0.6rem;
`;
