import styled from "styled-components"
import { useState } from "react"
import LogIn from "../LogIn"
import { Link } from "react-router-dom"

const Header = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [isLogin, setIsLogin] = useState(false)
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
		<>
			{isLogin ? (
				<Container>
					<p>Estás logueado</p>
					<button onClick={() => setIsLogin(false)}>Cerrar sesión</button>
				</Container>
			) : (
				<Container>
					<div className={isScroll ? "header scroll" : "header"}>
						<div className="logo">
							<img src="./img/logo.svg" alt="Logo de Ícaro" />
						</div>
						<ul className="menu">
							<li>
								<Link to={""}>Cursos</Link>
							</li>
							<li>
								<Link to={""}>Quiénes somos</Link>
							</li>
							<li>
								<Link to={""}>Contacto</Link>
							</li>
						</ul>

						<button className="ingresa" onClick={handleClick}>
							Ingresá
						</button>

						{/* Incluir el registrate dentro del modal */}

						{modalOpen ? (
							<LogIn
								setModalOpen={setModalOpen}
								isLogin={isLogin}
								setIsLogin={setIsLogin}
							/>
						) : null}
					</div>
				</Container>
			)}
		</>
	)
}

export default Header

const Container = styled.div`
	font-family: "Roboto", sans-serif;
	width: 100vw;

	.header {
		background-color: transparent;
		width: 100%;
		display: flex;
		/* grid-template-columns: 3fr; */
		justify-content: space-around;
		position: fixed;
		top: 0;
		left: 0;
		padding: 50px 0;
		/* max-width: 1200px; */
		margin: auto;
	}

	.scroll {
		background-color: grey;
	}

	.logo {
		/* width: 170px;
		height: 44.5px; */
		width: 170px;

		/* margin: 39px 0 0 41px; */

		img {
			width: 100%;
			height: 100%;
			/* object-fit: cover;s */
		}
	}
	.menu {
		display: flex;
		flex-direction: row;
		align-items: center;
		list-style-type: none;
		margin: 0;
		padding: 0;
		width: 300px;
		justify-content: space-around;

		li {
			/* margin: 55px 60px 0 0; */
			a {
				text-decoration: none;
				color: #000000;
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 19px;
			}
			& a:hover {
				font-weight: bold;
			}
		}
	}

	.ingresa {
		cursor: pointer;
		color: white;
		font-size: 12px;
		/* background-color: #1744ff; */
		background: linear-gradient(90deg, #179cff 0%, #1743ff 100.01%);
		border-radius: 5px;
		border: none;
		justify-self: end;
		text-align: center;
		font-size: 12px;
		line-height: 14px;
		/* margin: 39px 30px 0 0; */
		padding: 16px 66px 16px 66px;
	}
`
