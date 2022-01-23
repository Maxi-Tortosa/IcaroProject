import React from "react"
import styled from "styled-components"

const Sponsors = () => {
	return (
		<SponsorsContainer>
			<SponsorsImage src="./img/sponsor1.png" alt="" />
			<SponsorsImage src="./img/sponsor2.png" alt="" />
		</SponsorsContainer>
	)
}

const SponsorsContainer = styled.div`
	margin: 20px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const SponsorsImage = styled.img`
	margin: 0 25px;
	height: auto;
`

export default Sponsors
