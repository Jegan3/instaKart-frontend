import React from 'react';

const IntroBanner = () => (
  <div className="body">
    <div className="flex-group">
      <div className="food">
        <img className="photo" alt="#" src="images/L.png" />
        <button >FOOD COURT</button>
      </div>
      <div className="flex-group-centre">
        <div className="health">
          <img className="photos" alt="#" src="images/6.png" ></img>
          <button>HEALTH & WELLNESS </button>
        </div>
        <div className="services">
          <img className="photos" alt="#" src="images/7.png" />
          <button >SPECIALITY SERVICES</button>
        </div>
      </div>
      <div className="desert">
        <img className="photo" alt="#" src="images/5.png" />
        <button >FASHION DISTRICT</button>
      </div>
    </div>
    <div>
      <img className="pic" alt="#" src="images/8.png" />
    </div>
  </div>
);

export default IntroBanner;
