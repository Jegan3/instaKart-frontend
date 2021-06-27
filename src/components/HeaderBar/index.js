/*eslint-disable*/
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMapSigns } from '@fortawesome/free-solid-svg-icons';

const Headerbar = ({ navbar, setRtlCallback, headerName }) => {
  const dispatch = useDispatch();
  const [rtl, setRtl] = useState(false);

  const industryInfo = useSelector((state) => state.industryInfoState.industryInfo);

  const onBars = () => {
    dispatch({ type: 'SHOW_SIDEBAR' });
  };

  const onRtl = () => {
    setRtl(!rtl);
    setRtlCallback(!rtl);
  };

  return (
    <Navbar fluid className={navbar ? 'navbar-fixed' : ''}>
      {/* <div className="navbar-minimize">
        <div
          id="minimizeSidebar"
          aria-hidden="true"
          className="btn btn-default btn-fill btn-round btn-icon"
          onClick={handleMiniClick}
        >
          <i className="fa fa-ellipsis-v visible-on-sidebar-regular" />
          &nbsp;
          <i className="fa fa-navicon visible-on-sidebar-mini" />
        </div>
      </div> */}
      <Navbar.Header>
        <Navbar.Brand>
          {/* Here we create navbar brand, based on route name */}
          {headerName}
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        <div className="hamburger-bars-icon hamburger-mobile visible-xs-block" onClick={onBars}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </Navbar.Header>
      <div className="registration" >
        {industryInfo && industryInfo.data.vendorInfo.register_num}
      </div>
      <div className="hamburger-bars-icon hamburger-mobile hidden-xs" onClick={onRtl}>
        <FontAwesomeIcon icon={faMapSigns} />
      </div>
    </Navbar>
  );
};

export default Headerbar;
