/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import LoginModal from '../LoginModal';
import { Locale } from '../../constants/Locale';
import { history } from '../../routes';

const StyledBadge = withStyles((theme) => ({
  badge: {
    left: 7,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Header = ({ basic, loginCart, hideloginCart, module, cartIcon }) => {
  const [login, setLogin] = useState(false);
  const [country, setCountry] = useState(<div><FontAwesomeIcon icon={faMapMarkerAlt} className="location" /><p>Select your country </p><FontAwesomeIcon icon={faCaretDown} className="caret-down" /></div>);

  const dispatch = useDispatch();
  const validLogin = useSelector((state) => state.loginState.login);
  const cart = useSelector((state) => state.cartState.cart);
  const addCartGlobal = useSelector((state) => state.addCartState.addCartGlobal);

  const name = validLogin && validLogin.user.firstName || sessionStorage.firstName ? sessionStorage.firstName : false;
  const cartCount = cart && cart.cartInfo.map(item => (item.quantity)).reduce((prev, curr) => prev + curr, 0);

  const admin = validLogin && validLogin.user.type === 'admin' || sessionStorage.type === 'admin';
  const vendor = validLogin && validLogin.user.type === 'vendor' || sessionStorage.type === 'vendor';
  const user = validLogin && validLogin.user.type === 'user' || sessionStorage.type === 'user';

  useEffect(() => {
    if (user && name && !basic && !cartIcon && !addCartGlobal) {
      dispatch({ type: 'CART_REQUEST' });
    }
  }, [name]);

  const locale = Locale.map((item) => (
    <MenuItem
      key={item._id}
      eventKey={
        <div >
          <img className="flag" src={item.flag} alt="new" />
          <p >{item.countryName}</p>
          <span><FontAwesomeIcon icon={faCaretDown} className="caret-down" /></span>
        </div>}
    >
      <img className="flag" src={item.flag} alt="new" />  <p className="p-text">{item.countryName}  </p>
    </MenuItem>));

  const loginAccount = () => {
    !name && setLogin(true);
  };

  const hidePopup = () => {
    setLogin(false);
  };

  const handleSelect = (e) => {
    setCountry(e);
  };

  const Signup = () => {
    history.push({
      pathname: '/signup',
      state: 'vendor',
    });
    window.scrollTo(0, 0);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const aboutUs = () => {
    history.push('/aboutus');
    window.scrollTo(0, 0);
  };

  const dashboard = () => {
    history.push(admin ? '/dashboard' : '/profile');
    window.scrollTo(0, 0);
  };

  const toHome = () => {
    if (location.pathname !== '/') {
      history.push({ pathname: '/' });
    };
  };

  const toListYourAds = () => {
    history.push({ pathname: '/listyourads' });
    window.scrollTo(0, 0);
  };

  const logout = () => {
    // dispatch({ type: 'RESET' });
    sessionStorage.clear();
    history.push('/');
    dispatch({ type: 'LOGOUT_SUCCESS' });
  };

  const thriftStore = () => {
    history.push({ pathname: `/${module}`.toLowerCase().replace(/ /g, "") })
  };

  const onCart = () => {
    if (location.pathname !== '/cart') {
      history.push({ pathname: '/cart', state: 'addCart' });
    }
  };

  return (
    <div className='header-bar'>
      {basic ?
        <Row className="header-sec">
          <Col md={6} sm={6}>
            <Image className="signup-logo" src="../images/logo.png" fluid onClick={toHome} />
          </Col>
        </Row> :
        <div>
          <LoginModal showPopup={login ? login : loginCart} hidePopup={login ? hidePopup : hideloginCart} />
          <div className="head">
            <div>
              <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem >
                      <NavDropdown
                        eventKey={country}
                        title={country}
                        // alt="Dropdown"
                        id="basic-nav-dropdown"
                        onSelect={handleSelect}
                      >{locale}
                      </NavDropdown>
                    </NavItem>
                  </Nav>
                  <Nav pullRight>
                    {user &&
                      <NavItem eventKey={1} href="#">
                        <p onClick={toListYourAds}>List Your Ads</p>
                      </NavItem>}
                    <NavItem eventKey={2} href="#">
                      <p onClick={aboutUs}>About Us</p>
                    </NavItem>
                    {!user &&
                      <NavItem eventKey={3} href="#">
                        {vendor || admin ? <p onClick={dashboard}>Dashboard</p> : <p className="vendor-signup" onClick={Signup}>Register Your E-Store</p>}
                      </NavItem>}
                    {module &&
                      <NavItem eventKey={2} href="#">
                        <p onClick={thriftStore}>{module}</p>
                      </NavItem>}
                    {(admin || vendor || user) &&
                      <NavItem eventKey={2} href="#">
                        <p onClick={logout}>Sign Out</p>
                      </NavItem>}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div>
              <div className="header-container-bottom">
                <div className="body">
                  <div className="col-md-3 col-sm-3 logo-header-top-left">
                    <img
                      className="instakart"
                      src="../images/logo.png"
                      alt="new"
                      onClick={toHome}
                    />
                  </div>
                  <div className="col-md-7 col-sm-6 search box justify-content-md-center">
                    <TextField
                      id="search-input"
                      name="search"
                      size="small"
                      variant="outlined"
                      placeholder="Search "
                      style={{ marginRight: '-4px' }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon className="search-icon" /></InputAdornment>,
                        endAdornment: <Button variant="contained" size="medium" className="search-btn" style={{ marginRight: '0px' }}>Search</Button>,
                      }}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2 col-sm-3 login-header-top-right">
                    <div className="user" onClick={loginAccount} aria-hidden="true">
                      <FontAwesomeIcon icon={faUserPlus} className="userPlus" />
                      {name ? <div className="text bold-text">{`Hi, ${name}`}</div> : <div className="bold-text">Sign In</div>}
                    </div>
                    {user && !cartIcon &&
                      <IconButton
                        onClick={onCart}
                        className="cart-icon" aria-label="cart" >
                        <StyledBadge badgeContent={cartCount} >
                          <ShoppingCartIcon fontSize="large" />
                        </StyledBadge>
                      </IconButton>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default Header;
