export const CURSOSCFIELDS = [
	{ nombre: "CategoriaID", type: "text", id: 1 },
	{ nombre: "PDF", type: "text", id: 2 },
	{ nombre: "categoria", type: "text", id: 3 },
	{
		nombre: "detalles",
		children: [
			{ nombre: "clasesSemanales", type: "text", id: 4 },
			{ nombre: "descripcion", type: "text", id: 5 },
			{ nombre: "duracionClase", type: "text", id: 6 },
			{ nombre: "duracionTotal", type: "text", id: 7 },
			{ nombre: "modalidad", type: "text", id: 8 },
			{ nombre: "requisitos", type: "text", id: 9 },
		],
	},
	{ nombre: "href", type: "text", id: 10 },
	{ nombre: "nombre", type: "text", id: 11 },
	{
		nombre: "planDeEstudioContent",
		type: "text",
		id: 12,
		children: [],
	},
]
