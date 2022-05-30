import { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import theme from "../../Theme/base"
import { useParams, useNavigate } from "react-router-dom"
import Select from "react-select"
import TextareaAutosize from "react-textarea-autosize"
import BlueButton from "../../Components/Shared/Buttons/BlueButton"
import LinearBttn from "../../Components/Shared/Buttons/LinearBttn"
import { normalizeSelectOptions, sortArrayByOrderNumber } from "../../Utils"
import Spacer from "../../Components/Shared/Spacer"
import { projectContext } from "../../Context/ProjectContext"
import Loader from "../../Components/Shared/Loader"

const EditElementContainer = ({ fieldsList, type, selectOptions }) => {
	const { editElement } = useParams()
	const [disabledButton, setDisabledButton] = useState(true)
	const [newData, setNewData] = useState({})
	const navigate = useNavigate()
	const [pending, setPending] = useState(true)

	const { course, categories } = useContext(projectContext)
	const [selectedEditElement, setSelectedEditElement] = useState("")
	// const [selectedCategory, setSelectedCategory] = useState("")

	//link del tablero de slack
	//link del zoom de clase
	useEffect(() => {
		if (course.length > 0 && categories.length > 0) {
			const elemResult =
				course.find((elem) => elem.href === editElement) ||
				categories.find((elem) => elem.CategoriaID === editElement)
			setSelectedEditElement(elemResult)
			setPending(false)
		}
	}, [course, categories, editElement])
	// console.log("elem", selectedEditElement)

	sortArrayByOrderNumber(fieldsList)

	useEffect(() => {
		const requiredFields = fieldsList
			.filter((elem) => elem.isRequired)
			.map((item) => item.nombre)
		const dataKeys = Object.keys(newData)

		requiredFields.every((ai) => dataKeys.includes(ai)) &&
		Object.values(newData).every((item) => item.length > 3)
			? setDisabledButton(false)
			: setDisabledButton(true)
	}, [newData, fieldsList])

	function handleClose() {
		setNewData({})
		navigate("/admin/", { replace: true })
	}

	function handleChange(name, value) {
		setNewData((newData) => ({ ...newData, [name]: value }))
		console.log(newData)
	}

	function getDefaultValue(nombre) {
		if (nombre === "href") {
			// setNewData((newData) => ({ ...newData, [nombre]: getAuthomaticPath() }))
			return getAuthomaticPath(nombre)
		} else if (nombre === "CategoriaID") {
			// setNewData((newData) => ({ ...newData, [nombre]: getCategoryID() }))
			return getCategoryID()
		} else return ""
	}

	function getCategoryID() {
		if (newData?.categoria?.length > 3) {
			const selectedCategoria = selectOptions.filter(
				(elem) => elem.Nombre === newData.categoria
			)
			return selectedCategoria[0].CategoriaID
		}
	}

	function getAuthomaticPath(nombre) {
		if (newData?.nombre?.length > 3) {
			const generatedPath = newData.nombre.toLowerCase().replaceAll(" ", "-")
			// setNewData((newData) => ({ ...newData, [nombre]: generatedPath }))
			return generatedPath
		}
	}

	function handleSubmit(e) {
		// console.log("se hizo submit")
		e.preventDefault()
		if (disabledButton) return
		if (newData) {
			// setLoading(true)
			console.log("aca submit lo nuevo", newData)
			// showToast("success")
		} else {
			// showToast("danger")
		}
		handleClose()
	}

	if (pending || !selectedEditElement) return <Loader />

	return (
		<NewElementMainContainer>
			<HeaderTitle>
				<Title>
					{type}{" "}
					{selectedEditElement["Nombre"] || selectedEditElement["nombre"]}
				</Title>

				<CloseButton onClick={handleClose}>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/mobile%2FContactModalCloseIcon.png?alt=media&token=edf0e5a3-1f0b-4ecd-a8af-004593804807"
						alt="Cerrar ventana de confirmación"
					/>
				</CloseButton>
			</HeaderTitle>
			<StyledForm>
				{Object.keys(selectedEditElement).map((elem) => {
					return <p>{elem}</p>
				})}
				{/* {fieldsList.map((elem, index, array) => (
					<FormLabel key={elem.id} htmlFor={elem.nombre} elemWidth={elem.width}>
						<>
							{elem.nroOrden}. {elem.inputLabel}
							{elem.isRequired && (
								<RequiredText>* Campo obligatorio</RequiredText>
							)}
							{elem.helpText && elem.type !== "textarea" && (
								<Small>{elem.helpText}</Small>
							)}
							{elem.type === "select" ? (
								<SelectContainer hasExtraMargin={!elem.helpText}>
									<Select
										options={categoriesOptions}
										onChange={(value) => handleChange(elem.nombre, value.name)}
										placeholder="Seleccione categoria"
									/>
								</SelectContainer>
							) : elem.type === "textarea" ? (
								<TextareaAutosize
									onChange={(e) => handleChange(elem.nombre, e.target.value)}
									minRows={3}
									placeholder={elem.helpText}
									className="styled-text-area"
								/>
							) : (
								<FormInput
									hasExtraMargin={!elem.helpText}
									withBorder={elem.type === "text" || elem.type === "number"}
									type={elem.type}
									onChange={(e) => handleChange(elem.nombre, e.target.value)}
									defaultValue={
										elem.defaultValue || getDefaultValue(elem.nombre)
									}
									disabled={elem.isDisabled}
								/>
							)}
						</>
					</FormLabel>
				))} */}
			</StyledForm>
			<SubmitContainer>
				<LinearBttn type="cancel" onClick={handleClose}>
					Cancelar
				</LinearBttn>
				<BlueButton
					width="100%"
					borderRadius="10px"
					padding="5px 13px"
					backgroundColor={
						disabledButton ? theme.color.disabledBlue : theme.color.darkBlue
					}
					type="submit"
					disabled={disabledButton}
					onClick={(e) => handleSubmit(e)}
				>
					Guardar
				</BlueButton>
			</SubmitContainer>
			<Spacer height={100} />
		</NewElementMainContainer>
	)
}

const NewElementMainContainer = styled.div`
	padding: 20px;
`
const HeaderTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`
const Title = styled.h3`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	width: 90%;
	color: #1744ff;
`
const CloseButton = styled.div`
	background: transparent;
	border: unset;
	font-size: 20px;
	cursor: pointer;
`

const StyledForm = styled.form`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 30px;
	margin: 0 auto;

	.styled-text-area {
		display: block;
		width: 100%;
		height: 35px !important;
		border: 1px solid #e6e6e6;
		resize: none;
		margin-top: 20px;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		font-family: ${theme.fontFamily.primary};

		::placeholder {
			display: block;
			font-family: ${theme.fontFamily.primary};
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 24px;
			color: ${theme.color.lightGrey};
			margin: 10px 0px;
		}

		:focus {
			font-family: ${theme.fontFamily.primary};
			border: 2px solid ${theme.color.darkBlue};
			outline: none;
			border-radius: 5px;
			font-size: 1rem;
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 24px;
		}
	}
`

const FormLabel = styled.label`
	width: ${({ elemWidth }) => elemWidth};
	display: block;
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	color: ${theme.color.lightGrey};
	margin: 10px 0px;
	text-transform: capitalize;
`
const SelectContainer = styled.div`
	margin-top: ${({ hasExtraMargin }) => (hasExtraMargin ? "26px" : 0)};
`

const Small = styled.p`
	display: block;
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	color: ${theme.color.lightGrey};
	text-transform: none;
	margin: 5px 0;
`
const RequiredText = styled.p`
	display: inline;
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	color: ${theme.color.redError};
	margin: 10px 0px;
	text-transform: none;
	margin: 0 10px;
`

const FormInput = styled.input`
	display: block;
	width: 100%;
	height: 30px;
	border: ${({ withBorder }) => withBorder && "1px solid #e6e6e6"};
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	margin-top: ${({ hasExtraMargin }) => (hasExtraMargin ? "26px" : 0)};

	:focus {
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		border: 2px solid ${theme.color.darkBlue};
		outline: none;
		border-radius: 5px;
		font-size: 1rem;
		font-family: ${theme.fontFamily.primary};
	}

	::placeholder {
		display: block;
		font-family: ${theme.fontFamily.primary};
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		color: ${theme.color.lightGrey};
		margin: 10px 0px;
	}
`
const SubmitContainer = styled.div`
	width: 500px;
	margin: 20px auto;
	display: flex;
	flex-direction: row;
	gap: 20px;
`

export default EditElementContainer
