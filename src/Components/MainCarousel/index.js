import { Children, useState, useEffect } from "react"
import styled from "styled-components"
import CarouselCard from "./CarouselCard"

export const useCarouselTimer = (items, milliseconds = 5000) => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIndex((oldIndex) => (oldIndex + 1) % items.length)
		}, milliseconds)

		return () => clearTimeout(timeout)
	}, [index, items.length, milliseconds])

	return [index, setIndex]
}

const dotSize = 10

const Flex = styled.div`
	height: ${dotSize}px;
	display: flex;
	align-items: center;
	margin-left: -${dotSize / 2}px;
`

const DotDrawing = styled.div`
	width: ${dotSize}px;
	height: ${dotSize}px;
	border-radius: ${dotSize / 2}px;
	box-sizing: border-box;
	border: thin solid ${({ color }) => color};
	background: ${({ color, isActive }) => (isActive ? color : "none")};
`

const DotClickable = styled.div`
	cursor: pointer;
	margin: -${dotSize / 2}px 0;
	padding: ${dotSize / 2}px;
`

const textMaxWidth = 800

const getTextAlign = (props) => {
	if (props.centered) return "center"
	if (props.rightAligned) return "right"

	return "left"
}

const StyledText = styled.p`
	margin: 0;
	padding: 0;
	max-width: ${(props) => (props.centered ? "none" : `${textMaxWidth}px`)};
	line-height: ${(props) => props.lineHeight}px;
	font-family: ${(props) => props.family}, sans-serif;
	font-size: ${(props) => props.size}px;
	font-weight: ${(props) => props.weight};
	color: ${({ theme, color, overrideColor }) =>
		overrideColor || color || theme.color.headerText};
	text-transform: ${(props) => (props.caps ? "uppercase" : "none")};
	font-style: ${(props) => (props.italics ? "italic" : "normal")};
	text-align: ${(props) => getTextAlign(props)};
	white-space: ${(props) => (props.noBreak ? "nowrap" : "normal")};
	margin-top: ${(props) => (props.withNewLineSpacing ? 20 : 0)}px;
	text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
	${(props) =>
		props.lines &&
		`
			overflow: hidden;
			display: -webkit-box;
			word-wrap: break-word;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: ${props.lines};
		`}
`

const DotInfo = styled(StyledText)`
	margin-left: ${dotSize / 2}px;
`

export const DotIndicator = ({
	index,
	setIndex,
	length,
	overrideColor,
	withText,
}) => {
	// const theme = useTheme()
	const color = overrideColor

	return (
		<Flex>
			{[...Array(length)].map((item, i) => (
				<DotClickable
					// eslint-disable-next-line react/no-array-index-key
					key={i}
					onClick={() => setIndex(i)}
				>
					<DotDrawing color={color} isActive={i === index} />
				</DotClickable>
			))}
			{withText && (
				<DotInfo overrideColor={color}>
					{index + 1} of {length}
				</DotInfo>
			)}
		</Flex>
	)
}

// DotIndicator.propTypes = {
// 	index: PropTypes.number.isRequired,
// 	setIndex: PropTypes.func.isRequired,
// 	length: PropTypes.number.isRequired,
// 	overrideColor: PropTypes.string,
// 	withText: PropTypes.bool,
// }

// DotIndicator.defaultProps = {
// 	overrideColor: null,
// 	withText: false,
// }

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

const Carousel = ({ index, gap, imgSrc }) => (
	<Wrapper>
		<Row index={index} gap={gap} length={imgSrc.length}>
			{imgSrc.map((elem, i) => (
				<CarouselCard key={i} src={elem} alt="carousel" />
			))}
		</Row>
	</Wrapper>
)

// Carousel.propTypes = {
// 	children: PropTypes.node.isRequired,
// 	index: PropTypes.number.isRequired,
// 	gap: PropTypes.number,
// }

// Carousel.defaultProps = {
// 	gap: 0,
// }

export default Carousel
