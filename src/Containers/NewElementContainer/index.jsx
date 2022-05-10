import { useState, useEffect } from "react"
import styled from "styled-components"
import theme from "../../Theme/base"
import { useNavigate } from "react-router-dom"

import BlueButton from "../../Components/Shared/Buttons/BlueButton"
import LinearBttn from "../../Components/Shared/Buttons/LinearBttn"
import { sortArrayByOrderNumber } from "../../Utils"

const NewElementContainer = ({ fieldsList, type }) => {
	const [disabledButton, setDisabledButton] = useState(true)
	const [newData, setNewData] = useState({})
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
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

	function getAuthomaticPath() {
		if (newData?.nombre?.length > 3) {
			const generatedPath = newData.nombre.toLowerCase().replaceAll(" ", "-")
			console.log("generatedPath", generatedPath)
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
		}
		handleClose()
	}

	return (
		<ModalContainer>
			<HeaderTitle>
				<Title>{type}</Title>
				<CloseButton onClick={handleClose}>X</CloseButton>
			</HeaderTitle>
			<StyledForm>
				{fieldsList.map((elem, index, array) => (
					<FormLabel key={elem.id} htmlFor={elem.nombre}>
						{elem.inputLabel}
						{elem.isRequired && (
							<RequiredText>* Campo obligatorio</RequiredText>
						)}
						{elem.helpText && <Small>{elem.helpText}</Small>}
						<FormInput
							type={elem.type}
							onChange={(e) => handleChange(elem.nombre, e.target.value)}
							defaultValue={elem.nombre === "href" ? getAuthomaticPath() : ""}
						/>
					</FormLabel>
				))}
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
			</StyledForm>
		</ModalContainer>
	)
}

const ModalContainer = styled.div`
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
	width: 500px;
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
	border: 1px solid #e6e6e6;
	font-family: ${theme.fontFamily.primary};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;

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
	margin: 20px 0;
	display: flex;
	flex-direction: row;
	gap: 20px;
`

export default NewElementContainer
