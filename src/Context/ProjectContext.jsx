import { createContext, useEffect, useState } from 'react';
import { getFirestore } from '../../src/Firebase';

export const projectContext = createContext();

const ProjectContext = ({ children }) => {
	const [course, setCourse] = useState();

	useEffect(() => {
		const db = getFirestore();
		const cursos = db.collection('Cursos');
		cursos
			.get()
			.then((courses) => {
				if (courses.size === 0) {
					console.log('No results');
				}
				setCourse(courses.docs.map((doc) => doc.data()));
			})
			.catch((error) => {
				console.log('error', error);
			})
			.finally(() => {});

		/* Prueba para crear colección*/

		// 	const usuarios = db.collection('Usuarios');

		// 	const nuevoUsuario = {
		// 		Id: '5',
		// 		description: 'Hola, soy un usuario',
		// 	};

		// 	usuarios.add(nuevoUsuario);
	}, []);

	return (
		<projectContext.Provider value={{ course, setCourse }}>
			{children}
		</projectContext.Provider>
	);
};

export default ProjectContext;
