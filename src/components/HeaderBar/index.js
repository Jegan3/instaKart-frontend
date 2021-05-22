/*eslint-disable*/
import React from 'react';
import { Navbar } from 'react-bootstrap';

const Headerbar = ({ navbar, handleMiniClick, headerName }) => {
  // function for responsive that hides/shows the sidebar
  // const mobileSidebarToggle = () => {
  //   document.documentElement.classList.toggle('nav-open');
  // };

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
        {/* <Navbar.Toggle onClick={mobileSidebarToggle} /> */}
      </Navbar.Header>
    </Navbar>
  );
};

export default Headerbar;
