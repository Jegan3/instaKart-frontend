/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Cleave from "cleave.js/react";
import ReactTable from 'react-table';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import { Menu, TimePicker, message } from 'antd';
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
  const [storeLogo, setStoreLogo] = useState('');
  const [aboutStore, setAboutStore] = useState('');
  const [storeDetail, setStoreDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [zipCode, setZipCode] = useState('');
  const [emailId, setEmailId] = useState('');
  const [fbId, setFbId] = useState('');
  const [igId, setIgId] = useState('');
  const [mobile, setMobile] = useState('');
  const [updatedCityOptions, setUpdatedCityOptions] = useState();
  const [openingTime, setOpeningTime] = useState();
  const [closingTime, setClosingTime] = useState();
  const [closed, setClosed] = useState();
  const [timing, setTiming] = useState([])
  const [alertError, setAlertError] = useState(false);

  const dispatch = useDispatch();
  const storeInfo = useSelector((state) => state.storeInfoState.storeInfo);
  const profileInfo = useSelector((state) => state.thriftProfileState.profileInfo);
  const invalidProfileInfo = useSelector((state) => state.thriftProfileState.error);
  const isLoading = useSelector((state) => state.thriftProfileState.isLoading || state.storeInfoState.isLoading);
  // const registerNumber = storeInfo && storeInfo.vendorInfo.register_num;

  let fileList = [];

  // const { state } = props.location;

  useEffect(() => {
    dispatch({ type: 'STORE_INFO_REQUEST', storeId });
  }, [])

  useEffect(() => {
    if (profileInfo && profileInfo.status) {
      message.success('Thanks!, Thrift Store Profile is successfully updated with us')
    } else if (invalidProfileInfo) {
      message.error('invalid Error');
    }
  }, [profileInfo, invalidProfileInfo]);

  // City Options
  useEffect(() => {
    Locale.filter((item) => {
      if (country && item._id === country.value) {
        const city = item.cities.sort((a, b) => a.cityName.localeCompare(b.cityName)).map((data) => ({
          value: data._id,
          label: data.cityName,
        }));
        setUpdatedCityOptions(city);
      }
    });
  }, [country]);

  const onAvatarImage = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    const reader = new FileReader();
    reader.onload = () => {
      setStoreLogo(reader.result);
    };
    reader.readAsDataURL(file);
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
  const onCountry = (country) => {
    setCountry(country)
    // setStoreDetail(true)
  }

  // Country Options
  const countryOptions = Locale.map((item) => ({
    value: item._id,
    label: <div><img className="flag" src={item.flag} alt="new" /><span className="signup-flag">{item.countryName}</span></div>,
  }));

  const onCity = (city) => {
    setCity(city)
    // setStoreDetail(true)
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

  const fakeRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('OK')
    }, 1000)
  }

  const onSubmit = () => {
    const storeLogoInfo = storeDetail ? storeLogo : storeInfo && storeInfo.storeInfo.storeLogo;
    const aboutStoreInfo = storeDetail ? aboutStore : storeInfo && storeInfo.storeInfo.aboutStore;
    const addressInfo = storeDetail ? address : storeInfo && storeInfo.storeInfo.address;
    const countryIdInfo = country && country.value;
    const cityIdInfo = city && city.value;
    const zipCodeInfo = storeDetail ? zipCode : storeInfo && storeInfo.storeInfo.zipCode;
    const emailIdInfo = storeDetail ? emailId : storeInfo && storeInfo.storeInfo.emailId;
    const fbIdInfo = storeDetail ? fbId : storeInfo && storeInfo.storeInfo.fbId;
    const igIdInfo = storeDetail ? igId : storeInfo && storeInfo.storeInfo.igId;
    const mobileInfo = storeDetail ? mobile : storeInfo && storeInfo.storeInfo.mobile;

    if (!addressInfo || !countryIdInfo || !emailIdInfo || !mobileInfo) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else {
      const profileInfo = {
        // storeName,
        storeLogo: storeLogoInfo,
        aboutStore: aboutStoreInfo,
        address: addressInfo,
        countryId: countryIdInfo,
        cityId: cityIdInfo,
        zipCode: zipCodeInfo,
        emailId: emailIdInfo,
        fbId: fbIdInfo,
        igId: igIdInfo,
        mobile: mobileInfo,
        timing,
        estoreId: storeId,
      };
      dispatch({ type: 'THRIFT_PROFILE_REQUEST', profileInfo });
    };
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
                              {storeDetail ? <img src={storeLogo} alt='' /> : <img src={storeInfo && storeInfo.storeInfo.storeLogo ? storeInfo.storeInfo.storeLogo : "images/logo-here.png"} />}
                            </div>
                            <div className="image-upload">
                              <ImgCrop rotate>
                                <Upload
                                  fileList={fileList}
                                  customRequest={fakeRequest}
                                  onChange={onAvatarImage}
                                  type="file"
                                  accept="image/*"
                                  showUploadList={false}
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
                      <textarea className={alertError && !aboutStore && storeDetail ? ` form-control my-input` : `form-control formy`}
                        name="message"
                        placeholder='type something..'
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
                      <label className="store-label">Store Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="store name"
                        maxLength={30}
                        value={storeInfo && storeInfo.storeInfo.storeName}
                        onChange={onStoreName}
                        disabled
                      />
                    </Col>
                    <Col md={12}>
                      <label className="store-label">Address<span className="red-star">*</span></label>
                      <textarea className={alertError && !address && storeDetail ? ` form-control my-input` : `form-control formy`}
                        type="text"
                        placeholder="address."
                        maxLength={100}
                        value={storeDetail ? address : storeInfo && storeInfo.storeInfo.address}
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
                    <Col md={12} className={`clear-city ${alertError && !country && storeDetail && `dropdown-alert`}`}>
                      <label className="store-label">Country <span className="red-star">*</span></label>
                      <Select
                        type="text"
                        className="prof-select "
                        placeholder="select country"
                        isSearchable={false}
                        value={storeDetail ? country : storeInfo && storeInfo.storeInfo.country}
                        onChange={onCountry}
                        options={countryOptions}
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
                            value={storeDetail ? city : storeInfo && storeInfo.storeInfo.city}
                            onChange={onCity}
                            options={updatedCityOptions}
                            isSearchable={false}
                            isDisabled={!country}
                          />
                        </Col>
                        <Col md={6} className='zipcode'>
                          <label className="store-label">ZIP Code</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={10}
                            value={storeDetail ? zipCode : storeInfo && storeInfo.storeInfo.zipCode}
                            onChange={onZipCode}
                            placeholder="Z1234"
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
                      className={alertError && !emailId && storeDetail ? `form-control my-input` : `form-control formy`}
                      maxLength={30}
                      value={storeDetail ? emailId : storeInfo && storeInfo.storeInfo.emailId}
                      onChange={onEmailId}
                      placeholder="@gmail.com"
                    />
                  </Col>
                  <Col md={3}>
                    <label className="signup-label">Facebook ID</label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      placeholder="facebook"
                      value={storeDetail ? fbId : storeInfo && storeInfo.storeInfo.fbId}
                      onChange={onFbId}
                    />
                  </Col>
                  <Col md={3}>
                    <label className="signup-label">Instagram ID</label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      value={storeDetail ? igId : storeInfo && storeInfo.storeInfo.igId}
                      onChange={onIgId}
                      placeholder="instagram"
                    />
                  </Col>
                  <Col md={3} className='zipcode'>
                    <label className="signup-label">Contact Number <span className="red-star">*</span></label>
                    <Cleave
                      className={alertError && !mobile && storeDetail ? `form-control my-input` : `form-control formy`}
                      placeholder="contact number"
                      value={storeDetail ? mobile : storeInfo && storeInfo.storeInfo.mobile}
                      onChange={onMobile}
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
                  <button
                    type="button"
                    className="btn btn-primary btn-block modal-butn"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className="product-button">
                  <button
                    type="button"
                    className="btn btn-primary btn-block modal-butn"
                  // onClick={onCancel}
                  >
                    Cancel
                  </button>
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