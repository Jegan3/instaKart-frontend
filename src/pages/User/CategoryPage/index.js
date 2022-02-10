
/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { message } from 'antd';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { history } from '../../../routes';
import ErrorPage from '../../../components/ErrorPage';
import Loader from '../../../components/Loader';

const CategoryPage = (props) => {
  const [login, setLogin] = useState(false);

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryPageState.categoryPage);
  const productInfo = categoryList && categoryList.productsInfo;
  const noProducts = useSelector((state) => state.categoryPageState.error);
  const isLoading = useSelector((state) => state.categoryPageState.isLoading);


  const list = props.location.state;
  const categoryId = list.categoryId
  console.log('noProducts', list)

  useEffect(() => {
    dispatch({ type: 'CATEGORY_PAGE_REQUEST', categoryId });
  }, [])

  const hideloginCart = () => {
    setLogin(false);
  };

  const button = (item) => {
    if (sessionStorage.type === 'user') {
      history.push({ pathname: '/productinfo', state: { product: item.productId } })
      window.scrollTo(0, 0);
    } else if (sessionStorage.type === 'vendor') {
      message.error('Please Login As User');
    }
    else {
      setLogin(true)
    }
  }

  return (

    <div className='category-page'>
      <div>
        <Header loginCart={login} hideloginCart={hideloginCart} />
      </div>
      <div>
        <div className='category-body'>
          {isLoading && <Loader />}
          <Row>
            {!noProducts ? <Col md={12}>
              {productInfo && productInfo.map((item) => (
                <Col md={4} sm={6} lg={3}>
                  <div className="checking" onClick={() => button(item)}>
                    <Card sx={{ maxWidth: 300 }} className="card-height">
                      <CardActionArea className='effect-height'>
                        {item.discount && <div className="discount" >
                          {item.discount}%OFF
                        </div>}
                        <CardMedia
                          component="img"
                          height="190"
                          image={item.productImage}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h8" component="div">
                            <span className="product-name">{item.productName}</span>
                          </Typography>
                          <Typography variant="body2" color="text.secondary" className='price-position'>
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












