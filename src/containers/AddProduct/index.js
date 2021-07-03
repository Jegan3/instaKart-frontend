/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Headerbar from '../../components/Headerbar';
import Sidebar from '../../components/Sidebar';
import { Upload, Modal, message } from 'antd';

const { Dragger } = Upload;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [fileList, setImageList] = useState([])
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [videoList, setVideoList] = useState([])
  const [itemPrice, setItemPrice] = useState('');
  const [tax, setTax] = useState('');
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [textArea, setTextArea] = useState('');

  // console.log('fileList', fileList);

  const dispatch = useDispatch();
 // const thriftProduct = useSelector((state) => state.thriftAddProductState.thriftAddProduct);

  // useEffect(() => {
  //   if (thriftProduct && thriftProduct.status) {
  //     message.success('Thanks!, Basic info form is successfully updated with us')
  //   }
  // })

  const onProductName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9]*$')) {
      setProductName(e.target.value)
    }
  }

  const onCategory = () => {
    setCategory()
  }

  const onItemPrice = (e) => {
    if (e.target.value.match('^[0-9]')) {
      setItemPrice(e.target.value)
    }
  }

  const onTax = (e) => {
    if (e.target.value.match('^[0-9]')) {
      setTax(e.target.value)
    }
  }

  const onDiscount = (e) => {
    if (e.target.value.match('^[0-9]')) {
      setDiscount(e.target.value)
    }
  }

  const onFinalPrice = (e) => {
    if (e.target.value.match('^[0-9]')) {
      setFinalPrice(e.target.value)
    }
  }

  const onTextArea = (e) => {
    if (e.target.value) {
      setTextArea(e.target.value)
    }
  }

  const onChangeImage = ({ fileList: newFileList }) => {

    // To identify removed array
    const removed = fileList.find(item => item.status === 'removed')

    if (newFileList.length && newFileList[newFileList.length - 1].status === 'done' && !removed) {
      message.success(`${fileList[fileList.length - 1].name} file uploaded successfully`);
    } else if (fileList.length && fileList[fileList.length - 1].status === 'error') {
      message.error(`${fileList[fileList.length - 1].name} file uploaded failed`);
    } else if (fileList.length && removed) {
      message.error(`${removed.name} file deleted successfully`);
    }
    setImageList(newFileList);
    console.log('test33', fileList)
  };

  const onChangeVideo = (info) => {
    const { status } = info.file;

    // if (status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    } else if (!info.fileList.length) {
      message.error(`${info.file.name} file deleted successfully`);
    }
    setVideoList(info.fileList)
  }

  const onPreview = async file => {
    if (!file.url && !file.preview) { 
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true)
    setPreviewImage(file.url || file.preview)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const fakeRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('OK')
    }, 1000)
  }

  const beforeUpload = (file) => {
    if (videoList.length > 0) {
      message.error(`You cannot upload more than one file`);
    } else if (file.size > 31457280) {
      message.error(`${file.name} exceeds the maximum upload size limit`);
    }
    return videoList.length < 1 && file.size < 31457280 ? true : Upload.LIST_IGNORE;
  }

  const handleCancel = () => setPreviewVisible(false);







  const onSubmit = () => {
    if
      (productName=== '' ||  discount === '') {
      // setAlertError(window.alert('done'));
      // setAlertMsg(window.alert('Please fill all the fields'));
    }
    // else if (termscondition === false) {
    //   setAlertMsg('Please accept the Terms & Conditions and Privacy Policy');
    // } 
    else {
      const addProduct = {
        productName,
        category,
        tax,
        discount,
        finalPrice,
        textArea,
        videoList,
        fileList,
      };
      console.log('tst', addProduct);
         dispatch({ type: 'THRIFT_ADD_PRODUCT_REQUEST', addProduct });
      //   setAlertMsg('');
    }

  };

  return (
    <div className="wrapper">
      {/* <Upload showPopup={show} hidePopup={hidePopup} /> */}
      <Sidebar />
      <div className="rightside-panel">
        <Headerbar headerName="Add Product" />
        <div className="main-content add-product">
          <Grid fluid>
            <Row className="form-content card">
              {/* <Col md={6}> */}
              <Row>
                <Col sm={12} md={6}>
                  <label className="signup-label">Product Name <span className="red-star">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    maxLength={30}
                    value={productName}
                    onChange={onProductName}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <label className="signup-label">Select Category <span className="red-star">*</span></label>
                  <Select
                    type="text"
                    className="prof-select "
                    placeholder="Select Category."
                    isSearchable={false}
                     value={category}
                     onChange={onCategory}
                     options={options}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <label className="signup-label">Upload Image <span className="red-star">*</span></label>
                  <Upload
                    action="png"
                    accept="image/*"
                    // multiple accept="image/*,audio/*,video/*"
                    customRequest={fakeRequest}
                    className='upload-image'
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChangeImage}
                    onPreview={onPreview}
                  >
                    {fileList.length < 3 && '+ Upload'}
                  </Upload>
                  <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
                </Col>
                <Col sm={12} md={6}>
                  <label className="signup-label">Upload Video <span className="red-star">*</span></label>
                  <Dragger
                    name='file'
                    className="drag-video"
                    accept="video/*"
                    customRequest={fakeRequest}
                    onChange={onChangeVideo}
                    beforeUpload={beforeUpload}
                  >
                    {/* <p className="ant-upload-drag-icon">
                      <InboxOutlined /> HI 
                    </p> */}
                    <p className="ant-upload-text">Click or drag file to this area to upload video</p>
                    <p className="ant-upload-hint">You can upload only 1 video and maximum file size of the video should be less than 30 MB</p>
                  </Dragger>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <Row className='pricerow-list'>
                    <Col sm={3}>
                      <label className="signup-label">Item Price <span className="red-star">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={10}
                        value={itemPrice}
                        onChange={onItemPrice}
                      />
                    </Col>
                    <Col sm={3}>
                      <label className="signup-label">Tax</label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={10}
                        value={tax}
                        onChange={onTax}
                      />
                    </Col>
                    <Col sm={3}>
                      <label className="signup-label">Discount </label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={10}
                        value={discount}
                        onChange={onDiscount}
                      />
                    </Col>
                    <Col sm={3}>
                      <label className="signup-label">Final Price </label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={10}
                        value={finalPrice}
                        onChange={onFinalPrice}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6}>
                  <label className="signup-label">Description<span className="red-star">*</span></label>
                  <textarea className="form-control" 
                  name="message" 
                
                  value={textArea}
                  onChange={onTextArea}
                  rows="4"></textarea>
                </Col>
              </Row>
            </Row>
            <Row md={12} className="margin-control">
              {/* <Col className="product-button"> */}
              <Col lg={2} md={3} sm={4} xs={6} className="product-button">
                <button
                  type="button"
                  className="btn btn-primary btn-block modal-butn"
                onClick={onSubmit}
                >
                  Submit
                </button>
              </Col>
              <Col lg={2} md={3} sm={4} xs={6} className="product-button">
                <button
                  type="button"
                  className="btn btn-primary btn-block modal-butn"
                // onClick={onCancel}
                >
                  Cancel
                </button>
              </Col>
              {/* </Col> */}
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
