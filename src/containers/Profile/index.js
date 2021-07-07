/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Cleave from "cleave.js/react";
import ReactTable from 'react-table';
import { TimePicker, message } from 'antd';
import Headerbar from '../../components/Headerbar';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';
import { Locale } from '../../constants/Locale';
import moment from 'moment';

const weekData = [
  {
    title: 'Monday',
    openingTime: '00:00',
    closingTime: '00:00',
    closed: false,
  },
  {
    title: 'Tuesday',
    openingTime: '00:00',
    closingTime: '00:00',
    closed: false,
  },
  {
    title: 'Wednesday',
    openingTime: '00:00',
    closingTime: '00:00',
    closed: false,
  },
  {
    title: 'Thursday',
    openingTime: '00:00',
    closingTime: '00:00',
    closed: false,
  },
  {
    title: 'Friday',
    openingTime: '00:00',
    closingTime: '00:00',
    closed: false,
  },
  {
    title: 'Saturday',
    openingTime: '00:00',
    closingTime: '00:00',
    closed: false,
  },
  {
    title: 'Sunday',
    openingTime: '00:00',
    closingTime: '00:00',
    closed: false,
  },
]

const Profile = () => {
  const [companyLogo, setCompanyLogo] = useState('');
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

  const dispatch = useDispatch();
  const thriftVendorInfo = useSelector((state) => state.thriftVendorInfoState.thriftVendorInfo);
  const profileInfo = useSelector((state) => state.thriftProfileState.profileInfo);
  // const generalInfo = useSelector((state) => state.generalInfoState.generalInfo);
  //const signUpContent = useSelector((state) => state.signupContentState.signupContent);
  const invalidProfileInfo = useSelector((state) => state.thriftProfileState.error);

  // const countries = generalInfo && generalInfo.countriesList;
  //const countries = signUpContent && signUpContent.countriesList

  useEffect(() => {
    if (profileInfo &&  profileInfo.status) {
      message.success('Thanks!, Thrift Store Profile is successfully updated with us')
    } else if (invalidProfileInfo) {
      message.error('invalid Error');
    }
  }, [profileInfo, invalidProfileInfo]);

  useEffect(() => {
    dispatch({ type: 'THRIFT_VENDOR_INFO_REQUEST' });
  }, [])

  const onAvatarImage = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCompanyLogo(reader.result);
    };
    reader.readAsDataURL(file);
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


  const onSubmit = () => {
    console.log('closed', closed);
    console.log('timing', timing);
    // if (!city) {
    //   message.error('Please fill all the fields');
    // }
    // else if (termscondition === false) {
    //   message.error('Please accept the Terms & Conditions and Privacy Policy');
    // }
    // else {
    const profileInfo = {
      // register_num: thriftVendorInfo && thriftVendorInfo.vendorInfo.register_num,
      companyLogo,
      // companyName :thriftVendorInfo && thriftVendorInfo.data.vendorInfo.companyName,
      // firstName : thriftVendorInfo && thriftVendorInfo.data.vendorInfo.firstName,
      // lastName : thriftVendorInfo && thriftVendorInfo.data.vendorInfo.lastName,
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
    console.log('tst', profileInfo);
      dispatch({ type: 'THRIFT_PROFILE_REQUEST', profileInfo });
    //   // setAlertMsg('');
    //   message.success('Thanks!, Signup form is successfully registered with us ');
    // // }
  };

  //const onCancel = () => window.alert("cancelled");

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="rightside-panel">
        <Headerbar headerName="Profile" />
        <div className="main-content general-info">
          <Grid fluid>
            <Row>
              <Row className="form-content card">
                <Col md={6} className='left-info' >
                  <Row>
                    <Col md={12} className='avtar-info' >
                      <div className='load-info'>
                        <div>
                          <div className="photo">
                            {loading ? <h3 className='loading-info'>Loading...</h3> : companyLogo ? <img src={companyLogo} alt='' /> : <img src={thriftVendorInfo && thriftVendorInfo.vendorInfo.logo ? thriftVendorInfo.vendorInfo.logo : "images/Your-logo-here..png"} />}
                          </div>
                          {!loading && <div className="image-upload">
                            <label for="file-input"><i className="fa fa-camera" /></label>
                            <input id="file-input"
                              onChange={onAvatarImage}
                              type="file"
                              accept="image/*"
                            />
                          </div>}
                        </div>
                      </div>
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
                      <label className="signup-label">E-store Name <span className="red-star">*</span></label>
                      <input
                        type="text"
                        placeholder="store name"
                        className="form-control"
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
                        className="form-control"
                        maxLength={30}
                        value={address}
                        onChange={onAddress}
                      />
                    </Col>
                    <Col md={12}>
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
                            maxLength={5}
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
                      className="form-control"
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
                      className="form-control"
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
                  // data={WeekData}
                  content={
                    <ReactTable
                      data={weekData}
                      // filterable
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