import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const QuienesSomos = () => {
	return (
		<Container>
			<div className='padre'>
				<h3 className='titulo'>Quiénes Somos</h3>
				<p className='parrafo'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>

				<div className='contenedor'>
					<div className='card1'>
						<img src='./img/haciendo.png' alt='' />

						<h5>Cursos presenciales y virtuales</h5>
						<p>
							Aprende de manera presencial o virtual con nuestros cursos online
							y en vivo dictados a través de videoconferencia.
						</p>
					</div>
					<div className='card2'>
						<img src='./img/certificacion.png' alt='' />

						<h5>Aprendé haciendo</h5>
						<p>
							Trabaja en proyectos reales junto a profesionales expertos,
							estudia de una manera diferente y prepárate para el futuro.
						</p>
					</div>
					<div className='card3'>
						<img src='./img/cursos.png' alt='' />

						<h5>Obtén certificación universitaria</h5>
						<p>
							Todas nuestras capacitaciones cuentan con certificación oficial de
							la UNC. Garantizamos formacion de calidad a un precio mucho más
							accesible.
						</p>
					</div>
				</div>
				<div className='contenedor2'>
					<h4>
						Calidad y certificación universitaria, al mejor precio del mercado
					</h4>
					<div>
						<img src='./img/sponsor1.png' alt='' />
						<img src='./img/sponsor2.png' alt='' />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default QuienesSomos;

const Container = styled.div`
	font-family: 'Montserrat', sans-serif;
	background-image: url('./img/fondoQuienesSomos.png');
	background-repeat: no-repeat;
	background-size: cover;
	padding: 5% 0 5% 0;

	.padre {
		max-width: 1200px;
		margin: 0 auto 0 auto;

		.titulo {
			font-size: 3.12rem;
			font-weight: 400;
			line-height: 3.68rem;
		}

		.parrafo {
			font-size: 1.25rem;
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
				width: 21%;
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
					margin: 0 17% 2% 17%;
					font-size: 1.25rem;
					font-weight: 700;
					line-height: 1.43rm;
					letter-spacing: 0em;
				}

				p {
					text-align: center;
					margin: 0 10% 0 10%;
				}
			}
			.card2 {
				width: 21%;
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
					margin: 0 17% 13% 17%;
					font-size: 1.25rem;
					font-weight: 700;
					line-height: 1.43rm;
					letter-spacing: 0em;
				}

				p {
					text-align: center;
					margin: 0 10% 0 10%;
				}
			}
			.card3 {
				width: 21%;
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
					margin: 0 17% 2% 17%;
					font-size: 1.25rem;
					font-weight: 700;
					line-height: 1.43rm;
					letter-spacing: 0em;
				}

				p {
					text-align: center;
					margin: 0 10% 5% 10%;
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
			div {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				img:nth-child(1) {
					margin: 0 2% 0 0;
					height: auto;
				}

				img:nth-child(2) {
					margin: auto 0 auto 2%;
				}
			}
		}
	}
`;
