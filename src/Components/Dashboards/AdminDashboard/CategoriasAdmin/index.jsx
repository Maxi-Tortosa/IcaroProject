import { useState } from 'react';
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import db from '../../../../Firebase/index';
import styled from 'styled-components';
import theme from '../../../../Theme/base';
import EditIcon from '../../../Shared/Icons/EditIcon';
import HideIcon from '../../../Shared/Icons/HideIcon';
import { CATEGORYROWS } from '../../../../Constants/Category/index.js';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../Shared/Modals/ConfirmationModal';
import { successToast, errorToast } from '../../../Shared/Toasts/ToastList';
import ToastListContainer from '../../../Shared/Toasts/ToastListContainer';
import ShowIcon from '../../../Shared/Icons/ShowIcon';
import { useGetColors } from '../../../../Hooks/Client';

const CategoriasAdmin = ({ categorias }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  console.log('color!', useGetColors('dipYProgEsp'));

  function showToast(type, content) {
    let selectedToast = [];
    switch (type) {
      case 'success':
        selectedToast = successToast(content, list);
        break;
      case 'error':
        selectedToast = errorToast(content, list);
        break;
      default:
        break;
    }
    setList([...list, selectedToast]);
  }

  function openShowHideModal(selected) {
    setSelectedCategory(selected);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleClick() {
    navigate('/admin/new/categoria', { replace: false });
  }

  function handleEdit(elem) {
    navigate(`/admin/edit/${elem.CategoriaID}`, { replace: false });
  }

  function handleToggleShow() {
    const ref = doc(db, `CategoriasCursos`, selectedCategory.uuid);
    updateDoc(ref, { isHidden: !selectedCategory.isHidden });
    showToast('success', 'Se ha modificado el elemento');
  }

  return (
    <div>
      <TitleContainer>
        <Title>Listado de Categorias</Title>
        <NewCourseButton onClick={handleClick} className="nueva-categoria">
          + Nueva Categoria
        </NewCourseButton>
      </TitleContainer>
      <TableContent>
        <TableHeader>
          {CATEGORYROWS.map((elem) => (
            <TableColumn key={elem.id} isHeader>
              {elem.nombre}
            </TableColumn>
          ))}
        </TableHeader>

        {categorias.map((el, index) => {
          return (
            <TableRow key={index} isHidden={el.isHidden}>
              <TableColumn>{index + 1}</TableColumn>
              <TableColumn>{el.Nombre}</TableColumn>
              <TableColumn bgcolor={el.CategoriaID}>
                {theme.categories[el.CategoriaID]}
              </TableColumn>
              <TableColumn isEditDelete>
                <div onClick={(e) => handleEdit(el)}>
                  <EditIcon />
                </div>
                <div onClick={(e) => openShowHideModal(el)}>
                  {el.isHidden ? <ShowIcon /> : <HideIcon />}
                </div>
              </TableColumn>
            </TableRow>
          );
        })}
      </TableContent>
      <ConfirmationModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalTitle={
          selectedCategory?.isHidden ? 'Mostrar Categoria' : 'Ocultar Categoria'
        }
        cancelButtonContent="Cancelar"
        confirmButtonContent={
          selectedCategory?.isHidden ? 'Mostrar' : 'Ocultar'
        }
        confirmButtonSubmit={handleToggleShow}
        withCloseButton
        mainColor={theme.color.redError}
      >
        <ModalContent>
          <p>
            ¿Confirma que desea{' '}
            {selectedCategory?.isHidden ? 'mostrar' : 'ocultar'} la siguiente
            categoria?
          </p>
          <b>{selectedCategory?.Nombre}</b>
        </ModalContent>
      </ConfirmationModal>
      <ToastListContainer
        toastlist={list}
        position="buttom-right"
        setList={setList}
      />
    </div>
  );
};

const TitleContainer = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-family: ${({ mobile }) =>
    mobile ? null : `${theme.fontFamily.primary}`};
  margin: 0;
  font-weight: 700;
  font-size: ${({ mobile }) => (mobile ? null : '1.25rem')};
  line-height: 24px;
  color: #29343e;
`;

const NewCourseButton = styled.button`
  background-color: ${theme.color.darkBlue};
  color: ${theme.color.white};
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid ${theme.color.darkBlue};
  cursor: pointer;
  margin: 10px;
  font-family: ${theme.fontFamily.tertiary};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
`;

const TableContent = styled.div`
  /* width: 100%; */
  padding: 10px 20px;
`;
const TableHeader = styled.header`
  display: flex;
  gap: 10px;
  text-align: left;
  font-family: ${theme.fontFamily.tertiary};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.color.darkGrey};
`;
const TableRow = styled.div`
  display: flex;
  text-align: left;
  gap: 10px;
  padding: 10px 0;
  ${({ isHidden }) => isHidden && `background-color: #757575; `}

  :hover {
    background-color: ${({ isHidden }) => !isHidden && ' #f1f1f1'};
    cursor: pointer;
  }
`;
const TableColumn = styled.div`
  flex: 1;
  ${({ isHeader }) => !isHeader && `color: ${theme.color.grey};`}
  background-color: ${({ bgcolor }) => bgcolor && useGetColors(bgcolor)};
  color: ${({ bgcolor }) => bgcolor && theme.color.white};
  ${({ isEditDelete }) =>
    isEditDelete && 'display: flex; justify-content: space-evenly'};
  text-align: center;
`;

const ModalContent = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${theme.color.grey};
`;

export default CategoriasAdmin;
