/*eslint-disable*/
import React from 'react';
import { message } from 'antd';
import { history } from '../../routes';

export const Card = ({ imgUrl, alt, content, btnUrl, body, title, price, productName, className, country }) => {

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
              <img className="photos" src={imgUrl} onClick={Button} alt={alt || 'Image'} />
              :
              <img className="photos" src={imgUrl} />
            }
            {content && <button onClick={Button}>{content}</button>}
          </div>
          {body && <div className="card-ads">
            <div className="listing-job">
              <a>{productName}</a>
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

export const ThriftStoreNearYouCard = ({ imgUrl, storeName, country, path, thriftStore, module, setLogin }) => {

  const Card = () => {
    if (sessionStorage.type === 'user') {
      history.push({ pathname: path, state: { thriftStore: thriftStore, module: module } })
      window.scrollTo(0, 0);
    } else if (sessionStorage.type === 'vendor') {
      message.error('Please Login As User');
    } else {
      setLogin(true)
    }
  }

  return (
    <div className=" property-card card" onClick={Card}>
      <div className=" property card-ads">
        <img className="property-image" src={imgUrl ? imgUrl : "images/noimage.png"} />
      </div>
      <div className="property-description">
        <div className="listing-job card-listing-job ">
          <a>{storeName}</a>
        </div>
        <div className="listing-job card-listing-job">
          <i className="fas fa-map-marker-alt"></i>
          <span>{country}</span>
        </div>
        <div className="listing-rating card-listing-job">
          <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
          <div className="ratings"> <span className="product-rating">4.6</span><span className="product-rating">/5</span></div>
          <div className="listing-country"> <span>46 ratings & 15 reviews</span> </div>
        </div>
      </div>
    </div>
  )
}

export const NewPromotionCard = ({ imgUrl, product, path, finalPrice, productPrice, discount, productName, module, setLogin }) => {

  const Card = () => {
    if (sessionStorage.type === 'user') {
      history.push({ pathname: path, state: { product: product, module: module } })
      window.scrollTo(0, 0);
    } else if (sessionStorage.type === 'vendor') {
      message.error('Please Login As User');
    }
    else {
      setLogin(true)
    }
  }

  return (
    <div className=" property-card card" onClick={Card}>
      <div className=" property card-ads">
        <img className="property-image" src={imgUrl} />
        <div className="discount">{discount}%OFF</div>
      </div>
      <div className="property-description">
        <div className="listing-job card-listing-job ">
          <a>{productName}</a>
        </div>
        <div className="listing-job card-listing-job">
          <span className="currency">{finalPrice}</span>
          <span className="striked-out">{productPrice}</span>
        </div>
        <div className="listing-rating card-listing-job">
          <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
          <div className="ratings"> <span className="product-rating">4.6</span><span className="product-rating">/5</span></div>
          <div className="listing-country"> <span>46 ratings & 15 reviews</span> </div>
        </div>
      </div>
    </div>
  )
}

export const NewAdditionCard = ({ imgUrl, product, path, price, productName, module, setLogin }) => {

  const Card = () => {
    if (sessionStorage.type === 'user') {
      history.push({ pathname: path, state: { product: product, module: module } })
      window.scrollTo(0, 0);
    } else if (sessionStorage.type === 'vendor') {
      message.error('Please Login As User');
    }
    else {
      setLogin(true)
    }
  }

  return (
    <div className=" property-card card" onClick={Card}>
      <div className=" property card-ads">
        <img className="property-image" src={imgUrl} />
      </div>
      <div className="property-description">
        <div className="listing-job card-listing-job ">
          <a>{productName}</a>
        </div>
        <div className="listing-job card-listing-job">
          <span className="currency">{price}</span>
        </div>
        <div className="listing-rating card-listing-job">
          <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
          <div className="ratings"> <span className="product-rating">4.6</span><span className="product-rating">/5</span></div>
          <div className="listing-country"> <span>46 ratings & 15 reviews</span> </div>
        </div>
      </div>
    </div>
  )
}

export const ReviewCard = ({ title, content, date }) => {
  return (
    <div className='reviewcard'>
      <span className="review-title"> {title} </span> <span className='content-date'>{date} </span>
      <div className="listing-rating reviewstars">
        <div className="stars">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="ratings">
          <span className="product-rating">4.6</span>
          <span className="product-rating">/5</span>
        </div>
      </div>
      <div className="content-details">
        <p className="upquote">
          "
        </p> <p className="content-text">{content}
        </p>
      </div>
      <div className='heart-icon'>
        <i class="fas fa-heart"></i>
      </div>
    </div>
  )
}

export const ThriftStoreInfoCategoriesCard = ({ title, className, imgUrl, product, path, module }) => {
  console.log('module', module)
  const Card = () => {
    if (sessionStorage.type === 'user') {
      history.push({ pathname: path, state: { product: product, module: module } })
      window.scrollTo(0, 0);
    } else if (sessionStorage.type === 'vendor') {
      message.error('Please Login As User');
    }
    else {
      setLogin(true)
    }
  }

  return (
    <div>
      <div className={className} onClick={Card}>
        <div className="card-thriftStore">
          <img src={imgUrl} alt="Avatar" className="photos " />
          <div className="middle">
            <div className="text">{title}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
