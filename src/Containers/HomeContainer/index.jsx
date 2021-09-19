import { useEffect, useContext, useState } from 'react';
import { projectContext } from '../../Context/ProjectContext';
import { getFirestore } from '../../Firebase';

const HomeContainer = () => {
	const { course, setCourse } = useContext(projectContext);

	useEffect(() => {
		// const nuevoCurso = {
		// 	Id: '10',
		// 	category: 'Techno',
		// 	name: 'Desarrollo Front',
		// 	color: 'Azul',
		// 	icon: null,
		// 	backgroundImage: null,
		// 	description: 'Hola, soy la descripción',
		// };

		const db = getFirestore();
		const cursos = db.collection('Cursos');

		// cursos.add(nuevoCurso).then((value) => console.log(value.id));

		const curso1 = cursos.doc('DMtediNJ2ge8LScJO1fS');
	}, []);

	return <div></div>;
};

export default HomeContainer;
