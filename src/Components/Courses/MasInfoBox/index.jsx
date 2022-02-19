import styled from "styled-components"
import theme from "../../../Theme/base"
import EnviaBttn from "../../Buttons/EnviaBttn"
import TextareaAutosize from "react-textarea-autosize"

const MasInfoBox = () => {
	return (
		<MasInfoContainer>
			<Title>Quéres más información?</Title>
			<StyledForm>
				<FormLabel htmlFor="fullname">
					Nombre y Apellido
					<FormInput id="fullname" name="fullname" type="text" />
				</FormLabel>
				<FormLabel htmlFor="mail">
					Mail
					<FormInput id="mail" name="mail" type="email" />
				</FormLabel>
				<FormLabel htmlFor="Course">
					Curso de interés
					<FormInput id="Course" name="Course" type="text" />
				</FormLabel>
				<FormLabel htmlFor="question">
					<TextareaAutosize
						minRows={3}
						placeholder={"Consulta"}
						className="styled-text-area"
					/>
				</FormLabel>
				<EnviaBttn
					width="100%"
					margin=" 20px 0"
					borderRadius="10px"
					padding="10px"
					backgroundColor={theme.color.darkBlue}
				/>
			</StyledForm>
		</MasInfoContainer>
	)
}

const MasInfoContainer = styled.div`
	position: sticky;
	top: 90px;
	background: #ffffff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	padding: 30px;
	margin: 40px 0;
`
const Title = styled.h3`
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 20px;
	color: ${theme.fontFamily.lightGrey};
`

const StyledForm = styled.form`
	.styled-text-area {
		display: block;
		width: 100%;
		height: 35px !important;
		border: 1px solid #e6e6e6;
		resize: none;
		margin-top: 20px;

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

		::focus {
			border: 1px solid #1744ff;
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
`

const FormInput = styled.input`
	display: block;
	width: 100%;
	height: 30px;
	border: 1px solid #e6e6e6;
	/* border: 1px solid #1744ff; */

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
	:focus-within {
		border: 1px solid #1744ff;
	}
`

export default MasInfoBox
