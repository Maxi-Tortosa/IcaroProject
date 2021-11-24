import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const QuienesSomos = () => {
	return (
		<Container>
			<h3 className='titulo'>Quienes Somos</h3>
			<p className='parrafo'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>

			<div className='contenedor'>
				<div className='card1'>
					<div></div> <h5>Aprendé haciendo</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className='card2'>
					<div></div> <h5>Obtén certificación universitaria</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className='card3'>
					<div></div> <h5>Cursos presenciales y virtuales</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className='contenedor2'>
				<h4>
					Calidad y certificación universitaria, al mejor precio del mercado
				</h4>
				<div>
					<div> </div>
					<div> </div>
				</div>
			</div>
		</Container>
	);
};

export default QuienesSomos;

const Container = styled.div`
	.titulo {
		font-size: 50px;
		font-weight: 400;
		line-height: 59px;
		margin: 0 0 0 174px;
		padding: 117px 0 0 0;
	}

	.parrafo {
		font-size: 20px;
		line-height: 23px;
		margin: 18px 176px 0 174px;
	}

	.contenedor {
		margin: 21px 179px 64px 179px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;

		.card1 {
			width: 300px;
			height: 404px;

			div {
				width: 90px;
				height: 90px;
				margin: 53px auto 38px auto;
				border-radius: 100px;
				background-color: grey;
			}

			h5 {
				text-align: center;
				margin: 0 51px 42px 51px;
				font-size: 20px;
				font-weight: 700;
				line-height: 23px;
				letter-spacing: 0em;
			}

			p {
				text-align: center;
				margin: 0 31px 0 31px;
			}
		}
		.card2 {
			width: 300px;
			height: 404px;

			div {
				width: 90px;
				height: 90px;
				margin: 53px auto 38px auto;
				border-radius: 100px;
				background-color: grey;
			}

			h5 {
				text-align: center;
				margin: 0 51px 19px 51px;
				font-size: 20px;
				font-weight: 700;
				line-height: 23px;
				letter-spacing: 0em;
			}

			p {
				text-align: center;
				margin: 0 31px 0 31px;
			}
		}
		.card3 {
			width: 300px;
			height: 404px;

			div {
				width: 90px;
				height: 90px;
				margin: 53px auto 38px auto;
				border-radius: 100px;
				background-color: grey;
			}

			h5 {
				text-align: center;
				margin: 0 51px 19px 51px;
				font-size: 20px;
				font-weight: 700;
				line-height: 23px;
				letter-spacing: 0em;
			}

			p {
				text-align: center;
				margin: 0 31px 0 31px;
			}
		}
	}
	.contenedor2 {
		h4 {
			width: 408px;
			font-weight: normal;
			font-size: 25px;
			line-height: 29px;
			text-align: center;
			margin: 0 auto 30px auto;
		}
		div {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;

			div:nth-child(1) {
				width: 176px;
				height: 46px;
				background-color: grey;
				margin: 0 8px 0 0;
			}

			div:nth-child(2) {
				width: 176px;
				height: 46px;
				background-color: grey;
				margin: 0 0 0 8px;
			}
		}
	}
`;
