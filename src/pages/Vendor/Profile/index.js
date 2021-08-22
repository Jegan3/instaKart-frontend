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
import Headerbar from '../../../components/Headerbar';
import Sidebar from '../../../components/Sidebar';
import Table from '../../../components/Table';
import { Locale } from '../../../constants/Locale';
import Loader from '../../../components/Loader';

// const weekData = [
//   {
//     title: 'Monday',
//     openingTime: '00:00',
//     closingTime: '00:00',
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

const Profile = () => {
  const [companyLogo, setCompanyLogo] = useState('');
  const [aboutProduct, setAboutProduct] = useState('');
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
  const thriftVendorInfo = useSelector((state) => state.thriftVendorInfoState.thriftVendorInfo);
  const profileInfo = useSelector((state) => state.thriftProfileState.profileInfo);
  const invalidProfileInfo = useSelector((state) => state.thriftProfileState.error);
  const isLoading = useSelector((state) => state.thriftProfileState.isLoading || state.thriftVendorInfoState.isLoading);
  const registerNumber = thriftVendorInfo && thriftVendorInfo.vendorInfo.register_num;

  let fileList = [];

  useEffect(() => {
    dispatch({ type: 'THRIFT_VENDOR_INFO_REQUEST' });
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
      setCompanyLogo(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const onAboutProduct = (e) => {
    //   if (e.target.value.match('^[a-zA-Z0-9 !?",\'@#$%\^&*)(+=._-]*$')) {
    setAboutProduct(e.target.value)
    //}
  }

  const onStoreName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setStoreName(e.target.value)
    }
  }

  const onAddress = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setAddress(e.target.value)
    }
  }

  // Country Options
  const onCountry = (country) => {
    setCountry(country)
  }

  // Country Options
  const countryOptions = Locale.map((item) => ({
    value: item._id,
    label: <div><img className="flag" src={item.flag} alt="new" /><span className="signup-flag">{item.countryName}</span></div>,
  }));

  const onCity = (city) => {
    setCity(city)
  }



  const onZipCode = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setZipCode(e.target.value)
    }
  }

  const onEmailId = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmailId(e.target.value);
    }
  };

  const onFbId = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9._]*$')) {
      setFbId(e.target.value);
    }
  };

  const onIgId = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9._]*$')) {
      setIgId(e.target.value);
    }
  };

  const onMobile = (e) => (
    setMobile(e.target.rawValue)
  )

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
    if (!storeName || !address || !country || !emailId || !mobile) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else {
      const profileInfo = {
        companyLogo,
        storeName,
        address,
        countryId: country && country.value,
        cityId: city && city.value,
        zipCode,
        emailId,
        fbId,
        igId,
        mobile,
        timing
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
                    {registerNumber}
                  </p>
                  <Row>
                    <Col md={12} >
                    <div className='avtar-info' >
                      <div className='load-info'>
                        <div>
                          <div className="photo">
                            {companyLogo ? <img src={companyLogo} alt='' /> : <img src={thriftVendorInfo && thriftVendorInfo.vendorInfo.logo ? thriftVendorInfo.vendorInfo.logo : "images/Your-logo-here..png"} />}
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
                      <label className="signup-label">About Product < span className="red-star">*</span> </label>
                      <textarea className={alertError && !aboutProduct ? ` form-control my-input` : `form-control formy`}
                        name="message"
                        placeholder='type something..'
                        value={aboutProduct}
                        onChange={onAboutProduct}
                        maxLength={500}
                        rows="4"></textarea>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className='right-info' >
                  <Row>
                    <Col md={12}>
                      <label className="signup-label">Business Name</label>
                      <input
                        type="text"
                        placeholder="business name"
                        className="form-control"
                        maxLength={30}
                        value={thriftVendorInfo && thriftVendorInfo.vendorInfo.companyName}
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
                        value={thriftVendorInfo && thriftVendorInfo.vendorInfo.firstName}
                        disabled
                      />
                    </Col>
                    <Col md={6}>
                      <label className="signup-label">Last Name</label>
                      <input
                        type="text"
                        placeholder="last name"
                        className="form-control"
                        maxLength={30}
                        value={thriftVendorInfo && thriftVendorInfo.vendorInfo.lastName}
                        disabled
                      />
                    </Col>
                    <Col md={12}>
                      <label className="signup-label">Thrift Store Name <span className="red-star">*</span></label>
                      <input
                        type="text"
                        className={alertError && !storeName ? ` form-control my-input` : `form-control formy`}
                        placeholder="store name"
                        maxLength={30}
                        value={storeName}
                        onChange={onStoreName}
                      />
                    </Col>
                    <Col md={12}>
                      <label className="signup-label">Address <span className="red-star">*</span></label>
                      <input
                        type="text"
                        placeholder="address."
                        className={alertError && !address ? ` form-control my-input` : `form-control formy`}
                        maxLength={100}
                        value={address}
                        onChange={onAddress}
                      />
                    </Col>
                    <Col md={12} className={`clear-city ${alertError && !country && `dropdown-alert`}`}>
                      <label className="signup-label">Country <span className="red-star">*</span></label>
                      <Select
                        type="text"
                        className="prof-select "
                        placeholder="select country"
                        isSearchable={false}
                        value={country}
                        onChange={onCountry}
                        options={countryOptions}
                      />
                    </Col>
                    <Col md={12}>
                      <Row>
                        <Col md={6}>
                          <label className="signup-label">City</label>
                          <Select
                            type="text"
                            className="prof-select "
                            placeholder="select city"
                            value={city}
                            onChange={onCity}
                            options={updatedCityOptions}
                            isSearchable={false}
                            isDisabled={!country}
                          />
                        </Col>
                        <Col md={6} className='zipcode'>
                          <label className="signup-label">ZIP Code</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={10}
                            value={zipCode}
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
                      className={alertError && !emailId ? ` form-control my-input` : `form-control formy`}
                      maxLength={30}
                      value={emailId}
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
                      value={fbId}
                      onChange={onFbId}
                    />
                  </Col>
                  <Col md={3}>
                    <label className="signup-label">Instagram ID</label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      value={igId}
                      onChange={onIgId}
                      placeholder="instagram"
                    />
                  </Col>
                  <Col md={3} className='zipcode'>
                    <label className="signup-label">Contact Number <span className="red-star">*</span></label>
                    <Cleave
                      className={alertError && !mobile ? ` form-control my-input` : `form-control formy`}
                      placeholder="contact number"
                      value={mobile}
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
                      data={thriftVendorInfo && thriftVendorInfo.vendorInfo.timing}
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

export default Profile;