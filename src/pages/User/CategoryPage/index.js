
/*eslint-disable*/
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { history } from '../../../routes';


const productInfo = [
  {
    productId: "61e1a23eff6cac3aaf499720",
    productName: "store1 test 1",
    productImage: "https://instakartstaging.s3.amazonaws.com/thriftstore/7e7c782b-cc18-43d5-82d3-867b809b1e80.jpeg",
    discount: "13",
    finalPrice: "TT$111.00",
    productPrice: "TT$111.00",
  },
  {
    productId: "61e1a23eff6cac3aaf499720",
    productName: "store1 test 1",
    discount: "13",
    productImage: "https://instakartstaging.s3.amazonaws.com/thriftstore/ea638456-64ab-4a49-bf93-cf9df67cbaf2.jpeg",
    finalPrice: "TT$111.00",
    productPrice: "TT$111.00",
  },
  {
    productId: "61e1a23eff6cac3aaf499720",
    productName: "store1 test 1",
    productImage: "https://instakartstaging.s3.amazonaws.com/thriftstore/c2a4ff28-4f0e-42fb-b29f-0faa4ec935fc.jpeg",
    discount: "13",
    finalPrice: "TT$111.00",
    productPrice: "TT$111.00",
  },
  {
    productId: "61e1a23eff6cac3aaf499720",
    productName: "store1 test 1",
    productImage: "https://instakartstaging.s3.amazonaws.com/thriftstore/8b9020bc-313c-4aeb-8675-232a9eb4c866.jpeg",
    discount: "13",
    finalPrice: "TT$111.00",
    productPrice: "TT$111.00",
  },
]

const CategoryPage = () => {

  const button = () => {
    history.push({ pathname: "./productinfo" })
    window.scrollTo(0, 0);
  }

  return (

    <div className='category-page'>
      <div>
        <Header />
      </div>
      <div>
        <div className='category-body'>
          <Row>
            <Col md={12}>
              {productInfo && productInfo.map((item) => (
                <Col xl={4} md={3} sm={4} xs={6} >
                  <div className="checking" onClick={button}>
                    <Card sx={{ maxWidth: 300 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="190"
                          image={item.productImage}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h8" component="div">
                            <span className="product-name">{item.productName}</span>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <span className="final-price">{item.finalPrice}</span>
                            {item.discount && <span className="striked-price">{item.productPrice}</span>}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </Col>
              ))}
            </Col>
          </Row>
        </div>
        <br />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default CategoryPage;












