import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Banners = () => {
	return (
		<Container>
			<div className='banner1'>
				<h2>Enseñá con ICARO</h2>{' '}
				{/* Ver de meter las imágenes opacas ya desde el origen */}
			</div>
			<div className='banner2'>
				<h2>ICARO in company</h2>
			</div>
		</Container>
	);
};

export default Banners;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0 0 0 0;

	.banner1 {
		width: 50%;
		position: relative;
		background: black;

		h2 {
			font-family: 'Montserrat', sans-serif !important;
			position: relative;
			z-index: 2;
			width: 315px;
			color: white;
			font-weight: 900;
			font-size: 40px;
			line-height: 40px;
			text-align: center;
			margin: 132px auto 154px auto;
		}
	}
	.banner1:before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		opacity: 0.6;
		background-image: url('./img/banner1.png');
		background-position: center;
		background-size: cover;
	}

	.banner2 {
		width: 50%;
		position: relative;
		background: black;

		h2 {
			font-family: 'Montserrat', sans-serif !important;
			position: relative;
			z-index: 2;
			width: 315px;
			color: white;
			font-weight: 900;
			font-size: 40px;
			line-height: 40px;
			text-align: center;
			margin: 132px auto 154px auto;
		}
	}
	.banner2:before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		opacity: 0.6;
		background-image: url('./img/banner2.png');
		background-position: center;
		background-size: cover;
	}
`;
