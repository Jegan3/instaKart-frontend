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


const StoreInfo = ({ storeId }) => {
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
  const [emailId, setEmailId] = useState();
  const [fbId, setFbId] = useState();
  const [igId, setIgId] = useState();
  const [mobile, setMobile] = useState();
  const [updatedCityOptions, setUpdatedCityOptions] = useState();
  const [openingTime, setOpeningTime] = useState();
  const [closingTime, setClosingTime] = useState();
  const [closed, setClosed] = useState();
  const [timing, setTiming] = useState([])
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


  useEffect(() => {
    dispatch({ type: 'STORE_INFO_REQUEST', storeId });
    setAlertMsg(false)
    // setAlertError(false)
  }, [])

  useEffect(() => {
    if (addressDetails && addressDetails) {
      setDisabled(true);
      setButton(false)
    }
    else {
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

  //country from Api
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

  //city from Api
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
    //   if (e.target.value.match('^[a-zA-Z0-9 !?",\'@#$%\^&*)(+=._-]*$')) {
    setAboutStore(e.target.value)
    setStoreDetail(true)
  }

  const onStoreName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setStoreName(e.target.value)
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
    // setStoreDetail(true)
  }

  // Country Options
  const countryOptions = Locale.map((item) => ({
    value: item._id,
    label: <div><img className="flag" src={item.flag} alt="new" /><span className="signup-flag">{item.countryName}</span></div>,
  }));

  //country from Api
  useEffect(() => {
    Locale.filter(item => {
      if (item._id === countryList) {
        const countryDetails = ({
          // return {
          value: item._id,
          label: <div><img className="flag" src={item.flag} alt="new" /><span className="signup-flag">{item.countryName}</span></div>,
        })
        setCountryDetails(countryDetails);
      }
    })
  }, [countryId])

  const onCity = (city) => {
    setCityId(city)
  }

  const onZipCode = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setZipCode(e.target.value)
      setStoreDetail(true)
    }
  }

  const onEmailId = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmailId(e.target.value);
      setStoreDetail(true)
      setAlertError(false)
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
    setAlertError(false)
  }

  const onOpeningTime = (info, timeString) => {
    info.original.openingTime = moment(timeString, ["h:mm A"]).format("HH:mm");
    if (!timing.length) {
      setTiming([...timing, info.original])
    } else {
      timing.includes(info.original) ? { ...timing, openingTime: moment(timeString, ["h:mm A"]).format("HH:mm") } : setTiming([...timing, info.original])
    }
  }

  const onClosingTime = (info, timeString) => {
    info.original.closingTime = moment(timeString, ["h:mm A"]).format("HH:mm");
    if (!timing.length) {
      setTiming([...timing, info.original])
    } else {
      timing.includes(info.original) ? { ...timing, closingTime: moment(timeString, ["h:mm A"]).format("HH:mm") } : setTiming([...timing, info.original])
    }
  }

  const onClosed = (info, e) => {
    setClosed(e.target.checked[info.index])
    info.original.closed = e.target.checked
    if (!timing.length) {
      setTiming([...timing, info.original])
    } else {
      timing.includes(info.original) ? { ...timing, closed: e.target.checked } : setTiming([...timing, info.original])
    }
  }

  // const [mondayOpen, setMondayOpen] = useState(null);
  // const onChange = time => {
  //   setValue(time);
  // };

  const fakeRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('OK')
    }, 1000)
  }

  const onUpdate = () => {
    setButton(true)
    setDisabled(false)
  }

  const storeNameInfo = !storeName && storeName !== '' ? storeInfo && storeInfo.storeInfo.storeName : storeName;
  const storeLogoInfo = !storeLogo && storeLogo !== '' ? storeInfo && storeInfo.storeInfo.storeLogo : storeLogo;
  const aboutStoreInfo = !aboutStore && aboutStore !== '' ? storeInfo && storeInfo.storeInfo.aboutStore : aboutStore;
  const addressInfo = !address && address !== '' ? storeInfo && storeInfo.storeInfo.address : address;
  const zipCodeInfo = !zipCode && zipCode !== '' ? storeInfo && storeInfo.storeInfo.zipCode : zipCode;
  const emailIdInfo = !emailId && emailId !== '' ? storeInfo && storeInfo.storeInfo.emailId : emailId;
  const fbIdInfo = !fbId && fbId !== '' ? storeInfo && storeInfo.storeInfo.fbId : fbId;
  const igIdInfo = !igId && igId !== '' ? storeInfo && storeInfo.storeInfo.igId : igId;
  const cityInfo = !cityId && cityId !== '' ? (countryList ? cityDetails && cityDetails : cityId) : cityId;
  const countryInfo = !countryId && countryId !== '' ? (countryList ? countryDetails && countryDetails : countryId) : countryId;
  const mobileInfo = !mobile && mobile !== '' ? storeInfo && storeInfo.storeInfo.mobile : mobile;

  console.log('aboutStoreInfo',aboutStoreInfo)

  const onSubmit = () => {
    if (!storeNameInfo || !aboutStoreInfo || !addressInfo || !countryInfo || !emailIdInfo || !mobileInfo || !cityInfo) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else if (aboutStoreInfo.length < 10) {
      message.error(' Please fill the About Store with minimum 8 characters');
      setAlertError(true)
    } else if (storeNameInfo.length < 3) {
      message.error(' Please fill the Store Name with minimum 3 characters');
      setAlertError(true)
    }else if (disabled) {
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
        timing,
        estoreId: storeId,
      };
      dispatch({ type: 'STORE_INFO_UPDATE_REQUEST', storeUpdate });
      setAlertMsg(true)
    };
    //console.log('payoad', profileInfo)
  }

  return (
    <div >
      {isLoading && <Loader />}
      {/* <Sidebar /> */}
      <div >
        {/* <Headerbar headerName="Profile" /> */}
        <div className="main-content general-info">
          <Grid fluid>
            {/* <Menu mode="horizontal">
        <Menu.Item >
          Profile <Link to="/profile" />
        </Menu.Item>
        <Menu.Item >
          Add Product <Link to="/addproduct" />
        </Menu.Item>
        <Menu.Item >
          Product List <Link to="/productlist" />
        </Menu.Item>
        </Menu> */}
            <Row>
              <Row className="form-content card">
                <Col md={6} className='left-info' >
                  <p className='reg-num'>
                    {/* {registerNumber} */}
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
                        placeholder='type something..'
                        disabled={disabled}
                        value={storeDetail ? aboutStore : storeInfo && storeInfo.storeInfo.aboutStore}
                        onChange={onAboutStore}
                        maxLength={500}
                        rows="4">
                      </textarea>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className='right-info' >
                  <Row>
                    {/* <Col md={12}>
                      <label className="signup-label">Business Name</label>
                      <input
                        type="text"
                        placeholder="business name"
                        className="form-control"
                        maxLength={30}
                        value={storeInfo && storeInfo.storeInfo.companyName}
                        disabled
                      />
                    </Col>
                    <Col md={6}>
                      <label className="signup-label">First Name</label>
                      <input
                        type="text"
                        placeholder="first name"
                        className="form-control"
                        maxLength={30}
                        value={storeInfo && storeInfo.storeInfo.firstName}
                        disabled
                      />
                    </Col>
                    <Col md={6}>
                      <label className="signup-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last name"
                        maxLength={30}
                        value={storeInfo && storeInfo.storeInfo.lastName}
                        disabled
                      />
                    </Col> */}
                    <Col md={12}>
                    <label className="signup-label">Store Name < span className="red-star">*</span> </label>
                      <input className={alertError && !storeNameInfo.length < 3 ? ` form-control my-input` : `form-control formy`}
                        type="text"
                        placeholder="store name"
                        maxLength={30}
                        value={storeNameInfo}
                        onChange={onStoreName}
                        disabled={disabled}
                      />
                    </Col>
                    <Col md={12}>
                      <label className="store-label">Address<span className="red-star">*</span></label>
                      <textarea className={alertError && !addressInfo ? ` form-control my-input` : `form-control formy`}
                        type="text"
                        placeholder="address."
                        maxLength={100}
                        value={addressInfo}
                        disabled={disabled}
                        onChange={onAddress}
                        rows="4">
                      </textarea>

                      {/* <input
                        type="text"
                        placeholder="address."
                        className={alertError && !address ? ` form-control my-input` : `form-control formy`}
                        maxLength={100}
                        value={address}
                        onChange={onAddress}
                      /> */}
                    </Col>
                    <Col md={12} >
                      <label className="store-label">Country <span className="red-star">*</span></label>
                      <Select
                        type="text"
                        className={` clear-city ${alertError && !countryInfo ? `dropdown-alert` : `prof-select `}`}
                        placeholder="select country"
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
                          <label className="store-label">City</label>
                          <Select
                            type="text"
                            className="prof-select "
                            placeholder="select city"
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
                      className={alertError && !emailIdInfo ? `form-control my-input` : `form-control formy`}
                      maxLength={30}
                      value={emailIdInfo}
                      disabled={disabled}
                      onChange={onEmailId}
                      placeholder="Enter Your Email"
                    />
                  </Col>
                  <Col md={3}>
                    <label className="signup-label">Facebook ID</label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      placeholder="facebook"
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
                      placeholder="instagram"
                      disabled={disabled}
                    />
                  </Col>
                  <Col md={3} className='zipcode'>
                    <label className="signup-label">Contact Number <span className="red-star">*</span></label>
                    <Cleave
                      className={alertError && !mobileInfo ? `form-control my-input` : `form-control formy`}
                      placeholder="contact number"
                      value={mobileInfo}
                      onChange={onMobile}
                      disabled={disabled}
                      options={{
                        blocks: [3, 3, 4],
                        numericOnly: true
                      }}
                    // options={{ phone: true, phoneRegionCode: "US" }}
                    />
                  </Col>
                </Col>
              </Row>
              <Row className="general-table">
                <Table
                  title=""
                  content={
                    <ReactTable
                      data={storeInfo && storeInfo.storeInfo.timing}
                      columns={[
                        {
                          Header: 'Day',
                          accessor: 'title',
                          filterable: false,
                          sortable: false,
                          width: 130,
                        },

                        {
                          Header: 'Opening Time',
                          accessor: 'status',
                          filterable: false,
                          sortable: false,
                          width: 220,
                          Cell: (info) => (
                            <TimePicker
                              use12Hours
                              format="h:mm A"
                              defaultValue={moment(info.original.openingTime, "HH:mm")}
                              value={openingTime}
                              onChange={(value) => onOpeningTime(info, value)} />
                          )
                        },
                        {
                          Header: 'Closing Time',
                          accessor: 'total',
                          filterable: false,
                          sortable: false,
                          Cell: (info) => (
                            <TimePicker
                              use12Hours
                              format="h:mm A"
                              defaultValue={moment(info.original.closingTime, "HH:mm")}
                              value={closingTime}
                              onChange={(time, timeString) => onClosingTime(info, time, timeString)} />
                          ),
                          width: 220,
                        },
                        {
                          Header: 'Closed',
                          accessor: 'id',
                          filterable: false,
                          sortable: false,
                          Cell: (info) => (
                            <div>
                              <input
                                type="checkbox"
                                className='closed-header'
                                defaultChecked={info.original.closed}
                                checked={closed}
                                onChange={(e) => onClosed(info, e)} />
                            </div>
                          ),
                          width: 100,
                        },
                      ]}
                      defaultPageSize={7}
                      // showPaginationTop
                      showPaginationBottom={false}
                      className="-striped -highlight"
                    />
                  }
                />
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