import React, { useState } from 'react';

import EnviaBttn from '../../../../Shared/Buttons/EnviaBttn';
import { VscClose } from 'react-icons/vsc';
import styled from 'styled-components';
import theme from './../../../../../Theme/base';
import { useIsMobile } from '../../../../../Hooks/Client';

const ModalCertificado = ({ setModalOpen }) => {
	const [file, setFile] = useState(null);
	const mobile = useIsMobile();

	const handleChangeInput = (e) => {
		setFile(e.target.files[0].name);
	};

	return (
		<MainContainer mobile={mobile}>
			<ModalContainer mobile={mobile}>
				<HeaderTitle mobile={mobile}>
					<CloseButton onClick={() => setModalOpen(false)}>
						<VscClose size={mobile ? 25 : 20} />
					</CloseButton>
					<Title>Beneficios Especiales</Title>
				</HeaderTitle>
				<Parragraph mobile={mobile}>
					¿Sos estudiante de la Universidad Nacional de Córdoba o de la
					Universidad Tecnológica Nacional FRCórdoba?
				</Parragraph>
				<Parragraph mobile={mobile}>
					¡Cargá aquí tu certificado de alumno regular y aprovecha nuestros
					descuentos especiales!
				</Parragraph>
				<StyledForm mobile={mobile}>
					<FileInput
						id='inputFile'
						name='file'
						type='file'
						onChange={handleChangeInput}
					/>

					<Label htmlFor='inputFile' mobile={mobile}>
						<span>Seleccionar archivo</span>
						<span>{file ? file : 'Límite 2 mb'}</span>
					</Label>
					<EnviaBttn
						fontFamily='Montserrat, sans-serif'
						fontSize='1.18rem'
						width={mobile ? '90%' : '58%'}
						margin={mobile ? '60px 5% 0 5%' : '30px 21%'}
						padding='16px'
						backgroundColor={theme.color.darkBlue}
						onClick={() => null}
					/>
				</StyledForm>
			</ModalContainer>
		</MainContainer>
	);
};

export default ModalCertificado;

const MainContainer = styled.div`
	position: fixed;
	z-index: ${theme.zIndex.modals};
	height: 100%;
	width: 100%;
	background-color: #00000080;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: ${({ mobile }) => (mobile ? 'center' : 'start')};
`;

const ModalContainer = styled.div`
	margin: ${({ mobile }) => (mobile ? '0' : '6% 0 0 0')};
	padding: ${({ mobile }) => (mobile ? '0' : '2rem 0')};
	width: ${({ mobile }) => (mobile ? '100%' : '35rem')};
	height: ${({ mobile }) => (mobile ? '100%' : null)};
	display: flex;
	flex-direction: column;
	${({ mobile }) => mobile && 'justify-content:start'};
	background: white;
	border-radius: ${({ mobile }) => (mobile ? '0' : '0 0 10px 10px')};
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;
const HeaderTitle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin: ${({ mobile }) => (mobile ? '2rem auto' : '0 auto 2rem auto ')};
`;
const Title = styled.h3`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	margin: 1rem 0 0 0;
	color: #1744ff;
`;
const CloseButton = styled.div`
	align-self: flex-end;
	background: transparent;
	border: unset;
	font-size: 20px;
	cursor: pointer;
`;

const Parragraph = styled.div`
	width: ${({ mobile }) => (mobile ? '75%' : '82%')};
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: ${({ mobile }) => (mobile ? '0.87rem' : '1rem')};
	line-height: 19.5px;
	text-align: ${({ mobile }) => (mobile ? 'center' : 'left')};
	margin: ${({ mobile }) => (mobile ? '10px auto' : '15px auto')};
	color: #3d3d3d;
`;

const StyledForm = styled.form`
	width: ${({ mobile }) => mobile && '90% '};
	margin: ${({ mobile }) => (mobile ? '2rem auto' : '2rem 0 0 0')};
`;

const FileInput = styled.input`
	display: none;
`;

const Label = styled.label`
	width: ${({ mobile }) => (mobile ? '80%' : '70%')};
	align-self: center;
	display: flex;
	flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
	align-items: center;
	background-color: ${theme.color.white};
	cursor: pointer;
	text-align: start;
	margin: auto;
	padding: 0;
	font-family: ${theme.fontFamily.primary};
	font-size: ${({ mobile }) => (mobile ? null : '1rem')};
	font-weight: ${({ mobile }) => (mobile ? null : '400')};
	line-height: ${({ mobile }) => (mobile ? null : '1.25rem')};

	span:nth-child(1) {
		color: ${theme.color.darkGrey};
		width: ${({ mobile }) => (mobile ? '55%' : '45%')};
		text-align: center;
		background-color: #e5e5e5;
		padding: 0.5rem 0;
		border: ${({ mobile }) =>
			mobile ? '1px solid  #E5E5E5' : '1px solid  #E5E5E5'};
	}
	span:nth-child(2) {
		font-size: 0.9rem;
		text-align: center;
		width: ${({ mobile }) => (mobile ? '55%' : '55%')};
		padding: ${({ mobile }) => (mobile ? '1.05rem 0' : '0.5rem')};
		flex: 1;
		border: ${({ mobile }) =>
			mobile ? '1px solid  #E5E5E5' : '1px solid  #E5E5E5'};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: 500;
	}
`;
