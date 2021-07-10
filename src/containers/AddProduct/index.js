/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Headerbar from '../../components/Headerbar';
import Sidebar from '../../components/Sidebar';
import { Upload, Modal, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import Cleave from "cleave.js/react";
import Overlay from '../../components/Overlay';
import Loader from '../../components/Loader';

const { Dragger } = Upload;

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [fileList, setImageList] = useState([])
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [productVideo, setProductVideo] = useState([])
  const [price, setPrice] = useState('');
  const [tax, setTax] = useState('');
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [policy, setPolicy] = useState('');
  const [stockReserve, setStockReserve] = useState('');
  const [stockHand, setStockHand] = useState('');
  const [warranty, setWarranty] = useState('');
  const [modal, setModal] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [clear, setClear] = useState(false)

  const dispatch = useDispatch();
  const thriftCategoryType = useSelector((state) => state.thriftCategoryState.thriftCategory);
  const thriftAddProduct = useSelector((state) => state.thriftAddProductState.thriftAddProduct);
  const isLoading = useSelector((state) => state.thriftAddProductState.isLoading);
  const invalidAddProduct = useSelector((state) => state.thriftAddProductState.error);

  useEffect(() => {
    if (clear && thriftAddProduct && thriftAddProduct.status) {
      setProductName('');
      setCategory('');
      setImageList([]);
      setPrice('');
      setTax('');
      setDiscount('');
      setFinalPrice('');
      setPolicy('');
      setWarranty('');
      message.success(`Thanks!, ${productName} ${thriftAddProduct.message}`)
      setClear(false)
    } else if (clear && invalidAddProduct) {
      message.error('invalid Error');
      setClear(false)
    }
  }, [thriftAddProduct, invalidAddProduct]);

  useEffect(() => {
    dispatch({ type: 'THRIFT_CATEGORY_REQUEST' });
  }, [])

  const onModal = () => {
    setModal(true)
  }
  const onHide = () => {
    setModal(false)
  }

  const onProductName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$'))
      setProductName(e.target.value)
  }

  const onCategory = (category) => {
    setCategory(category)
  }
  const thriftCategoryOptions = thriftCategoryType && thriftCategoryType.categoryDetails.sort((a, b) => a.categoryName.localeCompare(b.categoryName)).map((item) => ({
    value: item._id,
    label: item.categoryName,
  }));

  const onPrice = (e) => {
    setPrice(e.target.value)
  }

  const onTax = (e) => {
    setTax(e.target.value)
  }

  const onDiscount = (e) => {
    setDiscount(e.target.value)
  }

  const onFinalPrice = (e) => {
    setFinalPrice(e.target.value)
  }

  const onStockReserve = (e) => {
    setStockReserve(e.target.value)
  }
  const onStockHand = (e) => {
    setStockHand(e.target.value)
  }

  const onPolicy = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setPolicy(e.target.value)
    }
  }

  const onWarranty = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setWarranty(e.target.value)
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
  };

  const onChangeVideo = (info) => {
    const { status } = info.file;

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    } else if (!info.fileList.length) {
      message.error(`${info.file.name} file deleted successfully`);
    }
    setProductVideo(info.fileList)
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
    if (productVideo.length > 0) {
      message.error(`You cannot upload more than one file`);
    } else if (file.size > 31457280) {
      message.error(`${file.name} exceeds the maximum upload size limit`);
    }
    return productVideo.length < 1 && file.size < 31457280 ? true : Upload.LIST_IGNORE;
  }

  const handleCancel = () => setPreviewVisible(false);

  const onSubmit = () => {
    if
      (!productName || !category || !fileList.length || !price || !policy || !warranty) {
      setAlertError(true)
      message.error('Please fill all the fields')
    }
    else {
      const addProduct = {
        productName,
        category: category.value,
        productImages: fileList.map(info => info.thumbUrl),
        productVideo,
        discount,
        finalPrice,
        // stockReserve,
        // stockHand,
        policy,
        warranty,
      };
      dispatch({ type: 'THRIFT_ADD_PRODUCT_REQUEST', addProduct });
    }
    setClear(true)
  };

  return (
    <div className="wrapper">
      {isLoading && <Loader />}
      <Overlay show={modal} onHide={onHide} title="WARNING : LIMITATIONS OF LIABILITY"
        warningText=" IN NO EVENT SHALL INSTA-KART.COM, ITS OFFICERS, DIRECTORS, EMPLOYEES,
        OR AGENTS, BE LIABLE FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY 
        DAMAGES (EVEN IF INSTA-KART.COM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), 
        RESULTING FROM ANY ASPECT OF YOUR USE OF THE WEBSITE OR THE SERVICE, 
        INCLUDING WITHOUT LIMITATION WHETHER THE DAMAGES ARISE FROM USE OR MISUSE OF THE WEBSITE OR THE SERVICE, 
        FROM INABILITY TO USE THE WEBSITE OR THE SERVICE, OR THE INTERRUPTION, SUSPENSION, MODIFICATION, ALTERATION,
         OR TERMINATION OF THE WEBSITE OR THE SERVICE. SUCH LIMITATION OF LIABILITY SHALL ALSO APPLY WITH RESPECT TO 
         DAMAGES INCURRED BY REASON OF OTHER SERVICES OR PRODUCTS RECEIVED THROUGH OR ADVERTISED IN CONNECTION WITH THE 
         WEBSITE OR THE SERVICE OR ANY LINKS ON THE WEBSITE, AS WELL AS BY REASON OF ANY INFORMATION, OPINIONS OR ADVICE 
         RECEIVED THROUGH OR ADVERTISED IN CONNECTION WITH THE WEBSITE OR THE SERVICE OR ANY LINKS ON THEINSTA-KART.COM SITE. 
         THESE LIMITATIONS SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW. YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT 
         INSTA-KART.COM SHALL NOT BE LIABLE FOR USER SUBMISSIONS OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY
          USER OR THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU. "
        warningSubText="The Website is controlled and offered by INSTA-KART.COM from its facilities in the United States of America. INSTA-KART.COM 
          makes no representations or warranties that the Website is appropriate for use in other locations. Those who access 
          or use the Website from other jurisdictions do so at their own volition and risk and are responsible for compliance 
          with local law." />
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
                    className={alertError && !productName ? ` form-control my-input` : `form-control formy`}
                    maxLength={30}
                    value={productName}
                    onChange={onProductName}
                  />
                </Col>
                <Col sm={12} md={6} className={`clear-city ${alertError && !category && `dropdown-alert`}`}>
                  <label className="signup-label">Select Category <span className="red-star">*</span></label>
                  <Select
                    type="text"
                    className="prof-select "
                    placeholder="Select Category."
                    isSearchable={false}
                    value={category}
                    onChange={onCategory}
                    options={thriftCategoryOptions}
                  // menuIsOpen 
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <label className="signup-label">Upload Image <span className="red-star">*</span></label>
                  <ImgCrop rotate>
                    <Upload
                      action="png"
                      accept="image/*"
                      // multiple accept="image/*,audio/*,productVideo/*"
                      customRequest={fakeRequest}
                      className="upload-image"
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChangeImage}
                      onPreview={onPreview}
                    >
                      {fileList.length < 3 && '+ Upload'}
                    </Upload>
                  </ImgCrop>
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
                  <label className="signup-label">Upload Video </label>
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
                      <label className="signup-label">Price <span className="red-star">*</span></label>
                      <Cleave
                        className={alertError && !price ? ` form-control my-input` : `form-control formy`}
                        maxLength={10}
                        value={price}
                        onChange={onPrice}
                        options={{
                          prefix: '$',
                          numeral: true,
                          numeralThousandsGroupStyle: 'thousand'
                        }}
                      />

                    </Col>
                    <Col sm={3}>
                      <label className="signup-label">Tax</label>
                      <Cleave
                        options={{
                          numeral: true,
                          delimiter: '.',
                          blocks: [2, 4]
                        }}
                        className="form-control price-style"
                        maxLength={10}
                        value={tax}
                        onChange={onTax}
                      />
                      <span className="percentage">%</span>
                    </Col>
                    <Col sm={3}>
                      <label className="signup-label">Discount </label>
                      <Cleave
                        options={{
                          numeral: true,
                          delimiter: '.',
                          blocks: [2, 4]
                        }}
                        className="form-control"
                        maxLength={10}
                        value={discount}
                        onChange={onDiscount}
                      />
                      <span className="percentage">%</span>
                    </Col>
                    <Col sm={3}>
                      <label className="signup-label">Final Price  </label>
                      <Cleave
                        options={{
                          prefix: '$',
                          numeral: true,
                          numeralThousandsGroupStyle: 'thousand'
                        }}
                        className="form-control"
                        maxLength={10}
                        value={finalPrice}
                        onChange={onFinalPrice}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col sm={6}>
                      <label className="signup-label">Stock Reserve </label>
                      <Cleave
                        options={{
                          numeral: true,
                          numeralThousandsGroupStyle: 'thousand'
                        }}
                        className="form-control"
                        maxLength={10}
                        value={stockReserve}
                        onChange={onStockReserve}
                      />
                    </Col>
                    <Col sm={6}>
                      <label className="signup-label">Stocks on Hand  </label>
                      <Cleave
                        options={{
                          numeral: true,
                          numeralThousandsGroupStyle: 'thousand'
                        }}
                        className="form-control"
                        maxLength={10}
                        value={stockHand}
                        onChange={onStockHand}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <label className="signup-label">Product Description <span className="red-star">*</span></label>
                  <textarea className={alertError && !policy ? ` form-control my-input` : `form-control formy`}
                    name="message"
                    placeholder='type something..'
                    value={policy}
                    onChange={onPolicy}
                    maxLength={500}
                    rows="4"></textarea>
                </Col>
                <Col sm={12} md={6}>
                  <label className="signup-label">Warranty < span className="red-star">*</span> <i className="fa fa-info" onMouseEnter={onModal} /></label>
                  <textarea className={alertError && !warranty ? ` form-control my-input` : `form-control formy`}
                    name="message"
                    placeholder='type something..'
                    value={warranty}
                    onChange={onWarranty}
                    maxLength={500}
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
