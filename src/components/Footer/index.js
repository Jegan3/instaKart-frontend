import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlay,
  faApple,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div>
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="footer-Header-row">
          <div className="header-left">
            <h1 >
              Free Delivery
            </h1>
            <p>
              When order from $500
            </p>
          </div>
          <div className="header-center">
            <h1>
              100% refund of Money
            </h1>
            <p>
              14-days of complaint
            </p>
          </div>
          <div className="header-right">
            <h1>
              Quality Inspections
            </h1>
            <p>
              Over 10,000 products
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>Information</h4>
                <ul className="list-unstyled">
                  <li>Item #1</li>
                  <li>Item #2</li>
                  <li>Item #3</li>
                  <li>Item #4</li>
                  <li>Item #5</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>Help</h4>
                <ul className="list-unstyled">
                  <li>Item #1</li>
                  <li>Item #2</li>
                  <li>Item #3</li>
                  <li>Item #4</li>
                  <li>Item #5</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>Policy</h4>
                <ul className="list-unstyled">
                  <li>Item #1</li>
                  <li>Item #2</li>
                  <li>Item #3</li>
                  <li>Item #4</li>
                  <li>Item #5</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Contact us</h4>
              <div className="support">
                if u have any Question plz contact our support @gmail.com
              </div>
              <div className="number">800 456 789</div>
              <div className="side-Button">
                <button className="btn draw-border">
                  <FontAwesomeIcon className="appBtn" icon={faGooglePlay} />
                  <p>
                    Download
                  </p>
                  <strong>
                    For Andriod
                  </strong>
                </button>
                <button className="btn draw-border">
                  <FontAwesomeIcon className="appBtn" icon={faApple} />
                  <p>
                    Download
                  </p>
                  <strong>
                    For Ios
                  </strong>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-left">
                &copy; Copyright 2018 - Company Name. All rights reserved.
              </p>
              <p className="text-center">
                <a
                  href="https://www.facebook.com/"
                  className="social"
                >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  className=" social"
                >
                  <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className=" social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
              </p>
              <p className="text-right">
                <img
                  src="  https://payals.co.uk/wp-content/uploads/2017/07/payment-icons.png "
                  width="150px"
                  alt="new"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
