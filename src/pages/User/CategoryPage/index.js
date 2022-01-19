
/*eslint-disable*/
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

const CategoryPage = () => {

  const dispatch = useDispatch();
  const thriftCategoryType = useSelector((state) => state.thriftCategoryState.thriftCategory);

  useEffect(() => {
    dispatch({ type: 'THRIFT_CATEGORY_REQUEST' });
  }, [])
  return (

    <div className='body-container home'>
      <div>
        <Header />
      </div>
      <div>
        <div className='arrival secondary-banner-style'>
          <Row>
            <Col md={12}>
              {thriftCategoryType && thriftCategoryType.categoryDetails.map((item) => (
                <Col sm={3}>
                  <div className="checking">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={item.categoryImage}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.categoryName}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
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












