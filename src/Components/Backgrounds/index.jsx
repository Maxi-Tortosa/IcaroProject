import styled from "styled-components"
import theme from "../../Theme/base"
import { hexcodeToRGBA } from "../../Helpers/colors"

const GreyBkgr = styled.div`
	min-height: ${({ height }) => height + 900}px;
	background: ${theme.color.white};
	background: linear-gradient(
		13deg,
		${hexcodeToRGBA(theme.color.white, 1)} 50%,
		${hexcodeToRGBA(theme.color.grey, 1)} 50%
	);
`

export default GreyBkgr
