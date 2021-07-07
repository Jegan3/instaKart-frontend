/*eslint-disable*/
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMapSigns } from '@fortawesome/free-solid-svg-icons';

const Headerbar = ({ navbar, setRtlCallback, headerName }) => {
  const dispatch = useDispatch();
  const [rtl, setRtl] = useState(false);

  const onBars = () => {
    dispatch({ type: 'SHOW_SIDEBAR' });
  };

  const onRtl = () => {
    setRtl(!rtl);
    setRtlCallback(!rtl);
  };

  return (
    <Navbar fluid className={navbar ? 'navbar-fixed' : ''}>
      <Navbar.Header>
        <Navbar.Brand>
          {/* Here we create navbar brand, based on route name */}
          {headerName}
        </Navbar.Brand>
        <div className="hamburger-bars-icon hamburger-mobile visible-xs-block" onClick={onBars}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </Navbar.Header>
      <div className="hamburger-bars-icon hamburger-mobile hidden-xs" onClick={onRtl}>
        <FontAwesomeIcon icon={faMapSigns} />
      </div>
    </Navbar>
  );
};

export default Headerbar;
