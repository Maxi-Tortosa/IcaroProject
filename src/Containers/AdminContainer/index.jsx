import { useState, useContext, useEffect } from 'react';
import { projectContext } from '../../Context/ProjectContext';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import AdminHeader from '../../Components/Dashboards/AdminDashboard/AdminHeader';
import Spacer from '../../Components/Shared/Spacer';
import AdminSidebar from '../../Components/Dashboards/AdminDashboard/AdminSideBar';
import AdminSubElements from '../../Components/Dashboards/AdminDashboard/AdminSubElements';
import { SIDEMENUCATEGORIES } from '../../Constants/AdminDashboard';

const AdminPage = () => {
  const { setIsAdmin } = useContext(projectContext);
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(SIDEMENUCATEGORIES[0]);
  const [toggleState, setToggleState] = useState(0);
  const navigate = useNavigate();

  function handleClick(index, nombre, currentUrl) {
    setToggleState(index);
    setSelectedTab(nombre);
    navigate(currentUrl, { replace: true });
  }

  useEffect(() => {
    setIsAdmin(location.pathname);
  }, []);

  return (
    <AdminContainer>
      <AdminHeader />
      <Spacer height={80} />
      <AdminContent>
        <AdminSidebar handleClick={handleClick} toggleState={toggleState} />
        <AdminSubElements selectedTab={selectedTab} handleClick={handleClick} />
      </AdminContent>
    </AdminContainer>
  );
};
const AdminContent = styled.div`
  display: flex;
`;

const AdminContainer = styled.div`
  .tabs-content {
    display: flex;
  }
  .tab {
    float: left;
    min-height: 80vh !important;
    width: 20%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  /* Style the buttons that are used to open the tab content */
  .tab button {
    display: block;
    background-color: inherit;
    color: black;
    padding: 22px 16px;
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
  }

  /* Change background color of buttons on hover */
  .tab button:hover {
    background: #f2f2f2;
  }

  /* Create an active/current "tab button" class */
  .tab button.active {
    background: #f2f2f2;
  }

  .tabs-content-container {
    width: 75%;
    display: block;
  }

  /* Style the tab content */
  .tabcontent {
    display: none;
    float: left;
    padding: 0px 12px;
    width: 100%;
    border-left: none;
    height: 100%;
  }

  .tabcontent.active {
    display: block;
  }
`;

export default AdminPage;
