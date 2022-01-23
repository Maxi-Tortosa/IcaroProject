import styled from "styled-components"
import theme from "../../../Theme/base"

const Card = ({ isProximos, info }) => {
	return (
		<CardContainer isProximos={isProximos}>
			<TitleContainer>
				<CardTitle isProximos={isProximos} categoriaColor={info.categoria}>
					{info.nombre}
				</CardTitle>
			</TitleContainer>

			<CardContent isProximos={isProximos}>
				{isProximos ? (
					<>
						<CardInfoContainer>
							<p>
								<span>Fecha de inicio:</span> XX de octubre
							</p>
							<p>
								<span>Duración:</span> 12 semanas
							</p>
							<p>
								<span>Modalidad:</span> Online - En vivo
							</p>
							<p>
								<span>Clases semanales:</span> 2 clases
							</p>
						</CardInfoContainer>
						<CoonoceMasBttn>Conoce Mas</CoonoceMasBttn>
					</>
				) : (
					<>
						<CourseContent isItalic>6 meses</CourseContent>
						<CourseContent>$20.000</CourseContent>
						<VerMasButton>Ver Mas</VerMasButton>
					</>
				)}
			</CardContent>
		</CardContainer>
	)
}

export default Card

const CardContainer = styled.div`
	width: ${({ isProximos }) => (isProximos ? "29%" : "20%")};
	margin: 10px 20px;
	${({ isProximos }) => isProximos && "padding-top: 30px;"}
	background: #ffffff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	font-family: "Montserrat", serif;
	justify-content: space-between;
`
const TitleContainer = styled.div`
	background-color: #fff;
	width: 80%;
	margin: auto;
`

const CardTitle = styled.h5`
	font-weight: 700;
	font-size: 1.12rem;
	text-align: center;

	color: ${({ isProximos, categoriaColor }) =>
		isProximos
			? theme.color.black
			: categoriaColor === "Ambiente"
			? theme.categories.ambiente
			: categoriaColor === "Diseño y Marketing"
			? theme.categories.negocios
			: theme.categories.tecnologia};
`
const CardContent = styled.div`
	padding: ${({ isProximos }) => (isProximos ? "0px" : "20px")};

	p {
		font-size: 1rem;
		line-height: 1.18rem;
		color: #000000;
		span {
			font-weight: 700;
		}
	}
`
const CardInfoContainer = styled.div`
	padding: 20px;
`

const CourseContent = styled.p`
	font-family: "Inter";
	${({ isItalic }) => isItalic && "font-style: italic;"}
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	color: #282828;
`
const CoonoceMasBttn = styled.a`
	background: #1744ff;
	border-radius: 0px 0px 10px 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	font-family: "Montserrat", sans-serif;
	text-decoration: none;
	font-weight: 600;
	color: white;
	margin: 0;
	text-align: center;
	padding: 9% 0 9% 0;
	cursor: pointer;
`

const VerMasButton = styled.a`
	display: block;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	text-decoration-line: underline;
	cursor: pointer;

	color: #282828;
`
