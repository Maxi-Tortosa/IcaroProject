<<<<<<< HEAD
import styled from 'styled-components';
import theme from '../../../Theme/base';
=======
import styled from "styled-components"
import { useContext } from "react"
import { projectContext } from "../../../Context/ProjectContext"
import theme from "../../../Theme/base"
>>>>>>> 149aea09aee5d20bec0d4cc7257abc3097ccf2f3

const IngresaBttn = ({ setIsModalOpen }) => {
	const handleClick = () => {
		setIsModalOpen(true)
	}

	return (
		<>
			<StyledButton className="ingresa" onClick={handleClick}>
				Ingresá
			</StyledButton>
		</>
	)
}

const StyledButton = styled.button`
	font-family: ${theme.fontFamily.primary};
	font-size: 16px;
	cursor: pointer;
	color: white;
	background: ${theme.color.gradient};
	transition: all 0.5s ease-in-out 0s;
	border-radius: 5px;
	border: none;
	justify-self: end;
	text-align: center;
	line-height: 0.875rem;
	padding: 14px 50px;

	&:hover {
		/* background: ${theme.color.oppositeGradient}; */
		/* background-size: 1px 300px; */

		background-position: 160px;
	}
`

export default IngresaBttn
