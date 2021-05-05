/*eslint-disable*/
import React from 'react';

const Card = ({ imgUrl, alt, content, url }) => (
  <div className="card">
    <div className="card-content">
      <img className="photos" src={imgUrl} alt={alt || 'Image'} />
      {content && <a href={url} target="_blank"><button>{content}</button></a>}
    </div>
  </div>
);

export default Card;
