import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import theme from '../../Theme/base';
import { useParams, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import TextareaAutosize from 'react-textarea-autosize';
import BlueButton from '../../Components/Shared/Buttons/BlueButton';
import LinearBttn from '../../Components/Shared/Buttons/LinearBttn';
import { normalizeSelectOptions, sortArrayByOrderNumber } from '../../Utils';
import Spacer from '../../Components/Shared/Spacer';
import { projectContext } from '../../Context/ProjectContext';
import Loader from '../../Components/Shared/Loader';
import { VscClose } from 'react-icons/vsc';

const EditElementContainer = ({ fieldsList, type, title, selectOptions }) => {
  const { editElement } = useParams();
  const [disabledButton, setDisabledButton] = useState(true);
  const [newData, setNewData] = useState({});
  const navigate = useNavigate();
  const [pending, setPending] = useState(true);

  const { course, categories, nextCourses } = useContext(projectContext);
  const [selectedEditElement, setSelectedEditElement] = useState('');
  // console.log(type);

  useEffect(() => {
    if (course.length > 0 && categories.length > 0) {
      const elemResult =
        course.find((elem) => elem.href === editElement) ||
        categories.find((elem) => elem.CategoriaID === editElement) ||
        nextCourses.find((elem) => elem.comisionId === editElement);
      setSelectedEditElement(elemResult);
      // console.log(elemResult);
      setPending(false);
    }
  }, [course, categories, editElement, nextCourses]);

  sortArrayByOrderNumber(fieldsList);
  const categoriesOptions = normalizeSelectOptions(selectOptions);

  useEffect(() => {
    console.log(Object.values(newData).length > 1);
    Object.values(newData).length > 0
      ? setDisabledButton(false)
      : setDisabledButton(true);
  }, [newData, fieldsList]);

  function handleClose() {
    setNewData({});
    navigate('/admin/', { replace: true });
  }

  function handleChange(name, value) {
    setNewData((newData) => ({ ...newData, [name]: value }));
    console.log(newData);
  }

  function getElementType(inputType, elem) {
    switch (inputType) {
      case 'select':
        return (
          <SelectContainer hasExtraMargin={!elem.helpText}>
            <Select
              options={categoriesOptions}
              onChange={(value) => handleChange(elem.nombre, value.name)}
              placeholder="Seleccione categoria"
            />
          </SelectContainer>
        );
      case 'file':
        return (
          <>
            <FileInput id="inputFile" name="file" type="file" />
            <Label htmlFor="inputFile" hasExtraMargin={!elem.helpText}>
              <span>Seleccionar archivo</span>
              <span>{'Límite 2 mb'}</span>
            </Label>
          </>
        );
      case 'textarea':
        return (
          <TextareaAutosize
            onChange={(e) => handleChange(elem.nombre, e.target.value)}
            minRows={3}
            placeholder={elem.helpText}
            className="styled-text-area"
            defaultValue={selectedEditElement[elem.nombre]}
          />
        );
      default:
        return (
          <FormInput
            hasExtraMargin={!elem.helpText}
            withBorder={elem.type === 'text' || elem.type === 'number'}
            type={elem.type}
            onChange={(e) => handleChange(elem.nombre, e.target.value)}
            disabled={elem.isDisabled}
            defaultValue={selectedEditElement[elem.nombre]}
          />
        );
    }
  }

  // function getDefaultValue(nombre) {
  //   if (nombre === 'href') {
  //     // setNewData((newData) => ({ ...newData, [nombre]: getAuthomaticPath() }))
  //     return getAuthomaticPath(nombre);
  //   } else if (nombre === 'CategoriaID') {
  //     // setNewData((newData) => ({ ...newData, [nombre]: getCategoryID() }))
  //     return getCategoryID();
  //   } else return '';
  // }

  // function getCategoryID() {
  //   if (newData?.categoria?.length > 3) {
  //     const selectedCategoria = selectOptions.filter(
  //       (elem) => elem.Nombre === newData.categoria
  //     );
  //     return selectedCategoria[0].CategoriaID;
  //   }
  // }

  // function getAuthomaticPath(nombre) {
  //   if (newData?.nombre?.length > 3) {
  //     const generatedPath = newData.nombre.toLowerCase().replaceAll(' ', '-');
  //     // setNewData((newData) => ({ ...newData, [nombre]: generatedPath }))
  //     return generatedPath;
  //   }
  // }

  function handleSubmit(e) {
    // console.log("se hizo submit")
    e.preventDefault();
    if (disabledButton) return;
    if (newData) {
      // setLoading(true)
      console.log('aca submit lo nuevo', newData);
      // showToast("success")
    } else {
      // showToast("danger")
    }
    handleClose();
  }

  if (pending || !selectedEditElement) return <Loader />;

  return (
    <NewElementMainContainer>
      <HeaderTitle>
        <Title>
          {title}{' '}
          {selectedEditElement['Nombre'] || selectedEditElement['nombre']}
        </Title>

        <CloseButton onClick={handleClose}>
          <VscClose size={20} />
        </CloseButton>
      </HeaderTitle>
      <StyledForm>
        {fieldsList.map((elem, index, array) => (
          <FormLabel key={elem.id} htmlFor={elem.nombre} elemWidth={elem.width}>
            <>
              {elem.nroOrden}. {elem.inputLabel}
              {elem.isRequired && (
                <RequiredText>* Campo obligatorio</RequiredText>
              )}
              {elem.helpText && elem.type !== 'textarea' && (
                <Small>{elem.helpText}</Small>
              )}
              {getElementType(elem.type, elem)}
            </>
          </FormLabel>
        ))}
      </StyledForm>
      <SubmitContainer>
        <LinearBttn type="cancel" onClick={handleClose}>
          Cancelar
        </LinearBttn>
        <BlueButton
          width="100%"
          borderRadius="10px"
          padding="5px 13px"
          backgroundColor={
            disabledButton ? theme.color.disabledBlue : theme.color.darkBlue
          }
          type="submit"
          disabled={disabledButton}
          onClick={(e) => handleSubmit(e)}
        >
          Guardar
        </BlueButton>
      </SubmitContainer>
      <Spacer height={100} />
    </NewElementMainContainer>
  );
};

const NewElementMainContainer = styled.div`
  padding: 20px;
`;
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
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
const SelectContainer = styled.div`
  margin-top: ${({ hasExtraMargin }) => (hasExtraMargin ? '26px' : 0)};
`;

const Small = styled.p`
  display: block;
  font-family: ${theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.color.grey};
  text-transform: none;
  margin: 5px 0;
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

const FileInput = styled.input`
  display: none;
`;

const Label = styled.label`
  margin-top: ${({ hasExtraMargin }) => (hasExtraMargin ? '26px' : 0)};
  align-self: center;
  display: flex;
  align-items: center;
  background-color: ${theme.color.white};
  cursor: pointer;
  text-align: start;
  padding: 0;
  font-family: ${theme.fontFamily.primary};
  font-size: ${({ mobile }) => (mobile ? null : '1rem')};
  font-weight: ${({ mobile }) => (mobile ? null : '400')};
  line-height: ${({ mobile }) => (mobile ? null : '1.25rem')};

  span:nth-child(1) {
    color: ${theme.color.darkGrey};
    width: 45%;
    text-align: center;
    background-color: #e5e5e5;
    padding: 0.5rem 0;
    border: ${({ mobile }) => (mobile ? null : '1px solid  #E5E5E5')};
  }
  span:nth-child(2) {
    font-size: 0.9rem;
    text-align: center;
    width: 55%;
    padding: 0.5rem;
    flex: 1;
    border: ${({ mobile }) => (mobile ? null : '1px solid  #E5E5E5')};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
  }
`;


export default EditElementContainer;
