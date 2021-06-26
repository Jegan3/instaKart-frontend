/*eslint-disable*/
import React from 'react';
import { Drawer, Divider, Col, Row } from 'antd';

const DescriptionItem = ({ title, content, industry }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const Desk = ({ show, onClose, info }) =>
  <Drawer
    width={600}
    placement="right"
    closable={false}
    onClose={onClose}
    visible={show}
  >
    <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
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
        <DescriptionItem title="Country" content={info && info.country} />
      </Col>
      <Col span={12}>
        <DescriptionItem title="City" content={info && info.city} />
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
  </Drawer>

export default Desk;
