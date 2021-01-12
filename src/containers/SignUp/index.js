import React from 'react';
import { Row, Col, Image, Form, Grid } from 'react-bootstrap';
import Footer from '../../components/Footer';

const SignUp = () => (
  <Grid fluid>
    <Row className="jumbotron">
      <Col md={6} sm={6}>
        <Image className="signup-logo" src="images/logo.png" fluid />
      </Col>
      <Col md={6} sm={6} className="right-div" fluid>
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
        <Form className="login-form ">
          <Row>
            <Col md={6} sm={12}>
              <label >Plan *</label>
              <select className="form-control">
                <option>Default select</option>
              </select>
            </Col>
            <Col md={6} sm={12}>
              <label >Select Industry Type *</label>
              <select className="form-control">
                <option>Default select</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              <label >Select Country *</label>
              <select className="form-control">
                <option>Default select</option>
              </select>
            </Col>
            <Col md={6} sm={12} >
              <label >Select City *</label>
              <select className="form-control">
                <option>Default select</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              <label >Owner Name *</label>
              <input type="text" className="form-control" placeholder="Enter name"></input>
            </Col>
            <Col md={6} sm={12}>
              <label >Contact Number *</label>
              <input type="text" className="form-control" placeholder="Enter name"></input>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              <label >Email *</label>
              <input type="email" className="form-control" placeholder="Enter name"></input>
            </Col>
            <Col md={6} sm={12}>
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
);

export default SignUp;
