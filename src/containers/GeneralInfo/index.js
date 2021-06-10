/*eslint-disable*/
import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Cleave from "cleave.js/react";
import ReactTable from 'react-table';
import { TimePicker } from 'antd';
import Headerbar from '../../components/Headerbar';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';



const weekData = [
  {
    title: 'Monday',
  },
  {
    title: 'Tuesday',
  },
  {
    title: 'Wednesday',
  },
  {
    title: 'Thursday',
  },
  {
    title: 'Friday',
  },
  {
    title: 'Saturday',
  },
  {
    title: 'Sunday',
  },
]

const GeneralInfo = () => {
  const [logoImage, setLogoImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [emailId, setEmailId] = useState('');
  const [fbId, setFbId] = useState('');
  const [igId, setIgId] = useState('');
  const [mobile, setMobile] = useState('');

 

  //avatar display from api
  const onAvatarImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'dmaqtveo')
    setLoading(true)
    const res = await fetch(
      ' https://api.cloudinary.com/v1_1/dcoefaaro/image/upload ',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setLogoImage(file.secure_url)
    setLoading(false)
  }

  const onStoreName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9]*$')) {
      setStoreName(e.target.value)
    }
  }
  const onAddress = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9]*$')) {
      setAddress(e.target.value)
    }
  }
  const onCountry = (e) => {
    if (e.target.value) {
      setCountry(e.target.value)
    }
  }
  const onCity = (e) => {
    if (e.target.value) {
      setCity(e.target.value)
    }
  }
  const onZipCode = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9]*$')) {
      setZipCode(e.target.value)
    }
  }
  const onEmailId = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmailId(e.target.value);
    }
  };
  const onFbId = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setFbId(e.target.value);
    }
  };
  const onIgId = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setIgId(e.target.value);
    }
  };
  const onMobile = (e) => (
    setMobile(e.target.rawValue)
  )
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  }

  const submit = () => {
    if
      (storeName === '' || address === '') {
      console.log('test');
      //setAlertError(window.alert('done'));
      // setAlertMsg(window.alert('Please fill all the fields'));
    }
    // else if (termscondition === false) {
    //   setAlertMsg('Please accept the Terms & Conditions and Privacy Policy');
    // } 
    else {

      const GeneralInfo = {
        logoImage,
        storeName,
        address,
        country,
        city,
        zipCode,
        emailId,
        fbId,
        igId,
        mobile
      };
      // dispatch({ type: 'VENDOR_INFO_REQUEST', vendorInfo });
      //setAlertMsg('');
    }
  };

  const onCancel = () => window.alert("cancelled");

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="rightside-panel">
        <Headerbar headerName="General Information" />
        <div className="main-content general-info">
          <Grid fluid>
            <Row>
              <Row className="form-content card">
                <Col md={6} className='left-info' >
                  <Row>
                    <Col md={12} className='avtar-info' >
                      <div className='load-info'>
                        {loading ? (
                          <h3 className='loading-info'>Loading...</h3>
                        ) : (
                          <div>
                            <div className="photo">
                              <img src={logoImage} alt='avatar' />
                              <div className="glow-wrap">
                                <i className="glow"></i>
                              </div>
                            </div>
                            <p className='avatar-text'>
                              Upload Logo
                        </p>
                            <div className="image-upload">
                              <label for="file-input">
                                <i className="fa fa-camera" />
                              </label>
                              <input id="file-input"
                                onChange={onAvatarImage}
                                type="file" />
                            </div>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className='right-info' >
                  <Row>
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
                      />
                    </Col>
                    <Col md={12}>
                      <Row>
                        <Col md={6}>
                          <label className="signup-label">City </label>
                          <Select
                            type="text"
                            className="prof-select "
                            placeholder="select state"
                            isSearchable={false}
                            value={city}
                            onChange={onCity}
                          />
                        </Col>
                        <Col md={6} className='zipcode'>
                          <label className="signup-label">ZIP Code <span className="red-star">*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={30}
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
                    <label className="signup-label">FB ID </label>
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
                    <label className="signup-label">IG ID </label>
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
                          sortable: true,
                          // width: 500,
                          style: {
                            textAlign: 'left',
                          },
                        },

                        {
                          Header: 'Opening Time',
                          accessor: 'status',
                          filterable: false,
                          sortable: false,
                          // width: 300,
                          style: {
                            textAlign: 'left',
                          },Cell: () => (
                            <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                          ),
                        },
                         {
                          Header: 'Closing Time',
                          accessor: 'total',
                          filterable: false,
                          sortable: false,
                          style: {
                            textAlign: 'left',
                          },Cell: () => (
                            <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                          ),
                          // width: 100,
                        },
                        {
                          Header: 'Closed',
                          accessor: 'id',
                          filterable: false,
                          sortable: true,
                          border: 'white',
                          style: {
                            textAlign: 'center',
                            border: '2px solid whitesmoke',
                          }, Cell: () => (
                            <div>
                              <input type="checkbox" value="" />
                            </div>
                          ),
                          width: 200,
                        },
                      ]}
                      defaultPageSize={9}
                      // showPaginationTop
                      showPaginationBottom
                      className="-striped -highlight"
                    />
                  }
                />
              </Row>
              <Row >
                <Col md={12} className="btn-general">
                  <Col md={6} lg={6} sm={6} xs={6} className="modal-row " >
                    <button
                      type="button"
                      className="btn btn-primary  btn-block modal-button "
                      onClick={submit}
                    >
                      Submit
                      </button>
                  </Col>
                  <Col md={6} lg={6} sm={6} xs={6} className="modal-row" >
                    <button
                      type="button"
                      className="btn btn-primary btn-block modal-button "
                      onClick={onCancel}
                    >
                      Cancel
                      </button>
                  </Col>
                  {/* <Col md={12} sm={12} className="login-error" >
                      <span className="login-error-msg">{errorMsg}</span>
                    </Col> */}
                </Col>
              </Row>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo;