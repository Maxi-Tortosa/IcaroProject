import React from "react"
import { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { mainFooterContext } from "../../Context/FooterContext"
import theme from "../../Theme/base"
import Loader from "../Loader"

const Footer = () => {
	const { footerContent, setFooterContent } = useContext(mainFooterContext)
	const [pending, setPending] = useState(true)

	// const [content, setContent] = useState("")

	useEffect(() => {
		if (footerContent) {
			window.localStorage.setItem(
				"localfooterContent",
				JSON.stringify(footerContent)
			)
			setPending(false)
		}
	}, [footerContent])

	if (pending) {
		var localfooterContent = JSON.parse(
			localStorage.getItem("localfooterContent")
		)
	}

	const getFooterContent = () => {
		if (localfooterContent) {
			const filterfooterContent = localfooterContent.sort(function (a, b) {
				return a.Orden - b.Orden
			})
			return filterfooterContent
		} else {
			const filterfooterContent = footerContent.sort(function (a, b) {
				return a.Orden - b.Orden
			})
			return filterfooterContent
		}
	}

	return (
		<FooterContainer>
			<ContentContainer>
				{pending ? (
					<Loader />
				) : (
					getFooterContent().map((element, index) => {
						const { Titulo, links } = element
						// console.log("ele", element, links)
						return (
							<ColumnContainer key={index}>
								<FooterTitle>{Titulo}</FooterTitle>
								{links &&
									links.map(({ nombre, url, icono, placeholder }, index) => {
										console.log("content", nombre, icono)
										if (url) {
											return (
												<>
													<FooterAnchor href={url} icono={icono}>
														{icono && (
															<IconImg
																src={`./img/${icono}-icon.png`}
																alt="icono"
															/>
														)}
														{nombre}
													</FooterAnchor>
												</>
											)
										} else {
											return (
												<>
													<FooterParragraph key={index}>
														{nombre} {url}
													</FooterParragraph>
													<EmailForm>
														<input type="text" placeholder={placeholder} />
														<SendButton
															type="submit"
															onClick={(e) => {
																e.preventDefault()
															}}
														>
															Enviar
														</SendButton>
													</EmailForm>
												</>
											)
										}
									})}
							</ColumnContainer>
						)
					})
				)}
			</ContentContainer>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	width: 100%;
	color: #fff;
	min-height: 300px;
	background: ${theme.color.verticalGradient};
`

const ContentContainer = styled.div`
	width: 80%;
	max-width: 1095px;
	margin: auto;
	padding-top: 40px;
	display: flex;
	gap: 60px;
	align-items: flex-start;
	justify-content: space-between;
`
const ColumnContainer = styled.div`
	/* margin: 0 20px; */
	flex: 1;
	/* max-width: 150px; */
`

const FooterTitle = styled.h3`
	font-family: ${theme.fontFamily.secondary};
	text-transform: capitalize;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 23px;
	letter-spacing: 0em;
	text-align: left;
`
const FooterParragraph = styled.p`
	font-family: ${theme.fontFamily.secondary};
	color: #fff;
	text-decoration: none;
	display: block;
`
const IconImg = styled.img`
	margin-right: 15px;
`

const FooterAnchor = styled.a`
	font-family: ${theme.fontFamily.secondary};
	color: #fff;
	/* font-size: ${({ icono }) => (icono ? "18px" : "14px")}; */
	font-size: 14px;
	display: ${({ icono }) => (icono ? " flex" : "block")};
	align-items: center;
	flex-wrap: wrap;
	text-decoration: none;
	margin: 10px 0;

	&:hover {
		text-decoration: none;
		/* font-weight: bolder; */
		cursor: pointer;
	}
	&:visited,
	:active {
		text-decoration: none;
		color: #fff;
	}
`

const EmailForm = styled.form`
	display: flex;
`

const SendButton = styled.button`
	background-color: #1744ff;
	color: white;
	padding: 5px 10px;
	border: none;
`

export default Footer
