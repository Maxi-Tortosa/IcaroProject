import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomeContainer from './Containers/HomeContainer';
import Register from './Containers/RegisterContainer';
import CoursesPages from './Containers/CoursesContainer';
import FooterContext from './Context/FooterContext';
import ProjectContext from './Context/ProjectContext';
import Footer from './Components/Footer';
import LogIn from './Components/LogIn';

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	return (
		<Router>
			<ProjectContext>
				<Header setIsLoginOpen={setIsLoginOpen} />
				{isLoginOpen ? <LogIn setIsLoginOpen={setIsLoginOpen} /> : null}
				<Switch>
					<Route exact path='/'>
						<HomeContainer />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
					<Route path='/cursos/'>
						<CoursesPages />
					</Route>
				</Switch>
				<FooterContext>
					<Footer />
				</FooterContext>
			</ProjectContext>
		</Router>
	);
}

export default App;
