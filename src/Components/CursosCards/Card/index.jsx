import styled from "styled-components"

const Card = ({ info }) => {
	return (
		<Container>
			<h5>{info.nombre}</h5>
			<div className="informacion">
				<p>
					{" "}
					<span>Fecha de inicio:</span> XX de octubre
				</p>
				<p>
					{" "}
					<span>Duración:</span> 12 semanas
				</p>
				<p>
					{" "}
					<span>Modalidad:</span> Online - En vivo
				</p>
				<p>
					{" "}
					<span>Clases semanales:</span> 2 clases
				</p>
			</div>
			<div className="conoce">
				<a href="">Conocé más</a>
			</div>
		</Container>
	)
}

export default Card

const Container = styled.div`
	width: 24.5%;
	background: #ffffff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: space-arround;
	font-family: "Roboto", serif;

	h5 {
		font-weight: 700;
		font-size: 1.12rem;
		line-height: 1.19rem;
		color: #000000;
		margin: 13% auto 9% auto;
	}

	.informacion {
		margin: 0 11% 8% 11%;
		p {
			font-size: 1rem;
			line-height: 1.18rem;
			color: #000000;
			span {
				font-weight: 700;
			}
		}
	}

	.conoce {
		background: #1744ff;
		border-radius: 0px 0px 10px 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;

		a {
			font-family: "Montserrat", sans-serif;
			text-decoration: none;
			font-weight: 600;
			color: white;
			margin: 0;
			text-align: center;
			padding: 9% 0 9% 0;
		}
	}
`
