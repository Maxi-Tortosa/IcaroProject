import { useContext, useState, useEffect } from "react"
import { projectContext } from "../../../Context/ProjectContext"
import Loader from "../../Shared/Loader"
import CursosAdmin from "../CursosAdmin"
import CategoriasAdmin from "../CategoriasAdmin"
import { useLocation } from "react-router-dom"
import { SIDEMENUCATEGORIES } from "../../../Constants/AdminDashboard"
import NewElementContainer from "../../../Containers/NewElementContainer"
import { CATEGORYFIELDS } from "../../../Constants/Category"
import { CURSOSCFIELDS } from "../../../Constants/Cursos"

const AdminHome = ({ isNew }) => {
	const { course, categories } = useContext(projectContext)
	const [pending, setPending] = useState(true)
	const location = useLocation()

	useEffect(() => {
		if (course.length > 0 && categories.length > 0) {
			// const courseResult = course.find((elem) => elem.href === name)
			// setSelectedCourse(courseResult)
			setPending(false)
		}
	}, [course, categories])

	if (pending) {
		return <Loader />
	}

	function openMenuElement(evt, menuName) {
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
		document.getElementById(menuName).style.display = "block"
		evt.currentTarget.className += " active"
	}

	function getAdminComponent(menuName, sideLinks) {
		switch (menuName) {
			case "Cursos":
				return (
					<>
						{location.pathname.includes("new/curso") ? (
							<NewElementContainer
								fieldsList={CURSOSCFIELDS}
								type="Nuevo Curso"
							/>
						) : (
							<CursosAdmin cursos={course} />
						)}
					</>
				)

			case "Categorias":
				return (
					<>
						{location.pathname.includes("new/categoria") ? (
							<NewElementContainer
								fieldsList={CATEGORYFIELDS}
								type="Nueva Categoria"
							/>
						) : (
							<>
								<CategoriasAdmin categorias={categories} />
							</>
						)}
					</>
				)

			default:
				return
		}
	}

	return (
		<div className="tabs-content">
			<div className="tab">
				{SIDEMENUCATEGORIES.map(({ menuName }, index) => (
					<button
						className={`tablinks ${index === 0 && "active"}`}
						key={index}
						onClick={(event) => openMenuElement(event, menuName)}
					>
						{menuName}
					</button>
				))}
			</div>
			<div className="tabs-content-container">
				{SIDEMENUCATEGORIES.map(({ menuName, sideLinks }, index) => (
					<div
						id={menuName}
						className={`tabcontent ${index === 0 && "active"}`}
						key={index}
					>
						{getAdminComponent(menuName, sideLinks)}
					</div>
				))}
			</div>
		</div>
	)
}

export default AdminHome
