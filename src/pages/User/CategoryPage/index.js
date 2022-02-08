
/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { history } from '../../../routes';
import ErrorPage from '../../../components/ErrorPage';


const CategoryPage = (props) => {

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryPageState.categoryPage);
  const productInfo = categoryList && categoryList.productsInfo;
  const noProducts = useSelector((state) => state.categoryPageState.error);

  const list = props.location.state;
  const categoryId = list.categoryId
  console.log('noProducts', list)

  useEffect(() => {
    dispatch({ type: 'CATEGORY_PAGE_REQUEST', categoryId });
  }, [])


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
            {!noProducts ? <Col md={12}>
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
            </Col> :
              <Col md={12}>
                <ErrorPage error={noProducts} />
              </Col>
            }
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












