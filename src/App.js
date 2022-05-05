import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdminContainer from './Containers/AdminContainer';
import AdminPage from './Containers/AdminContainer';
import CoursesPages from './Containers/CoursesContainer';
import Footer from './Components/Footer';
import FooterContext from './Context/FooterContext';
import Header from './Components/Header';
import HomeContainer from './Containers/HomeContainer/index';
import LogIn from './Components/LogIn';
import ProjectContext from './Context/ProjectContext';
import Register from './Containers/RegisterContainer';
import UserContext from './Context/UserContext';
import UserDashboardContainer from './Containers/UserDashboardContainer';
import { useState } from 'react';

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	return (
		<BrowserRouter>
			<UserContext>
				<ProjectContext>
					{/* <AdminContainer /> */}
					{/* <UserDashboardContainer /> */}
					<Header setIsLoginOpen={setIsLoginOpen} />
					{isLoginOpen ? <LogIn setIsLoginOpen={setIsLoginOpen} /> : null}
					<Routes>
						<Route path='/' element={<HomeContainer />} />
						<Route path='register' element={<Register />} />
						<Route path='cursos/:name' element={<CoursesPages />} />
						<Route path='admin' element={<AdminPage />} />
					</Routes>
					<FooterContext>
						<Footer />
					</FooterContext>
				</ProjectContext>
			</UserContext>
		</BrowserRouter>
	);
}

export default App;
