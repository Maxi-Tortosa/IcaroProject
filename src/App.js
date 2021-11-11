import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomeContainer from "./Containers/HomeContainer";
import Register from "./Containers/RegisterContainer";
import ProjectContext from "./Context/ProjectContext";

function App() {
	return (
		<Router>
			<ProjectContext>
				<Header />
				<Switch>
					<Route exact path="/">
						<HomeContainer />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
			</ProjectContext>
		</Router>
	);
}

export default App;
