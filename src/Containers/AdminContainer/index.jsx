import { useContext, useEffect } from "react"
import { projectContext } from "../../Context/ProjectContext"
import { useLocation } from "react-router-dom"

import styled from "styled-components"
import AdminHeader from "../../Components/AdminDashboard/AdminHeader"
import Spacer from "../../Components/Shared/Spacer"
import AdminHome from "../../Components/AdminDashboard/AdminHome"

const AdminPage = () => {
	const { setIsAdmin } = useContext(projectContext)
	const location = useLocation()

	useEffect(() => {
		setIsAdmin(location.pathname)
	}, [])

	return (
		<AdminContainer>
			<AdminHeader />
			<Spacer height={80} />
			<AdminHome />
		</AdminContainer>
	)
}

const AdminContainer = styled.div`
	.tabs-content {
		display: flex;
	}
	.tab {
		float: left;
		min-height: 80vh !important;
		width: 20%;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	}

	/* Style the buttons that are used to open the tab content */
	.tab button {
		display: block;
		background-color: inherit;
		color: black;
		padding: 22px 16px;
		width: 100%;
		border: none;
		outline: none;
		text-align: left;
		cursor: pointer;
		transition: 0.3s;
	}

	/* Change background color of buttons on hover */
	.tab button:hover {
		background: #f2f2f2;
	}

	/* Create an active/current "tab button" class */
	.tab button.active {
		background: #f2f2f2;
	}

	.tabs-content-container {
		width: 75%;
		display: block;
	}

	/* Style the tab content */
	.tabcontent {
		display: none;
		float: left;
		padding: 0px 12px;
		width: 100%;
		border-left: none;
		height: 100%;
	}

	.tabcontent.active {
		display: block;
	}
`

export default AdminPage
