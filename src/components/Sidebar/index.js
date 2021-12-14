/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { faBars, faCog, faHome, faUser, faBuilding, faTag, faFolderPlus, faUserTag, faNetworkWired, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { history } from '../../routes';
import Overlay from '../../components/Overlay';

// const industry = [
//   {
//     industryId: '1',
//     industryName: 'Thrift',
//     store:[
//       {
//         storeId: '1',
//         storeName: 'Store 1'
//       },
//       {
//         storeId: '2',
//         storeName: 'Store 2'

//       }

//     ]
//   },
//   {
//     industryId: '2',
//     industryName: 'food',
//     store:[
//       {
//         storeId: '1',
//         storeName: 'Store 3'
//       },
//       {
//         storeId: '2',
//         storeName: 'Store 4'

//       }

//     ]
//   },
//   {
//     industryId: '3',
//     industryName: 'indus',
//     store:[
//       {
//         storeId: '1',
//         storeName: 'Store 5'
//       },
//       {
//         storeId: '2',
//         storeName: 'Store 6'

//       }

//     ]

//   },
// ]

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [modal, setModal] = useState(false);
  const [store, setStore] = useState(false)

  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebarState);
  const validLogin = useSelector((state) => state.loginState.login);
  const vendorCompanyDetails = useSelector((state) => state.vendorCompanyDetailsState.vendorCompanyDetails);
  const addStore = useSelector((state) => state.addStoreState.addStore);
  const addStoreError = useSelector((state) => state.addStoreState.error);
  const storeInfoUpdate = useSelector((state) => state.storeInfoUpdateState.storeInfoUpdate);
  const profileStatus = useSelector((state) => state.profileState.profile && state.profileState.profile.status)

  const admin = (validLogin && validLogin.user.type === 'admin') || sessionStorage.type === 'admin';

  useEffect(() => {
    dispatch({ type: 'VENDOR_COMPANY_DETAILS_REQUEST' });
  }, [])

  useEffect(() => {
    if (addStore && addStore.status) {
      message.success(addStore.message)
      setStore(false)
      dispatch({ type: 'VENDOR_COMPANY_DETAILS_REQUEST' });
    } else if (storeInfoUpdate) {
      dispatch({ type: 'VENDOR_COMPANY_DETAILS_REQUEST' });
    }
  }, [addStore, storeInfoUpdate])

  useEffect(() => {
    if (addStoreError && addStoreError.message)
      message.error(addStoreError.message);
  }, [addStoreError])

  useEffect(() => {
    setToggled(sidebar.show);
  }, [sidebar.show]);

  useEffect(() => {
    if (addStore && addStore.status && !store) {
      history.push({ pathname: '/storedetails', state: addStore.estoreId });
      dispatch({ type: 'STORE_INFO_REQUEST', storeId: addStore.estoreId });
      dispatch({ type: 'PRODUCT_LIST_REQUEST', storeId: addStore.estoreId });
    }
  }, [vendorCompanyDetails])

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

  const onHide = () => {
    setModal(false)
  }

  const addNewStore = () => {
    if (profileStatus !== "accepted") {
      message.error('Please Wait For Sometime! Your Approval Is Pending!')
    } else {
      setModal(true)
    }
  }

  const onStore = (info) => {
    history.push({ pathname: '/storedetails', state: info.estoreId });
    dispatch({ type: 'STORE_INFO_REQUEST', storeId: info.estoreId });
    dispatch({ type: 'PRODUCT_LIST_REQUEST', storeId: info.estoreId });
    setStore(true)
  }

  return (
    <div className="sidemenu-main">
      <Overlay show={modal} onHide={onHide} title="ADD STORE" />
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
              Dashboard <Link to="/dashboard" />
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faHome} active />}>
              Vendor <Link to="/vendor" />
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>
              User<Link to="/user" />
            </MenuItem>
          </Menu>
        </SidebarContent> :
          <SidebarContent>
            <Menu iconShape>
              <MenuItem icon={<FontAwesomeIcon icon={faUserAlt} />}>
                Profile <Link to="/profile" />
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>
                User Details <Link to="/user" />
              </MenuItem>
              {vendorCompanyDetails && vendorCompanyDetails.industries.map((item) => <SubMenu title={item.industryType} icon={<FontAwesomeIcon icon={faNetworkWired} />
              }>
                {item.stores.map((info) => <div>
                  <MenuItem onClick={() => onStore(info)}>
                    {info.storeName}
                  </MenuItem>
                </div>)}
              </SubMenu>)}
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
