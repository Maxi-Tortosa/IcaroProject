import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomeContainer from './Containers/HomeContainer/index';
import Register from './Containers/RegisterContainer';
import CoursesPages from './Containers/CoursesContainer';
import AdminPage from './Containers/AdminContainer';
import FooterContext from './Context/FooterContext';
import ProjectContext from './Context/ProjectContext';
import Footer from './Components/Footer';
import LogIn from './Components/LogIn';

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	return (
		<BrowserRouter>
			<ProjectContext>
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
		</BrowserRouter>
	);
}

export default App;
