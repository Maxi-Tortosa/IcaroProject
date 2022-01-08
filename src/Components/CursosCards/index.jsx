import { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import Card from "./Card"
import { projectContext } from "../../Context/ProjectContext"

const CursosCards = ({ isProximos }) => {
	const { course, setCourse } = useContext(projectContext)
	const [pending, setPending] = useState(true)
	const [toggleState, setToggleState] = useState(0)
	const [selectedCategorie, setSelectedCategorie] = useState(
		"Herramientas Digitales"
	)
	console.log(toggleState, selectedCategorie)

	useEffect(() => {
		if (course) {
			window.localStorage.setItem("localCursos", JSON.stringify(course))
			setPending(false)
		}
	}, [course])

	if (pending) {
		var localCursos = JSON.parse(localStorage.getItem("localCursos"))
	}

	const getCategorias = () => {
		if (localCursos) {
			// return localCursos
			const categoria = []

			localCursos.map((elem) => categoria.push({ nombre: elem.categoria }))
			const CategCopy = categoria.filter(
				(v, i, a) => a.findIndex((t) => t.nombre === v.nombre) === i
			)
			// console.log(localCursos, CategCopy)
			return CategCopy
		} else {
			const categoria = []
			course.map((elem) => categoria.push({ nombre: elem.categoria }))
			const CategCopy = categoria.filter(
				(v, i, a) => a.findIndex((t) => t.nombre === v.nombre) === i
			)
			// console.log(course, CategCopy)
			return CategCopy
		}
	}

	const getSelectedCourses = () => {
		// console.log(localCursos)
		if (localCursos) {
			const localCursosCopy = localCursos.filter(
				(elem) => elem.categoria === selectedCategorie
			)
			console.log("localCursos", localCursosCopy)
			return localCursosCopy
		} else {
			const localCursosCopy = course.filter(
				(elem) => elem.categoria === selectedCategorie
			)
			console.log("localCursosCopy", localCursosCopy)
			return localCursosCopy
		}
	}

	const toggleTab = (index, nombre) => {
		setToggleState(index)
		setSelectedCategorie(nombre)
	}

	return (
		<MainContainer>
			<Container>
				{isProximos ? (
					<Title>Próximos cursos</Title>
				) : (
					<Title>Conocé nuestros cursos y diplomaturas</Title>
				)}
				<Categories>
					{getCategorias().map(({ nombre }, index) => (
						<Category
							id={index}
							onClick={() => toggleTab(index, nombre)}
							key={index}
							isActive={toggleState === index}
						>
							{nombre}
						</Category>
					))}
				</Categories>
				<CardsContainer>
					{getSelectedCourses().map((elem) => (
						<Card info={elem} />
					))}
				</CardsContainer>
			</Container>
		</MainContainer>
	)
}

export default CursosCards

const MainContainer = styled.div``
const Container = styled.div`
	max-width: 1200px;
	margin: 50px auto;
	font-family: "Montserrat", sans-serif;
`
const Title = styled.h3`
	margin: 0 0 5% 0;
	font-size: 2.5rem;
	font-weight: 700;
	line-height: 2.5rem;
`
const Categories = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0 0 3.3% 0;
`

const Category = styled.button`
	/* padding: 1% 1.42%; */
	white-space: nowrap;
	padding: 10px;
	margin: 0 2.5%;
	text-decoration: none;
	font-weight: 700;
	font-size: 1.25rem;
	/* line-height: 143%; */

	font-family: "Montserrat";
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	/* line-height: 24px; */
	text-align: center;
	border: none;
	background-color: #fff;

	color: ${({ isActive }) => (isActive ? "#fff" : "#282828")};
	${({ isActive }) =>
		isActive &&
		"	background: linear-gradient(90deg, #179cff 0%, #1743ff 100.01%)"};
`
const CardsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`
