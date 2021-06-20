import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Password = () => (
  <div className="password-page">
    <Row>
      <div className="pass-word" >
        <Col md={6} className="main-logo" >
          <Image className="inst-logo" src="images/logo.png" fluid />
        </Col>
        <Row>
          <Col sm={12}>
            <header>
              <div className="view-header">UPDATE PASSWORD</div>
              <div className="view-sub-header">Please enter your new password.</div>
            </header>
            <div className="input-text">
              {/* <div className="error">Password does not meet minimum requirements.</div> */}
              <input
                id="a9f7842a-ad07-4364-8229-3ffe2a3ff840"
                type="text"
                autoComplete="new-password"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="Password"
                className="form-control"
                value=""
                name="password"
                data-componentname="passwordCreate"
                maxLength="36"
                aria-autocomplete="list"
              />
              {/* <button id="7cc7256b-6b64-4859-825f-1b7edb9af194" type="button" tabIndex="-1" className="nike-unite-hide-button">HIDE</button> */}
              {/* <div className="tip">Password does not meet minimum requirements.</div> */}
              {/* <div className="nike-unite-password-complexity">
          <div className="charLength valid">Minimum of 8 characters</div>
          <div className="upperCase invalid">1 uppercase letter</div>
          <div className="lowerCase valid">1 lowercase letter</div>
          <div className="number invalid">1 number</div>
        </div> */}
            </div>
            <div className="update">
              <button
                type="button"
                className="btn btn-primary btn-block modal-button"
              >
                UPDATE PASSWORD
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Row>
  </div>


);

export default Password;
