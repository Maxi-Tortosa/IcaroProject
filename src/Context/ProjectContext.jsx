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
			.then((querySnapshot) => {
				if (querySnapshot.size === 0) {
					console.log('No results');
				}

				setCourse(querySnapshot.docs.map((doc) => doc.data()));
			})
			.catch((error) => {
				console.log('error', error);
			})
			.finally(() => {});
	}, []);
	return (
		<projectContext.Provider value={{ course, setCourse }}>
			{children}
		</projectContext.Provider>
	);
};

export default ProjectContext;
