/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const PaymentStatus = () => {
  const dispatch = useDispatch();
  const url = new URL(`${window.location.href}`);

  const paymentStatus = {
    card: url.searchParams.get("card"),
    currency: url.searchParams.get("currency"),
    customerName: url.searchParams.get("customer_name"),
    date: url.searchParams.get("date"),
    hash: url.searchParams.get("hash"),
    message: url.searchParams.get("message"),
    orderId: url.searchParams.get("order_id"),
    status: url.searchParams.get("status"),
    total: url.searchParams.get("total"),
    transaction_id: url.searchParams.get("transaction_id"),
  }

  useEffect(() => {
    dispatch({ type: 'PAYMENT_STATUS_REQUEST', paymentStatus });
  }, []);

  return (
    <div>
      <Header />
      <div className="checkout-page">
        <Grid fluid>
          <div className="checkout-details">
            <Row>
              <Col>
                <h1>
                  {paymentStatus.message}
                </h1>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default PaymentStatus;


