import styled from "styled-components"
import { projectContext } from "../../Context/ProjectContext"
import QuienesSomos from "../../Components/QuienesSomos"
import Banners from "../../Components/Banners"
import { useContext } from "react"
import CursosCards from "../../Components/CursosCards"
import Carousel from "../../Components/MainCarousel"
import Spacer from "../../Components/Spacer"
import Sponsors from "../../Components/Sponsors"

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
					<Carousel index={1} imgSrc={imgs} />
					{/* <Spacer height={100} /> */}
					<Sponsors />
					<Container>
						<CursosCards />
						<Spacer height={50} />

						<CursosCards isProximos />
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
