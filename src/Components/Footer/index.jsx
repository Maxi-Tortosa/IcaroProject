import React from "react"
import { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { mainFooterContext } from "../../Context/FooterContext"
import theme from "../../Theme/base"
import EnviaBttn from "../Buttons/EnviaBttn"
import SocialMediaIcon from "../Icons/FooterIcons"

const Footer = () => {
	const { footerContent } = useContext(mainFooterContext)
	const [pending, setPending] = useState(true)

	useEffect(() => {
		if (footerContent) {
			setPending(false)
		}
	}, [footerContent])

	const getFooterContent = () => {
		const filterfooterContent = footerContent.sort(function (a, b) {
			return a.Orden - b.Orden
		})
		return filterfooterContent
	}

	return (
		<FooterContainer>
			<ContentContainer>
				{pending
					? null
					: getFooterContent().map((element, index) => {
							const { Titulo, links } = element
							return (
								<ColumnContainer key={index}>
									<FooterTitle>{Titulo}</FooterTitle>
									{links &&
										links.map(
											({ nombre, url, icono, placeholder, type }, index) => {
												if (url) {
													return (
														<>
															<FooterAnchor
																key={index + 100}
																href={url}
																icono={icono}
																target="_blank"
															>
																{icono && (
																	// <IconImg
																	// 	key={index}
																	// 	src={`./img/${icono}-icon.png`}
																	// 	alt="icono"
																	// />
																	<SocialMediaIcon
																		key={index}
																		type={type}
																		size={20}
																	/>
																)}
																{nombre}
															</FooterAnchor>
														</>
													)
												} else {
													return (
														<>
															<FooterParragraph key={index + 20}>
																{nombre} {url}
															</FooterParragraph>
															<EmailForm key={index + 10}>
																<StyledInput
																	type="text"
																	placeholder={placeholder}
																/>
																<EnviaBttn
																	backgroundColor={theme.color.white}
																	padding=" 5px 10px"
																	color={theme.color.darkBlue}
																	borderRadius="5px"
																/>
															</EmailForm>
														</>
													)
												}
											}
										)}
								</ColumnContainer>
							)
					  })}
			</ContentContainer>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	width: 100%;
	color: ${theme.color.white};
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
	color: ${theme.color.white};
	text-decoration: none;
	display: block;
`

const FooterAnchor = styled.a`
	font-family: ${theme.fontFamily.secondary};
	color: ${theme.color.white};
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
		color: ${theme.color.white};
	}
`

const EmailForm = styled.form`
	display: flex;
	gap: 5px;
`

const StyledInput = styled.input`
	border: 1px solid ${theme.color.white};
`

export default Footer
