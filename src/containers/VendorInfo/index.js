/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Grid } from 'react-bootstrap';
import Select from 'react-select';
import Cleave from "cleave.js/react";
import { history } from '../../routes';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { faYenSign } from '@fortawesome/free-solid-svg-icons';

// const productList = [
//   { value: 'Bakery and Coffee', label: 'Bakery and Coffee' },
//   { value: 'Drinks and Cocktails', label: 'Drinks and Cocktails ' },
//   { value: 'Electronics ', label: 'Electronics' },
//   { value: 'Grocery', label: 'Grocery' },
//   { value: 'Restaurants and Food', label: 'VRestaurants and Food ' },
//   { value: 'Home and Garden', label: 'Home and Garden' },
//   { value: 'Hardware and Equipment', label: 'Hardware and Equipment ' },
//   { value: 'Pharmacy and Health', label: 'Pharmacy and Health' },
//   { value: 'Beauty', label: 'Beauty' },
//   { value: 'Clothing and Accessories', label: 'Clothing and Accessories' },
//   { value: 'Books and Paper Goods', label: 'Books and Paper Goods' },
//   { value: 'Party and Event Supplies', label: 'Party and Event Supplies' },
// ];

const bankList = [
  { value: 'First Citizens', label: 'First Citizens' },
  { value: 'Republic Bank', label: 'Republic Bank' },
  { value: 'JMMB', label: 'MMB' },
  { value: 'Scotiabank', label: 'Scotiabank' },
  { value: 'RBC Royal Bank', label: 'RBC Royal Bank' },
  { value: 'First Caribbean', label: 'First Caribbean' },
  { value: 'Citibank', label: 'Citibank' },
  { value: 'Bank of Baroda', label: 'Bank of Baroda' },
  { value: 'Agricultural Development Bank', label: 'Agricultural Development Bank ' },
  { value: 'Ansa Merchant Bank', label: 'Ansa Merchant Bank' },
  { value: 'CAF Trinidad & Tobago', label: 'CAF Trinidad & Tobago' },
];

const ikOptions = [
  { value: 'Fortnightly', label: 'Fortnightly ' },
  { value: 'Monthly', label: 'Monthly ' },
]

const youPrefer = [
  { value: 'Bank Transfer', label: 'Bank Transfer' },
  { value: 'Wipay Transfers', label: 'NWipay Transfers' },
]

const VendorInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  // const [products, setProducts] = useState();
  const [mobile, setMobile] = useState('');
  const [bank, setBank] = useState();
  const [termscondition, setTermsCondition] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertError, setAlertError] = useState(false);

  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.vendorInfoState.vendorInfo);

  useEffect(() => {
    if (vendor && vendor.status) {
      setAlertMsg('Thanks!, Basic info form is successfully updated with us');
      setTimeout(() => {
        history.push({ pathname: '/' })
      }, 3000);
    }

  })

  // const Option = props => {
  //   return ( <div> <components.Option {...props}>
  //   <input type="checkbox" checked={props.isSelected}
  //   onChange={() => null} /> <label>{props.value}</label>
  //   </components.Option> </div> );
  //   };

  const onFirstName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9]*$')) {
      setFirstName(e.target.value)
    }
  }

  const onSurName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9]*$')) {
      setSurName(e.target.value)
    }
  }

  const onMobile = (e) => (
    setMobile(e.target.rawValue)
  )

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };

  const onCompany = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setCompanyName(e.target.value)
    }
  }

  const onBusiness = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setBusinessLocation(e.target.value)
    }
  }

  // const productSelect = productList.map(item => ({
  //   value: item.value,
  //   label: item.label
  // }))

  // const onProducts = (products) => {
  //   setProducts(products)
  // }

  const bankSelect = bankList.map(item => ({
    value: item.value,
    label: item.label
  }))

  const onBank = (bank) => {
    setBank(bank)
  }

  const onTermsCondition = (e) => {
    setTermsCondition(!termscondition)
  }

  const OpenTermsCondition = () => {
    // window.open(`${window.location.origin}/termsofcondition`, '', 'width=1400,height=1200');
    // const win = window.open('/termsofcondition', "_blank");
    // win.focus();
    history.push({ pathname: '/termsofcondition' });
    window.scrollTo(0, 0);
  };

  const Submit = () => {
    if (firstName === '' || surName === '' || email === '' || companyName === '' || businessLocation === '' || products === '' || bank === '') {
      setAlertError(true)
      setAlertMsg('Please fill all the fields');
    } else if (termscondition === false) {
      setAlertMsg('Please accept the Terms & Conditions and Privacy Policy');
    } else {

      const vendorInfo = {
        firstName,
        surName,
        email,
        companyName,
        businessLocation,
        products,
        bank: 'abcd'
      };
      dispatch({ type: 'VENDOR_INFO_REQUEST', vendorInfo });
      setAlertMsg('');
    }
  };

  return (
    <Grid fluid>
      <Header basic />
      <Row>
        <Col className="vendorinfo" >
          <Row>
            <Col lg={12}>
              {alertMsg && <div class="alert alert-info" role="alert">{alertMsg}</div>}
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="sub-heading">
              Basic Information
            </Col>
          </Row>
          <Form className="signup-form">
            <Row className="vendor-content card">
              <Col md={6} sm={12}>
                <label className="signup-label" >What is your first name ? <span className="red-star">*</span></label>
                <input
                  type="text"
                  className={alertError && firstName === '' ? ` form-control my-input` : `form-control formy`}
                  placeholder="Firstname"
                  value={firstName}
                  onChange={onFirstName}
                  maxLength={30}
                />
              </Col>
              <Col md={6} sm={12}>
                <label className="signup-label">What is your surname ? <span className="red-star">*</span></label>
                <input
                  type="text"
                  className={alertError && surName === '' ? ` form-control my-input` : `form-control formy`}
                  placeholder="Surname"
                  value={surName}
                  onChange={onSurName}
                  maxLength={30}
                />
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label">What is your company's name ? <span className="red-star">*</span></label>
                <input
                  type="text"
                  className={alertError && companyName === '' ? ` form-control my-input` : `form-control formy`}
                  placeholder="Company Name"
                  value={companyName}
                  onChange={onCompany}
                  maxLength={30}
                />
              </Col>
              <Col md={6} sm={12}>
                <label className="signup-label">Where is your business located ? <span className="red-star">*</span></label>
                <input
                  type="text"
                  className={alertError && businessLocation === '' ? ` form-control my-input` : `form-control formy`}
                  placeholder="Business Located"
                  value={businessLocation}
                  onChange={onBusiness}
                  maxLength={30}
                />
              </Col>

              <Col md={6} sm={12}>
                <label className="signup-label">Business Contact Number </label>
                <Cleave
                  className="form-control"
                  placeholder="Enter contact number"
                  value={mobile}
                  onChange={onMobile}
                  options={{
                    blocks: [3, 3, 4],
                    numericOnly: true
                  }}
                // options={{ phone: true, phoneRegionCode: "US" }}
                />
              </Col>
              <Col md={6} sm={12}>
                <label className="signup-label">Email <span className="red-star">*</span></label>
                <input
                  type="Email"
                  className={alertError && email === '' ? ` form-control my-input` : `form-control formy`}
                  placeholder="Email"
                  value={email}
                  onChange={onEmail}
                  maxLength={30}
                />
              </Col>

              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Upload Photo of Yourself <span className="red-star">*</span></label>
                  <div className='file-input'>
                    <input type='file' />
                    <span className='button'>Choose</span>
                    <span className='label' >No file selected </span>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Upload Logo </label>
                  <div className='file-input'>
                    <input type='file' />
                    <span className='button'>Choose</span>
                    <span className='label' >No file selected </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="vendor-content card">
              <Col md={6} sm={12} className={`clear-city ${alertError && !bank && `dropdown-alert`}`}>
                <label className="signup-label">Choose your bank <span className="red-star">*</span></label>
                <Select
                  type="text"
                  className="prof-select "
                  placeholder="Choose Bank."
                  value={bank}
                  onChange={onBank}
                  options={bankSelect}
                  isSearchable={true}
                />
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label">Bank Account Number <span className="red-star">*</span></label>
                <input
                  type="text"
                  className='form-control'
                  placeholder="Company Name"
                  // value={companyName}
                  // onChange={onCompany}
                  maxLength={30}
                />
              </Col>
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Upload Company Registration <span className="red-star">*</span></label>
                  <div className='file-input'>
                    <input type='file' />
                    <span className='button'>Choose</span>
                    <span className='label' >No file selected </span>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Proof of Address</label>
                  <div className='file-input'>
                    <input type='file' />
                    <span className='button'>Choose</span>
                    <span className='label' >No file selected </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="vendor-content card">
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label radio-label">WiPiay Account <span className="red-star">*</span></label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" for="exampleRadios1">
                      Yes
                      </label>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" for="exampleRadios1">
                      NO
                       </label>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label">WiPiay Account Number <span className="red-star">*</span></label>
                <input
                  type="text"
                  className='form-control '
                  placeholder="WiPiay number "
                  maxLength={30}
                />
              </Col>
            </Row>
            <Row className="vendor-content card">
              <Col md={6} sm={12} >
                <label className="signup-label">Which do you prefer?<span className="red-star">*</span></label>
                <Select
                  type="text"
                  className="prof-select "
                  options={youPrefer}
                  placeholder="choose"
                  isSearchable={false}
                />
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label">IK Payout Options<span className="red-star">*</span></label>
                <Select
                  type="text"
                  className="prof-select "
                  options={ikOptions}
                  placeholder="choose"
                  isSearchable={false}
                />
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label radio-label">US Account Available<span className="red-star">*</span></label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                  <label className="form-check-label" for="exampleRadios1">
                    Yes
                      </label>
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                  <label className="form-check-label" for="exampleRadios1">
                    NO
                       </label>
                </div>
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
                <span className="login-error-msg">
                  {/* {alertMsg} */}
                </span>
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

export default VendorInfo;
