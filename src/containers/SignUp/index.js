import React from 'react';
import { Row, Col, Image, Form, Grid } from 'react-bootstrap';
import Footer from '../../components/Footer';

const SignUp = () => (
  // <div className="sign-container .col-lg 12">
  <Grid fluid>
    <Row >
      {/* left-div */}
      <Col md={6} style={{ border: '1px solid black' }}>
        <Row>
          {/* <Col lg={12} className="title"> */}
          {/* </Col> */}
          <Image
            className="signup-image"
            src="https://st4.depositphotos.com/3474627/21320/v/1600/depositphotos_213206152-stock-illustration-freelancer-happy-young-men-working.jpg"
            fluid
          />
          <Image className="signup-logo" src="images/logo.png" fluid />
          {/* <Col lg={12} className="few-clicks">
            A few more clicks to sign up to your Account
          </Col>
          <Col lg={12} className="few-cli">
            Get 10% discount For Registration
          </Col> */}
        </Row>
      </Col>

      <Col md={6} className="right-div" fluid>
        <Row>
          <Col lg={12} className="heading">
            Partner With us
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="sub-heading">
            Basic Information
          </Col>
        </Row>
        <Form className="form ">
          <Row>
            <Col md={6} sm={12}>
              {/* <Form.Label>Plan *</Form.Label>
              <Form.Control as="select">
                <option>Please select</option>
              </Form.Control> */}
              <label >Plan *</label>
              <select className="form-control">
                <option>Default select</option>
              </select>
            </Col>
            <Col md={6} sm={12}>
              {/* <Form.Label >Select Industry Type *</Form.Label>
              <Form.Control as="select">
                <option>Default select</option>
              </Form.Control> */}
              <label >Select Industry Type *</label>
              <select className="form-control">
                <option>Default select</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              {/* <Form.Label>Select Country *</Form.Label>
              <Form.Control as="select">
                <option>Default select</option>
              </Form.Control> */}
              <label >Select Country *</label>
              <select className="form-control">
                <option>Default select</option>
              </select>
            </Col>
            <Col md={6} sm={12} >
              {/* <Form.Label>Select City *</Form.Label>
              <Form.Control as="select">
                <option>Default select</option>
              </Form.Control> */}
              <label >Select City *</label>
              <select className="form-control">
                <option>Default select</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              {/* <Form.Label>Owner Name *</Form.Label>
              <Form.Control placeholder="Enter name" /> */}
              <label >Owner Name *</label>
              <input type="text" className="form-control" placeholder="Enter name"></input>
            </Col>
            <Col md={6} sm={12}>
              {/* <Form.Label>Contact Number *</Form.Label>
              <Form.Control placeholder="Last name" /> */}
              <label >Contact Number *</label>
              <input type="text" className="form-control" placeholder="Enter name"></input>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              {/* <Form.Label>Email *</Form.Label>
              <Form.Control placeholder="Enter name" /> */}
              <label >Email *</label>
              <input type="email" className="form-control" placeholder="Enter name"></input>
            </Col>
            <Col md={6} sm={12}>
              {/* <Form.Label>User Name *</Form.Label>
              <Form.Control placeholder="Enter name" /> */}
              <label >User Name *</label>
              <input type="text" className="form-control" placeholder="Enter name"></input>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} className="signup-submit" >
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block signup-button "
              >
                Proceed
              </button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
    <Row>
      <Footer />
    </Row>
  </Grid>
  // </div>
);

export default SignUp;
