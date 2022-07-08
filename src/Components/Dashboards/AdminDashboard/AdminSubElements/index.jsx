import styled from 'styled-components';
import AdminInicio from '../AdminInicio';
import { useContext, useState, useEffect } from 'react';
import { projectContext } from '../../../../Context/ProjectContext';
import Loader from '../../../Shared/Loader';
import CursosAdmin from '../CursosAdmin';
import CategoriasAdmin from '../CategoriasAdmin';
import { useLocation } from 'react-router-dom';
import NewElementContainer from '../../../../Containers/NewElementContainer';
import EditElementContainer from '../../../../Containers/EditElementContainer';
import { CATEGORYFIELDS } from '../../../../Constants/Category/index.js';
import { CURSOSCFIELDS } from '../../../../Constants/Cursos/index.js';
import ComisionesAdmin from '../ComisionesAdmin';
import { COMISIONESFIELDS } from '../../../../Constants/Comisions';
import UsuariosAdmin from '../UsuariosAdmin';

const AdminSubElements = ({ selectedTab, handleClick }) => {
  const { courseCompleteList, categories, nextCourses, usuariosList } =
    useContext(projectContext);
  const [pending, setPending] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (courseCompleteList.length > 0 && categories.length > 0) {
      // const courseResult = course.find((elem) => elem.href === name)
      // setSelectedCourse(courseResult)
      setPending(false);
    }
  }, [courseCompleteList, categories]);

  function getSelectedTab() {
    switch (selectedTab) {
      case 'Inicio':
        return <AdminInicio handleClick={handleClick} />;
      case 'Cursos':
        return (
          <>
            {location.pathname.includes('new/curso') ? (
              <NewElementContainer
                fieldsList={CURSOSCFIELDS}
                type="Nuevo Curso"
                selectOptions={categories}
              />
            ) : location.pathname.includes('admin/edit/') ? (
              <EditElementContainer
                fieldsList={CURSOSCFIELDS}
                title="Editar Curso"
                type="Curso"
                selectOptions={categories}
              />
            ) : (
              <CursosAdmin cursos={courseCompleteList} />
            )}
          </>
        );

      case 'Categorias':
        return (
          <>
            {location.pathname.includes('new/categoria') ? (
              <NewElementContainer
                fieldsList={CATEGORYFIELDS}
                type="Nueva Categoria"
              />
            ) : location.pathname.includes('admin/edit/') ? (
              <EditElementContainer
                fieldsList={CATEGORYFIELDS}
                title="Editar Categoria"
                type="Categoria"
              />
            ) : (
              <>
                <CategoriasAdmin categorias={categories} />
              </>
            )}
          </>
        );
      case 'Comisiones':
        return (
          <>
            {location.pathname.includes('new/comision') ? (
              <NewElementContainer
                fieldsList={COMISIONESFIELDS}
                type="Nueva Comision"
              />
            ) : location.pathname.includes('admin/edit/') ? (
              <EditElementContainer
                fieldsList={COMISIONESFIELDS}
                title="Editar Comision"
                type="Comision"
              />
            ) : (
              <>
                <ComisionesAdmin comisiones={nextCourses} />;
              </>
            )}
          </>
        );
      case 'Usuarios':
        return <UsuariosAdmin usuariosList={usuariosList} />;

      default:
        return <AdminInicio handleClick={handleClick} />;
    }
  }

  if (pending) {
    return <Loader />;
  }

  return <AdminSubElementsContent>{getSelectedTab()}</AdminSubElementsContent>;
};

const AdminSubElementsContent = styled.div`
  float: left;
  min-height: 80vh !important;
  width: 80%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;

export default AdminSubElements;