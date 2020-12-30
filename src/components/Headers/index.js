import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiedPiperAlt, faMapMarkerAlt, faUserPlus, faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
];

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
      <h6>
        How it Works
      </h6>
      <h6>
        List Ur Purchase
      </h6>
    </div>
    <div className="SubHeadContainer">
      <h1>
        <FontAwesomeIcon icon={faPiedPiperAlt} />
        Insta- Kart
      </h1>
      <input type="text" className="input" placeholder="search shops,restaurants,medicine,essentials" />
      <FontAwesomeIcon icon={faSearch} className="Search" />
      <input className="searchBtn" type="submit" value="Search" />
    </div>
    <div className="LoginDetails">
      <FontAwesomeIcon icon={faUserPlus} className="userPlus" />
      <p>
        Login
      </p>
      <p>
        My Account
      </p>
      <FontAwesomeIcon icon={faCartPlus} className="CartPlus" />

    </div>
    <div className="Pic-container">
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            </div>
          </div>
        </Slide>
      </div>
    </div>

  </div>
);

export default Header;
