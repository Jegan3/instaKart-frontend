/* eslint-disable react/prop-types */
import React from 'react';

const Card = (props) => (
  <div className="card">
    <div className="card-content">
      <img className="photos" src={props.imgUrl} alt={props.alt || 'Image'} />
      <button>{props.content} </button>
    </div>
  </div>
);

export default Card;
