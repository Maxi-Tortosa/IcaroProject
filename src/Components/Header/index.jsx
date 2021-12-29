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
		width: 100%;
		background-color: transparent;
		display: flex;
		justify-content: space-around;
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

	.ingresa {
		width: 12.17%;
		cursor: pointer;
		color: white;
		font-size: 1rem;
		background: linear-gradient(90deg, #179cff 0%, #1743ff 100.01%);
		border-radius: 5px;
		border: none;
		justify-self: end;
		text-align: center;
		line-height: 0.875rem;
		/* margin: 0 auto 0 9.66%; */
		padding: 1% 3.6% 1% 3.6%;
	}
`
