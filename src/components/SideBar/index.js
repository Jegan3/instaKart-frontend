/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCog, faHome, faUser, faBath, faBuilding, faTag, faFolderPlus, faUserTag, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { history } from '../../routes';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [toggled, setToggled] = useState(false);

  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebarState);
  const validLogin = useSelector((state) => state.loginState.login);

  const admin = validLogin && validLogin.user.type === 'admin' || sessionStorage.type === 'admin'

  useEffect(() => {
    setToggled(sidebar.show);
  }, [sidebar.show]);

  const onToggle = () => {
    setOpen(!open);
  };

  const toggleSidebar = () => {
    setToggled(false);
    dispatch({ type: "HIDE_SIDEBAR" });
  };

  const toHome = () => {
    history.push({ pathname: '/' });
  }

  return (
    <div className="sidemenu-main">
      {/* <div className="sidemenu-background"> */}
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
                src="images/logo.png"
                alt="INSTAKART"
                onClick={toHome}
              />
            ) : null}
            <div className="hamburger-bars-icon hidden-xs" onClick={onToggle}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape>
            {admin ? <MenuItem icon={<FontAwesomeIcon icon={faHome} active={true} />}>
              Dashboard <Link to="/dashboard" />
            </MenuItem> :
              <SubMenu title="Thrift Store" icon={<FontAwesomeIcon icon={faNetworkWired} />}>
                <MenuItem icon={<FontAwesomeIcon icon={faUserTag} />}>
                  General Info <Link to="/generalinfo" />
                </MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faFolderPlus} />}>
                  Add Product <Link to="/addproduct" />
                </MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faBuilding} />}>
                  Product List <Link to="/productlist" />
                </MenuItem>
              </SubMenu>}
            {/* <SubMenu title="Product" icon={<FontAwesomeIcon icon={faBath} />}>
              <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>
                Add Product <Link to="/addproduct" />
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faBuilding} />}>
                Product List <Link to="/productlist" />
              </MenuItem>
            </SubMenu> */}
            <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>Customer Review</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faCog} />}>Report</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faTag} />}>Support</MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter className="sidebar-footer">
          &copy; Copyright 2021 - Insta-Kart. All rights reserved.
        </SidebarFooter>
      </ProSidebar>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
