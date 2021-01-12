import React from 'react';
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

const StyledBadge = withStyles((theme) => ({
  badge: {
    left: 7,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Header = () => (
  <div className="head">
    <div className="Row">
      <div className="header-container">
        <div className="Body">
          <div className="col-md-6 col-sm-6 header-top-left">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>
              Select Location
            </p>
            <img
              className="flag"
              src="images/trinidad-and-tobago-flag.png"
              alt="new"
            />
            <p>
              Trinidad & Tobago
            </p>
          </div>
          <div className="col-md-6 col-sm-6 header-top-right">
            <p>Help</p>
            <p>How it Works</p>
            <p>List Ur Purchase</p>
          </div>
        </div>
      </div>
    </div>
    <div className="Row">
      <div className="header-container-bottom">
        <div className="Body">
          <div className="col-md-10 col-sm-10 header-top-left">
            <img
              className="instakart"
              src="images/logo.png"
              alt="new"
            />
            <TextField
              id="search-input"
              name="search"
              size="small"
              variant="outlined"
              placeholder="Search Shops, Restaurants, Medicine, Essentials"
              style={{ marginRight: '-4px' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon className="search-icon" /></InputAdornment>,
                endAdornment: <Button variant="contained" size="medium" className="search-btn" style={{ marginRight: '10px' }}>Search</Button>,
              }}
              fullWidth
            />
          </div>
          <div className="col-md-2 col-sm-2 header-top-right">
            <div className="user">
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
);

export default Header;
