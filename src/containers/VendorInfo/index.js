/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Grid } from 'react-bootstrap';
import Select from 'react-select';
import Cleave from "cleave.js/react";
import { history } from '../../routes';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import { faYenSign } from '@fortawesome/free-solid-svg-icons';

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
  { value: 'Others', label: 'Others' },
];

const ikOptionsList = [
  { value: 'Fortnightly', label: 'Fortnightly ' },
  { value: 'Monthly', label: 'Monthly ' },
]

const youPreferList = [
  { value: 'Bank Transfer', label: 'Bank Transfer' },
  { value: 'Wipay Transfer', label: 'Wipay Transfer' },
]

const VendorInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [uploadId, setUploadId] = useState('');
  const [uploadLogo, setUploadLogo] = useState('');
  const [bank, setBank] = useState();
  const [bankAccount, setBankAccount] = useState();
  const [uploadRegistration, setUploadRegistration] = useState('')
  const [uploadAddress, setUploadAddress] = useState('');
  const [wipay, setWipay] = useState('')
  const [wipayNumber, setWipayNumber] = useState('')
  const [youPrefer, setYouPrefer] = useState();
  const [ikOptions, setIkoptions] = useState();
  const [usAccount, setUsAccount] = useState();
  const [termscondition, setTermsCondition] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertError, setAlertError] = useState(false);

  console.log('uploadId', uploadId)

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
      setLastName(e.target.value)
    }
  }

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

  const onMobile = (e) => (
    setMobile(e.target.rawValue)
  )

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };

  const onUploadId = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadId(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const onUploadLogo = (e) => {
    let file = e.target.files[0];
    setUploadLogo(file.name);
  }

  const bankSelect = bankList.map(item => ({
    value: item.value,
    label: item.label
  }))

  const onBank = (bank) => {
    setBank(bank)
  }

  const onBankAccount = (e) => {
    setBankAccount(e.target.value)
  }

  const onUploadRegistration = (e) => {
    let file = e.target.files[0];
    setUploadRegistration(file.name);
  }

  const onUploadAddress = (e) => {
    let file = e.target.files[0];
    setUploadAddress(file.name);
  }

  const onWipay = (e) => {
    setWipay(e.target.value)
  }

  const onWipayNumber = (e) => {
    setWipayNumber(e.target.value)
  }

  const onYouPrefer = (youPrefer) => {
    setYouPrefer(youPrefer)
  }

  const onIkoptions = (ikOptions) => {
    setIkoptions(ikOptions)
  }

  const onUsAccount = (e) => {
    setUsAccount(e.target.value)
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
    if (firstName === '' || lastName === '' || email === '' || companyName === '' || businessLocation === '' || bank === '') {
      setAlertError(true)
      setAlertMsg('Please fill all the fields');
    } else if (termscondition === false) {
      setAlertMsg('Please accept the Terms & Conditions and Privacy Policy');
    } else {

      const vendorInfo = {
        firstName,
        lastName,
        companyName,
        businessLocation,
        mobile,
        email,
        uploadId,
        uploadLogo,
        bank: 'abc',
        bankAccount,
        uploadCompanyRegistration: uploadRegistration,
        uploadAddress,
        wipay,
        wipayNumber,
        youPrefer,
        ikOptions,
        usAccount,
      };
      dispatch({ type: 'VENDOR_INFO_REQUEST', vendorInfo });
      setAlertMsg('');
    }
  };

  const menuStyles = {
    ///.....
    menuPortal: provided => ({ ...provided, zIndex: 9999 }),
    menu: provided => ({ ...provided, zIndex: 9999 })
    ///.....
  }

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
          <Row className="margin-control">
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
                <label className="signup-label">What is your last name ? <span className="red-star">*</span></label>
                <input
                  type="text"
                  className={alertError && lastName === '' ? ` form-control my-input` : `form-control formy`}
                  placeholder="Surname"
                  value={lastName}
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
                  <label className="signup-label">Upload ID</label>
                  <div className='file-input'>
                    <input
                      type='file'
                      onChange={onUploadId} />
                    <span className='button'>Choose</span>
                    <span className='label' >{uploadId ? uploadId : 'No file selected'} </span>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Upload Logo </label>
                  <div className='file-input'>
                    <input
                      type='file'
                      onChange={onUploadLogo} />
                    <span className='button'>Choose</span>
                    <span className='label' >{uploadLogo ? uploadLogo : 'No file selected'} </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="vendor-content card">
              <Col md={6} sm={12} className={`clear-city ${alertError && !bank && `dropdown-alert`}`}>
                <label className="signup-label">Bank </label>
                <Select
                  type="text"
                  className="prof-select "
                  placeholder="Choose Bank."
                  //for menu 
                  // menuPortalTarget={document.body}
                  // menuPosition={'fixed'}
                  // styles={menuStyles}
                  value={bank}
                  onChange={onBank}
                  options={bankSelect}
                  isSearchable={true}
                />
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label">Bank Account Number </label>
                <input
                  type="text"
                  className='form-control'
                  placeholder="Bank account number"
                  value={bankAccount}
                  onChange={onBankAccount}
                  maxLength={30}
                />
              </Col>
              <Col md={6} sm={12} >
                {/* <div className='select-file'> */}
                <label className="signup-label">Upload Company Registration </label>
                <div className='file-input'>
                  <input
                    type='file'
                    onChange={onUploadRegistration} />
                  <span className='button'>Choose</span>
                  <span className='label' >{uploadAddress ? uploadAddress : 'No file selected'} </span>
                </div>
                {/* </div> */}
              </Col>
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Upload Proof of Address</label>
                  <div className='file-input'>
                    <input
                      type='file'
                      onChange={onUploadAddress} />
                    <span className='button'>Choose</span>
                    <span className='label' >{uploadAddress ? uploadAddress : 'No file selected'} </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="vendor-content card">
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label radio-label">WiPay <span className="red-star">*</span></label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" value='Yes' onChange={onWipay} checked={wipay === 'Yes' ? true : false} />
                    <label className="form-check-label" for="exampleRadios1">
                      Yes
                    </label>
                    <input className="form-check-input" type="radio" value='No' onChange={onWipay} checked={wipay === 'No' ? true : false} />
                    <label className="form-check-label" for="exampleRadios1">
                      No
                    </label>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label">WiPay Account Number {wipay === 'Yes' && <span className="red-star">*</span>}</label>
                <input
                  type="text"
                  className='form-control '
                  placeholder="WiPay number "
                  maxLength={30}
                  value={wipayNumber}
                  onChange={onWipayNumber}
                  disabled={wipay === 'No'}
                />
              </Col>
            </Row>
            <Row className="vendor-content card">
              <Col md={6} sm={12} >
                <label className="signup-label">Which do you prefer? <span className="red-star">*</span></label>
                <Select
                  type="text"
                  className="prof-select "
                  placeholder="choose"
                  value={youPrefer}
                  onChange={onYouPrefer}
                  options={youPreferList}
                  isSearchable={false}
                />
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label">IK Payout Options <span className="red-star">*</span></label>
                <Select
                  type="text"
                  className="prof-select "
                  placeholder="choose"
                  value={ikOptions}
                  onChange={onIkoptions}
                  options={ikOptionsList}
                  isSearchable={false}
                />
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label radio-label">US Account Available <span className="red-star">*</span></label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Yes"
                    onChange={onUsAccount}
                    checked={usAccount === 'Yes' ? true : false}
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    Yes
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    value="No"
                    onChange={onUsAccount}
                    checked={usAccount === 'No' ? true : false}
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    No
                  </label>
                </div>
              </Col>
            </Row>
            <Row className="margin-control">
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
            <Row className="margin-control">
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
