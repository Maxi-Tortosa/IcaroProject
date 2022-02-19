import styled from "styled-components"
import theme from "../../../Theme/base"

const LinearBttn = (props) => {
	return (
		<StyledButton
			{...props}
			type="submit"
			onClick={(e) => {
				e.preventDefault()
			}}
		>
			<Content>{props.children}</Content>
		</StyledButton>
	)
}

const StyledButton = styled.button`
	background-color: ${theme.color.white};
	border: 1px solid ${theme.color.darkBlue};
	border-radius: 10px;
	padding: 5px 13px;
	cursor: pointer;
	${({ width }) => width && `width: ${width}`};
	${({ margin }) => margin && `margin: ${margin}`};
	${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
`
const Content = styled.p`
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: ${theme.color.darkBlue};
	margin: 0;
`
export default LinearBttn
