import Spacer from '../../Components/Spacer';
import CoursesBanner from '../../Components/CoursesBanner';

const image = '/img/cursos-banner.png';

const CoursesPages = () => {
	return (
		<>
			<CoursesBanner src={image} />
			<Spacer height={100} />
		</>
	);
};

export default CoursesPages;
