import React from 'react';

const IntroBanner = () => (
  <div className="Body">
    <div className="flex-group">
      <div className="food">
        <img className="photo" alt="#" src="https://unsplash.it/200/202" />
        <button >FOOD COURT</button>
      </div>
      <div className="flex-group-centre">
        <div className="health">
          <img className="photos" alt="#" src="https://unsplash.it/200/203" ></img>
          <button>HEALTH & FITNESS </button>
        </div>
        <div className="services">
          <img className="photos" alt="#" src="https://unsplash.it/200/204" />
          <button >SPECIALITY SERVICES</button>
        </div>
      </div>
      <div className="desert">
        <img className="photo" alt="#" src="https://unsplash.it/200/205" />
        <button >FASHION DESERT</button>
      </div>
    </div>
    <div>
      <img className="pic" alt="#" src="https://unsplash.it/200/206" />
    </div>
  </div>
);

export default IntroBanner;
