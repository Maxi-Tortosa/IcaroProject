import { useCallback } from "react"
import { useEffect } from "react/cjs/react.development"
import styled from "styled-components"
import { keyframes } from "styled-components"
// import styles from "./Toast.module.css"

const GenericBottomToast = ({ toastlist, setList }) => {
	console.log("se abre el toast")
	const deleteToast = useCallback(
		(id) => {
			const toastListItem = toastlist.filter((e) => e.id !== id)
			setList(toastListItem)
		},
		[toastlist, setList]
	)

	useEffect(() => {
		const interval = setInterval(() => {
			if (toastlist.length) {
				deleteToast(toastlist[0].id)
			}
		}, 5000)

		return () => {
			clearInterval(interval)
		}
	}, [toastlist, deleteToast])

	return (
		<Container className={`container `}>
			{toastlist.map((toast, i) => (
				<Notification
					key={i}
					className={`toast`}
					style={{ backgroundColor: toast.backgroundColor }}
				>
					<ToastButton onClick={() => deleteToast(toast.id)}>X</ToastButton>
					<div>
						<Title>{toast.title}</Title>
						<Description>{toast.description}</Description>
					</div>
				</Notification>
			))}
		</Container>
	)
}

const AnimationToast = keyframes`
    	from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
`
const Container = styled.div`
	font-size: 14px;
	width: 500px;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;
	/* position: fixed; */
	position: absolute;
	/* top: 500px; */
	bottom: 40px;
	z-index: 10;
	animation-name: ${AnimationToast};
`
const Notification = styled.div`
	margin-bottom: 1rem;
	border-radius: 4px;
	box-shadow: 0 0 10px #999;
	color: #000;
	opacity: 0.9;
	transition: 0.3s ease;

	&:hover {
		box-shadow: 0 0 12px #fff;
		opacity: 1;
	}

	.toast {
		height: 50px;
		width: 365px;
		color: #fff;
		padding: 20px 15px 10px 10px;
	}
`

const Title = styled.p`
	font-weight: 700;
	font-size: 16px;
	text-align: left;
	margin-top: 0;
	margin-bottom: 6px;
	width: 300px;
	height: 18px;
`
const Description = styled.p`
	margin: 0;
	text-align: left;
`
const ToastButton = styled.button`
	float: right;
	background: none;
	border: none;
	color: #fff;
	opacity: 0.8;
	cursor: pointer;
`

// const ToastMainContainer = styled.div`
// 	@keyframes toast-in-right {
// 		from {
// 			transform: translateX(100%);
// 		}
// 		to {
// 			transform: translateX(0);
// 		}
// 	}
// `

export default GenericBottomToast
