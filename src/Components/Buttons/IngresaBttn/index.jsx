import styled from 'styled-components';
import { useState, useContext } from 'react';
import { projectContext } from '../../../Context/ProjectContext';
import LogIn from '../../LogIn';

const IngresaBttn = () => {
	const { setModalOpen } = useContext(projectContext);

	const handleClick = () => {
		setModalOpen(true);
	};

	return (
		<>
			<StyledButton className='ingresa' onClick={handleClick}>
				Ingresá
			</StyledButton>
		</>
	);
};

const StyledButton = styled.button`
	font-family: 'Montserrat';
	font-size: 16px;
	/* width: 12.17%; */
	cursor: pointer;
	color: white;
	/* font-size: 1rem; */
	background: linear-gradient(90deg, #179cff 0%, #1743ff 100.01%);
	border-radius: 5px;
	border: none;
	justify-self: end;
	text-align: center;
	line-height: 0.875rem;
	/* margin: 0 auto 0 9.66%; */
	padding: 14px 50px;
`;

export default IngresaBttn;
