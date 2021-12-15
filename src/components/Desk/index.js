/*eslint-disable*/
import React from 'react';
import { Drawer, Divider, Col, Row, Button, Image } from 'antd';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const Desk = ({ show, onClose, info, submit, reject }) => {

  const logo = info && info.logo;
  const companyRegImage = info && info.companyRegImage;
  const uploadId = info && info.idImage;
  const uploadAddress = info && info.addressImage;

  return (
    <Drawer
      width={600}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={show}
    >
      <p className="site-description-item-profile-p title-desk">
        Vendor Profile
      </p>
      <p className="site-description-item-profile-p">Personal</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="First Name" content={info && info.firstName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Last Name" content={info && info.lastName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Email" content={info && info.email} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Contact Number" content={info && info.mobile} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Country" content={info && info.countryName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="City" content={info && info.cityName} />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Business</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Company Name" content={info && info.companyName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Industry Type" content={info && info.businessType.map(info => <div className="industry-type">{info.industryType}</div>)} />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Account</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Bank" content={info && info.bank} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Bank Account Number" content={info && info.bankAccount} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="WiPay" content={info && info.wipay} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="WiPay Account Number" content={info && info.wipayAccount} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={6}>
          <p className="site-description-item-profile-p">Logo</p>
          <Image
            width={100}
            height={100}
            src={logo ? logo : "images/noimage.png"} />
        </Col>
        <Col span={6}>
          <p className="site-description-item-profile-p">Address</p>
          <Image
            width={100}
            height={100}
            src={uploadAddress ? uploadAddress : "images/noimage.png"} />
        </Col>
        <Col span={6}>
          <p className="site-description-item-profile-p">Id</p>
          <Image
            width={100}
            height={100}
            src={uploadId ? uploadId : "images/noimage.png"} />
        </Col>
        <Col span={6}>
          <p className="site-description-item-profile-p">Registration</p>
          <Image
            width={100}
            height={100}
            src={companyRegImage ? companyRegImage : "images/noimage.png"} />
        </Col>
      </Row>
      {info && info.status === 'Pending' &&
        <div className="desk-btns">
          <Button onClick={reject} style={{ marginRight: 8 }} >
            Reject
          </Button>
          <Button onClick={submit}>
            Approve
          </Button>
        </div>}
    </Drawer>
  )
}
export default Desk;
