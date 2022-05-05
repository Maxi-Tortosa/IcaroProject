import { collection, onSnapshot } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';

import db from '../../src/Firebase';

export const projectContext = createContext();

const ProjectContext = ({ children }) => {
	const [course, setCourse] = useState([]);
	const [nextCourses, setNextCourses] = useState([]);
	const [nombres, setNombres] = useState([]);
	const [categories, setCategories] = useState([]);
	const [carousel, setCarousel] = useState([]);
	const [isLogin, setIsLogin] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		onSnapshot(
			collection(db, 'NuevosCursos'),
			(snapshot) => setCourse(snapshot.docs.map((doc) => doc.data())),
			(error) => console.log('error', error)
		);

		onSnapshot(
			collection(db, 'CategoriasCursos'),
			(snapshot) => setCategories(snapshot.docs.map((doc) => doc.data())),
			(error) => console.log('error', error)
		);

		onSnapshot(
			collection(db, 'CarouselContent'),
			(snapshot) => setCarousel(snapshot.docs.map((doc) => doc.data())),
			(error) => console.log('error', error)
		);

		onSnapshot(
			collection(db, 'FechasCursos'),
			(snapshot) => setNextCourses(snapshot.docs.map((doc) => doc.data())),
			(error) => console.log('error', error)
		);
	}, []);

	useEffect(() => {
		let nombresCursos = [];
		course.map((course) => (nombresCursos = [...nombresCursos, course.nombre]));

		return setNombres(nombresCursos);
	}, [course]);

	return (
		<projectContext.Provider
			value={{
				course,
				setCourse,
				categories,
				setCategories,
				isLogin,
				setIsLogin,
				modalOpen,
				setModalOpen,
				carousel,
				setCarousel,
				nextCourses,
				nombres,
			}}>
			{children}
		</projectContext.Provider>
	);
};

export default ProjectContext;
