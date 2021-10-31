import { useState } from "react";
import Input from "./Input";

const Register = () => {
	const [newUSer, setNewUser] = useState({});
	const [errorPassword, setErrorPassword] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

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

	function handleSubmit(e) {
		e.preventDefault();
		if (newUSer.length > 0) {
			if (newUSer.contrasena.length < 6) {
				setErrorPassword(true);
				// console.log("mal cotrasenia!");
			} else {
				console.log("bien contrasenia!");
				setErrorPassword(false);
				console.log("acc", newUSer);
				setIsLogged(true);
			}
		}

		console.log(newUSer);
	}

	return (
		<div>
			<p>This is the register page</p>
			<label htmlFor="nombre">
				Nombre *
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
			<label htmlFor="apellido">
				Apellido *
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
			<label htmlFor="email">
				Email *
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
			<label htmlFor="dni">
				DNI *
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
			<label htmlFor="telefono">
				Telefono *
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
			<label htmlFor="contrasena">
				Contrasena *
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
			<label htmlFor="informacion-profesional">
				Informacion Profesional *
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

			<button
				disabled={errorPassword}
				type="submit"
				onClick={(e) => handleSubmit(e)}
			>
				Unirme
			</button>
		</div>
	);
};

export default Register;
