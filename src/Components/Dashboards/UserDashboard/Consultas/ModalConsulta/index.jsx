import EnviaBttn from '../../../../Shared/Buttons/EnviaBttn';
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import theme from '../../../../../Theme/base';
import { useIsMobile } from '../../../../../Hooks/Client';

const ModalConsulta = ({ setModalOpen }) => {
  const mobile = useIsMobile();
  return (
    <MainContainer>
      <ModalContainer>
        <HeaderTitle>
          <CloseButton onClick={() => setModalOpen(false)}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/mobile%2FContactModalCloseIcon.png?alt=media&token=edf0e5a3-1f0b-4ecd-a8af-004593804807"
              alt="Cerrar formulario de contacto"
            />
          </CloseButton>
          <Title>Nueva Consulta</Title>

          <Parragraph mobile={mobile}>
            Escríbenos y nos contactaremos para brindarte toda la información
            que necesites.
          </Parragraph>
        </HeaderTitle>

        <StyledForm mobile={mobile}>
          <FormLabel mobile={mobile} htmlFor="reason">
            Motivo
            <FormInput id="reason" name="reason" type="text" />
          </FormLabel>
          <FormLabel mobile={mobile} htmlFor="question">
            Mensaje
            <TextareaAutosize
              name="question"
              minRows={10}
              className="styled-text-area"
            />
          </FormLabel>
          <EnviaBttn
            fontFamily="Montserrat, sans-serif"
            fontSize="1.18rem"
            width={mobile ? '100%' : '58%'}
            margin={mobile ? '60px 0 0 0' : '20px 21%'}
            padding="16px"
            backgroundColor={theme.color.darkBlue}
            onClick={() => null}
          />
        </StyledForm>
      </ModalContainer>
    </MainContainer>
  );
};

export default ModalConsulta;

const MainContainer = styled.div`
  position: fixed;
  z-index: ${theme.zIndex.modals};
  height: 100%;
  width: 100%;
  background-color: #00000080;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const ModalContainer = styled.div`
  margin: 5% 0 0 0;
  width: 35rem;
  height: 66%;
  padding: 2rem 0;
  background: white;
  border-radius: 0 0 10px 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
`;

const Title = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin: 1rem 0 0 0;
  color: #1744ff;
`;
const CloseButton = styled.div`
  align-self: flex-end;
  background: transparent;
  border: unset;
  font-size: 20px;
  cursor: pointer;
`;

const Parragraph = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: ${({ mobile }) => (mobile ? '0.87rem' : '1rem')};
  width: ${({ mobile }) => (mobile ? '75%' : null)};
  line-height: 19.5px;
  text-align: center;
  margin: 20px auto;
  color: #3d3d3d;
  width: 90%;
`;

const StyledForm = styled.form`
  width: 90%;
  margin: auto;

  .styled-text-area {
    display: block;
    width: 100%;
    height: 35px !important;
    border: 1px solid #e6e6e6;
    resize: none;
    margin-top: 20px;
    padding: 0;
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
      color: ${theme.color.lightGrey};
      margin: 10px 0px;
    }

    :focus {
      font-family: ${theme.fontFamily.primary};
      border: 1px solid ${theme.color.darkBlue};
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
  color: ${theme.color.lightGrey};
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
    border: 1px solid ${theme.color.darkBlue};
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
