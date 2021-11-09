/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Grid } from 'react-bootstrap';
import ImgCrop from 'antd-img-crop';
import Cleave from "cleave.js/react";
import { message, Modal, Upload, Button, } from 'antd';
import Select from 'react-select';
import { bankList } from '../../../constants/BankList';
import Headerbar from '../../../components/Headerbar';
import Overlay from '../../../components/Overlay';
import Loader from '../../../components/Loader';
import { Email } from '@material-ui/icons';

let fileList = [];

const ikOptionsList = [
  { value: 'Fortnightly', label: 'Fortnightly ' },
  { value: 'Monthly', label: 'Monthly ' },
]

const preferenceList = [
  { value: 'Bank Transfer', label: 'Bank Transfer' },
  { value: 'Wipay Transfer', label: 'Wipay Transfer' },
]

const MyProfile = () => {
  const [companyName, setCompanyName] = useState("");
  const [businessLocation, setbusinessLocation] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [uploadAddress, setUploadAddress] = useState([]);
  const [uploadRegistration, setUploadRegistration] = useState('')
  const [uploadId, setUploadId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState();
  const [bankAccount, setBankAccount] = useState('');
  const [wipay, setWipay] = useState('')
  const [wipayAccount, setWipayAccount] = useState('')
  const [preference, setPreference] = useState('');
  const [ikOptions, setIkoptions] = useState('');
  const [fileListRegistration, setImageRegistration] = useState([])
  const [fileListID, setImageID] = useState([])
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [disabled, setDisabled] = useState(true);
  const [usAccount, setUsAccount] = useState('');
  const [alertError, setAlertError] = useState(false);


  const dispatch = useDispatch();
  const storeInfo = useSelector((state) => state.storeInfoState.storeInfo);


  const onCompanyLogo = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    const reader = new FileReader();
    reader.onload = () => {
      setCompanyLogo(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const onChangeImageAddress = ({ fileList: newFileList }) => {

    setUploadAddress(newFileList);
  };

  const onChangeImageRegistration = ({ fileList: newFileList }) => {

    setImageRegistration(newFileList);
  };

  const onChangeID = ({ fileList: newFileList }) => {

    setImageID(newFileList);
  };

  const onUsAccount = (e) => {
    setUsAccount(e.target.value)
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

  const onSurName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setLastName(e.target.value)
    }
  }

  const onMobile = (e) => (
    setMobile(e.target.rawValue)
  )

  const onCompanyName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setCompanyName(e.target.value)
    }
  }

  const onBusiness = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setbusinessLocation(e.target.value)
    }
  }

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value)
    }
  }

  const onWipay = (e) => {
    setWipay(e.target.value)
    if (e.target.value === 'Yes') {
      setPreference('')
    } else if (e.target.value === 'No') {
      setPreference({ value: 'Bank Transfer', label: 'Bank Transfer' })
    }
  }

  const onPreference = (preference) => {
    setPreference(preference)
  }

  const onWipayNumber = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setWipayAccount(e.target.value)
    }
  }

  const onBankAccount = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setBankAccount(e.target.value)
    }
  }

  const bankSelect = bankList.map(item => ({
    value: item.value,
    label: item.label
  }))

  const onBank = (bank) => {
    setBank(bank)
    setPreference({ value: 'Bank Transfer', label: 'Bank Transfer' })

  }

  function onIkoptions(ikOptions) {
    setIkoptions(ikOptions);
  }

  const handleCancel = () => setPreviewVisible(false);

  const onSubmit = () => {

    if (!firstName || !lastName || !mobile || !bank || !bankAccount || !ikOptions || !email || !companyName
      || !businessLocation || !uploadAddress) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else if (wipay === 'Yes' && (!wipayAccount || !preference)) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else {
      message.success('Your Info Update Successfully');
      (setDisabled(true))
      const myProfileUpdate = {
        firstName,
        lastName,
        companyName,
        email,
        uploadLogo: companyLogo,
        bank: bank.value,
        bankAccount,
        wipay,
        wipayAccount,
        usAccount,
        fileListID,
        uploadAddress,
        fileListRegistration,
        preference: preference.value,
        ikOptions: ikOptions.value,

      };
      dispatch({ type: 'MY_PROFILE_UPDATE_REQUEST', myProfileUpdate });
    }
  }

  return (
    <div className="wrapper">
      <div className="rightside-panel">
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
                      {companyLogo ? <img src={companyLogo} alt='' /> : <img src={storeInfo && storeInfo.storeInfo.companyLogo ? storeInfo.storeInfo.companyLogo : "images/Your-logo-here.png"} />}
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
                            <i className="fa fa-camera"
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
                          className={alertError && companyName === '' ? ` form-control my-input` : `form-control formy`}
                          name="CompanyName"
                          disabled={disabled}
                          type="text"
                          placeholder="Company Name"
                          onChange={onCompanyName}
                          maxLength={30}>
                        </input>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label"> Business Location  </label>
                        <input
                          className={alertError && businessLocation === '' ? ` form-control my-input` : `form-control formy`}
                          disabled={disabled}
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
                              <label className="card-info-label"> Address  </label>
                              <ImgCrop rotate>
                                <Upload
                                  action="png"
                                  accept="image/*"
                                  customRequest={fakeRequest}
                                  className={alertError && uploadAddress === '' ? ` ant-upload` : `ant-upload.error`}
                                  className="upload-image"
                                  listType="picture-card"
                                  fileList={uploadAddress}
                                  onChange={onChangeImageAddress}
                                  onPreview={onPreview}
                                  disabled={disabled}
                                >
                                  {uploadAddress.length < 1 && '+ Upload'}
                                </Upload>
                              </ImgCrop>
                              <Modal
                                visible={previewVisible}
                                title={previewTitle}
                                footer={null}
                                onCancel={handleCancel}
                              >
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                              </Modal>
                            </div>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="upload-proofs">
                            <div className="company-registration">
                              <label className="card-info-label"> Registration  </label>
                              <ImgCrop rotate>
                                <Upload
                                  action="png"
                                  accept="image/*"
                                  customRequest={fakeRequest}
                                  className="upload-image"
                                  listType="picture-card"
                                  fileList={fileListRegistration}
                                  onChange={onChangeImageRegistration}
                                  onPreview={onPreview}
                                  disabled={disabled}
                                >
                                  {fileListRegistration.length < 1 && '+ Upload'}
                                </Upload>
                              </ImgCrop>
                              <Modal
                                visible={previewVisible}
                                title={previewTitle}
                                footer={null}
                                onCancel={handleCancel}
                              >
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                              </Modal>
                            </div>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="upload-proofs">
                            <div className="company-registration">
                              <label className="card-info-label"> ID  </label>
                              <ImgCrop rotate>
                                <Upload
                                  action="png"
                                  accept="image/*"
                                  customRequest={fakeRequest}
                                  className="upload-image"
                                  listType="picture-card"
                                  fileList={fileListID}
                                  onChange={onChangeID}
                                  onPreview={onPreview}
                                  disabled={disabled}
                                >
                                  {fileListID.length < 1 && '+ Upload'}
                                </Upload>
                              </ImgCrop>
                              <Modal
                                visible={previewVisible}
                                title={previewTitle}
                                footer={null}
                                onCancel={handleCancel}
                              >
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                              </Modal>
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
                          className={alertError && firstName === '' ? ` form-control my-input` : `form-control formy`}
                          placeholder="Firstname"
                          value={firstName}
                          onChange={onFirstName}
                          maxLength={30}>
                        </input>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label">Last Name <span className="red-star">*</span> </label>
                        <input
                          disabled={disabled}
                          type="text"
                          className={alertError && lastName === '' ? ` form-control my-input` : `form-control formy`}
                          placeholder="Surname"
                          value={lastName}
                          onChange={onSurName}
                          maxLength={30}>
                        </input>
                      </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                      <div className="label-myprofile">
                        <label className="card-info-label">Email </label>
                        <input
                          disabled={disabled}
                          className={alertError && email === '' ? ` form-control my-input` : `form-control formy`}
                          type="Email"
                          placeholder="Email"
                          onChange={onEmail}
                          maxLength={30}>
                        </input>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label">Contact No <span className="red-star">*</span> </label>
                        <Cleave
                          className={alertError && mobile === '' ? ` form-control my-input` : `form-control formy`}
                          placeholder="Enter contact number"
                          disabled={disabled}
                          value={mobile}
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
                        <label className="card-info-label"> Bank <span className="red-star">*</span> </label>
                        <Select
                          type="text"
                          className="prof-select "
                          // className={alertError && bank === '' ? ` form-control my-input` : `form-control formy`}
                          placeholder="Choose Bank."
                          value={bank}
                          onChange={onBank}
                          options={bankSelect}
                          isSearchable={true}
                          // isDisabled={disabled ? bankSelect : null}
                          disabled={!bank}

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
                            checked={wipay === 'Yes' ? true : false} />
                          <label className="form-check-label" for="exampleRadios1">
                            Yes
                          </label>
                          <input
                            className="form-check-input"
                            disabled={disabled}
                            type="radio"
                            value='No'
                            onChange={onWipay}
                            checked={wipay === 'No' ? true : false} />
                          <label className="form-check-label" for="exampleRadios1">
                            No
                          </label>
                        </div>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label">Which do you prefer? {wipay === 'Yes' && <span className="red-star">*</span>}</label>
                        <Select
                          type="text"
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
                        <label className="card-info-label"> Bank Account No <span className="red-star">*</span> </label>
                        <input
                          disabled={disabled}
                          type="text"
                          className={alertError && bankAccount === '' ? ` form-control my-input` : `form-control formy`}
                          placeholder="Bank account number"
                          value={bankAccount}
                          onChange={onBankAccount}
                          maxLength={15}>
                        </input>
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label">WiPay Account Number {wipay === 'Yes' && <span className="red-star">*</span>}</label>
                        <input
                          type="text"
                          className={alertError && wipayAccount === '' && wipay === 'Yes' ? ` form-control my-input` : `form-control formy`}
                          placeholder="WiPay number"
                          maxLength={10}
                          value={wipayAccount}
                          onChange={onWipayNumber}
                          disabled={wipay === 'No' || !wipay}
                        />
                      </div>
                      <div className="label-myprofile">
                        <label className="card-info-label"> IK Payout Option<span className="red-star">*</span>  </label>
                        <Select
                          type="text"
                          placeholder=" payout option"
                          value={ikOptions}
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
                            checked={usAccount === 'Yes' ? true : false}
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
                            checked={usAccount === 'No' ? true : false}
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
              {disabled ? <button
                type="button"
                className="btn btn-primary btn-block modal-butn"
                onClick={() => { setDisabled(false) }}>
                Edit
              </button> :
                <button
                  type="button"
                  className="btn btn-primary btn-block modal-butn"
                  onClick={onSubmit} >
                  Save
                </button>}
            </Col>
          </Row>
        </div>
      </div>
    </div >
  )
}

export default MyProfile;
