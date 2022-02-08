import { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import Card from "./Card"
import { projectContext } from "../../Context/ProjectContext"
import theme from "../../Theme/base"

const CursosCards = ({ isProximos }) => {
	const { course, setCourse } = useContext(projectContext)
	const { categories, setCategories } = useContext(projectContext)

	const [pending, setPending] = useState(true)
	const [toggleState, setToggleState] = useState(0)
	const [selectedCategorie, setSelectedCategorie] = useState(
		categories.length > 0 ? categories[0].Nombre : "Programación"
	)

	useEffect(() => {
		if (course.length > 0 || categories.length > 0) {
			window.localStorage.setItem("localCursos", JSON.stringify(course))
			setPending(false)
		}
	}, [course, categories])

	if (pending) {
		var localCursos = JSON.parse(localStorage.getItem("localCursos"))
	}

	const getCategorias = () => {
		if (localCursos) {
			const categoria = []

			localCursos.map((elem) => categoria.push({ nombre: elem.categoria }))
			const CategCopy = categoria.filter(
				(v, i, a) => a.findIndex((t) => t.nombre === v.nombre) === i
			)
			return CategCopy
		} else {
			const categCopy = categories.sort(function (a, b) {
				return a.Orden - b.Orden
			})
			return categCopy
		}
	}

	const getSelectedCourses = () => {
		if (localCursos) {
			const localCursosCopy = localCursos.filter(
				(elem) => elem.categoria === selectedCategorie
			)
			return localCursosCopy
		} else {
			const localCursosCopy = course.filter(
				(elem) => elem.categoria === selectedCategorie
			)
			return localCursosCopy
		}
	}

	const toggleTab = (index, nombre) => {
		setToggleState(index)
		setSelectedCategorie(nombre)
	}

	return (
		<MainContainer id={isProximos ? "proximos" : "cursos"}>
			<Container>
				{isProximos ? (
					<Title>Próximos cursos</Title>
				) : (
					<Title>Conocé nuestros cursos y diplomaturas</Title>
				)}

				<Categories>
					{pending ? (
						<p>loading...</p>
					) : (
						getCategorias().map(({ Nombre, CategoriaID }, index) => (
							<Category
								id={CategoriaID}
								onClick={() => toggleTab(index, Nombre)}
								key={index}
								isActive={toggleState === index}
							>
								{Nombre}
							</Category>
						))
					)}
				</Categories>
				<CardsContainer isProximos={isProximos}>
					{pending ? (
						<p>loading...</p>
					) : (
						getSelectedCourses().map((elem) => (
							<Card isProximos={isProximos} info={elem} />
						))
					)}
				</CardsContainer>
			</Container>
		</MainContainer>
	)
}

export default CursosCards

const MainContainer = styled.div`
	width: 80%;
	max-width: 1095px;
	margin: 50px auto;
`
const Container = styled.div`
	font-family: ${theme.fontFamily.primary};
	margin: 50px auto;
`

const Title = styled.h3`
	/* margin: 0 0 5% 0; */
	font-size: 2.5rem;
	padding: 0 20px;
	font-weight: 700;
	line-height: 2.5rem;
`
const Categories = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 0 3.3% 0;
`

const Category = styled.button`
	white-space: nowrap;
	padding: 10px;
	margin: 10px;
	text-decoration: none;
	font-weight: 700;
	font-size: 1.25rem;
	cursor: pointer;

	line-height: 143%;
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	border: none;
	background-color: ${theme.color.white};

	color: ${({ isActive }) => (isActive ? theme.color.white : "#282828")};
	${({ isActive }) => isActive && `background: ${theme.color.gradient}`};
`
const CardsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	${({ isProximos }) => isProximos && "justify-content: center;"}
	/* justify-content: center; */
	flex-wrap: wrap;
`
