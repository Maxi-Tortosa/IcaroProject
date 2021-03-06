import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AdminPage from './Containers/AdminContainer';
import CoursesPages from './Containers/CoursesContainer';
import Footer from './Components/Footer';
import FooterContext from './Context/FooterContext';
import Header from './Components/Header';
import HomeContainer from './Containers/HomeContainer/index';
import Loader from './Components/Shared/Loader';
import LogIn from './Components/LogIn';
import NotFoundPage from './Containers/NotFoundPage';
import ProjectContext from './Context/ProjectContext';
import Register from './Containers/RegisterContainer';
import UserContext from './Context/UserContext';
import UserPage from './Containers/UserDashboardContainer/index';
import UserProfileContainer from './Containers/UserProfileContainer';
import { auth } from './Firebase';

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [loggedUser, setLoggedUser] = useState(false);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setLoggedUser(user);
		});

		setTimeout(() => {
			setPending(false);
		}, 2000);
	}, []);


	return (
		<BrowserRouter>
			<UserContext>
				<ProjectContext>
					{pending ? (
						<Loader />
					) : (
						<>
							<Header
								setLoggedUser={setLoggedUser}
								setIsLoginOpen={setIsLoginOpen}
								isLoginOpen={isLoginOpen}
							/>
							{isLoginOpen ? (
								<LogIn
									setIsLoginOpen={setIsLoginOpen}
									isLoginOpen={isLoginOpen}
								/>
							) : null}
							<Routes>
								<Route exact path='/' element={<HomeContainer />} />
								<Route path='*' element={<Navigate replace to='/404' />} />
								<Route path='404' element={<NotFoundPage />} />
								<Route path='register' element={<Register />} />
								<Route path='cursos/:name' element={<CoursesPages />} />
								<Route path='admin' element={<AdminPage />} />
								<Route path='admin/cursos' element={<AdminPage />} />
								<Route path='admin/categorias' element={<AdminPage />} />
								<Route path='admin/comisiones' element={<AdminPage />} />
								<Route path='admin/usuarios' element={<AdminPage />} />
								<Route path='admin/solicitudes' element={<AdminPage />} />
								<Route path='admin/inscripciones' element={<AdminPage />} />
								<Route path='admin/consultas' element={<AdminPage />} />
								<Route path='admin/new/:newElement' element={<AdminPage />} />
								<Route path='admin/edit/:editElement' element={<AdminPage />} />
								<Route path='admin/perfil' element={<AdminPage />} />
								{loggedUser && (
									<>
										<Route path='user' element={<UserPage />} />
										<Route
											path='user/profile'
											element={<UserProfileContainer />}
										/>
									</>
								)}
							</Routes>
							<FooterContext>
								<Footer />
							</FooterContext>
						</>
					)}
				</ProjectContext>
			</UserContext>
		</BrowserRouter>
	);
}

export default App;
