/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Grid } from 'react-bootstrap';
import { Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import ReactPlayer from "react-player";
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

const { Dragger } = Upload;

const ListYourAds = () => {

  const [primaryBannerImg, setPrimaryBannerImg] = useState('');
  const [secondaryBannerImg, setSecondaryBannerImg] = useState('');
  const [video, setVideo] = useState(null);
  const [alertError, setAlertError] = useState(false);
  const [alertErrorTwo, setalertErrorTwo] = useState(false);
  const [alertErrorThree, setalertErrorThree] = useState(false);
  const [crop, setCrop] = useState();
  const [primaryImgList, setPrimaryImgList] = useState([]);
  const [secondaryImgList, setSecondaryImgList] = useState([]);
  const [videoAdsList, setVideoAdsList] = useState([]);

  const dispatch = useDispatch();
  const advertiseNowSuccess = useSelector((state) => state.listYourAds.advertisement);

  useEffect(() => {
    if (advertiseNowSuccess && advertiseNowSuccess.message)
      message.success(advertiseNowSuccess.message)
  }, [advertiseNowSuccess])

  const onPrimaryImage = ({ fileList: newFileList }) => {
    let file = newFileList.length && newFileList[newFileList.length - 1].originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPrimaryBannerImg(reader.result);
      };
      reader.readAsDataURL(file);
      newFileList = newFileList.slice(-1);
      setPrimaryImgList(newFileList);
    }
    else {
      setPrimaryImgList([]);
      setPrimaryBannerImg('');
    }
  };

  const onSecondaryImage = ({ fileList: newFileList }) => {
    let file = newFileList.length && newFileList[newFileList.length - 1].originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSecondaryBannerImg(reader.result);
      };
      reader.readAsDataURL(file);
      newFileList = newFileList.slice(-1);
      setSecondaryImgList(newFileList);
    } else {
      setSecondaryImgList([]);
      setSecondaryBannerImg('');
    }
  };

  const onChangeVideo = ({ fileList: newFileList }) => {
    if (newFileList[0]) {
      let file = newFileList[0].originFileObj;
      const reader = new FileReader();
      reader.onload = () => {
        setVideo(reader.result);
      };
      reader.readAsDataURL(file);
      newFileList = newFileList.slice(-1);
      setVideoAdsList(newFileList);
    } else {
      setVideoAdsList([]);
      setVideo('');
    }
  }

  const fakeRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("OK");
    }, 1000);
  };

  const beforeUpload = (file) => {
    if (video.length > 0) {
      message.error(`You cannot upload more than one file`);
    } else if (file.size > 31457280) {
      message.error(`${file.name} exceeds the maximum upload size limit`);
    }
    return video.length < 1 && file.size < 31457280 ? true : Upload.LIST_IGNORE;
  }

  const submitPrimary = () => {
    if (!primaryBannerImg) {
      setAlertError(true);
      message.error("Please upload any banner or image");
    } else {
      const advertiseNow = {
        advertise: 'primaryBanner',
        media: primaryBannerImg,
      };
      setAlertError(false);
      setPrimaryBannerImg();
      setPrimaryImgList();
      dispatch({ type: "LIST_YOUR_ADS_REQUEST", advertiseNow });
    }
  };

  const submitSecondry = () => {
    if (!secondaryBannerImg) {
      setalertErrorTwo(true);
      message.error("Please upload any banner or image");
    } else {
      const advertiseNow = {
        advertise: 'secondaryBanner',
        media: secondaryBannerImg,
      };
      setalertErrorTwo(false);
      setSecondaryBannerImg();
      setSecondaryImgList();
      dispatch({ type: "LIST_YOUR_ADS_REQUEST", advertiseNow });
    }
  };

  const submitVideo = () => {
    if (!video) {
      setalertErrorThree(true);
      message.error("Please upload any banner or image");
    } else {
      const advertiseNow = {
        advertise: 'video',
        media: video,
      };
      setalertErrorThree(false)
      setVideo()
      setVideoAdsList();
      dispatch({ type: "LIST_YOUR_ADS_REQUEST", advertiseNow });
    }
  };

  return (
    <Grid fluid>
      <Row>
        <Header basic />
      </Row>
      <div className="Listyour-ads">
        <h2 className="advertise"> Advertise Your Product For Better Sales </h2>
        <div className="list-your card">
          <Row>
            <Col md={12}>
              <label className="banner-label"> Primary Banner </label>
            </Col>
            <Col md={12}>
              <Row className="margin-control ">
                <Col md={9} className="ads-upload-col">
                  <div className="list-your ">
                    <ImgCrop
                      crop={crop}
                      zoom={true}
                      aspect={4 / 3}
                      onCropChange={setCrop}
                      beforeCrop={false}
                    >
                      <Dragger
                        name="file"
                        className="drag-video"
                        accept="image/*"
                        fileList={primaryImgList}
                        customRequest={fakeRequest}
                        onChange={onPrimaryImage}
                      >
                        {primaryBannerImg ? (
                          <div className="photo-ads">
                            <img src={primaryBannerImg} alt="" />
                          </div>
                        ) : (
                          <div>
                            <p className={alertError && !primaryBannerImg ? `ant-upload-text-error` : `ant-upload-text`}>
                              Click or drag file to this area to upload primary
                              banner
                            </p>
                          </div>
                        )}
                      </Dragger>
                    </ImgCrop>
                  </div>
                </Col>
                <Col md={3} className="modal-btn-col">
                  <div className="free-trail-col">
                    <button
                      type="button"
                      className="adslistbtn modal-butn"
                      onClick={submitPrimary}
                    >
                      Advertise For Free
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="list-your card">
          <Row>
            <Col md={12}>
              <label className="banner-label">Secondary Banner </label>
            </Col>
            <Col md={12}>
              <Row className="margin-control">
                <Col md={9} className="ads-upload-col">
                  <div className="list-your">
                    <ImgCrop
                      // crop={crop}
                      zoom={true}
                      aspect={700 / 300}
                    // onCropChange={setCrop}
                    >
                      <Dragger
                        name="file"
                        className="drag-video"
                        accept="image/*"
                        fileList={secondaryImgList}
                        customRequest={fakeRequest}
                        onChange={onSecondaryImage}
                      >
                        {secondaryBannerImg ? (
                          <div className="photo-ads">
                            <img src={secondaryBannerImg} alt="" />
                          </div>
                        ) : (
                          <div>
                            <p className={alertErrorTwo && !secondaryBannerImg ? `ant-upload-text-error` : `ant-upload-text`}>
                              Click or drag file to this area to upload secondary
                              banner
                            </p>
                          </div>
                        )}
                      </Dragger>
                    </ImgCrop>
                  </div>
                </Col>
                <Col md={3} className="modal-btn-col">
                  <div className="free-trail-col">
                    <button
                      type="button"
                      className="adslistbtn modal-butn"
                      onClick={submitSecondry}
                    >
                      Advertise For Free
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="list-your card">
          <Row>
            <Col md={12}>
              <label className="banner-label">  Video </label>
            </Col>
            <Col md={12}>
              <Row className="margin-control">
                <Col md={9} className="ads-upload-col">
                  <div className="list-your">
                    <Dragger
                      name="file"
                      className="drag-video"
                      accept="video/*"
                      fileList={videoAdsList}
                      customRequest={fakeRequest}
                      onChange={onChangeVideo}
                      beforeUpload={beforeUpload}>
                      {video ?
                        <ReactPlayer
                          className="video-player-test"
                          url={video}
                          width="100%"
                          controls={true}
                        /> :
                        <div>
                          <p className={alertErrorThree && !video ? `ant-upload-text-error` : `ant-upload-text`}>
                            Click or drag file to this area to upload video
                          </p>
                        </div>}
                    </Dragger>
                  </div>
                </Col>
                <Col md={3} className="modal-btn-col">
                  <div className="free-trail-col">
                    <button
                      type="button"
                      className="adslistbtn modal-btn "
                      onClick={submitVideo}
                    >
                      Advertise For Free
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div >
      <Row>
        <Footer />
      </Row>
    </Grid >
  );
};

export default ListYourAds;
