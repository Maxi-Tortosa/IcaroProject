import { FaRegUser, FaSignOutAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import { MdDashboard } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styled from 'styled-components';
import theme from '../../Theme/base';

const UserDisplay = ({ userName, onClick }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleClick = () => {
		onClick();
	};

	const handleToggle = (open) => {
		open ? setIsMenuOpen(false) : setIsMenuOpen(true);
	};

	const ref = useLocation().pathname === '/user' ? true : false;

	console.log(ref);

	return (
		<Container>
			<UserName>Hola {userName}!</UserName>

			<MdOutlineKeyboardArrowDown
				color='white'
				cursor='pointer'
				size={25}
				onClick={() => handleToggle(isMenuOpen)}
			/>
			{isMenuOpen && (
				<UserMenu>
					<Item>
						{ref ? (
							<MdDashboard size={20} color={theme.color.login} />
						) : (
							<FaRegUser size={20} color={theme.color.login} />
						)}
						<LinkText>
							{ref ? (
								<Link to='/user/' onClick={() => setIsMenuOpen(false)}>
									Inicio
								</Link>
							) : (
								<Link to='/user/profile' onClick={() => setIsMenuOpen(false)}>
									Mi perfil
								</Link>
							)}
						</LinkText>
					</Item>
					<Item>
						<FaSignOutAlt size={20} color={theme.color.login} />
						<SignOutButton onClick={handleClick}>Cerrar sesión</SignOutButton>
					</Item>
				</UserMenu>
			)}
		</Container>
	);
};

export default UserDisplay;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
`;
const UserName = styled.span`
	font-weight: 500;
	font-size: 1rem;
	line-height: 1.1275rem;
	color: white;
	margin-right: 1.5rem;
`;
const SignOutButton = styled.button`
	border: unset;
	outline: none;
	background-color: transparent;
	font-family: ${theme.fontFamily.primary};
	font-size: 1.25rem;
	line-height: 1.5rem;
	font-weight: 400;
	color: ${theme.color.login};
	padding: 0;
	margin-left: 1rem;
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
`;
const UserMenu = styled.div`
	position: absolute;
	background-color: white;
	top: 1.8rem;
	left: -1.5rem;
	width: 110%;
	height: 6.6rem;
	padding: 1rem;
	box-shadow: ${theme.shadow.boxShadow};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const Item = styled.span`
	display: flex;
	align-items: center;
`;

const LinkText = styled.span`
	font-size: 1.25rem;
	line-height: 1.5rem;
	font-weight: 400;
	margin-left: 1rem;
	a {
		text-decoration: none;
		color: ${theme.color.login};
	}
	a:hover {
		text-decoration: underline;
	}
`;
