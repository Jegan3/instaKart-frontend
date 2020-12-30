/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';

function sayHello() {
  alert('You clicked me!');
}
const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || 'Image'} />
    <div className="card-content">
      {/* <h2>{props.title}</h2>
      <p>{props.content}</p> */}
      <h3>
        Shop Name Here
      </h3>
      <h6>
        New brand dress at cheap
      </h6>
      <button className="rating" onClick={sayHello}>✰ 4.4</button>
    </div>
  </div>
);

export default Card;
