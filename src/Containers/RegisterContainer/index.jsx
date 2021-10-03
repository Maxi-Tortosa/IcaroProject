import { useState } from "react";
import Input from "./Input";

const Register = () => {
	const [newUSer, setNewUser] = useState({ name: "", lastName: "" });

	function handleChange(name, value) {
		setNewUser({ name: value, lastName: "" });
	}

	console.log("name", newUSer);
	return (
		<div>
			This is the register page
			<label>
				Nombre
				<Input
					attribute={{
						id: "nombre",
						name: "nombre",
						type: "text",
						placeholder: "Nombre",
					}}
					handleChange={handleChange}
				/>
			</label>
			{/* <label>
				Apellido
				<Input />
			</label>
			<label>
				Email
				<Input />
			</label>
			<label>
				DNI
				<Input />
			</label>
			<label>
				Telefono
				<Input />
			</label>
			<label>
				Contrasenia
				<Input />
			</label>
			<label>
				Informacion profesional
				<Input />
			</label> */}
		</div>
	);
};

export default Register;
