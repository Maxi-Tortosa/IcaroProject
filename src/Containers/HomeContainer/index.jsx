import styled from "styled-components"
import { useEffect, useContext, useState } from "react"
// import { Link, Router } from "react-router-dom"
import { projectContext } from "../../Context/ProjectContext"
// import Register from "../RegisterContainer"
import QuienesSomos from "../../Components/QuienesSomos"
import Banners from "../../Components/Banners"
import CursosCards from "../../Components/CursosCards"
import Carousel, {
	DotIndicator,
	useCarouselTimer,
} from "../../Components/MainCarousel"
import Spacer from "../../Components/Spacer"

const HomeContainer = () => {
	const imgs = ["./img/carousel1.png", "./img/carousel2.png"]
	const { course, setCourse, isLogin, setIsLogin } = useContext(projectContext)

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
					<Carousel index={1}>
						{imgs.map((elem, i) => (
							<img
								key={i}
								src={elem}
								alt="carousel"
								style={{
									width: "100vw",
									maxWidth: "unset",
									overflow: "hidden",
								}}
							/>
						))}
					</Carousel>
					<Spacer height={100} />
					<Container>
						<CursosCards />
						<Spacer height={100} />

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
