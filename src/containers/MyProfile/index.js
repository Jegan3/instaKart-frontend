/*eslint-disable*/
import React, { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import Headerbar from '../../components/Headerbar';
import Sidebar from '../../components/Sidebar';

const MyProfile = () => {
  const [companyLogo, setCompanyLogo] = useState('');


  // const onAvatarImage = ({ fileList: newFileList }) => {
  //   let file = newFileList[0].originFileObj;
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setCompanyLogo(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // }

  return (
    <div className="wrapper">
    
    <Sidebar />
    <div className="rightside-panel">
      <Headerbar headerName="My-Profile"/>
      <div className="m-profile">
          <div className='my-profile'>
            <div class="profile-card">
              <header>
              {/* <div className='load-info'>
                        <div>
                          <div className="photo">
                          <img src={companyLogo} alt='' />
              {companyLogo ? <img src={companyLogo} alt='' /> : 
              <img src={thriftVendorInfo && thriftVendorInfo.vendorInfo.logo ? thriftVendorInfo.vendorInfo.logo : 
              "images/Your-logo-here..png"} />} 
                          </div>
                          <div className="image-upload">
                            <ImgCrop rotate>
                              <Upload
                                fileList={fileList}
                                customRequest={fakeRequest}
                                onChange={onAvatarImage}
                                type="file"
                                accept="image/*"
                                showUploadList={false}
                              >
                                <label for="file-input">
                                  <i className="fa fa-camera" />
                                </label>
                              </Upload>
                            </ImgCrop>
                          </div>
                        </div>
                      </div> */}
                <h1>David Jones</h1>
                <h2>1212345678</h2>
              </header>
              {/* <div class="profile-bio">
                <p>Even when everything is perfect, you can always make it better.
                   Break barriers in your head, create something crazy and don't 
                   forget Code is Poetry...</p>
              </div> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default MyProfile;
