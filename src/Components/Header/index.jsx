import { useContext, useEffect, useState } from "react"

import ContactModal from "../Shared/Modals/ContactModal"
import IngresaBttn from "../Shared/Buttons/IngresaBttn"
import { Link } from "react-router-dom"
import MenuMobile from "../MenuMobile"
import { auth } from "../../Firebase"
import { projectContext } from "../../Context/ProjectContext"
import { signOut } from "firebase/auth"
import styled from "styled-components"
import theme from "../../Theme/base"
import { useIsMobile } from "../../Hooks/Client"
import { userContext } from "../../Context/UserContext"

const Header = ({ setIsLoginOpen }) => {
	const { is404 } = useContext(projectContext)
	const {
		//  setCurrentUser,
		currentUser,
		users,
	} = useContext(userContext)
	const [isScroll, setIsScroll] = useState(false)
	const [modalIsOpen, setIsOpen] = useState(false)
	const [displayUser, setDisplayUser] = useState(null)
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
	const mobile = useIsMobile()

	useEffect(() => {
		if (currentUser) {
			const display = users.find((user) => user.email === currentUser.email)
			setDisplayUser(display)
		}
	}, [users, currentUser])

	function openModal() {
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	window.addEventListener("scroll", changeNavColor)

	function changeNavColor() {
		if (window.scrollY >= 85) {
			setIsScroll(true)
		} else {
			setIsScroll(false)
		}
	}

	function handleClick() {
		signOut(auth)
		setTimeout(() => {
			setDisplayUser(null)
		}, 1000)
	}

	return (
		<>
			{!is404 && (
				<Container mobile={mobile} isScroll={isScroll}>
					<div className="header">
						{mobile ? (
							<button
								class="mobileButton"
								onClick={() => setMobileMenuIsOpen(true)}
							>
								<img
									src="https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/mobile%2FiconoMenuMobile.png?alt=media&token=e4546394-de4a-4812-b5d5-f53a40bce518"
									alt=""
								/>
							</button>
						) : null}{" "}
						{mobileMenuIsOpen ? (
							<MenuMobile
								openModal={openModal}
								setMobileMenuIsOpen={setMobileMenuIsOpen}
							/>
						) : null}
						<Link to="/" className="logo">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/logo.svg?alt=media&token=b47dccac-e962-48ab-99f1-f3d250f879f5"
								alt="Logo de Ícaro"
							/>
						</Link>
						<ul mobile={mobile} className="menu">
							<li>
								<CenterLinks to={"/#cursos"}>Cursos</CenterLinks>
							</li>
							<li>
								<CenterLinks to={"/quienes-somos"}>Quiénes somos</CenterLinks>
							</li>
							<li>
								<ButtonLink onClick={openModal}>Contacto</ButtonLink>
							</li>
						</ul>
						{displayUser ? (
							<div className="signinButton">
								<span>{displayUser.name}</span>
								<button onClick={handleClick}>Cerrar sesión</button>
							</div>
						) : (
							<div className="signoutButton">
								<IngresaBttn setIsLoginOpen={setIsLoginOpen} />
							</div>
						)}
					</div>
					<ContactModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
				</Container>
			)}
		</>
	)
}

export default Header

const Container = styled.div`
	font-family: ${theme.fontFamily.primary};
	width: 100%;
	background-color: ${({ isScroll }) => (isScroll ? "grey" : " transparent")};
	transition: all 0.3s ease-out 0s;
	position: ${({ mobile }) => (mobile ? "fixed" : "fixed")};
	top: 0;
	left: 0;
	z-index: ${theme.zIndex.header};

	.header {
		width: ${({ mobile }) => (mobile ? "100%" : "80%")};
		max-width: ${({ mobile }) => (mobile ? "null" : "1095px")};
		display: flex;
		flex-direction: row;
		justify-content: ${({ mobile }) => (mobile ? "center" : "space-between")};
		align-items: center;
		padding: 20px 0;
		margin: auto;
	}

	.logo {
		img {
			object-fit: cover;
		}
	}
	.menu {
		display: ${({ mobile }) => (mobile ? "none" : "flex")};
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
	.signinButton,
	.signoutButton {
		display: ${({ mobile }) => (mobile ? "none" : null)};
	}

	.mobileButton {
		background-color: transparent;
		border: none;
		position: absolute;
		margin-right: 80%;
	}
`
const CenterLinks = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;

	&:hover::after {
		width: 100%;
		transition: width 0.5s;
		color: #2b3538;
	}

	&::after {
		content: "";
		display: block;
		width: 0;
		height: 3px;
		background: #fff;
		transition: width 0.3s;
	}
`

const ButtonLink = styled.div`
	text-decoration: none;
	color: #fff;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 21px;
	cursor: pointer;

	&:hover::after {
		width: 100%;
		transition: width 0.5s;
		color: #2b3538;
	}

	&::after {
		content: "";
		display: block;
		width: 0;
		height: 3px;
		background: #fff;
		transition: width 0.3s;
	}
`
