import { createContext, useEffect, useState } from "react"
import db from "../../src/Firebase"
import { collection, onSnapshot } from "firebase/firestore"

export const projectContext = createContext()

const ProjectContext = ({ children }) => {
	const [course, setCourse] = useState([])
	const [categories, setCategories] = useState([])
	const [carousel, setCarousel] = useState([])
	const [isLogin, setIsLogin] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)

	useEffect(() => {
		onSnapshot(
			collection(db, "NuevosCursos"),
			(snapshot) => setCourse(snapshot.docs.map((doc) => doc.data())),
			(error) => console.log("error", error)
		)

		onSnapshot(
			collection(db, "CategoriasCursos"),
			(snapshot) => setCategories(snapshot.docs.map((doc) => doc.data())),
			(error) => console.log("error", error)
		)

		onSnapshot(
			collection(db, "CarouselContent"),
			(snapshot) => setCarousel(snapshot.docs.map((doc) => doc.data())),
			(error) => console.log("error", error)
		)

		// const cursos = collection(db, 'NuevosCursos');
		// const categorias = collection(db, 'CategoriasCursos');

		// cursos

		// 	.then((querySnapshot) => {
		// 		if (querySnapshot.size === 0) {
		// 			console.log('No results');
		// 		}

		// 		setCourse(querySnapshot.docs.map((doc) => doc.data()));
		// 	})
		// 	.catch((error) => {
		// 		console.log('error', error);
		// 	})
		// 	.finally(() => {});

		// categorias
		// 	.get()
		// 	.then((querySnapshot) => {
		// 		if (querySnapshot.size === 0) {
		// 			console.log('No results');
		// 		}

		// 		setCategories(querySnapshot.docs.map((doc) => doc.data()));
		// 	})
		// 	.catch((error) => {
		// 		console.log('error', error);
		// 	})
		// 	.finally(() => {});
	}, [])

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
			}}
		>
			{children}
		</projectContext.Provider>
	)
}

// EXAMPLE OF AUTHCONTEXT

// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
// 	const [currentUser, setCurrentUser] = useState(null);
// 	const [pending, setPending] = useState(true);

// 	useEffect(() => {
// 		auth.onAuthStateChanged((user) => {
// 			setCurrentUser(user);
// 			setPending(false);
// 		});
// 	}, []);

// 	if (pending) {
// 		return <>Loading...</>;
// 	}

// 	return (
// 		<AuthContext.Provider value={{ currentUser }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

export default ProjectContext
