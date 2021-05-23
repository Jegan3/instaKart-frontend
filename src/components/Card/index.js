/*eslint-disable*/
import React from 'react';
import Avatar from 'react-avatar';
import { history } from '../../routes';

const Card = ({ imgUrl, alt, content, url, body }) => {

  const Button = () => {
    history.push({ pathname: url })
    window.scrollTo(0, 0);
  }

  return (
    <div className="card">
      <div className="card-content">
        <img className="photos" src={imgUrl} alt={alt || 'Image'} />
        {content && <button onClick={Button}>{content}</button>}
      </div>
      {body && <div className="card-ads">
        <div className="card-avatar">
          <Avatar name="Keith" size="37" color="#f0f0f0" round />
        </div>
        <div className="listing-header">
          <a className="" href="http://vaibhavk13.sg-host.com/listings/business-category/events-notices/" >Events</a>
          <span className="seperator fas fa-angle-right"></span>
          <a className="" href="http://vaibhavk13.sg-host.com/listings/business-category/events-notices/business-events/" >Business</a>
        </div>
        <div className="listing-job">
          {/* For reference */}
          {/* <a href="http://vaibhavk13.sg-host.com/listings/assistant-accountant/" title="Assistant Accountant">Assistant Accountant</a> */}
          <a href={url} title="Assistant Accountant">Assistant Accountant</a>
          <span class="currency">$ 730</span>
          <div className="listing-country">
            <i className="fas fa-map-marker-alt"></i>
            <span >Canada</span>
          </div>
        </div>
        <div className="listing-rating">
          <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
          <div className="ratings"> <span className="product-rating">4.6</span><span className="product-rating">/5</span></div>
          <div className="tooltip-fields">
            <i className="fa fa-envelope"></i>
            <i className="fa fa-mobile"></i>
            <i className="fa fa-heart"></i>
          </div>
          <div className="listing-country"> <span>46 ratings & 15 reviews</span> </div>
        </div>
      </div>}
    </div>
  )
};

export default Card;
