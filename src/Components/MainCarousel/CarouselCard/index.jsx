import styled from 'styled-components';
import theme from '../../../Theme/base';
import IngresaBttn from '../../Buttons/IngresaBttn';
import EmptyButton from '../../Buttons/EmptyButton';

const CarouselCard = ({ src, slide }) => {
	const { Description, Title, ButtonLink, ButtonText } = slide;
	console.log(ButtonLink);
	return (
		<ImageContainer src={src}>
			<StyledTextContainer>
				<StyledH1>{Title}</StyledH1>
				<StyledParragraph>{Description}</StyledParragraph>
				{ButtonText === 'Ingresá' ? (
					<IngresaBttn />
				) : (
					<EmptyButton href={ButtonLink} content={ButtonText} />
				)}
			</StyledTextContainer>
		</ImageContainer>
	);
};

const ImageContainer = styled.div`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
`;

const StyledTextContainer = styled.div`
	position: relative;
	top: 30%;
	width: 80%;
	max-width: 1095px;
	margin: auto;
`;

const StyledH1 = styled.h1`
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: 900;
	font-size: 48px;
	line-height: 48px;
	color: #ffffff;
	width: 55%;
	text-transform: uppercase;
`;

const StyledParragraph = styled.p`
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 24px;
	color: #ffffff;
	width: 80%;
`;

export default CarouselCard;
