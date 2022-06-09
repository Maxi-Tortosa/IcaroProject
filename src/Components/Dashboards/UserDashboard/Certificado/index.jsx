import BlueButton from '../../../Shared/Buttons/BlueButton/index';
import styled from 'styled-components';
import theme from './../../../../Theme/base';
import { useEffect } from 'react';

const Certificados = () => {
	useEffect(() => {
		const input = document.getElementById('inputFile');
		input.style.display = 'none';
		console.log(input);
	}, []);
	return (
		<CertificadosMainContainer>
			<BannerContainer>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/certificadosBanner.png?alt=media&token=38ae4bec-354f-4b19-bd64-d58a570757a7'
					alt='Imagen representativa de la sección certificados'
				/>
			</BannerContainer>
			<Container>
				<ContainerTitle>
					¿Sos estudiante de la UNC o de la UTN FR Córdoba?
				</ContainerTitle>
				<ContainerParagraph>
					Cargá aquí tu certificado de alumno regular y aprovecha nuestros
					descuentos especiales!
				</ContainerParagraph>
				<FileInput id='inputFile' name='file' type='file' />

				<Label for='inputFile'>Cargar certificado</Label>
			</Container>
		</CertificadosMainContainer>
	);
};

export default Certificados;

const CertificadosMainContainer = styled.div`
	width: 33%;
	height: 25.93rem;
	background: #ffffff;
	box-shadow: 0px 0px 10px #dadada;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
`;

const BannerContainer = styled.div`
	img {
		width: 100%;
	}
`;

const Container = styled.div`
	flex: 1;
	width: 77.5%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ContainerTitle = styled.h5`
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	font-size: ${({ mobile }) => (mobile ? null : '1rem')};
	font-weight: ${({ mobile }) => (mobile ? null : '600')};
	line-height: ${({ mobile }) => (mobile ? null : '1.25rem')};
	margin: ${({ mobile }) => (mobile ? null : '0 0 1.2rem 0')};
	text-align: center;
	color: #363636;
`;
const ContainerParagraph = styled.p`
	font-family: ${({ mobile }) =>
		mobile ? null : `${theme.fontFamily.primary}`};
	font-size: ${({ mobile }) => (mobile ? null : '1rem')};
	font-weight: ${({ mobile }) => (mobile ? null : '400')};
	line-height: ${({ mobile }) => (mobile ? null : '1.25rem')};
	margin: ${({ mobile }) => (mobile ? null : '0 0 1.2rem 0')};
	text-align: center;
	color: #363636;
`;

const FileInput = styled.input``;

const Label = styled.label`
	width: 100%;
	background-color: ${theme.color.darkBlue};
	border-radius: 10px;
	cursor: pointer;
	text-align: center;
	padding: 0.6rem 0;
	color: ${theme.color.white};
	font-family: ${theme.fontFamily.primary};
	font-size: ${({ mobile }) => (mobile ? null : '1rem')};
	font-weight: ${({ mobile }) => (mobile ? null : '600')};
	line-height: ${({ mobile }) => (mobile ? null : '1.25rem')};
`;
