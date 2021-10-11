import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomeContainer from './Containers/HomeContainer';
import ProjectContext from './Context/ProjectContext';

function App() {
	return (
		<Router>
			<ProjectContext>
				<Header />
				<Switch>
					<Route exact path='/'>
						<HomeContainer />
					</Route>
				</Switch>
			</ProjectContext>
		</Router>
	);
}

export default App;
