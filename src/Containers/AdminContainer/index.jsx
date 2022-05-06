import { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { projectContext } from "../../Context/ProjectContext"
import Loader from "../../Components/Shared/Loader"
import AdminHeader from "../../Components/AdminDashboard/AdminHeader"
import Spacer from "../../Components/Shared/Spacer"
import CursosAdmin from "../../Components/AdminDashboard/CursosAdmin"
import CategoriassAdmin from "../../Components/AdminDashboard/CategoriasAdmin"

const AdminPage = () => {
	const { course, categories } = useContext(projectContext)
	const [pending, setPending] = useState(true)
	const sideMenuLinks = [
		"Inicio",
		"Cursos",
		"Categorias",
		"Seciones",
		"Usuarios",
		"Solicitudes",
		"Inscripciones",
		"Consultas",
	]

	useEffect(() => {
		if (course.length > 0 && categories.length > 0) {
			// const courseResult = course.find((elem) => elem.href === name)
			// setSelectedCourse(courseResult)
			setPending(false)
		}
	}, [course, categories])

	// if (!isLogin){
	// 	Router.replace('/')
	//  setModalOpen(true)
	// }

	if (pending) {
		return <Loader />
	}

	function openCity(evt, cityName) {
		// Declare all variables
		var i, tabcontent, tablinks

		// Get all elements with class="tabcontent" and hide them
		tabcontent = document.getElementsByClassName("tabcontent")
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none"
		}

		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName("tablinks")
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "")
		}

		// Show the current tab, and add an "active" class to the link that opened the tab
		document.getElementById(cityName).style.display = "block"
		evt.currentTarget.className += " active"
	}

	function getAdminComponent(id) {
		switch (id) {
			case "Cursos":
				return <CursosAdmin cursos={course} />

			case "Categorias":
				return <CategoriassAdmin categorias={categories} />

			default:
				return
		}
	}

	return (
		<AdminContainer>
			<AdminHeader />
			<Spacer height={100} />
			<div className="tabs-content">
				<div className="tab">
					{sideMenuLinks.map((el, index) => (
						<button
							className={`tablinks ${index === 0 && "active"}`}
							key={index}
							onClick={(event) => openCity(event, el)}
						>
							{el}
						</button>
					))}
				</div>
				<div className="tabs-content-container">
					{sideMenuLinks.map((el, index) => (
						<div
							id={el}
							className={`tabcontent ${index === 0 && "active"}`}
							key={index}
						>
							{getAdminComponent(el)}
						</div>
					))}
				</div>
			</div>
		</AdminContainer>
	)
}

const AdminContainer = styled.div`
	.tabs-content {
		display: flex;
	}
	.tab {
		float: left;
		border: 1px solid #ccc;
		background-color: #f1f1f1;
		width: 20%;
		height: 100%;
	}

	/* Style the buttons that are used to open the tab content */
	.tab button {
		display: block;
		background-color: inherit;
		color: black;
		padding: 22px 16px;
		width: 100%;
		border: none;
		outline: none;
		text-align: left;
		cursor: pointer;
		transition: 0.3s;
	}

	/* Change background color of buttons on hover */
	.tab button:hover {
		background-color: #ddd;
	}

	/* Create an active/current "tab button" class */
	.tab button.active {
		background-color: #ccc;
	}

	.tabs-content-container {
		width: 75%;
		display: block;
	}

	/* Style the tab content */
	.tabcontent {
		display: none;
		float: left;
		padding: 0px 12px;
		width: 100%;
		border-left: none;
		height: 100%;
	}

	.tabcontent.active {
		display: block;
	}
`

export default AdminPage
