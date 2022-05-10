import React from 'react';

const CategoriesMobile = ({ categories }) => {
	return (
		<select>
			{categories().map(({ Nombre, CategoriaID }, index) => (
				<option id={CategoriaID} key={index} value={Nombre}>
					{Nombre}
				</option>
			))}
		</select>
	);
};

export default CategoriesMobile;
