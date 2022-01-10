/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Cleave from "cleave.js/react";
import ReactTable from 'react-table';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import { TimePicker, message } from 'antd';
import moment from 'moment';
import Table from '../../../components/Table';
import { Locale } from '../../../constants/Locale';
import Loader from '../../../components/Loader';

// const weekData = [
//   {
//     title: 'Monday',
//     openingTime: null,
//     closingTime: null,
//     closed: false,
//   },
//   {
//     title: 'Tuesday',
//     openingTime: '00:00',
//     closingTime: '00:00',
//     closed: false,
//   },
//   {
//     title: 'Wednesday',
//     openingTime: '00:00',
//     closingTime: '00:00',
//     closed: false,
//   },
//   {
//     title: 'Thursday',
//     openingTime: '00:00',
//     closingTime: '00:00',
//     closed: false,
//   },
//   {
//     title: 'Friday',
//     openingTime: '00:00',
//     closingTime: '00:00',
//     closed: false,
//   },
//   {
//     title: 'Saturday',
//     openingTime: '00:00',
//     closingTime: '00:00',
//     closed: false,
//   },
//   {
//     title: 'Sunday',
//     openingTime: '00:00',
//     closingTime: '00:00',
//     closed: false,
//   },
// ]


const StoreInfo = ({ storeId, setStoreHeader }) => {
  const [storeLogo, setStoreLogo] = useState();
  const [aboutStore, setAboutStore] = useState();
  const [fileList, setImageList] = useState([]);
  const [storeDetail, setStoreDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [storeName, setStoreName] = useState();
  const [address, setAddress] = useState();
  const [countryId, setCountryId] = useState();
  const [cityId, setCityId] = useState();
  const [zipCode, setZipCode] = useState();
  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState('');
  const [fbId, setFbId] = useState();
  const [igId, setIgId] = useState();
  const [mobile, setMobile] = useState();
  const [updatedCityOptions, setUpdatedCityOptions] = useState();
  const [alertError, setAlertError] = useState(false);
  const [button, setButton] = useState(false)
  const [countryDetails, setCountryDetails] = useState();
  const [cityDetails, setCityDetails] = useState();
  const [disabled, setDisabled] = useState(false);
  const [alertMsg, setAlertMsg] = useState(false);

  const dispatch = useDispatch();
  const storeInfo = useSelector((state) => state.storeInfoState.storeInfo);
  const isLoading = useSelector((state) => state.storeInfoState.isLoading);
  const storeInfoUpdate = useSelector((state) => state.storeInfoUpdateState.storeInfoUpdate);
  const invalidStoreInfoUpdate = useSelector((state) => state.storeInfoUpdateState.error);

  const countryList = storeInfo && storeInfo.storeInfo.countryId;
  const cityList = storeInfo && storeInfo.storeInfo.cityId;
  const addressDetails = storeInfo && storeInfo.storeInfo.address;

  const storeNameInfo = !storeDetail || (!storeName && storeName !== '') ? storeInfo && storeInfo.storeInfo.storeName : storeName;
  const storeLogoInfo = !storeDetail || (!storeLogo && storeLogo !== '') ? storeInfo && storeInfo.storeInfo.storeLogo : storeLogo;
  const aboutStoreInfo = !storeDetail || (!aboutStore && aboutStore !== '') ? storeInfo && storeInfo.storeInfo.aboutStore : aboutStore;
  const addressInfo = !storeDetail || (!address && address !== '') ? storeInfo && storeInfo.storeInfo.address : address;
  const zipCodeInfo = !storeDetail || (!zipCode && zipCode !== '') ? storeInfo && storeInfo.storeInfo.zipCode : zipCode;
  const emailIdInfo = !storeDetail || (!email && email !== '') ? storeInfo && storeInfo.storeInfo.emailId : email;
  const fbIdInfo = !storeDetail || (!fbId && fbId !== '') ? storeInfo && storeInfo.storeInfo.fbId : fbId;
  const igIdInfo = !storeDetail || (!igId && igId !== '') ? storeInfo && storeInfo.storeInfo.igId : igId;
  const cityInfo = !storeDetail || (!cityId && cityId !== '') ? (countryList ? cityDetails && cityDetails : cityId) : cityId;
  const countryInfo = !storeDetail || (!countryId && countryId !== '') ? (countryList ? countryDetails && countryDetails : countryId) : countryId;
  const mobileInfo = !storeDetail || (!mobile && mobile !== '') ? storeInfo && storeInfo.storeInfo.mobile : mobile;

  useEffect(() => {
    if (storeId) {
      dispatch({ type: 'STORE_INFO_REQUEST', storeId });
      dispatch({ type: 'STORE_INFO_CHECK' });
      setStoreLogo()
      setAboutStore()
      setStoreName()
      setAddress()
      setCountryId()
      setZipCode()
      setCityId()
      setEmail()
      setFbId()
      setIgId()
      setMobile()
      setAlertMsg(false)
      setStoreDetail(false)
      setValidate(false)
    }
  }, [storeId])

  useEffect(() => {
    // For New Store Enable
    if (addressDetails && addressDetails) {
      setDisabled(true);
      setButton(false)
      dispatch({ type: 'STORE_INFO_SUBMIT' });
    } else {
      setDisabled(false);
      setButton(true)
    }
  }, [addressDetails])

  useEffect(() => {
    if (storeInfoUpdate && storeInfoUpdate.status && alertMsg) {
      message.success(`${storeInfoUpdate.message}`)
      setButton(false)
      setDisabled(true)
    } else if (invalidStoreInfoUpdate) {
      message.error('invalid Error');
    }
  }, [storeInfoUpdate, invalidStoreInfoUpdate]);

  //Country from Api
  useEffect(() => {
    Locale.filter(item => {
      if (item._id === countryList) {
        const countryDetails = ({
          value: item._id,
          label: item.countryName
        })
        setCountryDetails(countryDetails);
      }
    })
  }, [countryList]);

  //City from Api
  useEffect(() => {
    Locale.filter((item) => {
      item.cities.filter((item) => {
        if (item._id === cityList) {
          const cityDetails = ({
            value: item._id,
            label: item.cityName,
          });
          setCityDetails(cityDetails);
        }
      });
    })
  }, [cityList]);

  // City Options
  useEffect(() => {
    Locale.filter((item) => {
      if (countryId && item._id === countryId.value) {
        const city = item.cities.sort((a, b) => a.cityName.localeCompare(b.cityName)).map((data) => ({
          value: data._id,
          label: data.cityName,
        }));
        setUpdatedCityOptions(city);
      }
    });
  }, [countryId]);

  const onAvatarImage = ({ fileList: newFileList }) => {
    if (newFileList.length && newFileList[newFileList.length - 1].status === 'done') {
      let file = newFileList[newFileList.length - 1].originFileObj;
      const reader = new FileReader();
      reader.onload = () => {
        setStoreLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setImageList(newFileList);
    setStoreDetail(true)
  }

  const onAboutStore = (e) => {
    setAboutStore(e.target.value)
    setStoreDetail(true)
  }

  const onStoreName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setStoreName(e.target.value)
      // call back for header store name
      setStoreHeader(e.target.value)
      setStoreDetail(true)
    }
  }

  const onAddress = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setAddress(e.target.value)
      setStoreDetail(true)
    }
  }

  // Country Options
  const onCountry = (countryId) => {
    setCountryId(countryId)
    setCityId('')
    setAlertError(false)
  }

  // Country Options
  const countryOptions = Locale.map((item) => ({
    value: item._id,
    label: <div><img className="flag" src={item.flag} alt="new" /><span className="signup-flag">{item.countryName}</span></div>,
  }));

  const onCity = (city) => {
    setCityId(city)
    setStoreDetail(true)
  }

  const onZipCode = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setZipCode(e.target.value)
      setStoreDetail(true)
    }
  }

  const validateEmail = (emailIdInfo) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(emailIdInfo);
  };

  const validEmail = validateEmail(emailIdInfo);

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
      setStoreDetail(true)
    }
  };

  const onFbId = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9._]*$')) {
      setFbId(e.target.value)
      setStoreDetail(true)
    }
  };

  const onIgId = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9._]*$')) {
      setIgId(e.target.value)
      setStoreDetail(true)
    }
  };

  const onMobile = (e) => {
    setMobile(e.target.rawValue)
    setStoreDetail(true)
  }

  const fakeRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('OK')
    }, 1000)
  }

  const onUpdate = () => {
    setButton(true)
    setDisabled(false)
  }

  const onSubmit = () => {
    if (!countryInfo || !emailIdInfo || !mobileInfo || !cityInfo) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else if (aboutStoreInfo.length < 10) {
      message.error('Please fill the About Store with minimum 10 characters');
      setAlertError(true)
    } else if (storeNameInfo.length < 3) {
      message.error('Please fill the Store Name with minimum 3 characters');
      setAlertError(true)
    } else if (validEmail === false) {
      setAlertError(true)
      message.error('Please enter the valid Email')
      setValidate(true)
    } else if (addressInfo.length < 10) {
      message.error('Please fill the Address with minimum 10 characters');
      setAlertError(true)
    } else if (mobileInfo.length < 10) {
      message.error('Please fill the Contact Number with minimum 10 characters');
      setAlertError(true)
    } else if (disabled) {
      setDisabled(false)
    } else {
      const storeUpdate = {
        storeName: storeNameInfo,
        storeLogo: storeLogoInfo,
        aboutStore: aboutStoreInfo,
        address: addressInfo,
        countryId: countryInfo.value,
        cityId: cityInfo.value,
        zipCode: zipCodeInfo,
        emailId: emailIdInfo,
        fbId: fbIdInfo,
        igId: igIdInfo,
        mobile: mobileInfo,
        estoreId: storeId,
      };
      dispatch({ type: 'STORE_INFO_UPDATE_REQUEST', storeUpdate });
      dispatch({ type: 'STORE_INFO_SUBMIT' });
      setAlertMsg(true)
    };
  }

  return (
    <div >
      {isLoading && <Loader />}
      <div >
        <div className="main-content general-info">
          <Grid fluid>
            <Row>
              <Row className="form-content card">
                <Col md={6} className='left-info' >
                  <p className='reg-num'>
                  </p>
                  <Row>
                    <Col md={12} >
                      <div className='avtar-info' >
                        <div className='load-info'>
                          <div>
                            <div className="photo">
                              {storeLogo && storeDetail ? <img src={storeLogo} alt='' /> : <img src={storeInfo && storeInfo.storeInfo.storeLogo ? storeInfo.storeInfo.storeLogo : "images/logo-here.png"} />}
                            </div>
                            <div className="image-upload">
                              <ImgCrop>
                                <Upload
                                  fileList={fileList}
                                  customRequest={fakeRequest}
                                  onChange={onAvatarImage}
                                  type="file"
                                  accept="image/*"
                                  showUploadList={false}
                                  disabled={disabled}
                                >
                                  <label for="file-input">
                                    <i className="fa fa-camera" />
                                  </label>
                                </Upload>
                              </ImgCrop>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <label className="signup-label">About Store < span className="red-star">*</span> </label>
                      <textarea className={alertError && aboutStoreInfo.length < 10 ? ` form-control my-input` : `form-control formy`}
                        name="message"
                        placeholder='Type Something..'
                        disabled={disabled}
                        value={aboutStoreInfo}
                        onChange={onAboutStore}
                        maxLength={500}
                        rows="4">
                      </textarea>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className='right-info' >
                  <Row>
                    <Col md={12}>
                      <label className="signup-label">Store Name < span className="red-star">*</span> </label>
                      <input className={alertError && storeNameInfo.length < 3 ? ` form-control my-input` : `form-control formy`}
                        type="text"
                        placeholder="Enter Your Store Name"
                        maxLength={30}
                        value={storeNameInfo}
                        onChange={onStoreName}
                        disabled={disabled}
                      />
                    </Col>
                    <Col md={12}>
                      <label className="store-label">Address <span className="red-star">*</span></label>
                      <textarea className={alertError && addressInfo.length < 10 ? ` form-control my-input` : `form-control formy`}
                        type="text"
                        placeholder="Enter Your Address"
                        maxLength={100}
                        value={addressInfo}
                        disabled={disabled}
                        onChange={onAddress}
                        rows="4">
                      </textarea>
                    </Col>
                    <Col md={12} >
                      <label className="store-label">Country <span className="red-star">*</span></label>
                      <Select
                        type="text"
                        className={` clear-city ${alertError && !countryInfo ? `dropdown-alert` : `prof-select `}`}
                        placeholder="Select Country"
                        isSearchable={false}
                        value={countryInfo}
                        onChange={onCountry}
                        options={countryOptions}
                        isDisabled={disabled && countryOptions}
                      />
                    </Col>
                    <Col md={12}>
                      <Row>
                        <Col md={6}>
                          <label className="store-label">City <span className="red-star">*</span></label>
                          <Select
                            type="text"
                            className="prof-select "
                            placeholder="Select City"
                            value={cityInfo}
                            onChange={onCity}
                            options={updatedCityOptions}
                            isSearchable={false}
                            isDisabled={!countryId}
                          />
                        </Col>
                        <Col md={6} className='zipcode'>
                          <label className="store-label">ZIP Code</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Zip Code"
                            maxLength={10}
                            value={zipCodeInfo}
                            onChange={onZipCode}
                            disabled={disabled}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="form-content card resta">
                <Col md={12}>
                  <Col md={3} className='zipcode'>
                    <label className="signup-label">Email ID <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className={alertError && emailIdInfo === '' || validateEmail(emailIdInfo) === false && validate ? `form-control my-input` : `form-control formy`}
                      placeholder="Enter Your Email ID"
                      maxLength={30}
                      disabled={disabled}
                      value={emailIdInfo}
                      onChange={onEmail}
                    />
                  </Col>
                  <Col md={3}>
                    <label className="signup-label">Facebook ID</label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      placeholder="Enter Your Facebook ID"
                      value={fbIdInfo}
                      onChange={onFbId}
                      disabled={disabled}
                    />
                  </Col>
                  <Col md={3}>
                    <label className="signup-label">Instagram ID</label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      value={igIdInfo}
                      onChange={onIgId}
                      placeholder="Enter Your Instagram ID"
                      disabled={disabled}
                    />
                  </Col>
                  <Col md={3} className='zipcode'>
                    <label className="signup-label">Contact Number <span className="red-star">*</span></label>
                    <Cleave
                      className={alertError && mobileInfo.length < 10 ? `form-control my-input` : `form-control formy`}
                      placeholder="Enter Your Contact Number"
                      value={mobileInfo}
                      onChange={onMobile}
                      disabled={disabled}
                      options={{
                        blocks: [3, 3, 4],
                        numericOnly: true
                      }}
                    />
                  </Col>
                </Col>
              </Row>
              <Row md={12} className="margin-control">
                <Col lg={2} md={3} sm={4} xs={6} className="product-button">
                  {button === false ?
                    <button
                      type="button"
                      className="btn btn-primary btn-block modal-butn"
                      onClick={onUpdate}
                    >
                      Edit
                    </button> :
                    <button
                      type="button"
                      className="btn btn-primary btn-block modal-butn"
                      onClick={onSubmit}
                    >
                      Submit
                    </button>}
                </Col>
              </Row>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default StoreInfo;