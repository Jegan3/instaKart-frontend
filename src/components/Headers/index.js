import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiedPiperAlt, faMapMarkerAlt, faUserPlus, faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="head">
    <div className="HeadContainer">
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="Location" />
        Select Location
      </p>
      <p>
        <img
          className="flag"
          src="https://wallup.net/wp-content/uploads/2019/10/507750-india-flag-flags-indian-748x421.jpg"
          alt="new"
        />
        India
      </p>
      <h6> help</h6>
      <h6>How it Works</h6>
      <h6>List Ur Purchase</h6>
    </div>
    <div className="SubHeadContainer">
      <h1>
        <FontAwesomeIcon icon={faPiedPiperAlt} />
        Insta- Kart
      </h1>
      <input
        type="text"
        className="input"
        placeholder="search shops,restaurants,medicine,essentials"
      />
      <FontAwesomeIcon icon={faSearch} className="Search" />
      <input className="searchBtn" type="submit" value="Search" />
    </div>
    <div className="LoginDetails">
      <FontAwesomeIcon icon={faUserPlus} className="userPlus" />
      <p>Login</p>
      <button onClick="myFunction()" className="loginBtn">
        My Account
      </button>
      <FontAwesomeIcon icon={faCartPlus} className="CartPlus" />
    </div>
  </div>
);

export default Header;
