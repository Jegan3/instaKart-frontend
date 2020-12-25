/* eslint-disable react/prop-types */
import React from 'react';


const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || 'Image'} />
    <div className="card-content">
      {/* <h2>{props.title}</h2>
      <p>{props.content}</p> */}
      <h5>
      Shop Name Here
      </h5>
      <h6>
      new brand dress at cheap
      </h6>
      <button className="rating">✰ 4.4</button>
    </div>
  </div>
);

export default Card;
