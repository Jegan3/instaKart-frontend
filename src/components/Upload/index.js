/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Row, Col, Button, Grid } from 'react-bootstrap';

const Upload = ({ show }) => (
  <div className="modal-upload">
    <Grid>
      <Modal show={show} bsSize="small">
        <Modal.Body >
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <Modal.Title className="Tittle-Upload">Upload Images
          </Modal.Title>
          <div className="up-load">
            <input
              className="btn-uploadFile"
              type="file"
              name="uploadedfile"
              accept="image/png, .jpeg, .jpg, image/gif"
            />
          </div>
          <Row>
            <Col className="Upload-bttn">
              <Button className="choose-bttn">UPLOAD </Button>
              <Button className="bttn-cancel">CANCEL</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Grid>
  </div>
);

export default Upload;
