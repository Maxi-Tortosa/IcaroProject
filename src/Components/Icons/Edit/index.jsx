import { CgPen } from "react-icons/cg"
import styled from "styled-components"
import theme from "../../../Theme/base"

const EditIcon = () => {
	return (
		<Container>
			<CgPen size={30} className="edit" />
		</Container>
	)
}

const Container = styled.div`
	.edit {
		:hover {
			color: ${theme.color.darkBlue};
		}
	}
`
export default EditIcon
