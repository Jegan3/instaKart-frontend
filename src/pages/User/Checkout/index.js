/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Cleave from "cleave.js/react";
import Select from "react-select";
import { message } from 'antd';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Locale } from '../../../constants/Locale';

const Checkout = (props) => {

  const [fullName, setFullName] = useState();
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [cityOptions, setCityOptions] = useState();
  const [zipCode, setZipCode] = useState();
  const [email, setEmail] = useState();
  const [paymentOption, setPaymentOption] = useState("wipay");
  const [alertError, setAlertError] = useState(false);

  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkoutState.checkout);
  const currencyValue = props.location.state;

  const currency = currencyValue.currency
  const cartTotalPrice = currencyValue.cartTotalPrice

  useEffect(() => {
    if (checkout && checkout.url) {
      window.location.assign(checkout.url);
    }
  }, [checkout]);

  useEffect(() => {
    Locale.filter((item) => {
      if (country && item._id === country.value) {
        const list = item.cities.filter(({ cityName }) => cityName !== 'Others').sort((a, b) => a.cityName.localeCompare(b.cityName));
        const others = item.cities.find(({ cityName }) => cityName === 'Others');

        list.push(others)

        const cityList = list.map((data) => ({
          value: data._id,
          label: data.cityName,
        }));
        setCityOptions(cityList);
      }
    });
  }, [country]);

  const onFullName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setFullName(e.target.value)
    }
  }

  const onMobile = e => {
    setMobile(e.target.rawValue)
  }

  const onAddress = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setAddress(e.target.value)
    }
  }

  const onCountry = (country) => {
    setCountry(country);
  };

  const countryOptions = Locale.map((item) => ({
    value: item._id,
    label: <div><img className="flag" src={item.flag} alt="new" /><span className="signup-flag">{item.countryName}</span></div>,
  }));

  const onCity = (city) => {
    setCity(city);
  };



  const onZipCode = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setZipCode(e.target.value)
    }
  }

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value)
    }
  }

  const OnPaymentOption = (e) => {
    setPaymentOption(e.target.value)
  }

  const onSubmit = () => {
    if (!fullName || !mobile || !address || !country || !city || !zipCode || !email) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else if (mobile.length !== 10) {
      message.error('Please enter the valid Mobile')
    } else if (zipCode.length !== 5) {
      message.error('Please enter the valid Zipcode')
    } else if (email === '') {
      setAlertError(true);
    } else if (email === false) {
      setAlertError(true)
      setValidate(true)
      message.error('Please enter the valid Email')
    } else if (paymentOption === "cashOnDelivery") {
      message.error('Cash on delivery is not available currently')
    } else {
      const checkout = {
        fullName,
        mobile,
        address,
        country: country && country.value,
        city: city && city.value,
        zipCode,
        email,
        cartTotalPrice,
        currency
      };
      dispatch({ type: 'CHECKOUT_REQUEST', checkout });
    };
  }

  return (
    <div>
      <Header />
      <Row className="shipping-wrapper-page">
        <Col md={7} >
          <div className='shipping-card-left'>
            <h3 className="shipping-header-label">Shipping Address</h3>
            <div className="label-shipping">
              <label className="shipping-label-info">Full Name <span className="red-star">*</span> </label>
              <input
                type="text"
                className={alertError && !fullName ? ` form-control my-input` : `form-control formy`}
                placeholder="Fullname"
                value={fullName}
                onChange={onFullName}
                maxLength={30}>
              </input>
            </div>
            <div className="label-shipping">
              <label className="shipping-label-info">Phone Number <span className="red-star">*</span> </label>
              <Cleave
                placeholder="Enter contact number"
                className={alertError && mobile.length < 10 ? ` form-control my-input` : `form-control formy`}
                value={mobile}
                onChange={onMobile}
                options={{
                  blocks: [3, 3, 4],
                  numericOnly: true
                }}
              />
            </div>
            <div className="label-shipping">
              <label className="shipping-label-info">Address <span className="red-star">*</span> </label>
              <input
                type="text"
                className={alertError && !address ? ` form-control my-input` : `form-control formy`}
                placeholder="Address"
                value={address}
                onChange={onAddress}
                maxLength={30}>
              </input>
            </div>
            <div className="label-shipping">
              <label className="shipping-label-info">Country <span className="red-star">*</span> </label>
              <Select
                name="Country"
                className={`clear-country ${alertError && !country && 'dropdown-alert'}`}
                placeholder="Choose your country"
                value={country}
                onChange={onCountry}
                options={countryOptions}
                isSearchable={false}
              />
            </div>
            <div className="label-shipping">
              <label className="shipping-label-info">City <span className="red-star">*</span> </label>
              <Select
                name="City"
                className={`clear-city ${alertError && !city && 'dropdown-alert'}`}
                placeholder="Choose your city"
                value={city}
                onChange={onCity}
                options={cityOptions}
                isSearchable={false}
              />
            </div>
            <div className="label-shipping">
              <label className="shipping-label-info">Zip-Code <span className="red-star">*</span> </label>
              <input
                className={alertError && !zipCode ? ' form-control my-input' : 'form-control formy'}
                type="text"
                placeholder="Enter Your Zip Code"
                value={zipCode}
                onChange={onZipCode}
                maxLength={5}>
              </input>
            </div>
            <div className="label-shipping">
              <label className="shipping-label-info">Email <span className="red-star">*</span> </label>
              <input
                type="text"
                className={alertError && !email ? ' form-control my-input' : 'form-control formy'}
                placeholder="Enter Your Email"
                value={email}
                onChange={onEmail}
                maxLength={50}>
              </input>
            </div>
            <div className='radio-btn-align'>
              <input
                className="shipping-radio-btn-size"
                type="radio"
                value="defaultAddress"
                name="defaultAddress"
              // onChange={primaryHandleChange}
              />
              <label className="radio-btn-label">
                Use as my default address
              </label>
            </div>
          </div>
        </Col>
        <Col md={5} >
          <div className='shipping-card-right'>
            <h3 className="shipping-header-label">Select Delivery Address</h3>
            <div className='shipping-card-inner'>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="shipping-bottom-wrapper">
        <div className='shipping-card-bottom'>
          <h3 className="payment-header-label">Payment Method</h3>
          <Row>
            <div className='radio-box'>
              <input
                className="radio-btn"
                type="radio"
                name="PaymentOption"
                value='wipay'
                onChange={OnPaymentOption}
                checked={paymentOption === "wipay" ? true : false}
              />
              <label className="radio-label">
                WiPay Payment
              </label>
              <input
                className="radio-btn"
                type="radio"
                name="PaymentOption"
                value='cashOnDelivery'
                onChange={OnPaymentOption}
                checked={paymentOption === "cashOnDelivery" ? true : false}
              />
              <label className="radio-label">
                Cash On Delivery
              </label>
              <span class="marker"></span>
            </div>
          </Row>
        </div>
        <Row>
          <Col sm={3} className='checkout-btn'>
            <div className='checkout-btn-align'>
              <button
                type="button"
                className="btn btn-primary modal-butn shipping-btn"
                onClick={onSubmit} >
                CHECKOUT
              </button>
            </div>
          </Col>
        </Row>
      </Row>
      <Footer />
    </div>
  );
};

export default Checkout;
