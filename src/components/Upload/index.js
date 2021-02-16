/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Row, Col, Button, Grid } from 'react-bootstrap';

const Upload = ({ showPopup, hidePopup }) => {
  const [show, setShow] = useState(showPopup);
  const [upload, setUpload] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setShow(showPopup);
  }, [showPopup]);

  const SetUpload = (e) => {
    setUpload(e.target.files);
  };

  const Submit = () => {
    const formData = new FormData();
    formData.append('poster', upload[0]);
    formData.append('email', 'gopinath.chandar@gmail.com');
    console.log(formData.get('poster'));
    const email = 'gopinath.chandar@gmail.com';
    // const banner =
    // {
    //   email: 'gopinath.chandar@gmail.com',
    //   poster: formData,
    // };
    dispatch({ type: 'BANNER_UPLOAD_REQUEST', formData, email });
  };

  return (
    <div className="modal-upload">
      <Grid>
        <Modal show={show} bsSize="small">
          <Modal.Body >
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={hidePopup}>
              <span aria-hidden="true">&times;</span>
            </button>
            <Modal.Title className="Tittle-Upload">Upload Images
            </Modal.Title>
            <div className="up-load">
              <input
                className="btn-uploadFile"
                type="file"
                name="uploadedfile"
                onChange={SetUpload}
                accept="image/png, .jpeg, .jpg, image/gif"
              />
            </div>
            <Row>
              <Col className="Upload-bttn">
                <Button className="choose-bttn" onClick={() => Submit()}>UPLOAD </Button>
                <Button className="bttn-cancel">CANCEL</Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Grid>
    </div>
  );
};

export default Upload;
