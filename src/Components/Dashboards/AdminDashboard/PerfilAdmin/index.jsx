import { useState } from 'react';
import styled from 'styled-components';
import { SIDEMENUCATEGORIES } from '../../../../Constants/AdminDashboard';
import { ADMINPERFIL } from '../../../../Constants/Perfil';
import { useIsMobile } from '../../../../Hooks/Client';
import theme from '../../../../Theme/base';
import BlueButton from '../../../Shared/Buttons/BlueButton';
import LinearBttn from '../../../Shared/Buttons/LinearBttn';

const PerfilAdmin = ({ handleClick, toggleState }) => {
  const mobile = useIsMobile();

  return (
    <>
      <TitleContainer mobile={mobile}>
        <Title mobile={mobile}>Mi Perfil</Title>
      </TitleContainer>

      <PerfilContainer>
        <StyledForm>
          {ADMINPERFIL.map((elem, index) => {
            return (
              <FormLabel
                key={elem.id}
                htmlFor={elem.nombre}
                elemWidth={elem.width}
              >
                {index + 1}. {elem.inputLabel}
                {elem.isRequired && (
                  <RequiredText>* Campo obligatorio</RequiredText>
                )}
                <FormInput
                  hasExtraMargin={!elem.helpText}
                  withBorder={elem.type === 'text' || elem.type === 'number'}
                  type={elem.type}
                  //   onChange={(e) => handleChange(elem.nombre, e.target.value)}
                  //   defaultValue={
                  //     elem.defaultValue || getDefaultValue(elem.nombre)
                  //   }
                  disabled={elem.isDisabled}
                />
              </FormLabel>
            );
          })}
        </StyledForm>
        <SubmitContainer>
          <LinearBttn
            type="cancel"
            //   onClick={handleClose}
          >
            Cancelar
          </LinearBttn>
          <BlueButton
            width="100%"
            borderRadius="10px"
            padding="5px 13px"
            // backgroundColor={
            //   disabledButton ? theme.color.disabledBlue : theme.color.darkBlue
            // }
            type="submit"
            // disabled={disabledButton}
            // onClick={(e) => handleSubmit(e)}
          >
            Guardar
          </BlueButton>
        </SubmitContainer>
      </PerfilContainer>
    </>
  );
};

const PerfilContainer = styled.div`
  width: 90%;
  background: #ffffff;
  margin: auto;

  box-shadow: 0px 0px 10px #dadada;
  border-radius: 5px;
  margin-bottom: 1.3%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: ${({ mobile }) => (mobile ? null : 'flex')};
  flex-direction: ${({ mobile }) => (mobile ? null : 'row')};
  justify-content: ${({ mobile }) => (mobile ? null : 'space-between')};
  align-items: center;
  padding: 1.25rem 0 1.25rem 0;
  margin: 0 1.87rem;
`;
const Title = styled.h5`
  font-family: ${({ mobile }) =>
    mobile ? null : `${theme.fontFamily.primary}`};
  margin: 0;
  font-weight: 700;
  font-size: ${({ mobile }) => (mobile ? null : '1.25rem')};
  line-height: 24px;
  color: #29343e;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0 auto;

  .styled-text-area {
    display: block;
    width: 100%;
    height: 35px !important;
    border: 1px solid #e6e6e6;
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
  width: ${({ elemWidth }) => elemWidth};
  display: block;
  font-family: ${theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.color.grey};
  margin: 10px 0px;
  text-transform: capitalize;
`;

const RequiredText = styled.p`
  display: inline;
  font-family: ${theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.color.redError};
  margin: 10px 0px;
  text-transform: none;
  margin: 0 10px;
`;
const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  border: ${({ withBorder }) => withBorder && '1px solid #e6e6e6'};
  font-family: ${theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: ${({ hasExtraMargin }) => (hasExtraMargin ? '26px' : 0)};

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

const SubmitContainer = styled.div`
  width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export default PerfilAdmin;
