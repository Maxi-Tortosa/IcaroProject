export const SIDEMENUCATEGORIES = [
  { menuName: 'Inicio', url: '/admin', sideLinks: 'Inicio' },
  {
    menuName: 'Cursos',
    url: '/admin/cursos',
    actions: [
      { name: 'Ver Cursos', url: '/admin/cursos' },
      { name: 'Crear Curso', url: '/admin/new/curso' },
    ],
  },
  {
    menuName: 'Categorias',
    url: '/admin/categorias',
    actions: [
      { name: 'Ver Categorias', url: '/admin/categorias' },
      { name: 'Crear Categoria', url: '/admin/new/categoria' },
    ],
  },
  {
    menuName: 'Comisiones',
    url: '/admin/comisiones',
    sideLinks: 'Comisiones',
    actions: [
      { name: 'Ver Comisiones', url: '/admin/comisiones' },
      { name: 'Crear Comision', url: '/admin/new/comision' },
    ],
  },
  {
    menuName: 'Usuarios',
    url: '/admin/usuarios',
    actions: [{ name: 'Ver Usuarios', url: '/admin/usuarios' }],
  },
  {
    menuName: 'Solicitudes',
    url: '/admin/solicitudes',
  },
  {
    menuName: 'Inscripciones',
    url: '/admin/inscripciones',
  },
  { menuName: 'Consultas', url: '/admin/consultas' },
];

export const ADMINMENULINKS = [
  {
    menuName: 'Mi Perfil',
    url: '/admin/perfil',
    icon: 'user',
  },
  {
    menuName: 'Salir',
    url: '/admin/',
    icon: 'logout',
  },
];