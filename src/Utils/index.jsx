export function dateFormat(inputDate, format) {
	//parse the input date
	const date = new Date(inputDate)
	
	//extract the parts of the date
	const day = date.getDate() +1
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

export function sortArrayByOrdenValue(array) {
  return array.sort(function (a, b) {
    return a.Orden - b.Orden;
  });
}

export function sortArrayByNroOrden(array) {
  return array.sort((a, b) => {
    return a.NroOrden - b.NroOrden;
  });
}

export function sortArrayBynombreCurso(array) {
  return array.sort((a, b) => {
    if (a.nombreCurso === b.nombreCurso) {
      return b.id - a.id;
    }
    return a.nombreCurso > b.nombreCurso ? 1 : -1;
  });
}

export function sortArrayAlphabetically(array) {
  return array.sort((a, b) => {
    if (a.name === b.name) {
      return b.comisionId - a.comisionId;
    }
    return a.name > b.name ? 1 : -1;
  });
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

export function turnTimestampIntoDate(data) {
let date = data.toDate().toJSON().slice(0, 10);
let finalDate = dateFormat(date, 'dd-MM-yyyy')

  return finalDate
}

export const getSimilarCourses = (courseList, CategoriaID, course) => {
  const categoryList = courseList.filter(
    (elem) =>
      elem.CategoriaID === CategoriaID ||
      elem.nombre.includes(course.nombre) ||
      (course.CategoriaID2 && elem.CategoriaID2 === course.CategoriaID2)
  );
  const newList = categoryList.filter((item) => item !== course);
  return newList;
};

export const getCollectionName = (typeName) => {
  switch (typeName) {
    case 'Curso':
      return 'NuevosCursos';
    case 'Categoria':
      return 'CategoriasCursos';
    case 'Comisiones':
      return 'ComisionesCursos';
    case 'Usuarios':
      return 'Usuarios';
    case 'Solicitudes':
      return 'Solicitudes';
    case 'Inscripciones':
      return 'Inscripciones';
    case 'Consultas':
      return 'Consultas';
    default:
      return '';
  }
};