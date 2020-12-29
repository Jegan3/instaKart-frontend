import React from 'react';
// import AddLocationIcon from '@material-ui/icons/AddLocation';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const Header = () => (
  <div className="head">
    <div className="HeadContainer">
      <p> ✣ select location</p>
      <p>
        ✣ india
      </p>
      <p> help</p>
      <p>
        How it Works
      </p>
      <p>
        List Ur Purchase
      </p>
    </div>
    <div className="SubHeadContainer">
      <h1> ✣ Insta- Kart </h1>
      <input type="text" className="input" placeholder="write something.." />
      <input className="searchBtn" type="submit" value="Search" />
    </div>
    <div className="LoginDetails">
    </div>
    <div className="Pic-container">
      {/* <RoomIcon /> */}
      <img className="back-pic" src="https://unsplash.it/200/208" alt="new" />
    </div>

  </div>
);

export default Header;
