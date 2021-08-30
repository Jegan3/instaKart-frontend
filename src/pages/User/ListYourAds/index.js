/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { Upload, message } from 'antd';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

const { Dragger } = Upload;

const ListYourAds = () => {

  const [primaryImage, setPrimaryImage] = useState('');
  const [secondaryImage, setSecondaryImage] = useState('');
  const [video, setVideo] = useState('');


  const onPrimaryImage = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    const reader = new FileReader();
    reader.onload = () => {
      setPrimaryImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const onSecondaryImage = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    const reader = new FileReader();
    reader.onload = () => {
      setSecondaryImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const fakeRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('OK')
    }, 1000)
  }

  let fileList = [];

  const onChangeVideo = (info) => {
    const { status } = info.file;

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    } else if (!info.fileList.length) {
      message.error(`${info.file.name} file deleted successfully`);
    }
    setVideo(info.fileList)
  }


  const beforeUpload = (file) => {
    if (productVideo.length > 0) {
      message.error(`You cannot upload more than one file`);
    } else if (file.size > 31457280) {
      message.error(`${file.name} exceeds the maximum upload size limit`);
    }
    return productVideo.length < 1 && file.size < 31457280 ? true : Upload.LIST_IGNORE;
  }

  return (
    <Grid fluid>
      <Header basic />
      <div className="Listyour-ads">
        <div className="list-your">
          <Row>
            <Col md={12}>
              <Row>
                <Col md={9}>
                  <label className="signup-label">Primary Banner</label>
                  <Dragger
                    name='file'
                    className="drag-video"
                    accept="image/*"
                    fileList={fileList}
                    customRequest={fakeRequest}
                    onChange={onPrimaryImage}
                  >
                    {primaryImage ? <div className="photos">
                      <img src={primaryImage} alt='' />
                    </div> :
                      <div>
                        <p className="ant-upload-text">Click or drag file to this area to upload Primary Banner</p>
                        <p className="ant-upload-hint">You can upload only 1 Image </p>
                      </div>}
                  </Dragger>
                </Col>
                <Col md={3}>

                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="list-your">
          <Row>
            <Col md={12}>
              <Row>
                <Col md={9}>
                  <label className="signup-label">Secondary </label>
                  <Dragger
                    name='file'
                    className="drag-video"
                    accept="image/*"
                    fileList={fileList}
                    customRequest={fakeRequest}
                    onChange={onSecondaryImage}
                  >
                    {secondaryImage ? <div className="photos">
                      <img src={secondaryImage} alt='' />
                    </div> :
                      <div>
                        <p className="ant-upload-text">Click or drag file to this area to upload Secondary Banner</p>
                        <p className="ant-upload-hint">You can upload only 1 Image </p>
                      </div>}
                  </Dragger>
                </Col>
                <Col md={3}>

                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="list-your">
          <Row>
            <Col md={12}>
              <Row>
                <Col md={9}>
                  <label className="signup-label">Video</label>
                  <Dragger
                    name='file'
                    className="drag-video"
                    accept="video/*"
                    customRequest={fakeRequest}
                    onChange={onChangeVideo}
                    beforeUpload={beforeUpload}
                  >
                    {video ? <div className="photos">
                      <iframe
                        className="directorypress-video-iframe fitvidsignore"
                        src={video}
                        frameBorder="0"
                        allowFullScreen=""
                      />
                    </div> :
                      <div>
                        <p className="ant-upload-text">Click or drag file to this area to upload video</p>
                        <p className="ant-upload-hint">You can upload only 1 video and maximum file size of the video should be less than 30 MB</p>
                      </div>}
                  </Dragger>
                </Col>
                <Col md={3}>

                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Row>
        <Footer />
      </Row>
    </Grid>
  )
}

export default ListYourAds;
