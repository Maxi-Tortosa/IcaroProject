import styled from "styled-components"
// import Link from "react-scroll/modules/components/Link"
import theme from "../../Theme/base"

const NotFoundPage = () => {
	return (
		<NotFoundPageContainer>
			<p>
				Esta página no se encuentra dentro de nuestro rango. ¡Disculpá las
				molestias!
			</p>
			{/* <Link to="/">Vovler al inicio</Link> */}
		</NotFoundPageContainer>
	)
}

const NotFoundPageContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${theme.color.white};
	z-index: 5000;
	position: absolute;
	top: 0;
	left: 0;
`

export default NotFoundPage
