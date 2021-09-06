/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { Upload, message } from 'antd';
import ReactPlayer from "react-player";
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

const { Dragger } = Upload;

const ListYourAds = () => {

  const [primaryImage, setPrimaryImage] = useState('');
  const [secondaryImage, setSecondaryImage] = useState('');
  const [video, setVideo] = useState(null);

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

  const onChangeVideo = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    setVideo(URL.createObjectURL(file));
    console.log('test-1', file)
  };

  // const onChangeVideo  = (event) => {
  //   // console.log('test-1',event.target.files[0])
  //    setVideo(URL.createObjectURL(event.target.files[0]));
  //   console.log('test-11',video)
  //   };

  // const onChangeVideo = (info) => {
  //   const { status } = info.file;
  //   if (status === 'done') {
  //     message.success(`${info.file.name} file uploaded successfully.`);
  //   } else if (status === 'error') {
  //     message.error(`${info.file.name} file upload failed`);
  //   } else if (!info.fileList.length) {
  //     message.error(`${info.file.name} file deleted successfully`);
  //   }
  //   setVideo(info.fileList)
  // }

  const beforeUpload = (file) => {
    if (video.length > 0) {
      message.error(`You cannot upload more than one file`);
    } else if (file.size > 31457280) {
      message.error(`${file.name} exceeds the maximum upload size limit`);
    }
    return video.length < 1 && file.size < 31457280 ? true : Upload.LIST_IGNORE;
  }
  console.log('test', video)
  return (
    <Grid fluid>
      <Header basic />
      <div className="Listyour-ads">
        <h2 className="advertise">
          Advertise Your Product For Better Sales 
        </h2>
        <div className="list-your card">
          <Row>
            <Col md={12}>
              <Row>
                <Col md={9} >
                  <div className='list-your'>
                    <label className="signup-label">Primary Banner</label>
                    <Dragger
                      name='file'
                      className="drag-video"
                      accept="image/*"
                      fileList={fileList}
                      customRequest={fakeRequest}
                      onChange={onPrimaryImage}
                    >
                      {primaryImage ? <div className="photo-ads">
                        <img src={primaryImage} alt='' />
                      </div> :
                        <div>
                          <p className="ant-upload-text">Click or drag file to this area to upload primary banner</p>
                          {/* <p className="ant-upload-hint">You can upload only 1 Image </p> */}
                        </div>}
                    </Dragger>
                  </div>
                </Col>
                <Col md={3}>
                  <Row>
                    <Col className="listtop">
                      <div className="ads-price">
                        <p> $10  </p>
                      </div>
                    </Col>
                    <Col className="listtop">
                      <div className="ads-price">
                        <button type="button"
                          className="adslistbtn modal-button"
                        // onClick={submit}
                        > Advertise Now
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="list-your card">
          <Row>
            <Col md={12}>
              <Row>
                <Col md={9} >
                  <div className='list-your'>
                    <label className="signup-label">Secondary Banner </label>
                    <Dragger
                      name='file'
                      className="drag-video"
                      accept="image/*"
                      fileList={fileList}
                      customRequest={fakeRequest}
                      onChange={onSecondaryImage}
                    >
                      {secondaryImage ? <div className="photo-ads">
                        <img src={secondaryImage} alt='' />
                      </div> :
                        <div>
                          <p className="ant-upload-text">Click or drag file to this area to upload secondary banner</p>
                          {/* <p className="ant-upload-hint">You can upload only 1 Image </p> */}
                        </div>}
                    </Dragger>
                  </div>
                </Col>
                <Col md={3}>
                  <Row>
                    <Col className="listtop">
                      <div className="ads-price">
                        <p> $20  </p>
                      </div>
                    </Col>
                    <Col className="listtop">
                      <div className="ads-price">
                        <button type="button"
                          className="adslistbtn modal-button"
                        // onClick={submit}
                        > Advertise Now
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="list-your card">
          <Row>
            <Col md={12}>
              <Row>
                <Col md={9} >
                  <div className='list-your'>
                    <label className="signup-label">Video</label>
                    {video ?
                      <ReactPlayer url={video} width="100%" height="100%" controls={true} /> :
                      <Dragger
                        name='file'
                        className="drag-video"
                        accept="video/*"
                        customRequest={fakeRequest}
                        onChange={onChangeVideo}
                        beforeUpload={beforeUpload}
                      >
                        <div>
                          <p className="ant-upload-text">Click or drag file to this area to upload video</p>
                        </div>
                      </Dragger>
                    }
                  </div>
                </Col>
                <Col md={3}>
                  <Row>
                    <Col className="listtop">
                      <div className="ads-price">
                        <p> $30  </p>
                      </div>
                    </Col>
                    <Col className="listtop">
                      <div className="ads-price">
                        <button type="button"
                          className="adslistbtn modal-button"
                        // onClick={submit}
                        > Advertise Now
                        </button>
                      </div>
                    </Col>
                  </Row>
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
