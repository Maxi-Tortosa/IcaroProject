import { useState, useEffect, useContext } from 'react';
import { projectContext } from '../../Context/ProjectContext';
import styled from 'styled-components';
import CarouselCard from './CarouselCard/index';
import DotIndicator from './DotIndicator/index';
// import Loader from "../Loader"

const useCarouselTimer = (items, milliseconds = 5000) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIndex((oldIndex) => (oldIndex + 1) % items.length);
		}, milliseconds);

		return () => clearTimeout(timeout);
	}, [index, items.length, milliseconds]);

	return [index, setIndex];
};

const Wrapper = styled.div`
	overflow: hidden;
`;

const getCalcString = (index, gap, positive) => {
	const sign = positive ? '' : '-';
	const percentage = index * 100;
	const action = positive ? '+' : '-';
	const pixels = index * gap;

	return `calc(${sign}${percentage}% ${action} ${pixels}px)`;
};

const Row = styled.div`
	height: 759px;
	display: grid;
	grid-template-columns: repeat(${({ length }) => length}, minmax(0, 1fr));
	column-gap: ${({ gap }) => gap}px;
	width: calc(
		${({ length }) => length * 100}% +
			${({ gap, length }) => gap * (length - 1)}px
	);
	margin-left: ${({ index, gap }) => getCalcString(index, gap, false)};
	transition: margin 1.5s;
`;

const CarouselWrapper = styled.div`
	position: relative;
	overflow: hidden;
`;
const DotIndicatorWrapper = styled.div`
	position: absolute;
	top: 90%;
	left: 45%;
`;

const Carousel = ({ gap = 0 }) => {
	const imgs = [
		/* VER SI SIGUE VIGENTE ESTA CONSTANTE YA QUE EL ORIGEN DE LAS IMÁGENES ESTÁ EN FIRESTORE */
		'./img/carousel1.png',
		'./img/carousel2.png',
		'./img/carousel1.png',
	];
	const { carousel } = useContext(projectContext);
	const [index, setIndex] = useCarouselTimer(imgs);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		if (carousel.length > 0) {
			setPending(false);
		}
	}, [carousel]);

	// if (pending) {
	// 	return <Loader />
	// }

	// console.log("carousel", carousel)

	return (
		<CarouselWrapper>
			<Wrapper>
				{pending ? null : (
					<>
						<Row index={index} gap={gap} length={imgs.length}>
							{carousel.map(({ Slide }, i, arr) => (
								<CarouselCard
									key={i}
									slide={Slide}
									src={Slide.BgImageSrc}
									index={index}
									setIndex={setIndex}
								/>
							))}
						</Row>
						{carousel.length > 1 && (
							<DotIndicatorWrapper>
								<DotIndicator
									index={index}
									setIndex={setIndex}
									length={imgs.length}
									overrideColor='white'
								/>
							</DotIndicatorWrapper>
						)}
					</>
				)}
			</Wrapper>
		</CarouselWrapper>
	);
};

export default Carousel;
