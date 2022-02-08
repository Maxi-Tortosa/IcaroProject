import styled from "styled-components"
import Sponsors from "../Sponsors"
import theme from "../../Theme/base"

const QuienesSomos = () => {
	return (
		<Container>
			<div className="padre">
				<h3 className="titulo">Quiénes Somos</h3>
				<p className="parrafo">
					Somos un equipo de profesionales con un objetivo en común: facilitar
					el acceso a una educación de calidad para democratizar hoy, el
					conocimiento del mañana.
					<br />
					Trabajamos junto a jóvenes, profesionales, instituciones y empresas
					que compartan nuestros valores centrales. Entre nuestras actividades,
					ofrecemos una amplia variedad de capacitaciones en temáticas de
					vanguardia, pensadas y dictadas por profesionales que saben hacer, y
					enseñar.
					<br /> Encuentra con Icaro la oportunidad de aprender como nunca antes
					lo habías hecho. Donde quiera que estés, te invitamos a formar parte
					de nuestra comunidad y prepararte para el futuro.
				</p>

				<div className="contenedor">
					<div className="card1">
						<img src="./img/haciendo.png" alt="" />

						<h5>Cursos presenciales y virtuales</h5>
						<p>
							Aprende de manera presencial o virtual con nuestros cursos online
							y en vivo dictados a través de videoconferencia.
						</p>
					</div>
					<div className="card2">
						<img src="./img/certificacion.png" alt="" />

						<h5>Aprendé haciendo</h5>
						<p>
							Trabaja en proyectos reales junto a profesionales expertos,
							estudia de una manera diferente y prepárate para el futuro.
						</p>
					</div>
					<div className="card3">
						<img src="./img/cursos.png" alt="" />

						<h5>Obtén certificación universitaria</h5>
						<p>
							Todas nuestras capacitaciones cuentan con certificación oficial de
							la UNC. <br />
							Garantizamos formacion de calidad a un precio mucho más accesible.
						</p>
					</div>
				</div>
				<div className="contenedor2">
					<h4>
						Calidad y certificación universitaria, al mejor precio del mercado
					</h4>
					<Sponsors />
				</div>
			</div>
		</Container>
	)
}

export default QuienesSomos

const Container = styled.div`
	font-family: ${theme.fontFamily.primary};
	background-image: url("./img/fondoQuienesSomos.png");
	background-repeat: no-repeat;
	background-size: cover;
	padding: 5% 0 5% 0;

	.padre {
		max-width: 1095px;
		width: 80%;
		margin: 0 auto 0 auto;

		.titulo {
			font-size: 2.5rem;
			font-weight: 700;
			line-height: 2.5rem;
		}

		.parrafo {
			font-size: 1rem;
			line-height: 1.43rem;
			margin: 2% 0 0 0;
		}

		.contenedor {
			margin: 2% 0 6% 0;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;

			.card1 {
				width: 27.5%;
				background: #ffffff;
				box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
				border-radius: 10px;
				display: flex;
				flex-direction: column;
				align-items: center;

				img {
					margin: 15% 0 12% 0;
					border-radius: 100px;
				}

				h5 {
					text-align: center;
					margin: 0 11% 2% 11%;
					font-size: 1.25rem;
					font-weight: 700;
					line-height: 1.43rm;
					letter-spacing: 0em;
				}

				p {
					text-align: center;
					margin: 0 7.8% 0 7.8%;
					fonmt-size: 1rem;
				}
			}
			.card2 {
				width: 27.5%;
				background: #ffffff;
				box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
				border-radius: 10px;
				display: flex;
				flex-direction: column;
				align-items: center;

				img {
					margin: 15% auto 12% auto;
					border-radius: 100px;
				}

				h5 {
					text-align: center;
					margin: 0 11% 10% 11%;
					font-size: 1.25rem;
					font-weight: 700;
					line-height: 1.43rm;
					letter-spacing: 0em;
				}

				p {
					text-align: center;
					margin: 0 7.8% 0 7.8%;
					fonmt-size: 1rem;
				}
			}
			.card3 {
				width: 27.5%;
				background: #ffffff;
				box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
				border-radius: 10px;
				display: flex;
				flex-direction: column;
				align-items: center;

				img {
					margin: 15% auto 12% auto;
					border-radius: 100px;
				}

				h5 {
					text-align: center;
					margin: 0 11% 2% 11%;
					font-size: 1.25rem;
					font-weight: 700;
					line-height: 1.43rm;
					letter-spacing: 0em;
				}

				p {
					text-align: center;
					margin: 0 7.8% 5% 7.8%;
					fonmt-size: 1rem;
				}
			}
		}
		.contenedor2 {
			h4 {
				width: 37%;
				font-weight: normal;
				font-size: 1.5rem;
				line-height: 1.5rem;
				text-align: center;
				margin: 0 auto 3% auto;
			}
		}
	}
`
