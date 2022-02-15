import styled from "styled-components"
import { projectContext } from "../../Context/ProjectContext"
import QuienesSomos from "../../Components/QuienesSomos/index"
import Banners from "../../Components/Banners/index"
import { useContext } from "react"
import CursosCards from "../../Components/CursosCards"
import Carousel from "../../Components/MainCarousel/index"
import Spacer from "../../Components/Spacer/index"
import Sponsors from "../../Components/Sponsors/index"

const HomeContainer = () => {
	const imgs = [
		"./img/carousel1.png",
		"./img/carousel2.png",
		"./img/carousel1.png",
	]
	const { isLogin, setIsLogin } = useContext(projectContext)

	return (
		<>
			{isLogin ? (
				<Container>
					<div className="sesion">
						<p>Estás logueado</p>
						<button className="boton" onClick={() => setIsLogin(false)}>
							Cerrar
						</button>
					</div>
				</Container>
			) : (
				<>
					<Carousel imgSrc={imgs} />
					{/* <Spacer height={100} /> */}
					<Sponsors />
					<Container>
						<CursosCards />
						<Spacer height={50} />

						<CursosCards isProximos />
						<Spacer height={50} />

						<QuienesSomos />
					</Container>
					<Banners />
				</>
			)}
		</>
	)
}

export default HomeContainer

const Container = styled.div`
	height: auto;

	.sesion {
		margin-top: 30%;
	}
`
