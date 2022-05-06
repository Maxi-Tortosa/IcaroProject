import styled from "styled-components"
import theme from "../../../../Theme/base"

const BlueButton = (props) => {
	return (
		<StyledButton
			{...props}
			type="submit"
			onClick={(e) => {
				e.preventDefault()
			}}
		>
			{props.children}
		</StyledButton>
	)
}

const StyledButton = styled.button`
	${({ width }) => width && `width: ${width}`};
	${({ margin }) => margin && `margin: ${margin}`};
	${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
	${({ padding }) => padding && `padding: ${padding}`};
	${({ backgroundColor }) =>
		backgroundColor
			? `background-color: ${backgroundColor}`
			: theme.color.darkBlue};
	${({ color }) => (color ? `color: ${color} !important` : theme.color.white)};
	color: white;
	border: none;
	cursor: pointer;
`
export default BlueButton
