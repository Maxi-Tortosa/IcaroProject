import { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { projectContext } from "../../Context/ProjectContext"
import Spacer from "../../Components/Spacer"
import CoursesBanner from "../../Components/Courses/CoursesBanner"
import Loader from "../../Components/Loader"
import GreyBkgr from "../../Components/Backgrounds"
import CursosData from "../../Components/Courses/CursosData"
import InscribiteBox from "../../Components/Courses/InscribiteBox"
import MasInfoBox from "../../Components/Courses/MasInfoBox"

const image = "/img/cursos-banner.png"

const CoursesPages = () => {
	const { name } = useParams()
	const { course, categories } = useContext(projectContext)
	const [pending, setPending] = useState(true)
	const [selectedCourse, setSelectedCourse] = useState("")

	useEffect(() => {
		if (course.length > 0 && categories.length > 0) {
			const courseResult = course.find((elem) => elem.href === name)
			setSelectedCourse(courseResult)
			setPending(false)
		}
	}, [course, categories, name])

	if (pending) {
		return <Loader />
	}

	console.log("selectedCourse", selectedCourse)

	return (
		<>
			<CoursesBanner src={image} course={selectedCourse} />

			<GreyBkgr height={500}>
				<FlexContent>
					<LeftContent>
						<CursosData course={selectedCourse} />
						<InscribiteBox course={selectedCourse} />
					</LeftContent>
					<RightContent>
						<MasInfoBox course={selectedCourse} />
					</RightContent>
				</FlexContent>
				<Spacer height={100} />
			</GreyBkgr>
		</>
	)
}

const FlexContent = styled.div`
	display: flex;
	gap: 30px;
	/* max-width: 1095px; */
	width: 80%;
	margin: auto;
`
const LeftContent = styled.div`
	width: 70%;
`
const RightContent = styled.div`
	width: 30%;
`

export default CoursesPages
