import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"
import React from "react"
import styled from "styled-components"
import theme from "../../Theme/base"

const MenuMobile = ({ openModal, setMobileMenuIsOpen }) => {
	const handleClick = () => {
		openModal()
		setMobileMenuIsOpen(false)
	}
	return (
		<BackgroundMenu>
			<Menu>
				<div>
					<span>¡Bienvenido!</span>
					<button onClick={() => setMobileMenuIsOpen(false)}>
						<ArrowLeft size={20} />
					</button>
				</div>
				<div>
					<ul>
						<li>
							<Link to="">Inicio</Link>
						</li>
						<li>
							<Link to={"/#cursos"}>Cursos</Link>
						</li>
						<li>
							<Link to={"/quienes-somos"}>Quiénes somos</Link>
						</li>
						<li>
							<button onClick={handleClick}>Contacto</button>
						</li>
					</ul>
				</div>
			</Menu>
		</BackgroundMenu>
	)
}

export default MenuMobile

const BackgroundMenu = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background: rgba(26, 27, 28, 0.502267);
`

const Menu = styled.div`
	width: 280px;
	height: 295px;
	font-family: "Roboto", sans-serif;

	div:nth-child(1) {
		height: 20%;
		padding: 0 1.62rem 0 2.43rem;
		background: #1744ff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		span {
			font-weight: 500;
			font-size: 0.8rem;
			line-height: 1.5rem;
			color: #ffffff;
		}
		button {
			background-color: transparent;
			border: unset;
		}
	}
	div:nth-child(2) {
		height: 80%;
		background: white;
		ul {
			margin: 0;

			padding: 1.25rem 0 0 2.43rem;
			list-style-type: none;

			li {
				margin-bottom: 1.5rem;
				cursor: pointer;

				a {
					text-decoration: none;
					font-weight: 500;
					font-size: 0.8rem;
					line-height: 1.5rem;
					color: rgba(0, 0, 0, 0.87);
				}
				button {
					font-family: "Roboto", sans-serif;
					background: unset;
					border: unset;
					padding: 0;
					font-weight: 500;
					font-size: 0.8rem;
					line-height: 1.5rem;
					color: rgba(0, 0, 0, 0.87);
				}
			}
		}
	}
`
const ArrowLeft = styled(AiOutlineArrowLeft)`
	color: ${theme.color.white};
	cursor: pointer;
`
