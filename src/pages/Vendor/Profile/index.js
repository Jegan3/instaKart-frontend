/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Grid } from 'react-bootstrap';
import { Image } from 'antd';
import Cleave from "cleave.js/react";
import { message, Modal, Upload, Button, } from 'antd';
import Select from 'react-select';
import { bankList } from '../../../constants/BankList';
import Headerbar from '../../../components/Headerbar';
import ImgCrop from 'antd-img-crop';
import Loader from '../../../components/Loader';


// import Overlay from '../../../components/Overlay';
// import Loader from '../../../components/Loader';
// import { Email } from '@material-ui/icons';



let fileList = [];

const ikOptionsList = [
  { value: 'Fortnightly', label: 'Fortnightly ' },
  { value: 'Monthly', label: 'Monthly ' },
]

const preferenceList = [
  { value: 'Bank Transfer', label: 'Bank Transfer' },
  { value: 'Wipay Transfer', label: 'Wipay Transfer' },
]


const Profile = () => {

  const [companyLogo, setCompanyLogo] = useState();;
  const [businessLocation, setBusinessLocation] = useState();;
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [companyName, setCompanyName] = useState();;
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [bank, setBank] = useState();;
  const [bankAccount, setBankAccount] = useState();
  const [wipay, setWipay] = useState('')
  const [wipayAccount, setWipayAccount] = useState()
  const [preference, setPreference] = useState();;
  const [ikOptions, setIkoptions] = useState();;
  const [uploadAddress, setUploadAddress] = useState();
  const [uploadRegistration, setUploadRegistration] = useState();
  const [uploadId, setUploadId] = useState();
  const [disabled, setDisabled] = useState(true);
  const [usAccount, setUsAccount] = useState();;
  const [validate, setValidate] = useState();;
  const [alertError, setAlertError] = useState(false);

  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.profileState.profile);
  const isLoading = useSelector((state) => state.profileState.isLoading) ;
  const bankSet = profileInfo && profileInfo.bank;
  const ikOptionSet = profileInfo && profileInfo.ikOptions;

  const profileLogo = profileInfo && profileInfo.logo;
  const profileAddress = profileInfo && profileInfo.addressImage;
  const profileId = profileInfo && profileInfo.idImage;
  const profileRegistration = profileInfo && profileInfo.companyRegImage;


  useEffect(() => {
    dispatch({ type: 'PROFILE_REQUEST' });
  }, [])

  const bankLists = [
    { value: bankSet , label: bankSet},
  ]

  const ikOptionLists = [
    { value: ikOptionSet , label: ikOptionSet},
  ]

   const onCompanyLogo = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    const reader = new FileReader();
    reader.onload = () => {
      setCompanyLogo(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const onPreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true)
    setPreviewImage(file.url || file.preview)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const fakeRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('OK')
    }, 1000)
  }

  const onFirstName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setFirstName(e.target.value)
    }
  }

  const onLastName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setLastName(e.target.value)
    }
  }
  const onUsAccount = (e) => {
    setUsAccount(e.target.value)
  }

  const onCompanyName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setCompanyName(e.target.value)
    }
  }

  const onBusiness = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setBusinessLocation(e.target.value)
    }
  }

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const valid = validateEmail(email);

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value)
    }
  }

  const onMobile = e => {
    setMobile(e.target.value)
    setProfileDetail('mobile')
  }

  const onWipay = (e) => {
    setWipay(e.target.value)
    if (e.target.value === 'Yes') {
      setPreference('')
    } else if (e.target.value === 'No') {
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

  const onEdit = () => {
   setDisabled(false)
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

  const firstNameInfo = !firstName && firstName !== '' ? profileInfo && profileInfo.firstName : firstName;
  const lastNameInfo = !lastName && lastName !== '' ? profileInfo && profileInfo.lastName : lastName;
  const mobileInfo = !mobile && mobile !== '' ? profileInfo && profileInfo.mobile : mobile;
  const emailInfo = !email && email !== '' ? profileInfo && profileInfo.email : email;
  const businessLocationInfo = !businessLocation && businessLocation !== '' ? profileInfo && profileInfo.businessLocation : businessLocation;
  const companyNameInfo = !companyName && companyName !== '' ? profileInfo && profileInfo.companyName : companyName;
  const bankInfo = !bank && bank !== '' ? bankLists : bank ;
  const ikOptionsInfo = !ikOptions && ikOptions !== '' ? ikOptionLists : ikOptions;
  const bankAccountInfo = !bankAccount && bankAccount !== '' ? profileInfo && profileInfo.bankAccount : bankAccount;
  const wipayAccountInfo = !wipayAccount && wipayAccount !== '' ? profileInfo && profileInfo.wipayAccount : wipayAccount;
  //const usAccountInfo = !usAccount && usAccount !== '' ? profileInfo && profileInfo.usAccount : usAccount;
  const usStatusInfo = !usAccount && usAccount !== '' ? profileInfo && profileInfo.usAccount : usAccount
  const wipayStatusInfo = !wipay && wipay !== '' ? profileInfo && profileInfo.wipay : wipay


//console.log('usstatus',usAccountStatusInfo)

 
console.log('ikOptionsInfo',ikOptionsInfo)
  
  const onSubmit = () => {
    if (!firstNameInfo || !lastNameInfo || !mobileInfo || !emailInfo || !companyNameInfo
      || !businessLocationInfo || !ikOptionsInfo) {
      setAlertError(true)
      setDisabled(false)
      message.error('Please fill all the fields')
    } else if (email === '' || email && valid === false) {
      setAlertError(true);
      setValidate(true)
      message.error('Please enter the valid Email')
      // } else if (mobileInfo.length !== 12) {
      //   message.error('Please enter the valid Mobile')
    } else if (wipay === 'Yes' && (!wipayAccount || !preference)) {
      setAlertError(true)
      setDisabled(false)
      message.error('Please fill all the fields')
    } else if (disabled) {
      setDisabled(false)
    } else {
      message.success('Your Info Update Successfully');
      setDisabled(true)
      const Profile = {
        firstName: firstNameInfo,
        lastName: lastNameInfo,
        companyName: companyNameInfo,
        email: emailInfo,
        mobile: mobileInfo,
        businessLocation: businessLocationInfo,
        bank: bankInfo.value,
        bankAccount: bankAccountInfo,
        wipay,
        wipayAccount: wipayAccountInfo,
        usAccount : usAccountInfo,
        uploadId,
        uploadAddress,
        uploadRegistration,
        //preference: preference.value,
        ikOptions: ikOptionsInfo.value,
      };
      dispatch({ type: 'PROFILE_REQUEST', Profile });
      console.log('profile', Profile)
    }
  }

  //const button = disabled ? 'Edit' : 'Save'

  return (
    <div className="wrapper">
       {isLoading && <Loader />}
      <div className="rightside-panel vendor-profile-page">
        <Headerbar headerName="Profile" />
        <div className='profile-page-dgn'>
          <Row className="top-row">
            <Col xs={12} lg={5} >
              <div className="cardetails-business">
                <Row>
                  <div className="info-lable">
                    <h3>Business Information</h3>
                  </div>
                  <Col lg={12} className='avtar-info' >
                    <div className="photo">
                      <img src={!companyLogo && companyLogo !== '' ? profileLogo : !companyLogo ? "images/Your-logo-here.png" : companyLogo} />
                    </div>
                    <div className="image-upload">
                      <ImgCrop rotate>
                        <Upload
                          fileList={fileList}
                          disabled={disabled}
                          customRequest={fakeRequest}
                          onChange={onCompanyLogo}
                          type="file"
                          accept="image/*"
                          showUploadList={false}
                        >
                          <label for="file-input">
                            <i className={!disabled ? "fa fa-camera" : " fa fa-none"}
                              disabled={disabled} />
                          </label>
                        </Upload>
                      </ImgCrop>
                    </div>
                  </Col>
                  <Col lg={12} >
                    <div clasName="personal-details" >
                      <div className="label-myprofile">
                        <label className="card-info-label">Company Name  </label>
                        <input
                          className={alertError && !companyNameInfo ? ` form-control my-input` : `form-control formy`}
                          disabled={disabled}
                          value={companyNameInfo}
                          type="text"
                          placeholder="Company Name"
                          onChange={onCompanyName}
                          maxLength={30}>
                        </input>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label"> Business Location  </label>
                        <input
                          className={alertError && !businessLocationInfo ? ` form-control my-input` : `form-control formy`}
                          disabled={disabled}
                          value={businessLocationInfo}
                          type="text"
                          placeholder="Business Located"
                          onChange={onBusiness}
                          maxLength={30}>
                        </input>
                      </div>
                      <Row className="proof-upload">
                        <div >
                          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="upload-proofs">
                            <div className="address-proof">
                              <label className="card-info-label">Address</label>
                              <Image
                                width={100}
                                height={100}
                                src={!uploadAddress && uploadAddress !== '' ? profileAddress : "images/Your-logo-here.png"} />
                            </div>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="upload-proofs">
                            <div className="company-registration">
                              <label className="card-info-label">Registration</label>
                              <Image
                                width={100}
                                height={100}
                                src={!uploadAddress && uploadAddress !== '' ? profileRegistration : "images/Your-logo-here.png"} />
                            </div>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="upload-proofs">
                            <div className="company-registration">
                              <label className="card-info-label">ID</label>
                              <Image
                                width={100}
                                height={100}
                                src={!uploadAddress && uploadAddress !== '' ? profileId : "images/Your-logo-here.png"} />
                            </div>
                          </Col>
                        </div>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <Row className="right-row">
                <div className="cardetails-personal">
                  <Row >
                    <div className="info-lable-right-side">
                      <h3>Personal Information</h3>
                    </div>
                    <Col xs={12} sm={6} md={6} lg={6} >
                      <div className="label-myprofile">
                        <label className="card-info-label">First Name <span className="red-star">*</span> </label>
                        <input
                          disabled={disabled}
                          type="text"
                          className={alertError && !firstNameInfo ? ` form-control my-input` : `form-control formy`}
                          placeholder="Firstname"
                          value={firstNameInfo}
                          onChange={onFirstName}
                          maxLength={30}>
                        </input>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label">Last Name <span className="red-star">*</span> </label>
                        <input
                          disabled={disabled}
                          type="text"
                          className={alertError && !lastNameInfo ? ` form-control my-input` : `form-control formy`}
                          placeholder="Lastname"
                          value={lastNameInfo}
                          onChange={onLastName}
                          maxLength={30}>
                        </input>
                      </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                      <div className="label-myprofile">
                        <label className="card-info-label">Email </label>
                        <input
                          disabled={disabled}
                          className={alertError && !emailInfo || validateEmail(email) === false && validate ? ' form-control my-input' : 'form-control formy'}
                          type="Email"
                          value={emailInfo}
                          placeholder="Email"
                          onChange={onEmail}
                          maxLength={30}>
                        </input>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label">Contact No <span className="red-star">*</span> </label>
                        <Cleave
                          className={alertError && !mobileInfo ? ` form-control my-input` : `form-control formy`}
                          placeholder="Enter contact number"
                          disabled={disabled}
                          value={mobileInfo}
                          onChange={onMobile}
                          options={{
                            blocks: [3, 3, 4],
                            numericOnly: true
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="cardetails-bank">
                  <Row>
                    <div className="info-lable-right-side">
                      <h3>Bank Information</h3>
                    </div>
                    <Col xs={12} sm={6} md={6} lg={6}>
                      <div className="label-myprofile">
                        <label className="card-info-label"> Bank  </label>
                        <Select
                          type="text"
                          className={`${alertError && !bankInfo && `dropdown-alert`}`}
                          className=""
                          placeholder="Choose Bank."
                          value={bankInfo}
                          onChange={onBank}
                          options={bankSelect}
                          isSearchable={true}
                          isDisabled={disabled ? bankSelect : null}
                        >
                        </Select>
                      </div>
                      <div className="label-myprofile">
                        <label className="select-label radio-label">WiPay</label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            disabled={disabled}
                            type="radio"
                            value='Yes'
                            onChange={onWipay}
                            checked={wipayStatusInfo === true ? true : false} />
                          <label className="form-check-label" for="exampleRadios1">
                            Yes
                          </label>
                          <input
                            className="form-check-input"
                            disabled={disabled}
                            type="radio"
                            value='No'
                            onChange={onWipay}
                            checked={wipayStatusInfo === false ? true : false} />
                          <label className="form-check-label" for="exampleRadios1">
                            No
                          </label>
                        </div>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label">Which do you prefer? {wipay === 'Yes' && <span className="red-star">*</span>}</label>
                        <Select
                          type="text"
                          className={`${alertError && wipay === "Yes" && !preference && `dropdown-alert`}`}
                          placeholder=" preference"
                          value={preference}
                          disabled={disabled}
                          onChange={onPreference}
                          options={preferenceList}
                          isSearchable={false}
                          isDisabled={wipay === 'No' || !wipay}
                        />
                      </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                      <div className="label-myprofile">
                        <label className="card-info-label"> Bank Account No </label>
                        <input
                          type="text"
                         // className={alertError && bank && !bankAccountInfo ? ` form-control my-input` : `form-control formy`}
                         className="form-control formy`"
                          placeholder="Bank account number"
                          value={bankAccountInfo}
                          onChange={onBankAccount}
                          disabled={!bank}
                          maxLength={15}>
                        </input>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label">WiPay Account Number {wipay === 'Yes'}</label>
                        <input
                          type="text"
                          className="form-control formy`"
                          //className={alertError && !wipayAccountInfo && wipay === 'Yes' ? ` form-control my-input` : `form-control formy`}
                          placeholder="WiPay number"
                          maxLength={10}
                          value={wipayAccountInfo}
                          onChange={onWipayNumber}
                          disabled={wipay === 'No' || !wipay}
                        />
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label"> IK Payout Option <span className="red-star">*</span>  </label>
                        <Select
                          type="text"
                          className={`${alertError && !ikOptionsInfo && `dropdown-alert`}`}
                          placeholder=" payout option"
                          value={ikOptionsInfo}
                          onChange={onIkoptions}
                          options={ikOptionsList}
                          isSearchable={false}
                          isDisabled={disabled ? ikOptionsList : null}
                        />
                      </div>
                    </Col>
                    <div className="label-myprofile">
                      <Col md={6} sm={12} >
                        <label className="signup-label radio-label">US Account Available </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            disabled={disabled}
                            type="radio"
                            value="Yes"
                            onChange={onUsAccount}
                            checked={usStatusInfo === true ? true : false}
                          />
                          <label className="form-check-label" for="exampleRadios1">
                            Yes
                          </label>
                          <input
                            className="form-check-input"
                            disabled={disabled}
                            type="radio"
                            value="No"
                            onChange={onUsAccount}
                            checked={usStatusInfo === false ? true : false}
                          />
                          <label className="form-check-label" for="exampleRadios1">
                            No
                          </label>
                        </div>
                      </Col>
                    </div>
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
          <Row className="bottom-row">
            <Col className="product-button">
            {disabled === true ? <button
                type="button"
                className="btn btn-primary btn-block modal-butn"
                onClick={onEdit} >
                Edit
              </button> :
              <button
                type="button"
                className="btn btn-primary btn-block modal-butn"
                onClick={onSubmit} >
                Submit
              </button>}
            </Col>
          </Row>
        </div>
      </div>
    </div >
  )
}

export default Profile;
