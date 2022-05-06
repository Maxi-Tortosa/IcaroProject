import { useContext, useEffect, useState } from "react"

import CoursesBanner from "../../Components/Courses/CoursesBanner"
import CoursesDescription from "../../Components/Courses/CoursesDescription"
import CursosData from "../../Components/Courses/CursosData"
import GreyBkgrBottom from "../../Components/Backgrounds"
import IconsInformation from "../../Components/Courses/IconsInformation"
import InscribiteBox from "../../Components/Courses/InscribiteBox"
import Loader from "../../Components/Shared/Loader"
import MasInfoBox from "../../Components/Courses/MasInfoBox"
import SimilarCourses from "../../Components/Courses/SimilarCourses"
import Spacer from "../../Components/Shared/Spacer"
import StudentProgram from "../../Components/Courses/StudentProgram"
import { projectContext } from "../../Context/ProjectContext"
import styled from "styled-components"
import { useParams } from "react-router-dom"

const image =
	"https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/cursos-banner.png?alt=media&token=9edfc6c8-e8f8-4a8d-9262-4d4ad8c38968"

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

	return (
		<>
			<CoursesBanner src={image} course={selectedCourse} />
			<GreyBkgrBottom height={700}>
				<FlexContent>
					<LeftContent>
						<Spacer height={25} />
						<CoursesDescription course={selectedCourse} />
						<CursosData course={selectedCourse} />
						<InscribiteBox course={selectedCourse} />
						<IconsInformation course={selectedCourse} />
						<Spacer height={75} />
						<StudentProgram course={selectedCourse} />
						<SimilarCourses course={selectedCourse} courseList={course} />
					</LeftContent>
					<RightContent>
						<MasInfoBox course={selectedCourse} />
					</RightContent>
				</FlexContent>
				<Spacer height={100} />
			</GreyBkgrBottom>
		</>
	)
}

const FlexContent = styled.div`
	display: flex;
	max-width: 1240px;
	gap: 30px;
	height: 100%;
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
