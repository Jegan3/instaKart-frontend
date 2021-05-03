/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ imgUrl, alt, content }) => (
  <div className="card">
    <div className="card-content">
      <img className="photos" src={imgUrl} alt={alt || 'Image'} />
      {content && <button>{content} </button>}
    </div>
  </div>
);

export default Card;
