import React from "react";

const Input = ({ attribute, handleChange, param }) => {
	return (
		<div className="input-container">
			<input
				id={attribute.id}
				name={attribute.name}
				placeholder={attribute.placeholder}
				type={attribute.type}
				onChange={(e) => handleChange(e.target.name, e.target.value)}
				className={param ? "input-error" : "regular-style"}
			/>
		</div>
	);
};

// la idea seria meterle en los estilos en la clase de input error unos estulos en rojo que demuestren que no se cumplen con los parametros establecidos

export default Input;
