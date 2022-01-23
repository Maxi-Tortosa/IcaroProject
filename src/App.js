import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/Header"
import HomeContainer from "./Containers/HomeContainer"
import Register from "./Containers/RegisterContainer"
import FooterContext from "./Context/FooterContext"
import ProjectContext from "./Context/ProjectContext"
import Footer from "./Components/Footer"

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
				<FooterContext>
					<Footer />
				</FooterContext>
			</ProjectContext>
		</Router>
	)
}

export default App
