import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../Theme/base';
import { useIsMobile } from '../../Hooks/Client';

const NotFoundPage = () => {
	const mobile = useIsMobile();
	return (
		<NotFoundPageContainer mobile={mobile}>
			<div>
				<p>Ups!</p>
				<p>
					Esta página no se encuentra dentro de
					<br />
					nuestro rango.
					{mobile ? null : <br />}
					<br />
					Diculpá las molestias
				</p>
				<Link to='/'>Volver al inicio</Link>
			</div>
			<div>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/alerts%2F404.png?alt=media&token=ffbdc0b5-75ca-41a6-879c-c6be61749905'
					alt='Esta página no se encuentra dentro de nuestro rango'
				/>
			</div>
		</NotFoundPageContainer>
	);
};

const NotFoundPageContainer = styled.div`
	height: ${({ mobile }) => (mobile ? '100vh' : '85vh')};
	background-color: ${theme.color.white};
	display: flex;
	flex-direction: ${({ mobile }) => (mobile ? 'column-reverse' : 'row')};
	justify-content: center;
	margin: 0 auto;
	padding: 0 5%;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	div:nth-child(1) {
		margin-right: ${({ mobile }) => (mobile ? null : '5.87rem')};

		p:nth-child(1) {
			text-align: ${({ mobile }) => (mobile ? 'center' : null)};
			width: 100%;
			margin: 0;
			margin-bottom: ${({ mobile }) => (mobile ? '1.8rem' : null)};
			font-family: 'Montserrat', sans-serif;
			font-weight: 900;
			font-size: ${({ mobile }) => (mobile ? '3.12rem' : '6.25rem')};
			line-height: ${({ mobile }) => (mobile ? '3rem' : '7rem')};
			color: #363636;
		}
		p:nth-child(2) {
			text-align: ${({ mobile }) => (mobile ? 'center' : null)};
			font-family: 'Montserrat', sans-serif;
			font-weight: 500;
			font-size: ${({ mobile }) => (mobile ? '0.8rem' : '1.5rem')};
			line-height: ${({ mobile }) => (mobile ? '1.1rem' : '1.5rem')};
			color: #363636;
			margin-bottom: ${({ mobile }) => (mobile ? '1.8rem' : null)};
			/* margin: ${({ mobile }) => (mobile ? null : '1.4rem 0')}; */
		}
		a {
			align-self: ${({ mobile }) => (mobile ? 'center' : 'flex-start')};
			background: #1744ff;
			font-family: 'Montserrat', sans-serif;
			text-decoration: none;
			font-weight: 700;
			font-size: 1.37rem;
			line-height: 1.62rem;
			text-align: center;
			color: #ffffff;
			margin-top: 0.5rem;
			padding: 1rem 4.21rem;
		}
	}

	div:nth-child(2) {
		margin-bottom: ${({ mobile }) => (mobile ? '1.8rem' : null)};
		img {
			width: ${({ mobile }) => (mobile ? '79%' : null)};
		}
	}
`;

export default NotFoundPage;
