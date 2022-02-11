import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import IngresaBttn from '../Buttons/IngresaBttn';
import theme from '../../Theme/base';

const Header = ({ setIsLoginOpen }) => {
	const [isScroll, setIsScroll] = useState(false);

	window.addEventListener('scroll', changeNavColor);

	function changeNavColor() {
		if (window.scrollY >= 85) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	}

	return (
		<Container isScroll={isScroll}>
			<div className='header'>
				<Link to='/' className='logo'>
					<img src='./img/logo.svg' alt='Logo de Ícaro' />
				</Link>
				<ul className='menu'>
					<li>
						<CenterLinks to={'/#cursos'}>Cursos</CenterLinks>
					</li>
					<li>
						<CenterLinks to={'/quienes-somos'}>Quiénes somos</CenterLinks>
					</li>
					<li>
						<CenterLinks to={'/contacto'}>Contacto</CenterLinks>
					</li>
				</ul>

				<IngresaBttn setIsLoginOpen={setIsLoginOpen} />
			</div>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	font-family: ${theme.fontFamily.primary};
	width: 100%;
	background-color: ${({ isScroll }) => (isScroll ? 'grey' : ' transparent')};
	transition: all 0.3s ease-out 0s;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2000;

	.header {
		width: 80%;
		max-width: 1095px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;

		padding: 20px 0;
		margin: auto;
	}

	.logo {
		img {
			object-fit: cover;
		}
	}
	.menu {
		width: 26.71%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style-type: none;
		margin: 0;
		padding: 0;
		width: 300px;
		justify-content: space-between;

		li {
			margin: 0 2.6% 0 0;
		}
		& li:last-child {
			margin: 0;
		}
	}
`;
const CenterLinks = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;

	&:hover::after {
		width: 100%;
		transition: width 0.3s;
		color: #2b3538;
	}

	&::after {
		content: '';
		display: block;
		width: 0;
		height: 3px;
		background: #fff;
		transition: width 0.3s;
	}
`;
