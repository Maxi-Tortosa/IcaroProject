import { Children, useState, useEffect } from "react"
import styled from "styled-components"
import IngresaBttn from "../../Buttons/IngresaBttn"

const CarouselCard = ({ src, alt }) => {
	return (
		<ImageContainer>
			<StyledImage src={src} alt={alt} />
			<StyledTextContainer>
				<StyledH1>NUESTRO COMPROMISO ES CON EL FUTURO</StyledH1>
				<StyledParragraph>
					Encuentra con Icaro la oportunidad de aprender como nunca antes lo
					habías hecho. Donde quiera que estés, te invitamos a formar parte de
					nuestra comunidad y prepararte para el futuro.
				</StyledParragraph>
				<IngresaBttn />
			</StyledTextContainer>
		</ImageContainer>
	)
}

const ImageContainer = styled.div`
	/* width: 100vw;
	max-width: unset;
	overflow: hidden; */
	position: relative;
`
const StyledImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 0px;
	object-fit: cover;
	background: rgb(247, 247, 247);
`

const StyledTextContainer = styled.div`
	position: relative;
	top: -70%;
	width: 80%;
	height: 100%;
	margin: auto;
`

const StyledH1 = styled.h1`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 900;
	font-size: 48px;
	line-height: 48px;
	color: #ffffff;
	width: 60%;
	/* color: red; */
`

const StyledParragraph = styled.p`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 24px;
	color: #ffffff;
`

export default CarouselCard
