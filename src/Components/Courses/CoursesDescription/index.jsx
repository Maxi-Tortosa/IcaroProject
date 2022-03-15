import styled from "styled-components"
import theme from "../../../Theme/base"

const CoursesDescription = ({ course }) => {
	return (
		<StyledParragraph>
			{course.detalles.descripcion
				? course.detalles.descripcion
				: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
		</StyledParragraph>
	)
}

const StyledParragraph = styled.p`
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	color: ${theme.color.lightGrey};
	/* width: 70%; */
	/* max-height: 100px;
	overflow: scroll; */
`

export default CoursesDescription
