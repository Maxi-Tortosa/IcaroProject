import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom"

import AdminContainer from "./Containers/AdminContainer"
import AdminPage from "./Containers/AdminContainer"
import CoursesPages from "./Containers/CoursesContainer"
import Footer from "./Components/Footer"
import FooterContext from "./Context/FooterContext"
import Header from "./Components/Header"
import HomeContainer from "./Containers/HomeContainer/index"
import LogIn from "./Components/LogIn"
import ProjectContext from "./Context/ProjectContext"
import Register from "./Containers/RegisterContainer"
import NotFoundPage from "./Containers/NotFoundPage"
import UserContext from "./Context/UserContext"
import { useState } from "react"

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)

	return (
		<BrowserRouter>
			<UserContext>
				<ProjectContext>
					{/* <AdminContainer /> */}
					{/* <UserDashboardContainer /> */}
					{/* {cuando salga del admin desloguear usuario y enviar a home} */}
					<Header setIsLoginOpen={setIsLoginOpen} />
					{isLoginOpen ? <LogIn setIsLoginOpen={setIsLoginOpen} /> : null}
					<Routes>
						<Route exact path="/" element={<HomeContainer />} />
						<Route path="*" element={<Navigate replace to="/404" />} />
						<Route path="404" element={<NotFoundPage />} />
						<Route path="register" element={<Register />} />
						<Route path="cursos/:name" element={<CoursesPages />} />
						<Route path="admin" element={<AdminPage />} />
						<Route path="admin/new/categoria" element={<AdminPage />} />
						<Route path="admin/new/curso" element={<AdminPage />} />
					</Routes>
					<FooterContext>
						<Footer />
					</FooterContext>
				</ProjectContext>
			</UserContext>
		</BrowserRouter>
	)
}

export default App
