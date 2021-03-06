import EnviaBttn from '../../Buttons/EnviaBttn';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import theme from '../../../../Theme/base';
import { useIsMobile } from '../../../../Hooks/Client';
import { VscClose } from 'react-icons/vsc';
import '../ModalStyles/ModalStyles.css';

const IcaroInCompanyModal = ({ modalIsOpen, closeModal }) => {
  const mobile = useIsMobile();

  function handleSubmit(e) {
    e.preventDefault();
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
      width: '800px',
      padding: '20px 40px',
      borderRadius: '0px 0px 15px 15px',
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
      closeTimeoutMS={500}
      style={mobile ? customMobileStyles : customStyles}
    >
      <CloseButton onClick={closeModal}>
        <VscClose size={20} />
      </CloseButton>
      <div>
        <Title mobile={mobile}>ICARO IN COMPANY</Title>
        <Parragraph mobile={mobile}>
          Escríbemos y nos contactaremos para brindarte toda la información que
          necesites
        </Parragraph>
      </div>

      <StyledForm mobile={mobile}>
        <FormLabel mobile={mobile} htmlFor="fullname">
          Nombre
          <FormInput id="fullname" name="fullname" type="text" />
        </FormLabel>
        <FormLabel mobile={mobile} htmlFor="telefono">
          Teléfono
          <FormInput id="telefono" name="telefono" type="number" />
        </FormLabel>
        <FormLabel mobile={mobile} htmlFor="represents">
          Institución que representa
          <FormInput id="represents" name="represents" type="text" />
        </FormLabel>
        <FormLabel mobile={mobile} htmlFor="lastName">
          Apellido
          <FormInput id="lastName" name="lastName" type="text" />
        </FormLabel>
        <FormLabel mobile={mobile} htmlFor="correo-electronico">
          Correo Electrónico
          <FormInput
            id="correo-electronico"
            name="correo-electronico"
            type="text"
          />
        </FormLabel>
        <FormLabel mobile={mobile} htmlFor="position">
          Puesto
          <FormInput id="position" name="position" type="text" />
        </FormLabel>
        <FormLabel mobile={mobile} htmlFor="trainingNeeds" extraWidth>
          ¿Cuáles son sus necesidades de capacitación?
          <FormInput id="trainingNeeds" name="trainingNeeds" type="text" />
        </FormLabel>
        <EnviaBttn
          fontFamily="Montserrat, sans-serif"
          fontSize="1.18rem"
          width={mobile ? '100%' : '58%'}
          margin={mobile ? '60px 0 0 0' : '20px 21%'}
          padding="16px"
          backgroundColor={theme.color.darkBlue}
          onClick={(e) => handleSubmit(e)}
        />
      </StyledForm>
    </ReactModal>
  );
};

const Title = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #1744ff;
  width: ${({ mobile }) => (mobile ? '100%' : '60%')};
  margin: auto;
`;
const CloseButton = styled.div`
  background: transparent;
  border: unset;
  font-size: 20px;
  cursor: pointer;
  text-align: right;
  margin-top: 10px;
`;

const Parragraph = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: ${({ mobile }) => (mobile ? '0.87rem' : '1rem')};
  width: ${({ mobile }) => (mobile ? '100%' : '60%')};
  line-height: 19.5px;
  text-align: center;
  margin: 20px auto;
  color: #3d3d3d;
`;
const StyledForm = styled.form`
  /* width: 95%; */
  margin: 0 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

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
      border-bottom: 2px solid ${theme.color.darkBlue};
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
  width: ${({ mobile, extraWidth }) =>
    extraWidth ? '100%' : mobile ? '100%' : '45%'};
  display: block;
  font-family: ${theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${({ mobile }) => (mobile ? '0.87rem' : '1rem')};
  line-height: 24px;
  color: ${theme.color.grey};
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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
    border-bottom: 2px solid ${theme.color.darkBlue};
    outline: none;
    border-radius: 0;
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
export default IcaroInCompanyModal;
