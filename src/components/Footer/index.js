import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div>
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-header">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <h5 >
              FREE DELIVERY
            </h5>
            <p>
              When order from $500
            </p>
          </div>
          <div className="col-md-4 col-sm-4">
            <h5 >
              100% REFUND OF MONEY
            </h5>
            <p>
              14-days of complaint
            </p>
          </div>
          <div className="col-md-4 col-sm-4">
            <h5 >
              QUALITY INSPECTIONS
            </h5>
            <p>
              Over 10,000 products
            </p>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="row footer-top">
          <div className="col-md-4 col-sm-4">
            <div className="footer-pad">
              <h4>Information</h4>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Terms and Conditions</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="footer-pad">
              <h4>Help</h4>
              <ul className="list-unstyled">
                <li>Login</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
          <div className=" col-md-4 col-sm-4">
            <h4>Contact us</h4>
            <div className="support">
              if u have any Question plz contact our support @gmail.com
            </div>
            <div className="number">800 456 789</div>
            <div className="zip">+048</div>
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
    </footer>
  </div>
);

export default Footer;
