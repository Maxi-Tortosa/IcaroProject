import styled from 'styled-components';
import { ADMINMENULINKS } from '../../../../Constants/AdminDashboard';
import theme from '../../../../Theme/base';
import Divider from '../../../Shared/Divider';
import Spacer from '../../../Shared/Spacer';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminMenu = () => {
  const navigate = useNavigate();

  function handleClick(url) {
    navigate(url, { replace: true });
  }

  return (
    <AdminMenuContainer>
      {ADMINMENULINKS.map((elem, index) => {
        return (
          <>
            <LinksContainer onClick={(e) => handleClick(elem.url)}>
              <Spacer height={10} />
              <MenuButton>{elem.menuName}</MenuButton>
              <Spacer height={10} />
            </LinksContainer>
            {index === 0 && <Divider />}
          </>
        );
      })}
    </AdminMenuContainer>
  );
};

const AdminMenuContainer = styled.div`
  /* position: relative; */
  position: absolute;
  top: 70px;
  left: 860px;
  background-color: ${theme.color.white};
  /* background-color: red; */
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  /* height: 200px; */
  width: 200px;
  z-index: ${theme.zIndex.modals};
  padding: 20px 0;
`;

const LinksContainer = styled.div`
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    background-color: ${theme.color.lightGrey};
  }
`;
const MenuButton = styled.button`
  text-decoration: none;
  border: none;
  outline: none;
  background-color: transparent;
  font-family: ${theme.fontFamily.primary};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.lightGrey};
  }
`;

export default AdminMenu;
