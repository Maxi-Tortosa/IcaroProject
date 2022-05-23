import EmptyButton from '../../Shared/Buttons/EmptyButton';
import IngresaBttn from '../../Shared/Buttons/IngresaBttn';
import styled from 'styled-components';
import theme from '../../../Theme/base';
import { useIsMobile } from '../../../Hooks/Client';

const CarouselCard = ({ src, slide }) => {
	const mobile = useIsMobile();
	const { Description, Title, ButtonLink, ButtonText } = slide;
	return (
		<ImageContainer mobile={mobile} src={src}>
			<StyledTextContainer mobile={mobile}>
				<StyledH1 mobile={mobile}>{Title}</StyledH1>
				<StyledParragraph mobile={mobile}>{Description}</StyledParragraph>
				{ButtonLink?.length && ButtonText?.length ? (
					ButtonText === 'Ingresá' ? (
						<IngresaBttn />
					) : (
						<EmptyButton href={ButtonLink} content={ButtonText} />
					)
				) : null}
			</StyledTextContainer>
		</ImageContainer>
	);
};

const ImageContainer = styled.div`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	height: ${({ mobile }) => (mobile ? '644px' : null)};
`;

const StyledTextContainer = styled.div`
	position: relative;
	top: ${({ mobile }) => (mobile ? '20%' : '30%')};
	max-width: 1095px;
	margin: auto;
	width: ${({ mobile }) => (mobile ? '82.66%' : '80%')};
`;

const StyledH1 = styled.h1`
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: 900;
	font-size: ${({ mobile }) => (mobile ? '2.31rem' : '48px')};
	line-height: ${({ mobile }) => (mobile ? '2.43rem' : '48px')};
	color: #ffffff;
	width: ${({ mobile }) => (mobile ? '100%' : '55%')};
	text-transform: uppercase;
`;

const StyledParragraph = styled.p`
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: 500;
	font-size: ${({ mobile }) => (mobile ? '0.875rem' : '24px')};
	line-height: 24px;
	color: #ffffff;
	width: ${({ mobile }) => (mobile ? '87%' : '80%')};
`;

export default CarouselCard;
