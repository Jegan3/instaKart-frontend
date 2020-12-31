import React from 'react';

const IntroBanner = () => (
  <div className="Body">
    <div className="flex-group">
      <div>
        <img className="photo" alt="#" src="https://unsplash.it/200/202" />
        <button className="food">FOOD COURT</button>
      </div>
      <div className="flex-group-centre">
        <img className="photos" alt="#" src="https://unsplash.it/200/203" />
        <button className="health">HEALTH & FITNESS </button>
        <img className="photos" alt="#" src="https://unsplash.it/200/204" />
        <button className="services">SPECIALITY SERVICES</button>
      </div>
      <div>
        <img className="photo" alt="#" src="https://unsplash.it/200/205" />
        <button className="desert">FASHION DESERT</button>
      </div>
    </div>
    <div className="Full-pic">
      <img className="pic" alt="#" src="https://unsplash.it/200/206" />
    </div>
  </div>
);

export default IntroBanner;
