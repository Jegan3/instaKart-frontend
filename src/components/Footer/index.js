/*eslint-disable*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { history } from '../../routes';

const AboutUs = () => {
  history.push({ pathname: '/aboutus' });
  window.scrollTo(0, 0);
}

const OpenTermsCondition = () => {
  // window.open(`${window.location.origin}/termsofcondition`, '', 'width=1400,height=1200');
  // const win = window.open('/termsofcondition', "_blank");
  // win.focus();
  history.push({ pathname: '/termsofcondition' });
  window.scrollTo(0, 0);
};

const Footer = () => (
  <footer className="mainfooter">
    <Row className="fitness-pic">
      <img className="addpic" src="images/icon-tcap.png" />
      <img className="addpic" src="images/instakart.png" />
      <img className="addpic" src="images/glorii_Logo4.png" />
    </Row>
    <Row className='info-middle-label'>
      <Col md={4} sm={4}>
        In Store Pick up, Curb Side Pick Up, Delivery Options
      </Col>
      <Col md={4} sm={4}>
        Free e-Store Registration / No Monthly Subscribtion
      </Col>
      <Col md={4} sm={4}>
        Secured Payment Gateway / IK Payouts
      </Col>
    </Row>
    <Row className='info-bottom-label'>
      <Col md={4} sm={4}>
        Information
      </Col>
      <Col md={4} sm={4}>
        Help
      </Col>
      <Col md={4} sm={4}>
        Contact us
      </Col>
    </Row>
    <Row className='footer-container'>
      <Col md={4} sm={4} >
        <div>
          <ul>
            <li className="footer-info" onClick={AboutUs}>About Us</li>
            <li className="footer-info" onClick={OpenTermsCondition}>Terms and Conditions</li>
            <li>FAQ</li>
          </ul>
        </div>
      </Col>
      <Col md={4} sm={4}>
        <div>
          <ul>
            <li className="footer-info" >Our Team</li>
            <li className="footer-info" >Testimonials</li>
            <li className="footer-info" >Services</li>
          </ul>
        </div>
      </Col>
      <Col md={4} sm={4}>
        <div>
          <ul>
            <li className="footer-info" >support@insta-kart.com</li>
            <li className="footer-info" >+1 868 388 1164</li>
            <li className="footer-info" >+1 868 388 1164</li>
          </ul>
        </div>
      </Col>
    </Row >
    <Row className="end-info">
      <Col sm={4} className="bottom-text">
        <p >
          &copy; Copyright 2021 - Insta-Kart. All rights reserved.
        </p>
      </Col>
      <Col sm={4} className="social-icon">
        <p >
          <a
            href="https://www.facebook.com/" target="_blank"
          // className="social"
          >
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a
            href="https://www.twitter.com/" target="_blank"
            className=" social"
          >
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a
            href="https://www.instagram.com/" target="_blank"
            className=" social"
          >
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
        </p>
      </Col>
      <Col sm={4} className="card-text">
        <p >
          <img
            src='./images/payment-icons.png'
            width="150px"
            alt="new"
          />
        </p>
      </Col>
    </Row>
  </footer >
);

export default Footer;
