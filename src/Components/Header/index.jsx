import styled from "styled-components"
import { useState, useContext } from "react"
import { projectContext } from "../../Context/ProjectContext"
import { Link } from "react-router-dom"
import IngresaBttn from "../Buttons/IngresaBttn"
import LogIn from "../LogIn/index"
import theme from "../../Theme/base"

const Header = () => {
	const [isScroll, setIsScroll] = useState(false)
	const { modalOpen } = useContext(projectContext)

	window.addEventListener("scroll", changeNavColor)

	function changeNavColor() {
		if (window.scrollY >= 85) {
			setIsScroll(true)
		} else {
			setIsScroll(false)
		}
	}

	return (
		<Container isScroll={isScroll}>
			<div className="header">
				<Link to="/" className="logo">
					<img src="./img/logo.svg" alt="Logo de Ícaro" />
				</Link>
				<ul className="menu">
					<li>
						<Link to={"/#cursos"}>Cursos</Link>
					</li>
					<li>
						<Link to={"/quienes-somos"}>Quiénes somos</Link>
					</li>
					<li>
						<Link to={"/contacto"}>Contacto</Link>
					</li>
				</ul>

				<IngresaBttn />
				{modalOpen ? <LogIn /> : null}
			</div>
		</Container>
	)
}

export default Header

const Container = styled.div`
	font-family: ${theme.fontFamily.primary};
	width: 100%;
	background-color: ${({ isScroll }) => (isScroll ? "grey" : " transparent")};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2000;

	.header {
		width: 90%;
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
