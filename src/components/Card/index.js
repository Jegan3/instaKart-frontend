/*eslint-disable*/
import { TitleOutlined } from '@material-ui/icons';
import React from 'react';
import Avatar from 'react-avatar';
import { history } from '../../routes';

const Card = ({ imgUrl, alt, content, btnUrl, body, title, price, productName, className, country }) => {

  const Button = () => {
    history.push({ pathname: btnUrl })
    window.scrollTo(0, 0);
  }

  return (
    <div>
      {title ?
        <div className={className}>
          <div className="card-thriftStore">
            <img src={imgUrl} alt="Avatar" className="photos " />
            <div className="middle">
              <div className="text">{title}
              </div>
            </div>
          </div>
        </div>
        :
        <div className={className}>
          <div className="card-content">
            {body ?
              <img className="photos" src={imgUrl} onClick={() => history.push('/advertisement')} alt={alt || 'Image'} />
              :
              <img className="photos" src={imgUrl} />
            }
            {content && <button onClick={Button}>{content}</button>}
          </div>
          {body && <div className="card-ads">
            <div className="listing-job">
              <a
                title="Assistant Accountant">{productName}</a>
              <span className="currency">{price}</span>
              <div className="listing-country">
                <i className="fas fa-map-marker-alt"></i>
                <span >{country}</span>
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
      }
    </div>
  )
};

export default Card;
