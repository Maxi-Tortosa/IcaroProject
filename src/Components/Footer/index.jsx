import React from "react"
import { useEffect, useContext, useState } from "react"
import styled from "styled-components"
import { projectContext } from "../../Context/ProjectContext"

const Footer = () => {
	const { course, setCourse } = useContext(projectContext)
	console.log(course)

	return (
		<FooterContainer>
			<ContentContainer>
				<ColumnContainer>
					<FooterTitle>Informacion</FooterTitle>
					<FooterAnchor href="#">Icaro</FooterAnchor>
					<FooterAnchor href="#">Cursos</FooterAnchor>
					<FooterAnchor href="#">Diplomaturas</FooterAnchor>
					<FooterAnchor href="#">In Company</FooterAnchor>
					<FooterAnchor href="#">Contacto</FooterAnchor>
				</ColumnContainer>
				<ColumnContainer>
					<FooterTitle>Informacion</FooterTitle>
					<FooterAnchor href="#">Icaro</FooterAnchor>
					<FooterAnchor href="#">Cursos</FooterAnchor>
					<FooterAnchor href="#">Diplomaturas</FooterAnchor>
					<FooterAnchor href="#">In Company</FooterAnchor>
					<FooterAnchor href="#">Contacto</FooterAnchor>
				</ColumnContainer>
				<ColumnContainer>
					<FooterTitle>Informacion</FooterTitle>
					<FooterAnchor href="#">Icaro</FooterAnchor>
					<FooterAnchor href="#">Cursos</FooterAnchor>
					<FooterAnchor href="#">Diplomaturas</FooterAnchor>
					<FooterAnchor href="#">In Company</FooterAnchor>
					<FooterAnchor href="#">Contacto</FooterAnchor>
				</ColumnContainer>
				<ColumnContainer>
					<FooterTitle>Informacion</FooterTitle>
					<FooterAnchor href="#">Icaro</FooterAnchor>
					<FooterAnchor href="#">Cursos</FooterAnchor>
					<FooterAnchor href="#">Diplomaturas</FooterAnchor>
					<FooterAnchor href="#">In Company</FooterAnchor>
					<FooterAnchor href="#">Contacto</FooterAnchor>
				</ColumnContainer>
				<ColumnContainer>
					<FooterTitle>Informacion</FooterTitle>
					<FooterAnchor href="#">Icaro</FooterAnchor>
					<FooterAnchor href="#">Cursos</FooterAnchor>
					<FooterAnchor href="#">Diplomaturas</FooterAnchor>
					<FooterAnchor href="#">In Company</FooterAnchor>
					<FooterAnchor href="#">Contacto</FooterAnchor>
				</ColumnContainer>
			</ContentContainer>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	width: 100%;
	color: #fff;
	min-height: 300px;
	background: rgb(23, 67, 255);
	background: linear-gradient(
		0deg,
		rgba(23, 67, 255, 1) 35%,
		rgba(23, 156, 255, 1) 100%
	);
`

const ContentContainer = styled.div`
	max-width: 1200px;
	margin: auto;
	padding: 20px;
	padding-top: 50px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`
const ColumnContainer = styled.div`
	width: fit-content;
	margin: 0 20px;
	/* display: inline; */
`

const FooterTitle = styled.h3`
	font-family: "Roboto";
	text-transform: capitalize;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 23px;
	letter-spacing: 0em;
	text-align: left;
`

const FooterAnchor = styled.a`
	font-family: "Roboto";
	text-decoration: none;
	display: block;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	&:visited,
	:active {
		text-decoration: none;
		color: #fff;
	}
`

export default Footer
