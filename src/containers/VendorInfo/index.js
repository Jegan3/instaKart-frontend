/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Grid } from 'react-bootstrap';
import Select from 'react-select';
import Cleave from "cleave.js/react";
import { message } from 'antd';
import { history } from '../../routes';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loader from '../../components/Loader'

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

const preferenceList = [
  { value: 'Bank Transfer', label: 'Bank Transfer' },
  { value: 'Wipay Transfer', label: 'Wipay Transfer' },
]

const VendorInfo = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [uploadId, setUploadId] = useState('');
  const [uploadIdName, setUploadIdName] = useState('');
  const [uploadLogo, setUploadLogo] = useState('');
  const [uploadLogoName, setUploadLogoName] = useState('');
  const [bank, setBank] = useState();
  const [bankAccount, setBankAccount] = useState('');
  const [uploadRegistration, setUploadRegistration] = useState('')
  const [uploadRegistrationName, setUploadRegistrationName] = useState('')
  const [uploadAddress, setUploadAddress] = useState('');
  const [uploadAddressName, setUploadAddressName] = useState('');
  const [wipay, setWipay] = useState('')
  const [wipayAccount, setWipayAccount] = useState('')
  const [preference, setPreference] = useState('');
  const [ikOptions, setIkoptions] = useState('');
  const [termscondition, setTermsCondition] = useState(false);
  const [usAccount, setUsAccount] = useState('');
  const [alertError, setAlertError] = useState(false);

  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.vendorInfoState.vendorInfo);
  const isLoading = useSelector((state) => state.vendorInfoState.isLoading);
  const invalidVendor = useSelector((state) => state.vendorInfoState.error);

  // vendor details from url
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const decode = params.get('info');
  const info = window.atob(decode)
  const vendorDetails = JSON.parse(info)

  useEffect(() => {
    if (vendor && vendor.status) {
      message.success('Thanks!, Basic info form is successfully updated with us')
      setTimeout(() => {
        history.push({ pathname: '/' })
      }, 3000);
    } else if (invalidVendor) {
      message.error('invalid Error');
    }
  }, [vendor, invalidVendor]);


  // const Option = props => {
  //   return ( <div> <components.Option {...props}>
  //   <input type="checkbox" checked={props.isSelected}
  //   onChange={() => null} /> <label>{props.value}</label>
  //   </components.Option> </div> );
  //   };

  const onFirstName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setFirstName(e.target.value)
    }
  }

  const onSurName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setLastName(e.target.value)
    }
  }

  const onMobile = (e) => (
    setMobile(e.target.rawValue)
  )

  const onUploadId = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadIdName(file.name)
      setUploadId(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const onUploadLogo = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadLogoName(file.name);
      setUploadLogo(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const bankSelect = bankList.map(item => ({
    value: item.value,
    label: item.label
  }))

  const onBank = (bank) => {
    setBank(bank)
    setPreference({ value: 'Bank Transfer', label: 'Bank Transfer' })

  }

  const onBankAccount = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setBankAccount(e.target.value)
    }
  }

  const onUploadRegistration = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadRegistrationName(file.name);
      setUploadRegistration(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const onUploadAddress = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadAddressName(file.name);
      setUploadAddress(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const onWipay = (e) => {
    setWipay(e.target.value)
    if (e.target.value === 'Yes') {
      setPreference('')
    } else if (e.target.value=== 'No'){
      setPreference({ value: 'Bank Transfer', label: 'Bank Transfer' })
    }
  }

  const onWipayNumber = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setWipayAccount(e.target.value)
    }
  }

  const onPreference = (preference) => {
    setPreference(preference)
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
    if (!firstName || !lastName || !mobile || !uploadId || !uploadAddress || !bank || !bankAccount || !ikOptions) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else if (wipay === 'Yes' && (!wipayAccount || !preference)) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else if (termscondition === false) {
      message.error('Please accept the Terms & Conditions and Privacy Policy')
    } else {

      const vendorInfo = {
        firstName,
        lastName,
        companyName: vendorDetails.company,
        businessLocation: vendorDetails.city,
        mobile,
        email: vendorDetails.email,
        uploadId,
        uploadLogo,
        bank: bank.value,
        bankAccount,
        uploadCompanyRegistration: uploadRegistration,
        uploadAddress,
        wipay,
        wipayAccount,
        preference: preference.value,
        ikOptions: ikOptions.value,
        usAccount,
      };
      dispatch({ type: 'VENDOR_INFO_REQUEST', vendorInfo });
    }
  };

  return (
    <Grid fluid>
      {isLoading && <Loader />}
      <Header basic />
      <Row>
        <Col className="vendorinfo" >
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
              <Col md={6} sm={12}>
                <label className="signup-label">Email </label>
                <input
                  type="Email"
                  className="form-control"
                  placeholder="Email"
                  value={vendorDetails.email}
                  maxLength={30}
                  disabled
                />
              </Col>
              <Col md={6} sm={12}>
                <label className="signup-label">Contact Number <span className="red-star">*</span></label>
                <Cleave
                  className={alertError && mobile === '' ? ` form-control my-input` : `form-control formy`}
                  placeholder="Enter contact number"
                  value={mobile}
                  onChange={onMobile}
                  options={{
                    blocks: [3, 3, 4],
                    numericOnly: true
                  }}
                />
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label">What is your company's name ? </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  value={vendorDetails.company}
                  maxLength={30}
                  disabled
                />
              </Col>
              <Col md={6} sm={12}>
                <label className="signup-label">Where is your business located ? </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Business Located"
                  value={vendorDetails.city}
                  maxLength={30}
                  disabled
                />
              </Col>
            </Row>
            <Row className="vendor-content card">
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Upload ID <span className="red-star">*</span></label>
                  <div className={`file-input ${alertError && !uploadId && `red`}`}>
                    <input
                      type='file'
                      onChange={onUploadId} />
                    <span className='button'>Choose</span>
                    <span className='label' >{uploadIdName ? uploadIdName : 'No file selected'} </span>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Upload Proof of Address <span className="red-star">*</span></label>
                  <div className={`file-input ${alertError && !uploadAddress && `red`}`}>
                    <input
                      type='file'
                      onChange={onUploadAddress} />
                    <span className='button'>Choose</span>
                    <span className='label' >{uploadAddressName ? uploadAddressName : 'No file selected'} </span>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Upload Logo</label>
                  <div className='file-input'>
                    <input
                      type='file'
                      onChange={onUploadLogo} />
                    <span className='button'>Choose</span>
                    <span className='label' >{uploadLogoName ? uploadLogoName : 'No file selected'} </span>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label">Upload Company Registration</label>
                  <div className='file-input'>
                    <input
                      type='file'
                      onChange={onUploadRegistration} />
                    <span className='button'>Choose</span>
                    <span className='label' >{uploadRegistrationName ? uploadRegistrationName : 'No file selected'} </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="vendor-content card">
              <Col md={6} sm={12} className={`clear-city ${alertError && !bank && `dropdown-alert`}`} >
                <label className="signup-label">Bank <span className="red-star">*</span></label>
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
                  className={alertError && bankAccount === '' ? ` form-control my-input` : `form-control formy`}
                  placeholder="Bank account number"
                  value={bankAccount}
                  onChange={onBankAccount}
                  maxLength={15}
                />
              </Col>
              <Col md={6} sm={12} >
                <div className='select-file'>
                  <label className="signup-label radio-label">WiPay</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value='Yes'
                      onChange={onWipay}
                      checked={wipay === 'Yes' ? true : false} />
                    <label className="form-check-label" for="exampleRadios1">
                      Yes
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      value='No'
                      onChange={onWipay}
                      checked={wipay === 'No' ? true : false} />
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
                  className={alertError && wipayAccount === '' && wipay === 'Yes' ? ` form-control my-input` : `form-control formy`}
                  placeholder="WiPay number"
                  maxLength={10}
                  value={wipayAccount}
                  onChange={onWipayNumber}
                  disabled={wipay === 'No' || !wipay}
                />
              </Col>
              <Col md={6} sm={12} className={`clear-country ${alertError && !preference && `dropdown-alert`}`} >
                <label className="signup-label">Which do you prefer? {wipay === 'Yes' && <span className="red-star">*</span>}</label>
                <Select
                  type="text"
                  placeholder="Choose you're preference"
                  value={preference}
                  onChange={onPreference}
                  options={preferenceList}
                  isSearchable={false}
                  isDisabled={wipay === 'No' || !wipay}
                />
              </Col>
              <Col md={6} sm={12} className={`clear-city ${alertError && !ikOptions && `dropdown-alert`}`}>
                <label className="signup-label">IK Payout Options <span className="red-star">*</span></label>
                <Select
                  type="text"
                  placeholder="Choose you're payout option"
                  value={ikOptions}
                  onChange={onIkoptions}
                  options={ikOptionsList}
                  isSearchable={false}
                />
              </Col>
              <Col md={6} sm={12} >
                <label className="signup-label radio-label">US Account Available </label>
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
