import styled from "styled-components"
import { useState } from "react"
import LogIn from "../LogIn"
import { Link } from "react-router-dom"
import IngresaBttn from "../Buttons/IngresaBttn"

const Header = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [isScroll, setIsScroll] = useState(false)

	window.addEventListener("scroll", changeNavColor)

	function changeNavColor() {
		if (window.scrollY >= 85) {
			setIsScroll(true)
		} else {
			setIsScroll(false)
		}
	}

	const handleClick = () => {
		setModalOpen(true)
	}

	return (
		<Container>
			<div className="header-container">
				<div className={isScroll ? "header scroll" : "header"}>
					<Link to="/" className="logo">
						<img src="./img/logo.svg" alt="Logo de Ícaro" />
					</Link>
					<ul className="menu">
						<li>
							<Link to={"/cursos"}>Cursos</Link>
						</li>
						<li>
							<Link to={"/quienes-somos"}>Quiénes somos</Link>
						</li>
						<li>
							<Link to={"/contacto"}>Contacto</Link>
						</li>
					</ul>

					<IngresaBttn />

					{/* Incluir el registrate dentro del modal */}
				</div>
			</div>
		</Container>
	)
}

export default Header

const Container = styled.div`
	font-family: "Montserrat", sans-serif;
	/* width: 100vw; */

	.header-container {
		max-width: 1095px;
	}

	.header {
		width: 100%;
		background-color: transparent;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: row;
		position: fixed;
		top: 0;
		left: 0;
		padding: 20px 0;
		z-index: 2000;
		/* max-width: 1200px; */
		margin: auto;
	}

	.scroll {
		background-color: grey;
	}

	.logo {
		/* margin: 50px; */
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
		width: 400px;
		justify-content: space-between;

		li {
			margin: 0 2.6% 0 0;
			a {
				text-decoration: none;
				color: #fff;
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 19px;
			}
			& a:hover {
				font-weight: bold;
			}
		}
		& li:last-child {
			margin: 0;
		}
	}
`
