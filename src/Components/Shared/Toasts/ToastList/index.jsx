// import { useState } from "react"
// import GenericBottomToast from "../ToastListContainer"
import theme from "../../../../Theme/base"

// const ToastList = ({ type, content }) => {
// 	const [list, setList] = useState([])
// 	let toastProperties = null
// 	console.log("ya esta")

// 	const showToast = (type) => {
// 		switch (type) {
// 			case "success":
// 				toastProperties = {
// 					id: list.length + 1,
// 					content: content?.success,
// 					backgroundColor: theme.color.successGreen,
// 				}
// 				break
// 			case "error":
// 				toastProperties = {
// 					id: list.length + 1,
// 					content: content?.error,
// 					backgroundColor: theme.color.redError,
// 				}
// 				break
// 			default:
// 				toastProperties = []
// 		}
// 		setList([...list, toastProperties])
// 	}

// 	showToast(type)

// 	return (
// 		<GenericBottomToast
// 			toastlist={list}
// 			position="buttom-right"
// 			setList={setList}
// 		/>
// 	)
// }
export function successToast(content, list) {
	return {
		id: list.length + 1,
		content: content,
		backgroundColor: "#2EBE16",
	}
}

export function errorToast(content, list) {
	return {
		id: list.length + 1,
		content: content,
		backgroundColor: theme.color.redError,
	}
}

// export default ToastList
