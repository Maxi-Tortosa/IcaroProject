import { stringify } from "@firebase/util"
import React from "react"
import { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { mainFooterContext } from "../../Context/FooterContext"
import theme from "../../Theme/base"

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
					<p>loading...</p>
				) : (
					getFooterContent().map((element, index) => {
						const { Titulo, links } = element
						// console.log("ele", element, links)
						return (
							<ColumnContainer key={index}>
								<FooterTitle>{Titulo}</FooterTitle>
								{links &&
									links.map(({ nombre, url }, index) => {
										if (url) {
											return <FooterAnchor href={url}>{nombre}</FooterAnchor>
										} else {
											return (
												<FooterParragraph key={index}>
													{nombre} {url}
												</FooterParragraph>
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
	/* padding: 20px; */
	padding-top: 50px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`
const ColumnContainer = styled.div`
	margin: 0 20px;
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
	color: #fff;
	text-decoration: none;
	display: block;
`
const FooterAnchor = styled.a`
	font-family: ${theme.fontFamily.secondary};
	color: #fff;
	text-decoration: none;
	display: block;

	&:hover {
		text-decoration: none;
		font-weight: bolder;
		cursor: pointer;
	}
	&:visited,
	:active {
		text-decoration: none;
		color: #fff;
	}
`

export default Footer
