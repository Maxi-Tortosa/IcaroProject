import { CgTrash } from "react-icons/cg"
import styled from "styled-components"
import theme from "../../../Theme/base"

const DeleteIcon = () => {
	return (
		<Container>
			<CgTrash size={30} className="delete" />
		</Container>
	)
}

const Container = styled.div`
	.delete {
		:hover {
			color: red;
		}
	}
`
export default DeleteIcon
