/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function index() {
  return (
    <div className="Body">
      <div className="flex_group__1">
        <img className="photo" src="https://unsplash.it/200/202" />
        <button className="Food">FOOD COURT</button>
      </div>
      <div className="flex_group__2">
        <img className="photos" src="https://unsplash.it/200/203" />
        <button className="HEALTH">HEALTH & FITNESS </button>
      </div>
      <div className="flex_group__3">
        <img className="photos" src="https://unsplash.it/200/204" />
        <button className="SERVICES">SPECIALITY SERVICES</button>
      </div>
      <div className="flex_group__4">
        <img className="photo" src="https://unsplash.it/200/205" />
        <button className="DESERT">FASHION DESERT</button>
      </div>
      <div className="Full-pic">
        <img className="pic" src="https://unsplash.it/200/206" />

      </div>
    </div>
  );
}

export default index;
