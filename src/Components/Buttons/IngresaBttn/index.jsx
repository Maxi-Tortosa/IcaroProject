import styled from 'styled-components';
import theme from '../../../Theme/base';

const IngresaBttn = ({ setIsModalOpen }) => {
	const handleClick = () => {
		setIsModalOpen(true);
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
	font-family: ${theme.fontFamily.primary};
	font-size: 16px;
	cursor: pointer;
	color: white;
	background: ${theme.color.gradient};
	border-radius: 5px;
	border: none;
	justify-self: end;
	text-align: center;
	line-height: 0.875rem;
	padding: 14px 50px;
`;

export default IngresaBttn;
