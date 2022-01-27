/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { Upload, Modal, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import Cleave from "cleave.js/react";
import ReactPlayer from "react-player";
import Overlay from '../../../components/Overlay';
import Loader from '../../../components/Loader';
import { useHistory } from "react-router-dom";

const { Dragger } = Upload;

const AddProduct = ({ storeId, productId, editPage, editSuccess }) => {
  const [productName, setProductName] = useState();
  const [category, setCategory] = useState();
  const [fileList, setImageList] = useState([])
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [video, setVideo] = useState([])
  const [price, setPrice] = useState();
  const [tax, setTax] = useState();
  const [discount, setDiscount] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [taxPrice, setTaxPrice] = useState();
  const [finalPrice, setFinalPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [stockHand, setStockHand] = useState();
  const [productWarranty, setProductWarranty] = useState();
  const [productShipping, setProductShipping] = useState();
  const [modal, setModal] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [clear, setClear] = useState(false);
  const [status, setStatus] = useState(false);
  const [totalprice, setTotalPrice] = useState('');
  const [productImageList, setProductImageList] = useState([]);
  const [productEdit] = useState(editPage);
  const [categoryDetails, setCategoryDetails] = useState()
  const [image, setImage] = useState([])
  const [imageEdit, setImageEdit] = useState(true);
  const [videoEdit, setVideoEdit] = useState(true)

  const dispatch = useDispatch();
  const thriftCategoryType = useSelector((state) => state.thriftCategoryState.thriftCategory);
  const addProduct = useSelector((state) => state.addProductState.addProduct);
  const isLoading = useSelector((state) => state.addProductState.isLoading);
  const invalidAddProduct = useSelector((state) => state.addProductState.error);
  const productInfo = useSelector((state) => state.getProductState.product);
  const editProduct = useSelector((state) => state.editProductState.editProduct);

  const taxInfo = productInfo && productInfo.tax;
  const priceInfo = taxInfo ? productInfo && productInfo.productPrice.replace(/[^\d.-]/g, '') - ((productInfo && productInfo.tax * 100) / 100) : productInfo && productInfo.productPrice.replace(/[^\d.-]/g, '');
  const finalPriceInfo = productInfo && productInfo.finalPrice.replace(/[^\d.-]/g, '');
  const categoryList = productInfo && productInfo.category;

  //for image from api
  (image.length === 0) && productInfo && productInfo.productImages.forEach(element => { image.push({ thumbUrl: element }) });
  const imageInfo = image.filter(value => !(value.status === "removed"));

  const videoInfo = productInfo && productInfo.productVideo


  const statusOptions = [
    { value: 'available', label: 'Available' },
    { value: 'sold', label: 'Sold' },
    { value: 'reserve', label: 'Reserve' },
  ];

  const productNameInfo = !productName && productEdit && productName !== '' ? productInfo && productInfo.productName : productName;
  const categoryInfo = !category && productEdit && category !== '' ? categoryDetails : category;
  const productPriceInfo = !price && productEdit && price !== '' ? priceInfo : price;
  const productFinalPriceInfo = !finalPrice && productEdit && price !== '' ? finalPriceInfo : finalPrice;
  const productDiscountInfo = !discount && productEdit && discount !== '' ? productInfo && productInfo.discount : discount;
  const productTaxInfo = !tax && productEdit && tax !== '' ? productInfo && productInfo.tax : tax;
  const productImagesInfo = productEdit && imageEdit ? imageInfo : fileList;
  const productVideoInfo = videoEdit && productEdit ? productInfo && productInfo.productVideo : video;
  const stockHandInfo = !stockHand && productEdit && stockHand !== '' ? productInfo && productInfo.stockHand : stockHand;
  const productDescriptionInfo = !productDescription && productEdit && productDescription !== '' ? productInfo && productInfo.productDescription : productDescription;
  const productWarrantyInfo = !productWarranty && productEdit && productWarranty !== '' ? productInfo && productInfo.productWarranty : productWarranty;
  const productShippingInfo = !productShipping && productEdit && productShipping !== '' ? productInfo && productInfo.productShipping : productShipping;
  const statusInfo = !status && productEdit && status !== '' ? productInfo && productInfo.status : status;

  useEffect(() => {
    if (clear && addProduct && addProduct.status) {
      setProductName('');
      setCategory('');
      setImageList([]);
      setPrice('');
      setTax('');
      setDiscount('');
      setFinalPrice('');
      setVideo([]);
      setStockHand('')
      setStatus(false)
      setProductDescription('');
      setProductWarranty('');
      setProductImageList([]);
      setProductShipping('');
      setAlertError(false);
      message.success(`Thanks!, ${productName} ${addProduct && addProduct.message}`)
      setClear(false)
    } else if (clear && invalidAddProduct) {
      message.error(`Sorry!, ${productName} ${addProduct && addProduct.error}`);
      setClear(false)
    }
    else if(clear && editProduct && editProduct.status){
      message.success(`${productNameInfo} ${editProduct && editProduct.message}`)
      editSuccess()
    }
  }, [addProduct, invalidAddProduct, editProduct])

  useEffect(() => {
    if (productEdit) {
      dispatch({ type: 'GET_PRODUCT_REQUEST', productId });
    }
    dispatch({ type: 'THRIFT_CATEGORY_REQUEST' });
  }, [])

  useEffect(() => {
    thriftCategoryType && thriftCategoryType.categoryDetails.filter(item => {
      if (item._id === categoryList) {
        const categoryDetails = ({
          value: item._id,
          label: item.categoryName
        })
        setCategoryDetails(categoryDetails);
      }
    })
  }, [categoryList]);

  useEffect(() => {
    if (productPriceInfo && productDiscountInfo && productTaxInfo) {
      setFinalPrice(finalPrice)
    } else if (productPriceInfo && productDiscountInfo) {
      setFinalPrice(discountPrice)
    } else if (productPriceInfo && productTaxInfo) {
      setFinalPrice(taxPrice)
    } else if (productPriceInfo) {
      setFinalPrice(productPriceInfo)
    } else {
      setFinalPrice(0)
    }
  }, [productPriceInfo])

  useEffect(() => {
    if (productDiscountInfo) {
      setFinalPrice(discountPrice)
    } else {
      setFinalPrice(finalPrice)
    }
  }, [productDiscountInfo])

  useEffect(() => {
    if (productTaxInfo) {
      setFinalPrice(taxPrice)
    } else {
      setFinalPrice(finalPrice)
    }
  }, [productTaxInfo])

  const onModal = () => {
    setModal(true)
  }

  const onHide = () => {
    setModal(false)
  }

  const onProductName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$'))
      setProductName(e.target.value)
  }

  const onCategory = (category) => {
    setCategory(category)
  }

  const thriftCategoryOptions = thriftCategoryType && thriftCategoryType.categoryDetails.sort((a, b) => a.categoryName && a.categoryName.localeCompare(b.categoryName)).map((item) => ({
    value: item._id,
    label: item.categoryName,
  }));

  const onPrice = (e) => {
    setPrice(e.target.value.substring(e.target.value.lastIndexOf('$') + 1))
    const a = e.target.value.substring(e.target.value.lastIndexOf('$') + 1)
    const b = productTaxInfo
    const c = productDiscountInfo
    const d = a * (b / 100)
    const h = + a + d
    const f = h * (c / 100)
    const g = h - f
    const i = + a + d - f
    setDiscountPrice(g)
    setTaxPrice(h)
    setFinalPrice(i)
  }

  const onTax = (e) => {
    if (productDiscountInfo) {
      setTax(e.target.value)
      const c = e.target.value
      const d = (c / 100) * productPriceInfo
      const f = + productPriceInfo + d
      const g = f * (productDiscountInfo / 100)
      const h = f - g
      setTaxPrice(h)
      setFinalPrice(h)
      setTotalPrice(f)
    } else {
      setTax(e.target.value)
      const c = e.target.value
      const d = (c / 100) * productPriceInfo
      const f = +productPriceInfo + +d
      setTaxPrice(f)
      setFinalPrice(f)
      setTotalPrice(f)
    }
  }

  const onDiscount = (e) => {
    if (productTaxInfo) {
      setDiscount(e.target.value)
      const a = productPriceInfo
      const b = e.target.value
      const c = a * (productTaxInfo / 100)
      const d = +productPriceInfo + c
      const f = d * (b / 100)
      const g = d - f
      setDiscountPrice(g)
      setFinalPrice(g)
    } else {
      setDiscount(e.target.value)
      const a = productPriceInfo
      const b = e.target.value
      const c = a * (b / 100)
      const d = a - c
      setDiscountPrice(d)
      setFinalPrice(d)
    }
  }

  const onStatus = (status) => {
    setStatus(status)
  }

  const onStockHand = (e) => {
    setStockHand(e.target.value)
  }

  const onProductDescription = (e) => {
    setProductDescription(e.target.value)
  }

  const onProductWarranty = (e) => {
    setProductWarranty(e.target.value)
  }

  const onProductShipping = (e) => {
    setProductShipping(e.target.value)
  }

  const onChangeImage = ({ fileList: newFileList }) => {
    setImageEdit(false)
    // To identify removed array
    const removedItem = fileList.find(item => item.status === 'removed')
    if (newFileList.length && newFileList[newFileList.length - 1].status === 'done' && !removedItem) {
      message.success(`${fileList[fileList.length - 1].name} file uploaded successfully`);
      let file = newFileList[newFileList.length - 1];
      const reader = new FileReader();
      reader.onload = () => {
        productImageList.push({
          thumbUrl: reader.result,
          name: file.name,
          uid: file.uid,
        });
      };
      reader.readAsDataURL(file.originFileObj);
    } else if (fileList.length && fileList[fileList.length - 1].status === 'error') {
      message.error(`${fileList[fileList.length - 1].name} file uploaded failed`);
    } else if (fileList.length && removedItem) {
      message.error(`${removedItem.name} file deleted successfully`);
      const productList = productImageList.filter(item => item.uid !== removedItem.uid)
      setProductImageList(productList)
    }
    setImageList(newFileList);
  };

  const onChangeVideo = async info => {
    setVideoEdit(false)
    const { status } = info.file;
    let videoTo64 = await getBase64(info.file.originFileObj);
    let videoConversion = videoTo64.split(" ")
    setVideo(videoConversion)
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    } else if (!info.fileList.length) {
      message.error(`${info.file.name} file deleted successfully`);
      setVideo([])
    }
  }

  const onVideoDelete = () => {
    setVideoEdit(false)
  };

  const onPreview = async file => {
    if (productEdit && file.thumbUrl) {
      setPreviewVisible(true)
      setPreviewImage(file.thumbUrl)
    }
    else if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
      setPreviewVisible(true)
      setPreviewImage(file.url || file.preview || file.thumbUrl)
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }
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
    if (video.length > 0) {
      message.error(`You cannot upload more than one file`);
    } else if (file.size > 31457280) {
      message.error(`${file.name} exceeds the maximum upload size limit`);
    }
    return video.length < 1 && file.size < 31457280 ? true : Upload.LIST_IGNORE;
  }

  const handleCancel = () => setPreviewVisible(false);

  const symbol = `${thriftCategoryType && thriftCategoryType.symbol}`;

  const history = useHistory();
  const onCancel = () => {
    history.goBack()
  }

  //product price without discount
  const productPrice = !productTaxInfo ? productPriceInfo : totalprice;

  const onSubmit = () => {
    const imagesList = productEdit ? imageInfo.concat(productImageList) : productImageList;
    if (!productNameInfo || !categoryInfo || !productPriceInfo || !productDescriptionInfo || !productWarrantyInfo) {
      setAlertError(true)
      message.error('Please Fill All The Fields')
    } else if (productDescriptionInfo.length < 10) {
      message.error(' Please Fill The Product Description With Minimum 10 Characters');
      setAlertError(true)
    } else if (productNameInfo.length < 3) {
      message.error('Please Fill The Product Name With Minimum 3 Characters')
      setAlertError(true)
    }
    // else if (!imagesList) {
    //   message.error('Please Upload The Images')
    // }
    else {
      const addProduct = {
        productName: productNameInfo,
        category: categoryInfo.value,
        productImages: imagesList.map(info => info.thumbUrl),
        //productImages: imagesList,
        productVideo: video,
        productPrice: `${symbol}${parseFloat(productPrice).toFixed(2)}`,
        discount: productDiscountInfo,
        tax: productTaxInfo,
        finalPrice: `${symbol}${parseFloat(productFinalPriceInfo).toFixed(2)}`,
        // stockHand: stockHandInfo,
        // status: statusInfo.value,
        productDescription: productDescriptionInfo,
        productWarranty: productWarrantyInfo,
        productShipping: productShippingInfo,
        estoreId: storeId,
      };
      if (productEdit) {
        dispatch({ type: 'EDIT_PRODUCT_REQUEST', addProduct, productId })
      }
      else {
        dispatch({ type: 'ADD_PRODUCT_REQUEST', addProduct });
      }
    }
    setClear(true)
  };

  return (
    <div className='wrapper '>
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
      <div >
        <div className="main-content add-product">
          <Grid fluid>
            <Row>
              <Row className="form-content card">
                <Row>
                  <Col sm={12} md={6}>
                    <label className="signup-label">Product Name <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className={alertError && productNameInfo && productNameInfo.length < 3 ? ` form-control my-input` : `form-control formy`}
                      maxLength={30}
                      value={productNameInfo}
                      onChange={onProductName}
                    />
                  </Col>
                  <Col sm={12} md={6} className={`clear-city ${alertError && !categoryInfo && `dropdown-alert`}`}>
                    <label className="signup-label">Select Category <span className="red-star">*</span></label>
                    <Select
                      type="text"
                      className="prof-select "
                      placeholder="Select Category."
                      isSearchable={false}
                      value={categoryInfo}
                      onChange={onCategory}
                      options={thriftCategoryOptions}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={12}>
                    <label className="signup-label">Upload Image <span className="red-star">*</span></label>
                    <ImgCrop >
                      <Upload
                        action="png"
                        accept="image/*"
                        customRequest={fakeRequest}
                        className="upload-image"
                        listType="picture-card"
                        // fileList={ fileList}
                        fileList={productImagesInfo}
                        onChange={onChangeImage}
                        onPreview={onPreview}
                      >
                        {fileList.length < 9 && '+ Upload'}
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
                  <Col sm={12} md={12}>
                    <label className="signup-label">Upload Video </label>
                    <Dragger
                      name='file'
                      className="drag-video"
                      accept="video/*"
                      customRequest={fakeRequest}
                      onChange={onChangeVideo}
                      beforeUpload={beforeUpload}
                    >
                      {productVideoInfo && productVideoInfo.length ?
                        <ReactPlayer
                          className="add-product-video-upload"
                          url={productVideoInfo}
                          controls={true} /> :
                        <div>
                          <p className="ant-upload-text">Click or drag file to this area to upload video</p>
                          <p className="ant-upload-hint">You can upload only 1 video and maximum file size of the video should be less than 30 MB</p>
                        </div>}
                    </Dragger>
                    {(videoInfo && videoInfo.length !== 0) && videoEdit && <div className='delete-button'><i className="fas fa-trash" onClick={onVideoDelete}></i></div>}
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Row className='pricerow-list-row'>
                      <Col sm={2} xs={6}>
                        <label className="signup-label">Price <span className="red-star">*</span></label>
                        {thriftCategoryType && <Cleave
                          className={alertError && !productPriceInfo ? ` form-control my-input` : `form-control formy`}
                          maxLength={13}
                          value={productPriceInfo}
                          onChange={onPrice}
                          options={{
                            prefix: thriftCategoryType.symbol,
                            numeral: true,
                            delimiter: '',
                            blocks: [7]
                          }}
                        />}
                      </Col>
                      <Col sm={2} xs={6}>
                        <label className="signup-label">Tax</label>
                        <Cleave
                          className="form-control price-style"
                          maxLength={5}
                          value={productTaxInfo}
                          onChange={onTax}
                          options={{
                            numeral: true,
                            delimiter: '.',
                            blocks: [2, 2]
                          }}
                        />
                        <span className="percentage">%</span>
                      </Col>
                      <Col sm={2} xs={6}>
                        <label className="signup-label">Discount</label>
                        <Cleave
                          className="form-control"
                          maxLength={10}
                          value={productDiscountInfo}
                          onChange={onDiscount}
                          options={{
                            numeral: true,
                            delimiter: '.',
                            blocks: [2, 4]
                          }}
                        />
                        <span className="percentage">%</span>
                      </Col>
                      <Col sm={2} xs={6}>
                        <label className="signup-label">Final Price</label>
                        {thriftCategoryType && <Cleave
                          options={{
                            prefix: thriftCategoryType.symbol,
                            numeral: true,
                            numeralThousandsGroupStyle: 'thousand'
                          }}
                          className="form-control"
                          maxLength={12}
                          value={parseFloat(productFinalPriceInfo).toFixed(2)}
                          //value={finalPrice}
                          disabled
                        />}
                      </Col>
                      <Col sm={2} xs={6}>
                        <label className="signup-label">Stocks on Hand  </label>
                        <Cleave
                          options={{
                            numeral: true,
                            numeralThousandsGroupStyle: 'thousand'
                          }}
                          className="form-control"
                          maxLength={10}
                          value={stockHandInfo}
                          onChange={onStockHand}
                        />
                      </Col>
                      <Col sm={2} xs={6}>
                        <label className="signup-label">Available</label>
                        <Select
                          name="Status"
                          placeholder="Status"
                          className="prof-select "
                          value={statusInfo}
                          options={statusOptions}
                          onChange={onStatus}
                          isSearchable={false}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={6}>
                    <label className="signup-label">Product Description <span className="red-star">*</span></label>
                    <textarea className={alertError && productDescriptionInfo && productDescriptionInfo.length < 10 ? ` form-control my-input` : `form-control formy`}
                      name="message"
                      placeholder='type something..'
                      value={productDescriptionInfo}
                      onChange={onProductDescription}
                      maxLength={500}
                      rows="11  "></textarea>
                  </Col>
                  <Col sm={12} md={6}>
                    <Row>
                      <Col sm={12}>
                        <label className="signup-label">Warranty < span className="red-star">*</span> <i className="fa fa-info" onMouseEnter={onModal} /></label>
                        <textarea className={alertError && !productWarrantyInfo ? ` form-control my-input` : `form-control formy`}
                          name="message"
                          placeholder='type something..'
                          value={productWarrantyInfo}
                          onChange={onProductWarranty}
                          maxLength={500}
                          rows="4"></textarea>
                      </Col>
                      <Col sm={12}>
                        <label className="signup-label">Shipping & Pickup</label>
                        <textarea className='form-control'
                          name="message"
                          placeholder='type something..'
                          value={productShippingInfo}
                          onChange={onProductShipping}
                          maxLength={500}
                          rows="4"></textarea>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
              <Row md={12} className="margin-control">
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
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </Col>
              </Row>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
