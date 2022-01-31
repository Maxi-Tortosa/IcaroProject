import { useState, useEffect } from "react"
import styled from "styled-components"
import CarouselCard from "./CarouselCard/index"
import DotIndicator from "./DotIndicator/index"

const useCarouselTimer = (items, milliseconds = 5000) => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIndex((oldIndex) => (oldIndex + 1) % items.length)
		}, milliseconds)

		return () => clearTimeout(timeout)
	}, [index, items.length, milliseconds])

	return [index, setIndex]
}

const Wrapper = styled.div`
	overflow: hidden;
`

const getCalcString = (index, gap, positive) => {
	const sign = positive ? "" : "-"
	const percentage = index * 100
	const action = positive ? "+" : "-"
	const pixels = index * gap

	return `calc(${sign}${percentage}% ${action} ${pixels}px)`
}

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
	transition: margin 0.5s;
`

const CarouselWrapper = styled.div`
	position: relative;
	overflow: hidden;
`
const DotIndicatorWrapper = styled.div`
	position: absolute;
	top: 90%;
	left: 45%;
`

const Carousel = ({ gap = 0, imgSrc }) => {
	const [index, setIndex] = useCarouselTimer(imgSrc)

	return (
		<CarouselWrapper>
			<Wrapper>
				<Row index={index} gap={gap} length={imgSrc.length}>
					{imgSrc.map((elem, i, arr) => (
						<CarouselCard
							key={i}
							src={elem}
							alt="carousel"
							index={index}
							setIndex={setIndex}
							array={arr}
						/>
					))}
				</Row>
				{imgSrc.length > 1 && (
					<DotIndicatorWrapper>
						<DotIndicator
							index={index}
							setIndex={setIndex}
							length={imgSrc.length}
							overrideColor="white"
						/>
					</DotIndicatorWrapper>
				)}
			</Wrapper>
		</CarouselWrapper>
	)
}

export default Carousel
