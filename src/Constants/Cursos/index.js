export const CURSOSCFIELDS = [
  {
    nombre: 'NroOrden',
    inputLabel: 'Numero de orden',
    isRequired: true,
    type: 'number',
    id: 16,
    nroOrden: 0,
    width: '45%',
  },
  {
    nombre: 'bannerImage',
    inputLabel: 'Imagen Portada',
    isRequired: true,
    type: 'file',
    id: 15,
    nroOrden: 1,
    width: '45%',
  },
  {
    nombre: 'nombre',
    inputLabel: 'Nombre del Curso',
    isRequired: true,
    type: 'text',
    id: 11,
    nroOrden: 2,
    width: '45%',
  },
  {
    nombre: 'categoria',
    inputLabel: 'Nombre de categoria',
    isRequired: true,
    type: 'select',
    id: 3,
    nroOrden: 3,
    width: '45%',
  },
  {
    nombre: 'href',
    inputLabel: 'URL Path',
    isDisabled: true,
    helpText: 'Este es un ejemplo autogenerado',
    type: 'text',
    id: 10,
    nroOrden: 4,
    width: '45%',
  },
  {
    nombre: 'CategoriaID',
    inputLabel: 'Categoria Id',
    isRequired: true,
    isDisabled: true,
    helpText: 'Campo autogenerado',
    type: 'text',
    id: 1,
    nroOrden: 5,
    width: '45%',
  },

  {
    nombre: 'descripcion',
    inputLabel: 'Descripcion',
    isRequired: true,
    helpText: 'Ingrese la descripcion del curso',
    type: 'textarea',
    id: 4,
    nroOrden: 6,
    width: '45%',
  },
  {
    nombre: 'duracion',
    inputLabel: 'Duracion del curso',
    isRequired: true,
    type: 'text',
    id: 5,
    nroOrden: 7,
    width: '45%',
  },
  {
    nombre: 'modalidad',
    inputLabel: 'Modalidad del curso',
    isRequired: true,
    defaultValue: 'Online - En vivo',
    type: 'text',
    id: 6,
    nroOrden: 8,
    width: '45%',
  },
  {
    nombre: 'Certificacion',
    inputLabel: 'Tipo de certificacion',
    isRequired: true,
    defaultValue: 'Universitaria',
    type: 'text',
    id: 6,
    nroOrden: 9,
    width: '45%',
  },
  {
    nombre: 'Requisitos',
    inputLabel: 'Requisitos',
    isRequired: true,
    defaultValue: 'Computadora y conexión a internet',
    type: 'text',
    id: 7,
    nroOrden: 10,
    width: '45%',
  },
  {
    nombre: 'clasesSemanales',
    inputLabel: 'Cantidad de clases semanales',
    isRequired: true,
    type: 'text',
    id: 8,
    nroOrden: 11,
    width: '45%',
  },
  {
    nombre: 'duracionClase',
    inputLabel: 'Duracion de cada clase',
    isRequired: true,
    type: 'text',
    id: 9,
    nroOrden: 12,
    width: '45%',
  },
  {
    nombre: 'duracionTotal',
    inputLabel: 'Duracion total del curso',
    isRequired: true,
    type: 'text',
    id: 10,
    nroOrden: 13,
    width: '45%',
  },

  {
    nombre: 'PDF',
    inputLabel: 'Plan de estudios PDF',
    type: 'file',
    id: 2,
    nroOrden: 14,
    width: '45%',
  },
  {
    nombre: 'planDeEstudioContent',
    inputLabel: 'Programa de estudio',
    helpText: 'Este es un ejemplo autogenerado',
    type: 'text',
    id: 13,
    children: [],
    nroOrden: 15,
    width: '45%',
  },
  // {
  // 	nombre: "detalles",
  // 	inputLabel: "Informacion adicional",
  // 	children: [
  // 		// { nombre: "clasesSemanales", type: "text", id: 4 },
  // 		// { nombre: "descripcion", type: "text", id: 5 },
  // 		// { nombre: "duracionClase", type: "text", id: 6 },
  // 		// { nombre: "duracionTotal", type: "text", id: 7 },
  // 		// { nombre: "modalidad", type: "text", id: 8 },
  // 		// { nombre: "requisitos", type: "text", id: 9 },
  // 	],
  // },
];

export const CURSOSROWS = [
  {
    nombre: 'Id',
  },
  {
    nombre: 'Nombre Curso',
    inputLabel: 'Nombre del Curso',
    isRequired: true,
    type: 'text',
    id: 11,
    nroOrden: 2,
    width: '45%',
  },
  {
    nombre: 'Categoria',
    inputLabel: 'Nombre de categoria',
    isRequired: true,
    type: 'select',
    id: 3,
    nroOrden: 3,
    width: '45%',
  },

  {
    nombre: 'Modalidad',
    inputLabel: 'Modalidad del curso',
    isRequired: true,
    defaultValue: 'Online - En vivo',
    type: 'text',
    id: 6,
    nroOrden: 8,
    width: '45%',
  },

  {
    nombre: 'Editar/Ocultar',
    inputLabel: 'Programa de estudio',
    helpText: 'Este es un ejemplo autogenerado',
    type: 'text',
    id: 13,
    children: [],
    nroOrden: 15,
    width: '45%',
  },
];