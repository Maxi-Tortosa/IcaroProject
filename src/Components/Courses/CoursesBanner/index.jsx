import { hexcodeToRGBA } from '../../../Helpers/colors';
import styled from 'styled-components';
import theme from '../../../Theme/base';
import { useIsMobile } from '../../../Hooks/Client';

const CoursesBanner = ({ src, course }) => {
	const { CategoriaID, nombre } = course;

	const mobile = useIsMobile();

	return (
		<ImageContainer
			mobile={mobile}
			src={course?.bannerImage || src}
			colorFilter={CategoriaID}>
			<StyledTextContainer mobile={mobile}>
				<BannerName mobile={mobile}>Curso</BannerName>
				<StyledH1 mobile={mobile}>{nombre}</StyledH1>
			</StyledTextContainer>
		</ImageContainer>
	);
};

const ImageContainer = styled.div`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	height: 420px;
	box-shadow: inset 0 0 0 1000px
		${({ colorFilter }) => hexcodeToRGBA(theme.categories[colorFilter], 0.75)};
`;

const StyledTextContainer = styled.div`
	position: relative;
	top: ${({ mobile }) => (mobile ? '25%' : '35%')};
	width: 86%;
	/* max-width: 1095px; */
	margin: auto;
`;

const BannerName = styled.h3`
	font-family: ${theme.fontFamily.primary};
	color: ${theme.color.white};
	margin: 0px;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
`;

const StyledH1 = styled.h1`
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: 900;
	font-size: 48px;
	line-height: 48px;
	color: #ffffff;
	margin: 9px 0;
	width: ${({ mobile }) => (mobile ? '100%' : '55%')};
`;

export default CoursesBanner;
