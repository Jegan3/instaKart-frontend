/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import PopUp from '../LoginModal';

const StyledBadge = withStyles((theme) => ({
  badge: {
    left: 7,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Header = () => {
  const [login, setLogin] = useState(false);

  const loginAccount = () => {
    setLogin(true);
  };

  return (
    <div>
      <PopUp show={login} />
      <div className="head">
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="location" />
                  <p>
                    Select Location
                  </p>
                </NavItem>
                <NavItem >
                  <img
                    className="flag"
                    src="images/trinidad-and-tobago-flag.png"
                    alt="new"
                  />
                  <p>
                    Trinidad & Tobago
                  </p>
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  <p>Help</p>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  <p>How it Works</p>
                </NavItem>
                <NavItem eventKey={3} href="#">
                  <p>List Ur Purchase</p>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <div className="header-container-bottom">
            <div className="Body">
              <div className="col-md-3 col-sm-3 logo-header-top-left">
                <img
                  className="instakart"
                  src="images/logo.png"
                  alt="new"
                />
              </div>
              <div className="col-md-7 col-sm-6 search box justify-content-md-center">
                <TextField
                  id="search-input"
                  name="search"
                  size="small"
                  variant="outlined"
                  placeholder="Search Shops, Restaurants, Medicine, Essentials"
                  style={{ marginRight: '-4px' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon className="search-icon" /></InputAdornment>,
                    endAdornment: <Button variant="contained" size="medium" className="search-btn" style={{ marginRight: '0px' }}>Search</Button>,
                  }}
                  fullWidth
                />
              </div>
              <div className="col-md-2 col-sm-3 login-header-top-right">
                <div className="user" onClick={loginAccount}>
                  <FontAwesomeIcon icon={faUserPlus} className="userPlus" />
                  <div className="text">
                    <div className="small-text">Login</div>
                    <div className="bold-text">My Account</div>
                  </div>
                </div>
                <IconButton aria-label="cart" >
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon fontSize="medium" />
                  </StyledBadge>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
