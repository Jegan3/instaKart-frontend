/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faHome, faUser, faBuilding, faTag, faFolderPlus, faUserTag, faNetworkWired, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { history } from '../../routes';
import Overlay from '../../components/Overlay';


const store = [
  {
    id: '1',
    name: 'Store 1'
  },
  {
    id: '2',
    name: 'Store 2'

  },
  {
    id: '3',
    name: 'Store 3'
  },
]

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebarState);
  const validLogin = useSelector((state) => state.loginState.login);

  const admin = (validLogin && validLogin.user.type === 'admin') || sessionStorage.type === 'admin';

  useEffect(() => {
    setToggled(sidebar.show);
  }, [sidebar.show]);

  const onToggle = () => {
    setOpen(!open);
  };

  const toggleSidebar = () => {
    setToggled(false);
    dispatch({ type: 'HIDE_SIDEBAR' });
  };

  const toHome = () => {
    history.push({ pathname: '/' });
  };

  // const onModal = () => {
  //   setModal(true)
  // }

  const onHide = () => {
    setModal(false)
  }

  const addNewStore = () => {
    setModal(true)
  }

  return (
    <div className="sidemenu-main">
      <Overlay show={modal} onHide={onHide} title="ADD STORE"/>
      <ProSidebar
        collapsed={open}
        image="../images/caribbean1.png"
        toggled={toggled}
        breakPoint="md"
        width={275}
        collapsedWidth={50}
        onToggle={toggleSidebar}
      >
        <SidebarHeader>
          <div className="sidemenu-header">
            {!open ? (
              <img
                className="sidebar-instalogo"
                src="../images/logo.png"
                alt="INSTAKART"
                onClick={toHome}
              />
            ) : null}
            <div className="hamburger-bars-icon hidden-xs" onClick={onToggle}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </SidebarHeader>
        {admin ? <SidebarContent>
          <Menu iconShape>
            <MenuItem icon={<FontAwesomeIcon icon={faHome} active />}>
              Vendor <Link to="/dashboard" />
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faHome} active />}>
              User <Link />
            </MenuItem>
          </Menu>
        </SidebarContent> :
          <SidebarContent>
            <Menu iconShape>
              <MenuItem icon={<FontAwesomeIcon icon={faUserAlt} />}>My Profile <Link to="/myprofile" /></MenuItem>
              <SubMenu title="Thrift Store" icon={<FontAwesomeIcon icon={faNetworkWired} />}>
                {store.map((info) => <div><MenuItem>
                  {info.name} <Link to="/thriftstorevendor" />
                </MenuItem>
                  {/* <MenuItem >
                    Add Product <Link to="/addproduct" />
                  </MenuItem>
                  <MenuItem >
                    Product List <Link to="/productlist" />
                  </MenuItem> */}
                  </div> )}
                {/* <MenuItem onClick={addNewStore}>
                  Add store
                </MenuItem> */}
              </SubMenu>
              {/* <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>Customer Review</MenuItem> */}
              <SubMenu title="Request" icon={<FontAwesomeIcon icon={faNetworkWired} />}>
              <MenuItem onClick={addNewStore}>Add Store</MenuItem>
              </SubMenu>
              <MenuItem icon={<FontAwesomeIcon icon={faCog} />}>Report</MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faTag} />}>Support</MenuItem>
            </Menu>
          </SidebarContent>}
        <SidebarFooter className="sidebar-footer">
          &copy; Copyright 2021 - Insta-Kart. All rights reserved.
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
