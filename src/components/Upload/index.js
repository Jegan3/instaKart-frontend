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

  const Submit = () => {
    const bannerDetails =
    {
      email: 'gopinath.chandar@gmail.com',
      poster: upload[0].name,
    };

    dispatch({ type: 'BANNER_UPLOAD_REQUEST', banner: bannerDetails });
    // console.log(upload[0].name);
    // // console.log('hi');
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
                onChange={(e) => setUpload(e.target.files)}
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
