import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Image, Form, Grid } from 'react-bootstrap';
import { history } from '../../routes';
import Footer from '../../components/Footer';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const Submit = () => {
    const signupDetails = {
      name: userName,
      email,
      password,
      type: 'admin',
    };
    dispatch({ type: 'SIGNUP_REQUEST', signup: signupDetails });
    history.push({
      pathname: '/',
    });
  };

  return (
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
                <label >User Name *</label>
                <input type="text" className="form-control" placeholder="Enter name" onChange={(e) => setUserName(e.target.value)}></input>
              </Col>
              <Col md={6} sm={12}>
                <label >Contact Number *</label>
                <input type="text" className="form-control" placeholder="Enter name"></input>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <label >Email *</label>
                <input type="email" className="form-control" placeholder="Enter name" onChange={(e) => setEmail(e.target.value)}></input>
              </Col>
              <Col md={6} sm={12}>
                <label >Password *</label>
                <input type="text" className="form-control" placeholder="Enter name" onChange={(e) => setPassword(e.target.value)}></input>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} className="signup-submit" >
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block signup-button "
                  onClick={Submit}
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
};

export default SignUp;
