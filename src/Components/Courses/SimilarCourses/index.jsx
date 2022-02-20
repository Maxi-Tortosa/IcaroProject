import theme from "../../../Theme/base"
import styled from "styled-components"
import Card from "../../CursosCards/Card"

const SimilarCourses = ({ course, courseList }) => {
	const { CategoriaID } = course
	const getSimilarCourses = () => {
		const categoryList = courseList.filter(
			(elem) =>
				elem.CategoriaID === CategoriaID || elem.nombre.includes(course.nombre)
		)
		const newList = categoryList.filter((item) => item !== course)
		return newList
	}
	getSimilarCourses()

	return (
		<SimilarCoursesContainer>
			<Title>Cursos Similares</Title>
			<CardsContainer>
				{getSimilarCourses().map((elem, index) => (
					<Card
						info={elem}
						key={index}
						width="23%"
						overrideColor={CategoriaID}
					/>
				))}
			</CardsContainer>
		</SimilarCoursesContainer>
	)
}

const SimilarCoursesContainer = styled.div`
	margin: 50px 0;
`
const Title = styled.h5`
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 20px;
	color: ${theme.color.darkGrey};
	margin: 0px;
`

const CardsContainer = styled.div`
	width: 100%;
	padding: 20px 0;
	margin-left: ${({ containerPosition }) =>
		containerPosition > 0 && containerPosition}px;
	transition: margin 1s;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 20px;
	flex-wrap: wrap;
`

export default SimilarCourses
