import { useEffect, useState } from 'react';
import { getFirestore } from '../../Firebase/index';

const HomeContainer = () => {
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

	console.log(course);

	return <div></div>;
};

export default HomeContainer;
