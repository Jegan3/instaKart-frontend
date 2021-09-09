/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import Headerbar from '../../../components/Headerbar';
import Sidebar from '../../../components/Sidebar';

const MyProfile = () => {
  const [companyLogo, setCompanyLogo] = useState('');

  const dispatch = useDispatch();
  const storeInfo = useSelector((state) => state.storeInfoState.storeInfo);

  useEffect(() => {
    dispatch({ type: 'THRIFT_VENDOR_INFO_REQUEST' });
  }, [])

  let fileList = [];

  const onAvatarImage = ({ fileList: newFileList }) => {
    let file = newFileList[0].originFileObj;
    const reader = new FileReader();
    reader.onload = () => {
      setCompanyLogo(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const fakeRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('OK')
    }, 1000)
  }

  return (
    <div className="wrapper">
      {/* <Sidebar /> */}
      <div className="rightside-panel">
        <Headerbar headerName="My-Profile" />
        <div className='my-profile'>
          <div className="profilelist">
            <Row>
              <Col md={6}>
                <div className="avatardetails cardetails">
                  <Row>
                    <Col md={12} className='avtar-info' >
                      <div className="profilephoto">
                        <img src="images/Your-logo-here.png" />
                      </div>
                    </Col>
                    <Col md={12} >
                      <div clasName="personal-details" >
                        <div className="label-myprofile">
                          <span>Name :  Jennifer  </span>
                        </div>
                        <div className="label-myprofile">
                          <span>Name :  Jennifer  </span>
                        </div>
                        <div className="label-myprofile">
                          <span>Name :  Jennifer  </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={12}>
                    <div className="cardetails">
                      <div className="label-myprofile">
                        <span>Name :  Jennifer  </span>
                      </div>
                      <div className="label-myprofile">
                        <span>Name :  Jennifer  </span>
                      </div>
                      <div className="label-myprofile">
                        <span>Name :  Jennifer  </span>
                      </div>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="cardetails">
                      <div className="label-myprofile">
                        <span>Name :  Jennifer  </span>
                      </div>
                      <div className="label-myprofile">
                        <span>Name :  Jennifer  </span>
                      </div>
                      <div className="label-myprofile">
                        <span>Name :  Jennifer  </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyProfile;
