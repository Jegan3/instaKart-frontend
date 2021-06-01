/*eslint-disable*/
import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { Banners } from '../../components/Banners';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const cardHolder = [
  {
    id: 1,
    title: 'Real Estate',
    imgUrl: 'images/house.png',
  },
  {
    id: 1,
    title: 'Real Estate',
    imgUrl: 'images/house.png',
  },
];

const AdsDetails = () => (
  <Grid fluid className="padding-control">
    <Header header />
    <Row >
      <div className="theme-page">
        <div className="inner-wrapper">
          {/* <Row > */}
          <Col md={8} className="right-content">
            <Col md={12} sm={12}>
              <div className="breadcrumbs">
                Home » Animal » Dogs » German Shepherd for sale
              </div>
            </Col>
            <Row>
              <Col md={12} sm={12} className="head-div">
                <div className="listing-main-content clearfix">
                  <div className="listing-title ">
                    <h2>German Shepherd for sale</h2>
                  </div>
                  <div className="listing-metas clearfix">
                    <div className="single-location-address">
                      <i className="icon-title fas fa-map-marker-alt" />
                      <span itemProp="addressLocality">Pakistan</span>
                    </div>
                    <div className="listing-date" dateTime="2016-08-25T12:43"><i className=" icon-title fas fa-clock" />August 25, 2016</div>
                    <div className="listing-views"><i className=" icon-title fas fa-eye" />Views: 5778</div>
                  </div>

                  <div className="single-listing-btns clearfix">
                    <button className="button-style-2">
                      <i className="far fa-flag" />Report
                    </button>
                    <button className="button-style-2">
                      <i className="far fa-file-pdf" />Download
                    </button>
                    <button className="button-style-2">
                      <i className="fas fa-print" />Print
                    </button>
                    <button className="button-style-2">
                      <i className="style1 unchecked far fa-heart" />Bookmark
                    </button>
                    <button className="button-style-2">
                      <i className="fas fa-share-alt" />Share
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={12} sm={12} className="banner-ads">
                <Banners />
              </Col>
              <Col md={12} sm={12} className="body-div">
                <div className="single-filed-wrapper clearfix">
                  <div className="field-type-content">
                    <span className="field-label">
                      <span className="field-title">Description:</span>
                    </span>
                    <div className="field-description" itemProp="description">
                      <p>The German Shepherds are medium to large-sized dogs, well-balanced, muscular dog,
                      slightly longer than tall, with a medium length coat, erect ears,
                      and a low-set natural tail that normally reaches to the hock and is
                      carried in a slight curve like a saber. The outline of the German
                      Shepherd Dog is made up of smooth curves rather than angles.
                      The head is in proportion to the size of the body, strong
                      without appearing coarse or fine. Gender differences are
                      readily apparent. The German Shepherd Dog should be evaluated as an
                      all-around working dog, and exaggerations or faults should be
                      penalized in proportion to how much they interfere with the dog’s ability to work.
                      </p>
                      <p>The German Shepherd Dog is confident and fearless, willing to be approached,
                      yet a certain level of aloofness towards strangers is acceptable.
                      When working, the German Shepherd is alert and eager, adapting well to new tasks.
                      Lack of confidence is a serious defect in the character of a German Shepherd.
                      The structure of this breed was designed for efficient locomotion, particularly at the trot,
                      so poor movement is another serious fault.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12} sm={12} className="mid-div">
                <div className="mid-fields-group ">
                  <div className="mid-caption">Contact Information</div>

                  <div className="mid-field-type-categories">
                    <span className="mid-field-label">
                      <span className="mid-field-title">Categories:</span>
                    </span>

                    <span className="mid-form-content">
                      <span className="mid-label-primary">
                        <a href="#" rel="tag">Dogs</a>&nbsp;&nbsp;<span className="glyphicon glyphicon-tag"></span>
                      </span>
                      <span className="mid-label-primary">
                        <a href="#" rel="tag">Animal</a>&nbsp;&nbsp;<span className="glyphicon glyphicon-tag"></span>
                      </span>
                    </span>
                  </div>
                  <div className="mid-field-type-categories">
                    <span className="mid-field-label">
                      <span className="mid-field-title">Phone:</span>
                    </span>
                    <span className="mid-form-content">
                      <meta itemProp="telephone" content="+44 786 786 2525" />
                      <a href="tel:+44 786 786 2525">+44 786 786 2525</a>
                    </span>
                  </div>
                  <div className="mid-field-type-categories">
                    <span className="mid-field-label">
                      <span className="directorypress-field-icon alsp-fa-map-marker"></span>
                      <span className="mid-field-title">Address:</span>
                    </span>
                    <span className="mid-form-content">
                      <span className="mid-label-primary">
                        <a href="#" rel="tag">
                          Lahore, Punjab, Pakistan,Lahore, Punjab, Pakistan, pakistan 54000
                        </a>
                      </span>
                    </span>
                  </div>
                  <div className="mid-field-type-categories">
                    <span className="mid-field-label">
                      <span className="mid-field-title">Listing Tags:</span>
                    </span>
                    <span className="mid-form-content">
                      <span className="mid-label-primary">
                        <a href="#" rel="tag">for sale</a>&nbsp;&nbsp;<span className="glyphicon glyphicon-tag"></span>
                      </span>
                      <span className="mid-label-primary">
                        <a href="#" rel="tag">German Shepherd for sale</a>&nbsp;&nbsp;<span className="glyphicon glyphicon-tag"></span>
                      </span>
                      <span className="mid-label-primary">
                        <a href="#" rel="tag">dog</a>&nbsp;&nbsp;<span className="glyphicon glyphicon-tag"></span>
                      </span>
                    </span>
                  </div>

                  <div className="mid-field-type-categories">
                    <span className="mid-field-label">
                      <span className="directorypress-field-icon pacz-li-link">
                      </span><span className="mid-field-title">Website:</span>
                    </span>
                    <span className="mid-form-content">
                      <a itemProp="url" href="#" target="-blank" rel="nofollow">View our site</a>
                    </span>
                  </div>

                  <div className="mid-field-type-categories">
                    <meta itemProp="email" content="example@gmail.com" />
                    <span className="mid-field-label">
                      <span className="directorypress-field-icon pacz-icon-envelope-o"></span>
                      <span className="mid-field-title">Email:</span>
                    </span>
                    <span className="mid-form-content">
                      <a href="mailto:example@gmail.com">example@gmail.com</a>
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={12} sm={12}>
                <div className="videos-notab">
                  <span className="video-field-name">Videos</span>
                  <iframe
                    width="100%"
                    height="400"
                    className="directorypress-video-iframe fitvidsignore"
                    src="//www.youtube.com/embed/6bxcjXYkWrY"
                    frameBorder="0"
                    allowFullScreen=""
                  />
                </div>
                <div className="comments-reviews">
                  <div className="single-post-fancy-title"><span>User Reviews <span className="comments-numbers">0</span></span></div>
                  <div className="pacz-commentlist">
                    <div className="comment even thread-even depth-1" >
                      <div className="pacz-single-comment userresponse clearfix">
                        <div className="comment-content">
                          <p className="dirrater-title">ClassiAds</p>
                          <div className="review-rate" title="good">
                            <div className="stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                          <p>The #1 Source For Classifieds WordPress Themes, Find Yours &amp; Get Online Today!</p>
                        </div>
                        <div className="comment-meta-main clearfix">
                          <div className="author-img">
                          </div>
                          <div className="comment-meta">
                            <span className="comment-author">Peter Wargner</span>
                            <div className="review-rate" title="good">
                              <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                            </div>
                            <time className="comment-time">January 6th, 2021 11:09 AM</time>
                            <span className="comment-reply">
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* //coment 2 */}
                    <div className="comment-respond">
                      <div className="pacz-single-comment userresponse clearfix">
                        <div className="comment-content">
                          <div className="review_rate" data-dirrater="5" title="gorgeous">
                            <i data-alt="1" className="star-on-png" title="gorgeous"></i>&nbsp;
                            <i data-alt="2" className="star-on-png" title="gorgeous"></i>&nbsp;
                            <i data-alt="3" className="star-on-png" title="gorgeous"></i>&nbsp;
                            <i data-alt="4" className="star-on-png" title="gorgeous"></i>&nbsp;
                            <i data-alt="5" className="star-on-png" title="gorgeous"></i>
                            <input name="dirrater" type="hidden" value="5" readOnly="" />
                          </div>
                          <div>
                            <p>Thank You very much 🙂</p>
                          </div>
                        </div>
                        <div className="comment-meta-main clearfix">
                          <div className="author-img">
                          </div>
                          <div className="comment-meta">
                            <span className="comment-author">DesignInvento</span>
                            <time className="comment-time">January 6th, 2021 12:26 PM</time>
                            <span className="comment-reply">
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-content">
                    <div className="comment-respond">
                      <h3 className="comment-reply-title">
                        <div className="leave-comment-heading">
                          Post New Review
                        </div>
                      </h3>
                      <form action="#" method="post" className="comment-form">
                        <p className="dir_message_field">
                          <textarea className="comment" name="comment" cols="45" rows="3" aria-required="true" required="required" placeholder="Review ">
                          </textarea>
                        </p>
                        <div className=" comment-form-name comment-form-row">
                          <i className="fa fa-user"></i>
                          <input type="text" name="author" className="text-input" placeholder="FULL NAME" />
                        </div>

                        <div className="comment-form-name comment-form-row">
                          <i className="fa fa-envelope"></i>
                          <input type="text" name="email" className="text-input" placeholder="EMAIL ADDRESS" />
                        </div>

                        <div className="comment-form-name comment-form-row">
                          <i className="fa fa-globe"></i>
                          <input type="text" name="url" className="text-input" placeholder="WEBSITE" />
                        </div>

                        <p className="comment-form-cookies-consent">
                          <input className="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
                          <label className="label-save" >Save my name, email, and website in this browser for the next time I comment.
                          </label>
                        </p>
                        <div className="review-rate" title="good">
                          <div className="stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <p className="dir--title">
                          <label htmlFor="dirrater_title">Title of your review:</label>
                          <input type="text" className="dirrater_title" name="dirrater_title" value="" placeholder="Review Title" size="25" />
                        </p>
                        <p className="form-submit">
                          <input name="submit" type="submit" className="submit" value="Submit Review" />
                          <input type="hidden" name="comment_post_ID" value="551" className="comment_post_ID" />
                          <input type="hidden" name="comment_parent" className="comment_parent" value="0" />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <Row md={12} sm={6} className="card-holder">
                  <h6 className="heading">Related Listings</h6>
                  <Col md={6} sm={6} className="avatar-card">
                    <div className="listing-figur">
                      <a href="#">
                        <img
                          alt="German Shepherd for sale"
                          src="http://vaibhavk13.sg-host.com/wp-content/uploads/bfi_thumb/1-1-p4rv2zyx0afglukvgf9nlh4kjmkzfri8bs5mtjnadc.jpg"
                        />
                      </a>
                    </div>
                  </Col>
                  <Col md={6} sm={6} className="content-card">
                    <div className="cat-wrapper">
                      <div className="cat-listing">
                        Animal » Dogs
                        <a className="add_to_favourites btn" title="Add To Bookmarks">
                          <span className="style1 unchecked fas fa-heart">
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="german">
                      <h2>
                        German Shepherd for
                      </h2>
                    </div>
                    <div className="type-summary">
                      <span className="field-content">
                        The German Shepherds are medium to large-sized dogs, well-balanced, ...
                      </span>
                    </div>
                    <div className="loco-map">
                      <p className="listing-location">
                        <i className="fas fa-map-marker-alt"></i>
                      </p>
                    </div>
                    <div>
                      <div className="price-rate" title="good">
                        <div className="stars">
                          <span className="rating-numbers">4.5</span>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <span className="field-label">
                            $ 1200
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* left side */}
          <Col md={4} className="left-side-div">
            <Col md={12} sm={12}>
              <div className="pacz-sidebar">
                <div className="butn-dollar">
                  <div className="dollar-clearfix">
                    <span className="field-content symbol-left">
                      <span className="currency-symbol">$</span>1200
                    </span>
                  </div>
                </div>
                <div
                  className="widget"
                >
                  <div className="author-style clearfix">
                    <div className="author-img">
                      <img src="http://2.gravatar.com/avatar/57b428d9d10fb423e4c08b271ebf45d7?s=110&amp;d=mm&amp;r=g" alt="author" />
                    </div>
                    <div className="author-content">
                      <p className="author-name">vaibhav2131@gmail.com</p>
                      <p className="author-reg-date">Member since Mar 25, 2021</p>
                      <div className="author-link">
                        <a href="http://vaibhavk13.sg-host.com/author/vaibhav2131gmail-com/" className="">view all ads</a>
                      </div>
                    </div>
                  </div>
                  <div className="author-btns style2">
                    <Col sm={12} className="author-btn-holder ">
                      <a className="" data-popup-open="single_contact_form" href="#">Send message</a>
                    </Col>
                    <Col sm={12} className="author-btn-holder ">
                      <a data-popup-open="single_contact_form_bid" href="#" className="">Send Offer</a>
                    </Col>
                  </div>
                  <div className="about-social">
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} sm={12} xs={12} >
              <Banners />
            </Col>
            <Col md={12} sm={12} xs={12} >
              <div className="widget-row">
                <div className="widget-title">CATEGORIES</div>
                {cardHolder.map((adsdetails) => (
                  <div className="dtl" key={adsdetails.id}>
                    <div className="content">
                      <img
                        className="field-icon"
                        src={adsdetails.imgUrl}
                      />
                      <span className="tle">
                        {adsdetails.title}
                      </span>
                      <span className="cat-icon" >
                        {adsdetails.id}
                      </span>
                    </div>
                  </div>
                ))
                }
              </div>
            </Col>
            <Col md={12} sm={12} xs={12} >
              <div className="widget-row">
                <div className="widget-title">OFFERS</div>
                <div className="offer">
                  <div className="content">
                    <span className="tle">
                      Total Bids
                    </span>
                    <span className="cat-icon" >
                      0
                    </span>
                  </div>
                </div>
                <div className="offer">
                  <div className="content">
                    <span className="tle">
                      Highest Bids
                    </span>
                    <span className="cat-icon" >
                      0
                    </span>
                  </div>
                </div>
                <div className="offer">
                  <div className="content">
                    <span className="tle">
                      Lowest Bids
                    </span>
                    <span className="cat-icon" >
                      0
                    </span>
                  </div>
                </div>
                <div className="offer">
                  <div className="content">
                    <span className="tle">
                      Average Bids
                    </span>
                    <span className="cat-icon" >
                      0
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} sm={12} xs={12} >s
              <div className="widget-row">
                <div className="widget-title">Saftey Tips</div>
                <div className="textwidget">
                  <ul>
                    <li>Meet seller at a safe location</li>
                    <li>Check the item before you buy</li>
                    <li>Pay only after collecting item</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={12} sm={12} xs={12} className="text-center">
              <div className="image-holder">
                <div className="pacz-custom-image">
                  <a href="#" target="_blank">
                    <img
                      className="sidebar-widget-image"
                      src="images/ads-banner.jpeg"
                      alt="ADVERTISING"
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Col>
        </div>
      </div>
    </Row>
    <Row>
      <Footer />
    </Row>
  </Grid>
);

export default AdsDetails;
