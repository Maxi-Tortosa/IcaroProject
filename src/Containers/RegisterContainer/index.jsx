import { useState } from "react";
import Input from "./Input";

const Register = () => {
	const [newUSer, setNewUser] = useState({});
	const [errorPassword, setErrorPassword] = useState(false);

	function handleChange(name, value) {
		// console.log('value === "contrasena">?', value === "contrasena", value);
		if (name === "contrasena" && value.length < 6 && value.length > 1) {
			console.log("mal cotrasenia!");
			setErrorPassword(true);
		} else {
			setErrorPassword(false);
			setNewUser((newUSer) => ({
				...newUSer,
				[name]: value,
			}));
		}
	}

	function handleSubmit() {
		if (newUSer.contrasena.length < 6) {
			setErrorPassword(true);
			console.log("mal cotrasenia!");
		} else {
			console.log("bien contrasenia!");
			setErrorPassword(false);
			console.log("acc", newUSer);
		}
		// let newRegister = { name, lastName };
		// if (newRegister) {
		// }
	}

	// console.log("name", newUSer);
	return (
		<div>
			<p>This is the register page</p>
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
			<label>
				Apellido
				<Input
					attribute={{
						id: "apellido",
						name: "apellido",
						type: "text",
						placeholder: "apellido",
					}}
					handleChange={handleChange}
				/>
			</label>
			<label>
				Email
				<Input
					attribute={{
						id: "email",
						name: "email",
						type: "text",
						placeholder: "email",
					}}
					handleChange={handleChange}
				/>
			</label>
			<label>
				DNI
				<Input
					attribute={{
						id: "dni",
						name: "dni",
						type: "text",
						placeholder: "dni",
					}}
					handleChange={handleChange}
				/>
			</label>
			<label>
				Telefono
				<Input
					attribute={{
						id: "telefono",
						name: "telefono",
						type: "number",
						placeholder: "telefono",
					}}
					handleChange={handleChange}
				/>
			</label>
			<label>
				Contrasena
				<Input
					attribute={{
						id: "contrasena",
						name: "contrasena",
						type: "text",
						placeholder: "contrasena",
					}}
					handleChange={handleChange}
					param={errorPassword}
				/>
			</label>
			{errorPassword && <p>La Contrasenia debe ser mayor a 6 digitos</p>}
			<label>
				Informacion Profesional
				<Input
					attribute={{
						id: "informacion-profesional",
						name: "informacion-profesional",
						type: "text",
						placeholder: "informacion-profesional",
					}}
					handleChange={handleChange}
				/>
			</label>

			<button onClick={handleSubmit}>Unirme</button>
		</div>
	);
};

export default Register;
