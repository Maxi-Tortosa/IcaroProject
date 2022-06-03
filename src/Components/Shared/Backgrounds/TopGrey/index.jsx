import styled from "styled-components"
import theme from "../../../../Theme/base"
import { hexcodeToRGBA } from "../../../../Helpers/colors"

const GreyBkgrTop = styled.div`
	min-height: fit-content;
	padding-top: 70px;
	background: ${theme.color.white};
	background: linear-gradient(
		355deg,
		${hexcodeToRGBA(theme.color.grey, 1)} 90%,
		${hexcodeToRGBA(theme.color.white, 1)} 90%
	);
`

export default GreyBkgrTop
