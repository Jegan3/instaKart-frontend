/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, Form, Grid } from 'react-bootstrap';
import Select from "react-select";
import { Tooltip, message } from 'antd';
import { history } from '../../../routes';
import OtpScreen from '../../../components/OtpScreen';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { Locale } from '../../../constants/Locale';
import { Industries } from '../../../constants/Industries';

const SignUp = (props) => {
  const [company, setCompany] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termscondition, setTermsCondition] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [closeOtp, setCloseOtp] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertError, setAlertError] = useState(false);
  const [industryType, setIndustryType] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [updatedCityOptions, setUpdatedCityOptions] = useState();
  const [validate, setValidate] = useState('');

  const dispatch = useDispatch();
  const validSignup = useSelector((state) => state.signupState.signup);
  const invalidSignup = useSelector((state) => state.signupState.error);

  const status = validSignup && validSignup.status;

  // For Vendor SignUp
  const { state } = props.location;
  const type = state ? 'vendor' : 'user';

  useEffect(() => {
    if (validSignup && !closeOtp && type === 'user') {
      setShowOtp(true);
    } else if (status) {
      setCompany('');
      setIndustryType('');
      setCountry('');
      setCity('');
      setFirstName('');
      setEmail('');
      setPassword('');
      setTermsCondition(false);
      setValidate(false);
      setAlertError(false);
      message.success('Thanks!, Signup form is successfully registered with us , You will receive an email from us shortly Note: If you using Outlook please check ur spam folder too');
    } else if (invalidSignup) {
      message.error(`An account with email ${email} already exists`);
    }
  }, [status, invalidSignup]);

  const onEstore = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$'))
      setCompany(e.target.value.toLowerCase().split(' ').map(caps => `${caps.charAt(0).toUpperCase()}${caps.slice(1)}`).join(' '))
  };

  const onFirstName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$'))
      setFirstName(e.target.value.toLowerCase().split(' ').map(caps => `${caps.charAt(0).toUpperCase()}${caps.slice(1)}`).join(' '))
  };

  const onLastName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$'))
      setLastName(e.target.value.toLowerCase().split(' ').map(caps => `${caps.charAt(0).toUpperCase()}${caps.slice(1)}`).join(' '))
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const validEmail = validateEmail(email);

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  const splitPassword = () => {
    setShowPassword(!showPassword);
  };

  const onTermsCondition = (e) => {
    setTermsCondition(!termscondition);
  };

  const OpenTermsCondition = () => {
    history.push({ pathname: '/termsofcondition' });
    window.scrollTo(0, 0);
  };

  const onIndustryType = (industryType) => {
    setIndustryType(industryType);
  };

  const industryTypeOptions = Industries.sort((a, b) => a.industryType.localeCompare(b.industryType)).map((item) => ({
    value: item._id,
    label: item.industryType,
  }));

  const onCountry = (country) => {
    setCountry(country);
  };

  // Country Options
  const countryOptions = Locale.map((item) => ({
    value: item._id,
    label: <div><img className="flag" src={item.flag} alt="new" /><span className="signup-flag">{item.countryName}</span></div>,
  }));

  const onCity = (city) => {
    setCity(city);
  };

  // City Options
  useEffect(() => {
    Locale.filter((item) => {
      if (country && item._id === country.value) {
        // to sort alphabetically and push others at last item 
        const list = item.cities.filter(({ cityName }) => cityName !== 'Others').sort((a, b) => a.cityName.localeCompare(b.cityName));
        const others = item.cities.find(({ cityName }) => cityName === 'Others');

        list.push(others)

        const cityList = list.map((data) => ({
          value: data._id,
          label: data.cityName,
        }));
        setUpdatedCityOptions(cityList);
      }
    });
  }, [country]);

  const Submit = () => {
    if (type === 'user' && (!firstName || !lastName || !email || !password)) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else if (type === 'vendor' && (!company || !industryType || !country || !city || !email || !password)) {
      setAlertError(true)
      message.error('Please fill all the fields');
    } else if (password.length < 8) {
      message.error(' Please fill the password with minimum 8 characters');
      setAlertError(true)
    } else if (validEmail === false) {
      setAlertError(true)
      message.error('Please enter the valid Email')
      setValidate(true)
    } else if (termscondition === false) {
      message.error('Please accept the Terms & Conditions and Privacy Policy');
    } else {
      const passcode = Buffer.from(password).toString("base64");
      const signupDetailsUsers = {
        firstName,
        lastName,
        countryId: country && country.value,
        cityId: city && city.value,
        email,
        password: passcode,
        type,
      };

      const signupDetailsVendors = {
        company,
        industryType,
        countryId: country && country.value,
        cityId: city && city.value,
        email,
        password: passcode,
        type,
      };

      dispatch({ type: 'SIGNUP_REQUEST', signup: type === 'vendor' ? signupDetailsVendors : signupDetailsUsers });
      setAlertMsg('');
    }
  };

  const handleClose = () => {
    setShowOtp(false);
    setCloseOtp(true);
  };

  const onSubmitOtp = () => {
    history.push({
      pathname: '/',
    });
    dispatch({ type: 'OTP_REQUEST', signup: signupDetails });
  };

  const resendOtp = () => {
    window.alert('OTP resent to your mail ID');
  };

  return (
    <Grid fluid>
      <Header basic />
      <OtpScreen show={showOtp} handleClose={handleClose} onSubmitOtp={onSubmitOtp} resendOtp={resendOtp} email={email} />
      <Row>
        <Col md={6} sm={12} className="signup-margin" >
          <Image className="left-side" src="images/pic5.jpeg" />
        </Col>
        <Col md={6} sm={12} className="signup-margin" >
          <Row>
            <Col lg={12} className="sub-heading">
              Basic Information
            </Col>
          </Row>
          <Form className="signup-form">
            {type === 'vendor' &&
              <Row>
                <Col md={6} sm={12} >
                  <label className="signup-label">Company Name <span className="red-star">*</span></label>
                  <input
                    type="text"
                    className={alertError && !company ? ' form-control my-input' : 'form-control formy'}
                    placeholder="Enter your company name"
                    value={company}
                    onChange={onEstore}
                    maxLength={30}
                  />
                </Col>
                <Col md={6} sm={12} className={`clear-industry ${alertError && (!industryType || industryType && industryType.length === 0) && 'dropdown-alert'}`} >
                  <label className="signup-label">Industry Type <span className="red-star">*</span></label>
                  <Select
                    name="Industry Type"
                    placeholder="Choose your industry type"
                    value={industryType}
                    onChange={onIndustryType}
                    options={industryTypeOptions}
                    isSearchable={false}
                    isMulti
                  />
                </Col>
                <Col md={6} sm={12} className={`clear-country ${alertError && !country && 'dropdown-alert'}`}>
                  <label className="signup-label">Country <span className="red-star">*</span></label>
                  <Select
                    name="Country"
                    placeholder="Choose your country"
                    value={country}
                    onChange={onCountry}
                    options={countryOptions}
                    isSearchable={false}
                  />
                </Col>
                <Col md={6} sm={12} className={`clear-city ${alertError && !city && 'dropdown-alert'}`} >
                  <label className="signup-label">City <span className="red-star">*</span></label>
                  <Select
                    name="City"
                    placeholder="Choose your city"
                    value={city}
                    onChange={onCity}
                    options={updatedCityOptions}
                    isSearchable={false}
                    isDisabled={!country}
                  />
                </Col>
              </Row>}
            {type === 'user' &&
              <Row>
                <Col md={6} sm={12}>
                  <label className="signup-label">First Name <span className="red-star">*</span></label>
                  <input
                    type="text"
                    className={alertError && firstName === '' ? ' form-control my-input' : 'form-control formy'}
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={onFirstName}
                    maxLength={30}
                  />
                </Col>
                <Col md={6} sm={12}>
                  <label className="signup-label">Last Name <span className="red-star">*</span></label>
                  <input
                    type="text"
                    className={alertError && lastName === '' ? ' form-control my-input' : 'form-control formy'}
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={onLastName}
                    maxLength={30}
                  />
                </Col>
                <Col md={6} sm={12} className={`clear-country ${alertError && !country && 'dropdown-alert'}`}>
                  <label className="signup-label">Country <span className="red-star">*</span></label>
                  <Select
                    name="Country"
                    placeholder="Choose your country"
                    value={country}
                    onChange={onCountry}
                    options={countryOptions}
                    isSearchable={false}
                  />
                </Col>
                <Col md={6} sm={12} className={`clear-city ${alertError && !city && 'dropdown-alert'}`} >
                  <label className="signup-label">City <span className="red-star">*</span></label>
                  <Select
                    name="City"
                    placeholder="Choose your city"
                    value={city}
                    onChange={onCity}
                    options={updatedCityOptions}
                    isSearchable={false}
                    isDisabled={!country}
                  />
                </Col>
              </Row>}
            <Row>
              <Col md={6} sm={12}>
                <label className="signup-label">Email <span className="red-star">*</span></label>
                <input
                  type="email"
                  className={alertError && email === '' || validateEmail(email) === false && validate ? ' form-control my-input' : 'form-control formy'}
                  placeholder="Enter your email"
                  value={email}
                  onChange={onEmail}
                  maxLength={50}
                />
              </Col>
              <Col md={6} sm={12}>
                <label className="signup-label">Password <span className="red-star">*</span>
                  <span>
                    <Tooltip
                      title={
                        <div className="tool-list">
                          <p className="tool-tip">•	Be at least 8 characters</p>
                          <p className="tool-tip">•	Have at least one number</p>
                          <p className="tool-tip">•	Have at least one upper case letter</p>
                        </div>}
                      placement="rightTop"
                    >
                      <i className="fa fa-info" />
                    </Tooltip>
                  </span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={alertError && password.length < 8 ? 'form-control my-input' : 'form-control formy'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={onPassword}
                  maxLength={15}
                />
                <i className={`${showPassword ? 'fa fa-unlock-alt' : 'fa fa-lock'} unlock-signup`} onClick={splitPassword}></i>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} className="required" >
                <label className="required-field">
                  <small><span className="red-star">*</span> Required Fields</small>
                </label>
              </Col>
              <Col md={12} sm={12} className="signup-submit" >
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-radio"
                    checked={termscondition}
                    onChange={onTermsCondition}
                  />
                  <small>&emsp;&ensp;By clicking Submit, you agree to our <span className="btn-link" onClick={OpenTermsCondition}>Terms & Conditions and Privacy Policy.</span></small>
                </label>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} className="signup-submit" >
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block modal-button"
                  onClick={Submit}
                >
                  Proceed
                </button>
              </Col>
              <Col md={12} sm={12} className="login-error-signup" >
                <span className={status ? 'success-msg' : 'login-error-msg'}>{alertMsg}</span>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Grid>
  );
};

export default SignUp;
