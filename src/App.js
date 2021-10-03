import HomeContainer from "./Containers/HomeContainer";
import ProjectContext from "./Context/ProjectContext";
import { Switch, Route } from "react-router-dom";
import Register from "./Containers/RegisterContainer";

function App() {
	return (
		<ProjectContext>
			<Switch>
				<Route exact path="/" component={HomeContainer} />
				<Route exact path="/register" component={Register} />

				{/* <HomeContainer /> */}
			</Switch>
		</ProjectContext>
	);
}

export default App;
