import { useEffect, useContext, useState } from "react";
import { Link, Router } from "react-router-dom";
import { projectContext } from "../../Context/ProjectContext";
import Register from "../RegisterContainer";

const HomeContainer = () => {
	const { course, setCourse } = useContext(projectContext);

	return (
		<div>
			{/* <Router> */}
			<Link to="/register">Register</Link>
			{/* </Router> */}
		</div>
	);
};

export default HomeContainer;
