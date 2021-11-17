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
				<div className='card1'></div>
				<div className='card2'></div>
				<div className='card3'></div>
			</div>
		</Container>
	);
};

export default QuienesSomos;

const Container = styled.div`
	height: 973px;
	background-color: red;

	.titulo {
		font-size: 50px;
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
		card1 {
			width: 40px;
			height: 40px;
		}
		card2 {
		}
		card3 {
		}
	}
`;
