/*eslint-disable*/
import React from 'react';
import { Row, Col, Grid, Image } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Tabs } from '../../components/TabScroll';

const ThriftStoreInfo = () => {

  return (
    <div className="store-page">
      <Header header />
      <div className='store-info'>
        <Grid fluid>
          <div className="storeinfo">
            <Row>
              <div>
                <Col md={5}>
                  <div className='store-image'>
                    <Image className="img-frame" src='images/1_Food.png' fluid />
                  </div>
                </Col>
                <Col md={7}>
                  <div className='store-details'>
                    <div>
                      <h1 className='underline'>
                        The Disaster Café
                      </h1>
                    </div>
                    <div>
                      <h1 className='Subtitle-store'>
                        Tale Of Tastes
                      </h1>
                    </div>
                    <div>
                      <p className='store-information'>
                        Tale Of Tastes
                        The Disaster Café unlocks the tales of traditions, tastes, and flavors that lingered
                        in the taste buds and was passed down from generations to generations. Established way
                        back in the 1960s, the restaurant has come a long way delighting food lovers all over
                        maldives with tastes that surpassed the test of time. Mathsya Restaurant has three branches
                        in maldives- at Dhidhdhoo, Eydhafushi, Hithadhoo Located at prime locations, the restaurant is easy
                        to access, with valet parking facilities and sumptuous cuisines.
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
            <Row>
              <Col>
                <div>
                  <span className="ik-ads">Categories</span>
                  <div className='scroll-tab'>
                    <Tabs />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default ThriftStoreInfo;
