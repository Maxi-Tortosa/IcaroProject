import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/Header"
import HomeContainer from "./Containers/HomeContainer"
import Register from "./Containers/RegisterContainer"
import CoursesPages from "./Containers/CoursesContainer"
import AdminPage from "./Containers/AdminContainer"
import FooterContext from "./Context/FooterContext"
import ProjectContext from "./Context/ProjectContext"
import Footer from "./Components/Footer"
import LogIn from "./Components/LogIn"

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)

	return (
		<Router>
			<ProjectContext>
				<Switch>
					<Route exact path="/">
						<Header setIsLoginOpen={setIsLoginOpen} />
						{isLoginOpen ? <LogIn setIsLoginOpen={setIsLoginOpen} /> : null}
						<HomeContainer />
						<FooterContext>
							<Footer />
						</FooterContext>
					</Route>
					<Route exact path="/register">
						<Header setIsLoginOpen={setIsLoginOpen} />
						{isLoginOpen ? <LogIn setIsLoginOpen={setIsLoginOpen} /> : null}
						<Register />
						<FooterContext>
							<Footer />
						</FooterContext>
					</Route>
					<Route path="/cursos/:name">
						<Header setIsLoginOpen={setIsLoginOpen} />
						{isLoginOpen ? <LogIn setIsLoginOpen={setIsLoginOpen} /> : null}
						<CoursesPages />
						<FooterContext>
							<Footer />
						</FooterContext>
					</Route>
					<Route exact path="/admin">
						<AdminPage />
					</Route>
				</Switch>
			</ProjectContext>
		</Router>
	)
}

export default App
