import BlueButton from '../../Buttons/BlueButton';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import theme from '../../../../Theme/base';
import { useIsMobile } from '../../../../Hooks/Client';
import { VscClose } from 'react-icons/vsc';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import '../ModalStyles/ModalStyles.css';
import LinearBttn from '../../Buttons/LinearBttn';

const InscribirmeModal = ({
  modalIsOpen,
  closeModal,
  cursoInteres,
  comision,
}) => {
  const mobile = useIsMobile();

  function handleSubmit(e) {
    // e.preventDefault();
    console.log('submit');
    closeModal();
  }

  const customStyles = {
    overlay: { position: 'fixed', zIndex: `${theme.zIndex.modals}` },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '700px',
      padding: '40px',
    },
  };

  const customMobileStyles = {
    overlay: { position: 'fixed', zIndex: `${theme.zIndex.modals}` },

    content: {
      width: '85%',
      height: '92%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      padding: '7.5%',
      border: 'none',
      borderRadius: '0px',
    },
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={mobile ? customMobileStyles : customStyles}
    >
      <HeaderTitle>
        <Title>¡Completa tu inscripción!</Title>
        <CloseButton onClick={closeModal}>
          <VscClose size={20} />
        </CloseButton>
      </HeaderTitle>
      <Parragraph mobile={mobile} bold>
        Curso: {cursoInteres.nombre}
      </Parragraph>
      <Parragraph mobile={mobile}>
        Precio: ${comision?.precioComision}
      </Parragraph>

      <BlueButton
        fontFamily="Montserrat, sans-serif"
        fontSize="1.18rem"
        width={mobile ? '100%' : '58%'}
        margin={mobile ? '60px 0 0 0' : '20px 21%'}
        padding="16px"
        backgroundColor={theme.color.darkBlue}
        onClick={(e) => handleSubmit(e)}
      >
        Pagar Inscripcion
      </BlueButton>
      <Parragraph mobile={mobile}>
        <InfoIcon size={20} />
        Residentes fuera de Argentina solicitar cupón de pago al siguiente link
      </Parragraph>

      <LinearBttn
        fontFamily="Montserrat, sans-serif"
        fontSize="1.18rem"
        width={mobile ? '100%' : '58%'}
        margin={mobile ? '60px 0 0 0' : '20px 21%'}
        padding="16px"
        backgroundColor={theme.color.darkBlue}
        onClick={(e) => handleSubmit(e)}
      >
        Solicitar cupon para extranjeros
      </LinearBttn>
    </ReactModal>
  );
};
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Title = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 90%;
  color: #1744ff;
`;
const CloseButton = styled.div`
  background: transparent;
  border: unset;
  font-size: 20px;
  cursor: pointer;
`;

const Parragraph = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? 800 : 400)};
  font-size: ${({ mobile }) => (mobile ? '0.87rem' : '1rem')};
  width: ${({ mobile }) => (mobile ? '75%' : null)};
  line-height: 19.5px;
  text-align: center;
  margin: 20px auto;
  color: #3d3d3d;
`;

const InfoIcon = styled(AiOutlineInfoCircle)`
  margin-bottom: -3px;
  margin-right: 5px;
`;

const StyledForm = styled.form`
  width: 90%;
  margin: auto;

  .styled-text-area {
    display: block;
    width: 100%;
    height: 35px !important;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    resize: none;
    margin-top: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    font-family: ${theme.fontFamily.primary};

    ::placeholder {
      display: block;
      font-family: ${theme.fontFamily.primary};
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: ${theme.color.grey};
      margin: 10px 0px;
    }

    :focus {
      font-family: ${theme.fontFamily.primary};
      border: 2px solid ${theme.color.darkBlue};
      outline: none;
      border-radius: 5px;
      font-size: 1rem;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const FormLabel = styled.label`
  display: block;
  font-family: ${theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${({ mobile }) => (mobile ? '0.87rem' : '1rem')};
  line-height: 24px;
  color: ${theme.color.grey};
  margin: 10px 0px;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  font-family: ${theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  :focus {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    border: 2px solid ${theme.color.darkBlue};
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
    font-family: ${theme.fontFamily.primary};
  }

  ::placeholder {
    display: block;
    font-family: ${theme.fontFamily.primary};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${theme.color.grey};
    margin: 10px 0px;
  }
`;
export default InscribirmeModal;
