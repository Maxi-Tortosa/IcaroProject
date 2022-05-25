import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const MenuMobile = ({ openModal, setMobileMenuIsOpen }) => {
	return (
		<BackgroundMenu>
			<Menu>
				<div>
					<span>Bienvenidos</span>
					<button onClick={() => setMobileMenuIsOpen(false)}>
						<img
							src='https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/mobile%2FMenuMobileArrow.png?alt=media&token=22b512fb-7a1f-4d34-bc64-441c4d77d928'
							alt='Cerrar Menú Mobile'
						/>
					</button>
				</div>
				<div>
					<ul>
						<li>
							<Link to=''>Inicio</Link>
						</li>
						<li>
							<Link to={'/#cursos'}>Cursos</Link>
						</li>
						<li>
							<Link to={'/quienes-somos'}>Quiénes somos</Link>
						</li>
						<li>
							<Link to=''>Contacto</Link>
						</li>
					</ul>
				</div>
			</Menu>
		</BackgroundMenu>
	);
};

export default MenuMobile;

const BackgroundMenu = styled.div`
	position: absolute;
	width: 100vh;
	height: 100vh;
	top: 0;
	left: 0;
	background: rgba(26, 27, 28, 0.502267);
`;

const Menu = styled.div`
	width: 77%;
	height: 295px;
	font-family: 'Roboto', sans-serif;

	div:nth-child(1) {
		background: #1744ff;
	}
	div:nth-child(2) {
		background: white;
		ul {
			margin: 0;
			padding: 0;
			list-style-type: none;

			li {
				a {
					text-decoration: none;
				}
			}
		}
	}
`;
