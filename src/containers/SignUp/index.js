/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, Form, Grid } from 'react-bootstrap';
import Select from "react-select";
import { history } from '../../routes';
import OtpScreen from '../../components/OtpScreen';
import Footer from '../../components/Footer';
import Header from '../../components/Headers';

const SignUp = (props) => {
  const [userName, setUserName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termscondition, setTermsCondition] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [closeOtp, setCloseOtp] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [industryType, setindustryType] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [updatedCityOptions, setUpdatedCityOptions] = useState();

  const dispatch = useDispatch();
  const validSignup = useSelector((state) => state.signupState.signup);
  const invalidSignup = useSelector((state) => state.signupState.error);
  const signUpContent = useSelector((state) => state.signupContentState.signupContent);

  const industry = signUpContent && signUpContent.industries
  const countries = signUpContent && signUpContent.countriesList

  // For Vendor SignUp 
  const { state } = props.location;
  const type = state ? 'vendor' : 'user';

  useEffect(() => {
    if (validSignup && !closeOtp && type === 'user') {
      // setAlert(validOtp.message);
      setShowOtp(true);
    } else if (invalidSignup) {
      setErrorMsg(`An account with email ${email} already exists`);
    }
  });

  useEffect(() => {
    type === 'vendor' && dispatch({ type: 'SIGNUP_CONTENT_REQUEST' });
  }, [])

  const onUserName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9]*$')) {
      setUserName(e.target.value)
    }
  }

  const onMobile = (e) => {
    if (e.target.value.match('^[0-9]*$') != null) {
      setMobile(e.target.value);
    }
  };

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };

  const onPassword = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setPassword(e.target.value)
    }
  };

  const onTermsCondition = (e) => {
    setTermsCondition(!termscondition)
  }

  const OpenTermsCondition = () => {
    // window.open(`${window.location.origin}/termsofcondition`, '', 'width=1400,height=1200');
    const win = window.open('/termsofcondition', "_blank");
    win.focus();
    // history.push({pathname: '/termsofcondition'});
    // window.scrollTo(0, 0);
  };

  const onIndustryType = (industryType) => {
    setindustryType(industryType)
  }

  // IndustryType Options
  const industryTypeOptions = industry && industry.map((item) => ({
    value: item._id,
    label: item.industryType,
  }))

  const onCountry = (country) => {
    setCountry(country)
  }

  // Country Options
  const countryOptions = countries && countries.map(item => ({
    value: item._id,
    label: <div><img className="flag" src={item.flag} alt="new" /><span className="signup-flag">{item.countryName}</span></div>
  }))

  const onCity = (city) => {
    setCity(city)
  }

  // City Options
  useEffect(() => {
    countries && countries.filter((item) => {
      if (item._id == country.value) {
        const abcd = item.cities.map(data => ({
          value: data._id,
          label: data.cityName,
        }))
        setUpdatedCityOptions(abcd)
      };
    });
  }, [country])

  const Submit = () => {
    if (userName === '' && email === '' && password === '') {
      setErrorMsg('Please enter the valid credentials');
    } else if (userName === '') {
      setErrorMsg('Please enter the valid user name');
    } else if (email === '') {
      setErrorMsg('Please enter the valid email');
    } else if (password === '') {
      setErrorMsg('Please enter the valid password');
    } else if (termscondition === false) {
      setErrorMsg('Please accept the Terms & Conditions and Privacy Policy');
    } else {

      const signupDetailsUsers = {
        name: userName,
        contactNumber: mobile,
        email,
        password,
        type
      };

      const signupDetailsVendors = {
        name: userName,
        contactNumber: mobile,
        email,
        password,
        estore: 'a',
        industryType: industryType,
        countryId: country && country.value,
        cityId: city && city.value,
        type
      };

      dispatch({ type: 'SIGNUP_REQUEST', signup: type === 'vendor' ? signupDetailsVendors : signupDetailsUsers });
      setErrorMsg('');
      // setShowOtp(true);
      // temp fix for vendor login
      // if (vendor) {
      //   history.push({
      //     pathname: '/dashboard',
      //   });
      // } else {
      //   history.push({
      //     pathname: '/',
      //   });
    }
  };

  const handleClose = () => {
    setShowOtp(false);
    setCloseOtp(true);
  }

  const onSubmitOtp = () => {
    history.push({
      pathname: '/',
    });
    dispatch({ type: 'OTP_REQUEST', signup: signupDetails });
  }

  const resendOtp = () => {
    window.alert("OTP resent to your mail ID");
  }

  return (
    <Grid fluid>
      <Header header />
      <OtpScreen show={showOtp} handleClose={handleClose} onSubmitOtp={onSubmitOtp} resendOtp={resendOtp} email={email} />
      <Row>
        <Col md={6} sm={12}>
          <Image className="left-side" src="images/pic5.jpeg" />
        </Col>
        <Col md={6} sm={12} >
          <Row>
          </Row>
          <Row>
            <Col lg={12} className="sub-heading">
              Basic Information
            </Col>
          </Row>
          <Form className="login-form ">
            {type === 'vendor' &&
              <Row>
                <Col md={6} sm={12}>
                  <label>E-Store Name <span className='red-star'>*</span></label>
                  <input
                    type='text'
                    className="form-control"
                    placeholder="Enter E-Store Name"
                  // value={}
                  // onChange={}
                  // options={}
                  // isSearchable={true}
                  />
                </Col>
                <Col md={6} sm={12}>
                  <label >Select Industry Type <span className='red-star'>*</span></label>
                  <Select
                    name="Industry Type"
                    placeholder="Choose you're industry type"
                    value={industryType}
                    className="prof-select "
                    onChange={onIndustryType}
                    options={industryTypeOptions}
                    isSearchable={false}
                    isMulti
                  />
                </Col>
                <Col className="clearCountry" md={6} sm={12}>
                  <label >Select Country <span className='red-star'>*</span></label>
                  <Select
                    name="Country"
                    placeholder="Choose you're country"
                    value={country}
                    className="prof-select "
                    onChange={onCountry}
                    options={countryOptions}
                    isSearchable={false}
                  />
                </Col>
                <Col md={6} sm={12} >
                  <label >Select City <span className='red-star'>*</span></label>
                  <Select
                    name="City"
                    placeholder="Choose you're city"
                    value={city}
                    className="prof-select "
                    onChange={onCity}
                    options={updatedCityOptions}
                    isSearchable={false}
                    isDisabled={!country}
                  />
                </Col>
              </Row>}
            <Row>
              <Col md={6} sm={12}>
                <label >User Name <span className='red-star'>*</span></label>
                <input type="text" className="form-control" placeholder="Enter user name" value={userName} onChange={onUserName} maxLength={30}></input>
              </Col>
              <Col md={6} sm={12}>
                <label >Contact Number </label>
                <input type="text" className="form-control" placeholder="Enter contact number" value={mobile} onChange={onMobile} maxLength={15} ></input>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <label >Email <span className='red-star'>*</span></label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={onEmail} maxLength={30}></input>
              </Col>
              <Col md={6} sm={12}>
                <label >Password <span className='red-star'>*</span></label>
                <input type="text" className="form-control" placeholder="Enter password" value={password} onChange={onPassword} maxLength={15} ></input>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} className="required" >
                <label className="required-feild">
                  <small><span className='red-star'>*</span> Required Fields</small>
                </label>
              </Col>
              <Col md={12} sm={12} className="signup-submit" >
                <label className="form-check-label">
                  <input type="checkbox" className="form-radio" value={termscondition} onChange={onTermsCondition} />
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
                <span className="login-error-msg">{errorMsg}</span>
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
