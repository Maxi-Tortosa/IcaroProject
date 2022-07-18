import { Link } from 'react-router-dom';
import ConfirmationModal from '../../../Shared/Modals/ConfirmationModal';
import HideIcon from '../../../Shared/Icons/HideIcon';
import ShowIcon from '../../../Shared/Icons/ShowIcon';
import EditIcon from '../../../Shared/Icons/EditIcon';
import styled from 'styled-components';
import theme from '../../../../Theme/base';
import { USUARIOSROWS } from '../../../../Constants/Usuarios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { successToast, errorToast } from '../../../Shared/Toasts/ToastList';
import ToastListContainer from '../../../Shared/Toasts/ToastListContainer';
import Spacer from '../../../Shared/Spacer';

const ConsultasAdmin = ({ consultasList }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState();
  const navigate = useNavigate();

  const [list, setList] = useState([]);

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

  function openDeleteModal(selected) {
    setSelectedCourse(selected);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleClick() {
    navigate('/admin/new/usuario', { replace: false });
  }

  function handleDelete() {
    showToast('success', 'Se ha ocultado el elemento');
  }

  return (
    <div>
      <TitleContainer>
        <Title>Listado de Consultas</Title>
        <Spacer height={70} />
        {/* <NewCourseButton onClick={handleClick}>+ Nuevo Usuario</NewCourseButton> */}
      </TitleContainer>
      <TableContent>
        <TableHeader>
          {USUARIOSROWS.map((elem) => (
            <TableColumn key={elem.id} isHeader>
              {elem.nombre}
            </TableColumn>
          ))}
        </TableHeader>

        {/* {consultasList.map((el, index) => {
          return (
            <TableRow key={el.href} isHidden={el.isHidden}>
              <TableColumn>{index + 1}</TableColumn>
              <TableColumn>{el.name}</TableColumn>
              <TableColumn>{el.lastname}</TableColumn>
              <TableColumn>{el.email}</TableColumn>
              <TableColumn>{el.dni}</TableColumn>
              <TableColumn isEditDelete>
                <EditContainer to={`/admin/edit/${el.dni}`}>
                  <EditIcon />
                </EditContainer>
                <div onClick={(e) => openDeleteModal(el)}>
                  {el.isHidden ? <ShowIcon /> : <HideIcon />}
                </div>
              </TableColumn>
            </TableRow>
          );
        })} */}
      </TableContent>
      <ConfirmationModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalTitle="Ocultar curso"
        cancelButtonContent="Cancelar"
        confirmButtonContent="Ocultar"
        confirmButtonSubmit={handleDelete}
        withCloseButton
        mainColor={theme.color.redError}
      >
        <ModalContent>
          <p>¿Confirma que desea ocultar el siguiente usuario?</p>
          <b>{selectedCourse?.nombre}</b>
        </ModalContent>
      </ConfirmationModal>
      <ToastListContainer
        toastlist={list}
        position="buttom-right"
        setList={setList}
      />
      <Spacer height={100} />
    </div>
  );
};

const TitleContainer = styled.div`
  display: flex;
  width: 85%;
  margin: auto;
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
  background-color: ${({ bgcolor }) => bgcolor && theme.categories[bgcolor]};
  color: ${({ bgcolor }) => bgcolor && theme.color.white};
  ${({ isEditDelete }) =>
    isEditDelete && 'display: flex; justify-content: space-evenly'};
  text-align: center;
`;
const EditContainer = styled(Link)`
  text-decoration: none;
  color: ${theme.color.darkGrey};
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

export default ConsultasAdmin;
