import React, { useState } from 'react';

import Select from 'react-select';
import { set } from 'firebase/database';
import styled from 'styled-components';

const CategoriesMobile = ({ toggleTab, categories }) => {
	const categorias = categories();
	const options = categorias.map(({ Nombre }) => {
		return { value: `${Nombre}`, label: `${Nombre}` };
	});

	const [selectedOption, setSelectedOption] = useState(options[0]);

	const handleChange = (e) => {
		const selected = options.find((option) => option.value === e.value);
		const searchedCategory = categories().find(
			(element) => element.Nombre === selectedOption
		);
		const searchedIndex = categories().indexOf(searchedCategory);

		toggleTab(searchedIndex, e.value);
		setSelectedOption(selected);
	};

	const customStyles = {
		container: (provided, state) => ({
			...provided,
			marginBottom: '15px',
		}),
		input: (provided, state) => ({
			...provided,
		}),
		option: (provided, state) => ({
			...provided,
			color: state.isFocused ? 'black' : null,
			background: state.isSelected ? null : 'white',
		}),

		control: (provided) => ({
			...provided,
			width: '80%',
		}),
		singleValue: (provided) => ({
			...provided,
			fontSize: '1rem',
			fontFamily: 'Montserrat, sans-serif',
			padding: '0 0 0 6px',
		}),
		menu: (provided) => ({
			...provided,
			width: '80%',
		}),
	};

	return (
		<Select
			defaultValue={selectedOption}
			onChange={handleChange}
			options={options}
			styles={customStyles}
			isSearchable={false}
		/>
	);
};

export default CategoriesMobile;

// const Select = styled.div`
// 	width: 200px;
// 	select {
// 		font-family: 'Montserrat', sans-serif;
// 		font-weight: 400;
// 		font-size: 1rem;
// 		line-height: 1.5rem;
// 		color: #363636;
// 		border: 1px solid #e6e6e6;
// 		box-shadow: 0px 0px 4px #f2f2f2;
// 		border-radius: 1px;
// 		margin: 0 0 5.5% 0;
// 		padding: 0 0 0 0;

// 		option {
// 			border: 1px solid #e6e6e6;
// 			box-shadow: 0px 0px 4px #f2f2f2;
// 			border-radius: 1px;
// 			font-family: 'Montserrat', sans-serif;
// 			font-weight: 400;
// 			font-size: 1rem !important;
// 			line-height: 1.5rimport { useState } from 'react';

// 			color: #363636;
// 		}
// 	}
// `;
