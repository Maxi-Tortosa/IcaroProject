import { BiHide } from 'react-icons/bi';
import styled from 'styled-components';
import theme from '../../../../Theme/base';

const HideIcon = ({ props }) => {
  return (
    <Container {...props}>
      <BiHide size={30} className="delete" />
    </Container>
  );
};

const Container = styled.div`
  .delete {
    :hover {
      color: ${theme.color.disabledBlue};
    }
  }
`;
export default HideIcon;
