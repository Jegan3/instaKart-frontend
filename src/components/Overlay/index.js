/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import Select from 'react-select';
import { Row, Col } from 'react-bootstrap';
import { message } from 'antd';
import { Industries } from '../../constants/Industries';
import { history } from '../../routes';

const Overlay = ({
  show, onHide, centered, title, warningText, warningSubText, body, alert, alertClass, primary, secondary, onSubmitPrimary, onSubmitSecondary, footer,
}) => {

  const [industryType, setIndustryType] = useState();
  const [alertError, setAlertError] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const onStoreName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$'))
      setStoreName(e.target.value)
  }

  const onIndustryType = (industryType) => {
    setIndustryType(industryType);
  };

  const industryTypeOptions = Industries.sort((a, b) => a.industryType.localeCompare(b.industryType)).map((item) => ({
    value: item._id,
    label: item.industryType,
  }));

  const submit = () => {
    if (!industryType || !storeName) {
      setAlertError(true)
    }
    else {
      const addStore = {
        storeName,
        industryName: industryType.label,
      };
      setIndustryType()
      setStoreName('')
      setModal(onHide)
      dispatch({ type: 'ADD_STORE_REQUEST', addStore });
      // history.push({ pathname: '/thriftstorevendor' });
      // message.success(` ${storeName}  created succesfully !!`);

    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      animation
      centered={centered}
      bsSize={"lg"}
    >
      <Modal.Header className="no-border" closeButton={onHide}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {title === 'WARNING : LIMITATIONS OF LIABILITY' && <Modal.Body className="justify-content-center">
        <p className="warning-text"> {warningText} <br /> {warningSubText}</p>
      </Modal.Body>}
      {title === 'ADD STORE' && <Modal.Body className="justify-content-center">
        <Row>
          <Col md={6} sm={12} className={`clear-industry ${alertError && !industryType && 'dropdown-alert'}`} >
            <label className="signup-label">Industry Type <span className="red-star">*</span></label>
            <Select
              name="Industry Type"
              placeholder="Choose you're industry type"
              value={industryType}
              onChange={onIndustryType}
              options={industryTypeOptions}
              isSearchable={false}
            // isMulti
            />
          </Col>
          <Col md={6} sm={12} >
            <label className="signup-label">Store Name <span className="red-star">*</span></label>
            <input
              type="text"
              className={alertError && !storeName ? ' form-control my-input' : 'form-control formy'}
              placeholder="Enter store name"
              value={storeName}
              onChange={onStoreName}
              maxLength={30}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12} className="signup-submit pull-right" >
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block modal-button"
              onClick={submit}
            >
              Proceed
            </button>
          </Col>
        </Row>
      </Modal.Body>
      }
      {/* <Modal.Footer className="no-border">
      {alert && <span className={`w-100 text-center text-${alertClass}`}><p>{alert}</p></span>}
      <div className="mx-auto">
        {secondary && <Button variant="primary secondary-button" onClick={onSubmitSecondary}>{secondary}</Button>}
        {primary && <Button variant="primary primary-button" onClick={onSubmitPrimary} >{primary}</Button>}
      </div>
      {footer}
    </Modal.Footer> */}
    </Modal>
  )
}
export default Overlay;