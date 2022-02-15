import styled from "styled-components"
import theme from "../../../Theme/base"

const EnviaBttn = (props) => {
	return (
		<SendButton
			{...props}
			type="submit"
			onClick={(e) => {
				e.preventDefault()
			}}
		>
			Enviar
		</SendButton>
	)
}

const SendButton = styled.button`
	${({ width }) => width && `width: ${width}`};
	${({ margin }) => margin && `margin: ${margin}`};
	${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
	${({ padding }) => padding && `padding: ${padding}`};
	background-color: ${theme.color.darkBlue};
	color: white;
	border: none;
`
export default EnviaBttn
