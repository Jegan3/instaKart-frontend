/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function index() {
  return (
    <div className="Sports">
      <div className="SportsPic">
        <img className="Sports-pic" src="https://unsplash.it/200/208" />
      </div>
      <div className="ShoeUpPic">
        <img className="ShoePic" src="https://unsplash.it/200/209" />
        <button className="button">Shop Now </button>
      </div>
      <div className="ShoeDownPic">
        <img className="ShoePic" src="https://unsplash.it/200/207" />
        <button className="Button">View Products</button>
      </div>
    </div>
  );
}

export default index;
