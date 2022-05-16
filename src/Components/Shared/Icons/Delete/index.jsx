import { CgTrash } from "react-icons/cg"
import styled from "styled-components"

const DeleteIcon = ({ props }) => {
	return (
		<Container {...props}>
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
