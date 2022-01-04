import styled from 'styled-components';
import Card from './Card';

const ProximosCursos = () => {
	return (
		<Container>
			<div className='padre'>
				<h3>Próximos cursos</h3>

				<div className='categorias'>
					<a className='active' href=''>
						Tecnología
					</a>
					<a href=''>Negocios</a>
					<a href=''>Ambiente</a>
				</div>
				<div className='cards'>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</Container>
	);
};

export default ProximosCursos;

const Container = styled.div`
	.padre {
		max-width: 1200px;
		margin: 15% auto 5% auto;
		font-family: 'Montserrat', sans-serif;

		h3 {
			margin: 0 0 5% 0;
			font-size: 2.5rem;
			font-weight: 700;
			line-height: 2.5rem;
		}

		.categorias {
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin: 0 0 3.3% 0;

			a {
				padding: 1% 1.42%;
				margin: 0 2.5%;
				text-decoration: none;
				color: white;
				font-weight: 700;
				font-size: 1.25rem;
				line-height: 143%;
			}
		}

		.cards {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.active {
			background: linear-gradient(90deg, #179cff 0%, #1743ff 100.01%);
		}
	}
`;
