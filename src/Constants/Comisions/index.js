export const COMISIONESFIELDS = [
  {
    nombre: 'nombreCurso',
    inputLabel: 'Curso',
    isRequired: true,
    type: 'select',
    id: 1,
    nroOrden: 1,
    width: '45%',
  },
    {
      nombre: 'fechaInicio',
      inputLabel: 'Fecha de Inicio',
      isRequired: true,
      type: 'date',
      id: 2,
      nroOrden: 2,
      width: '45%',
    },
    {
      nombre: 'fechaFin',
      inputLabel: 'Fecha de fin',
      isRequired: true,
      type: 'date',
      id: 3,
      nroOrden: 3,
      width: '45%',
    },
    {
      nombre: 'precioComision',
      inputLabel: 'Precio Total',
      isRequired: true,
      type: 'number',
      id: 4,
      nroOrden: 4,
      width: '45%',
    },
  
  ];
  
  export const COMISIONESROWS = [
    {
      nombre: 'Id',
    },
    {
      nombre: 'nombreCurso',
      inputLabel: 'Curso',
      isRequired: true,
      defaultValue: 'Online - En vivo',
      type: 'text',
      id: 6,
      nroOrden: 8,
      width: '45%',
    },
    {
      nombre: 'fechaInicio',
      inputLabel: 'Fecha de Inicio',
      isRequired: true,
      type: 'text',
      id: 11,
      nroOrden: 2,
      width: '45%',
    },
    {
      nombre: 'fechaFin',
      inputLabel: 'Fecha de Fin',
      isRequired: true,
      type: 'select',
      id: 3,
      nroOrden: 3,
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
  