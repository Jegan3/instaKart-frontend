/*eslint-disable*/
import React, { useRef } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Avatar from 'react-avatar';
import ReactTable from 'react-table';
import Headerbar from '../../components/Headerbar';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';
import GoogleMap from '../../components/Map';

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
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="rightside-panel">
        <Headerbar headerName="General Information" />
        <div className="main-content general-info">
          <Grid fluid>
            <Row>
              <Row className="form-content card">
                <Col md={6} className='right-info' >
                  <Row>
                    <Col md={12} className='avtar-info' >
                      <Avatar size="100" size="160" round={true}
                        src='./images/avatar.jpeg' />
                      <div className="image-upload">
                        <label for="file-input">
                          <i className="fa fa-camera" />
                        </label>
                        <input id="file-input" type="file" />
                      </div>

                    </Col>
                    <Col md={12}>
                      <label className="signup-label">GSTN <span className="red-star">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={30}
                        placeholder="Xx12345"
                      />
                    </Col>
                    <Col md={12}>
                      <label className="signup-label">Address <span className="red-star">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={30}
                        placeholder="Xx12345"
                      />
                    </Col>
                    <Col md={12}>
                      <Row>
                        <Col md={6}>
                          <label className="signup-label">Country <span className="red-star">*</span></label>
                          <Select
                            type="text"
                            className="prof-select "
                            placeholder="Select Country"
                            isSearchable={false}
                          />
                        </Col>
                        <Col md={6}>
                          <label className="signup-label">State <span className="red-star">*</span></label>
                          <Select
                            type="text"
                            className="prof-select "
                            placeholder="Select State"
                            isSearchable={false}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={12} className='zipcode'>
                      <label className="signup-label">Zipcode <span className="red-star">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={30}
                        placeholder="Z1234"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className='left-info' >
                  <Row>
                    <Col md={12}>
                      <GoogleMap />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="form-content card resta">
                <Col md={12}>
                  <Col md={3}>
                    <label className="signup-label">Restaurant Name <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      placeholder="Tiffin Box"
                    />
                  </Col>
                  <Col md={3} className='zipcode'>
                    <label className="signup-label">Restaurant Email <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      placeholder="tiffi_box@gmail.com"
                    />
                  </Col>
                  <Col md={3}>
                    <label className="signup-label">Website <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      placeholder="www.tiffinbox.com"
                    />
                  </Col>
                  <Col md={3} className='zipcode'>
                    <label className="signup-label">Phone Number <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                      placeholder="1234567890"
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
                          },

                        }, {
                          Header: 'Closing Time',
                          accessor: 'total',
                          filterable: false,
                          sortable: false,
                          style: {
                            textAlign: 'left',
                          },
                          width: 100,
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
                    // onClick={Login}
                    >
                      Submit
                      </button>
                  </Col>
                  <Col md={6} lg={6} sm={6} xs={6} className="modal-row" >
                    <button
                      type="button"
                      className="btn btn-primary btn-block modal-button "
                    //onClick={Signup}
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
