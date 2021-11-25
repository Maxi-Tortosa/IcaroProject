import styled from 'styled-components';
import Card from './Card';

const ProximosCursos = () => {
	return (
		<Container>
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
		</Container>
	);
};

export default ProximosCursos;

const Container = styled.div`
	margin: 120px 0 190px 0;

	h3 {
		margin: 0 0 0 174px;
		font-weight: normal;
		font-size: 30px;
		line-height: 35px;
	}

	.categorias {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 0 0 46px 0;

		a {
			padding: 11px 17px;
			margin: 0 29px;
			text-decoration: none;
			color: black;
			font-weight: normal;
			font-size: 20px;
			line-height: 23px;
		}
	}

	.cards {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.active {
		background-color: #c0c0c0;
	}
`;
