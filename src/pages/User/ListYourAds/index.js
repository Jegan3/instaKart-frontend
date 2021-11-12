/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Grid } from 'react-bootstrap';
import { Upload, message } from 'antd';
import ReactPlayer from "react-player";
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

const { Dragger } = Upload;

const ListYourAds = () => {

  const [primaryBannerImg, setPrimaryBannerImg] = useState('');
  const [secondaryBannerImg, setSecondaryBannerImg] = useState('');
  const [video, setVideo] = useState(null);
  //const [submit, setName] = useState('');
  const [alertError, setAlertError] = useState(false);
  const [alertError2, setAlertError2] = useState(false);
  const [alertError3, setAlertError3] = useState(false);

  //commented lines are  for future use!

  // const [primaryAdsPrice, setPrimaryAdsPrice] = useState("");
  // const [secondaryAdsPrice, setsecondaryAdsPrice] = useState("");
  // const [videoAdsPrice, setVideoAdsPrice] = useState("");

  const dispatch = useDispatch();

  const submitPrimary = () => {
    //   if (!primaryAdsPrice || !primaryBannerImg) {
    //     setAlertError(true);
    //     message.error("Please fill all the fields");
    //   } else {
    //     const advertiseNow = {
    //       advertise: primaryAdsPrice,
    //       media: primaryBannerImg,
    //     };

    if (!primaryBannerImg) {
      setAlertError(true);
      message.error("Please upload any banner or image");
    } else {
      const advertiseNow = {
        advertise: 'primary banner',
        media: primaryBannerImg,
      };
      setAlertError(false)
      setPrimaryBannerImg()
      dispatch({ type: "LIST_YOUR_ADS_REQUEST", advertiseNow });
    }
  };


  const submitSecondry = () => {
    //   if (!secondaryAdsPrice || !secondaryBannerImg) {
    //     setAlertError2(true);
    //     message.error("Please fill all the fields");
    //   } else {
    //     const advertiseNow = {
    //       secondaryAdsPrice,
    //       secondaryBannerImg,
    //     };
    if (!secondaryBannerImg) {
      setAlertError2(true);
      message.error("Please upload any banner or image");
    } else {
      const advertiseNow = {
        advertise: 'secondary banner',
        media: secondaryBannerImg,
      };
      // message.success("sucessfully Updated");
      setAlertError2(false)
      setSecondaryBannerImg()
      dispatch({ type: "LIST_YOUR_ADS_REQUEST", advertiseNow });
    }
  };

  // const submitVideo = () => {
  //   if (!videoAdsPrice || !video) {
  //     setAlertError3(true);
  //     message.error("Please fill all the fields");
  //   } else {
  //     const advertiseNow = {
  //       videoAdsPrice,
  //       video,
  //     };
  //     console.log("advertiseNow", advertiseNow);
  //     dispatch({
  //       type: "ADVERTISE_NOW_REQUEST",
  //       advertiseNow,
  //     });
  //   }
  // };

  const submitVideo = () => {
    //   if (!videoAdsPrice || !video) {
    //     setAlertError3(true);
    //     message.error("Please fill all the fields");
    //   } else {
    //     const advertiseNow = {
    //       videoAdsPrice,
    //       video,
    //     };
    if (!video) {
      setAlertError3(true);
      message.error("Please upload any banner or image");
    } else {
      const advertiseNow = {
        advertise: 'video',
        media: video,
      };
      // message.success("sucessfully Updated");
      setAlertError3(false)
      setVideo()
      console.log("advertiseNow", advertiseNow);
      dispatch({ type: "LIST_YOUR_ADS_REQUEST", advertiseNow });
    }
  };

  // const primaryHandleChange = (e) => {
  //   setPrimaryAdsPrice(e.target.value);
  // };

  // const secondryHandleChange = (e) => {
  //   setsecondaryAdsPrice(e.target.value);
  // };

  // const vidosHandleChange = (e) => {
  //   setVideoAdsPrice(e.target.value);
  // };

  const onPrimaryImage = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    const reader = new FileReader();
    reader.onload = () => {
      setPrimaryBannerImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSecondaryImage = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    const reader = new FileReader();
    reader.onload = () => {
      setSecondaryBannerImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const fakeRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("OK");
    }, 1000);
  };

  let fileList = [];

  const onChangeVideo = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    setVideo(URL.createObjectURL(file));
  };

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

  return (
    <Grid fluid>
      <Header basic />
      <div className="Listyour-ads">
        <h2 className="advertise"> Advertise Your Product For Better Sales </h2>
        <div className="list-your card">
          <Row>
            <Col md={12}>
              <label className="banner-label"> Primary Banner </label>
            </Col>
            <Col md={12}>
              <Row className="margin-control ">
                <Col md={9} >
                  <div className="list-your ">
                    <Dragger
                      name="file"
                      className="drag-video"
                      accept="image/*"
                      fileList={fileList}
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
                  </div>
                </Col>
                <Col md={3}>
                  <div className="free-trail-col">
                    {/* <h2>One Month Free Trail</h2> */}
                    <button
                      type="button"
                      className="adslistbtn modal-butn"
                      onClick={submitPrimary}
                    >
                      Advertise For Free
                    </button>
                  </div>

                  {/* <div className={alertError && !primaryAdsPrice ? " price-col-error" : "price-col"}>
                    <div>
                      <input
                        className="radio-btn-size"
                        type="radio"
                        value="$10"
                        name="primaryAdsPrice"
                        id="10$ PerDay"
                        onChange={primaryHandleChange}
                      />
                      <label className="price-label" for="10$ PerDay">
                        $10 / Day
                      </label>
                    </div>
                    <div>
                      <input
                        className="radio-btn-size"
                        type="radio"
                        value="$20"
                        name="primaryAdsPrice"
                        id="20$ PerWeek"
                        onChange={primaryHandleChange}
                      />
                      <label className="price-label" for="20$ PerWeek">
                        $20 / Week
                      </label>
                    </div>
                    <div>
                      <input
                        className="radio-btn-size"
                        type="radio"
                        value="$30"
                        name="primaryAdsPrice"
                        id="30$ PerMonth"
                        onChange={primaryHandleChange}
                      />
                      <label className="price-label" for="30$ PerMonth">
                        $30 / Month
                      </label>
                    </div>
                    <button
                      type="button"
                      className="adslistbtn modal-butn"
                      onClick={submitPrimary}
                    >
                      Advertise Now
                    </button>
                  </div> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="list-your card">
          <Row>
            <Col md={12}>
              <label className="banner-label">  Secondary Banner </label>
            </Col>
            <Col md={12}>
              <Row className="margin-control">
                <Col md={9}>
                  <div className="list-your">
                    <Dragger
                      name="file"
                      className="drag-video"
                      accept="image/*"
                      fileList={fileList}
                      customRequest={fakeRequest}
                      onChange={onSecondaryImage}
                    >
                      {secondaryBannerImg ? (
                        <div className="photo-ads">
                          <img src={secondaryBannerImg} alt="" />
                        </div>
                      ) : (
                        <div>
                          <p className={alertError2 && !secondaryBannerImg ? `ant-upload-text-error` : `ant-upload-text`}>
                            Click or drag file to this area to upload secondary
                            banner
                          </p>
                        </div>
                      )}
                    </Dragger>
                  </div>
                </Col>
                <Col md={3}>

                  <div className="free-trail-col">
                    {/* <h2>One Month Free Trail</h2> */}
                    <button
                      type="button"
                      className="adslistbtn modal-butn"
                      onClick={submitSecondry}
                    >
                      Advertise For Free
                    </button>
                  </div>

                  {/* <div className={alertError2 && !secondaryAdsPrice ? " price-col-error" : "price-col"}>
                    <input
                      className="radio-btn-size"
                      type="radio"
                      value="40"
                      name="secondaryAdsPrice"
                      id="40$ PerDay"
                      onChange={secondryHandleChange}
                    />
                    <label className="price-label" for="40$ PerDay">
                      $40 / Day
                    </label>
                    <div>
                      <input
                        className="radio-btn-size"
                        type="radio"
                        value="50"
                        name="secondaryAdsPrice"
                        id="50$ PerWeek"
                        onChange={secondryHandleChange}
                      />
                      <label className="price-label" for="50$ PerWeek">
                        $50 / Week
                      </label>
                    </div>
                    <div>
                      <input
                        className="radio-btn-size"
                        type="radio"
                        value="60"
                        name="secondaryAdsPrice"
                        id="60$ PerMonth"
                        onChange={secondryHandleChange}
                      />
                      <label className="price-label" for="60$ PerMonth">
                        $60 / Month
                      </label>
                    </div>
                    <button
                      type="button"
                      className="adslistbtn modal-butn"
                      onClick={submitSecondry}
                    >
                      Advertise Now
                    </button>
                  </div> */}
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
                <Col md={9}>
                  <div className="list-your">
                    {video ? (
                      <ReactPlayer
                        url={video}
                        width="100%"
                        height="100%"
                        controls={true}
                      />
                    ) : (
                      <Dragger
                        name="file"
                        className="drag-video"
                        accept="video/*"
                        customRequest={fakeRequest}
                        onChange={onChangeVideo}
                        beforeUpload={beforeUpload}
                      >
                        <div>
                          <p className={alertError3 && !video ? `ant-upload-text-error` : `ant-upload-text`}>
                            Click or drag file to this area to upload video
                          </p>
                        </div>
                      </Dragger>
                    )}
                  </div>
                </Col>
                <Col md={3}>

                  <div className="free-trail-col">
                    {/* <h2>One Month Free Trail</h2> */}
                    <button
                      type="button"
                      className="adslistbtn modal-butn"
                      onClick={submitVideo}
                    >
                      Advertise For Free
                    </button>
                  </div>


                  {/* <div className={alertError3 && !videoAdsPrice ? " price-col-error" : "price-col"}>
                    <input
                      className="radio-btn-size"
                      type="radio"
                      value="70"
                      name="videoAdsPrice"
                      id="70$ PerDay"
                      onChange={vidosHandleChange}
                    />
                    <label className="price-label" for="70$ PerDay">
                      $70 / Day
                    </label>
                    <div>
                      <input
                        className="radio-btn-size"
                        type="radio"
                        value="80"
                        name="videoAdsPrice"
                        id="80$ PerWeek"
                        onChange={vidosHandleChange}
                      />
                      <label className="price-label" for="80$ PerWeek">
                        $80 / Week
                      </label>
                    </div>
                    <div>
                      <input
                        className="radio-btn-size"
                        type="radio"
                        value="90"
                        name="videoAdsPrice"
                        id="90$ PerMonth"
                        onChange={vidosHandleChange}
                      />
                      <label className="price-label" for="90$ PerMonth">
                        $90 / Month
                      </label>
                    </div>
                    <button
                      type="button"
                      className="adslistbtn modal-butn"
                      onClick={submitVideo}
                    >
                      Advertise Now
                    </button>
                  </div> */}
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
