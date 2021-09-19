import HomeContainer from './Containers/HomeContainer';
import ProjectContext from './Context/ProjectContext';

function App() {
	return (
		<ProjectContext>
			<HomeContainer />
		</ProjectContext>
	);
}

export default App;
