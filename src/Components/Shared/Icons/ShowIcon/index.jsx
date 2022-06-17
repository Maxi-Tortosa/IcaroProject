import { BiShow } from 'react-icons/bi';
import styled from 'styled-components';
import theme from '../../../../Theme/base';

const ShowIcon = ({ props }) => {
  return (
    <Container {...props}>
      <BiShow size={30} className="delete" />
    </Container>
  );
};

const Container = styled.div`
  .delete {
    :hover {
      color: ${theme.color.white};
    }
  }
`;
export default ShowIcon;
