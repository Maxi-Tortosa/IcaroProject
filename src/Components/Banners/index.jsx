import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../Hooks/Client';

const Banners = () => {
	const mobile = useIsMobile();
	return (
		<Container mobile={mobile}>
			<div className='banner1'>
				<StyledLink to='/'>
					<h2>Enseñá con ICARO</h2>
				</StyledLink>
				{/* Ver de meter las imágenes opacas ya desde el origen */}
			</div>
			<div className='banner2'>
				<StyledLink to='/'>
					<h2>ICARO in company</h2>
				</StyledLink>
			</div>
		</Container>
	);
};

export default Banners;

const Container = styled.div`
	display: flex;
	flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
	justify-content: center;
	margin: 0 auto 0 auto;
	max-width: 1440px;
	width: 100%;

	.banner1 {
		width: ${({ mobile }) => (mobile ? '100%' : '50%')};
		position: relative;
		background: black;
		display: flex;
		justify-content: center;
		align-items: center;

		h2 {
			font-family: 'Montserrat', sans-serif !important;
			position: relative;
			z-index: 2;
			width: 65%;
			color: white;
			font-weight: 900;
			font-size: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			margin: 24% auto 24% auto;
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
		z-index: 2;
		opacity: 0.6;
		background-image: url('https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/banner1.png?alt=media&token=1c123642-94bd-4747-ad74-180edc927f58');
		background-position: center;
		background-size: cover;
	}

	.banner2 {
		width: ${({ mobile }) => (mobile ? '100%' : '50%')};
		position: relative;
		background: black;
		display: flex;
		justify-content: center;
		align-items: center;

		h2 {
			font-family: 'Montserrat', sans-serif !important;
			position: relative;
			z-index: 2;
			width: 50%;
			color: white;
			font-weight: 900;
			font-size: 40px;
			line-height: 40px;
			text-align: center;
			margin: 24% auto 24% auto;
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
		background-image: url('https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/banner2.png?alt=media&token=fa58d4ef-9dad-4ea9-bf3b-ab1ac24765cf');
		background-position: center;
		background-size: cover;
	}
`;
const StyledLink = styled(Link)`
	text-decoration: none !important;
`;
