import styled from 'styled-components';
import theme from '../../../Theme/base';
import { Link } from 'react-router-dom';

const EmptyButton = ({ content, href }) => {
	console.log(href);
	return <>{/* <StyledButton to={href}>{content}</StyledButton> */}</>;
};

const StyledButton = styled(Link)`
	font-family: ${theme.fontFamily.primary};
	font-size: 16px;
	cursor: pointer;
	font-weight: ${({ isCourses }) => (isCourses ? 500 : 'normal')};
	color: ${({ isCourses }) =>
		isCourses ? theme.color.darkBlue : theme.color.white};
	background: ${({ isCourses }) =>
		isCourses ? theme.color.white : theme.color.gradient};
	transition: all 0.5s ease-in-out 0s;
	border-radius: 5px;
	border: none;
	justify-self: end;
	text-align: center;
	line-height: 0.875rem;
	padding: 14px 50px;
	text-decoration: none;

	&:hover {
		/* background: ${theme.color.oppositeGradient}; */
		/* background-size: 1px 300px; */

		background-position: 160px;
	}
`;

export default EmptyButton;
