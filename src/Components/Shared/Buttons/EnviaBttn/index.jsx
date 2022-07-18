import styled from 'styled-components';
import theme from '../../../../Theme/base';

const EnviaBttn = (props) => {
	const handleClick = (e) => {
    e.preventDefault();
    // props.onClick();
  };

  return (
    <SendButton {...props} onClick={(e) => handleClick(e)} type="submit">
      Enviar
    </SendButton>
  );
};

const SendButton = styled.button`
	${({ width }) => width && `width: ${width}`};
	${({ margin }) => margin && `margin: ${margin}`};
	${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
	${({ padding }) => padding && `padding: ${padding}`};
	${({ backgroundColor }) =>
		backgroundColor
			? `background-color: ${backgroundColor}`
			: theme.color.darkBlue};
	${({ color }) => (color ? `color: ${color} !important` : theme.color.white)};
	${({ fontFamily }) =>
		fontFamily
			? `font-family: ${fontFamily} !important`
			: theme.fontFamily.primary};
	${({ fontSize }) =>
		fontSize ? `font-size: ${fontSize} !important` : 'font-size:1rem'};
	color: white;
	border: none;
	cursor: pointer;
	${({ alignSelf }) => alignSelf && `align-self: ${alignSelf} !important`};
`;
export default EnviaBttn;
