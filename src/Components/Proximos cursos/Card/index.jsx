import styled from 'styled-components';

const Card = () => {
	return (
		<Container>
			<h5>Desarrollo Web Front End</h5>
			<div className='informacion'>
				<p>
					{' '}
					<span>Fecha de inicio:</span> XX de octubre
				</p>
				<p>
					{' '}
					<span>Duración:</span> 12 semanas
				</p>
				<p>
					{' '}
					<span>Modalidad:</span> Online - En vivo
				</p>
				<p>
					{' '}
					<span>Clases semanales:</span> 2 clases
				</p>
			</div>
			<div className='conoce'>
				<a href=''>Conocé más</a>
			</div>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	width: 295px;
	height: 342px;
	background: #ffffff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	margin: 0 102px;
	display: flex;
	flex-direction: column;
	align-items: space-arround;

	h5 {
		font-weight: bold;
		font-size: 18px;
		line-height: 21px;
		text-align: center;
		color: #000000;
		margin: 44px 0 30px 0;
	}

	.informacion {
		margin: 0 32px 24px 32px;
		p {
			font-size: 16px;
			line-height: 19px;
			color: #000000;
			span {
				font-weight: bold;
			}
		}
	}

	.conoce {
		width: 295px;
		height: 69px;
		background: #1744ff;
		border-radius: 0px 0px 10px 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;

		a {
			color: white;
			margin: 0;
			text-align: center;
			padding: 22px 0 24px 0;
		}
	}
`;
