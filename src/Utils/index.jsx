export function dateFormat(inputDate, format) {
	//parse the input date
	const date = new Date(inputDate)

	//extract the parts of the date
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()

	//replace the month
	format = format.replace("MM", month.toString().padStart(2, "0"))

	//replace the year
	if (format.indexOf("yyyy") > -1) {
		format = format.replace("yyyy", year.toString())
	} else if (format.indexOf("yy") > -1) {
		format = format.replace("yy", year.toString().substr(2, 2))
	}

	//replace the day
	format = format.replace("dd", day.toString().padStart(2, "0"))

	return format
}

export function sortArrayByOrderNumber(array) {
	array.sort((a, b) => {
		return a.nroOrden - b.nroOrden
	})
}

export function sortArrayAlphabetically(array) {
	return array.sort((a, b) => {
		if (a.name === b.name) {
			return b.id - a.id
		}
		return a.name > b.name ? 1 : -1
	})
}

export const normalizeSelectOptions = (normalized) => {
	const Options = []
	normalized?.forEach((elem, index) => {
		Options.push({
			name: elem?.Nombre,
			id: elem?.CategoriaID,
			label: elem?.Nombre,
			value: elem?.Nombre,
			key: elem?.CategoriaID,
		})
	})
	const orderedOptions = sortArrayAlphabetically(Options)
	return orderedOptions
}
