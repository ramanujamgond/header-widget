import React from 'react';
import Image from 'next/image';

// import react responsive slider
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import fontawesome icon package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import SliderImg2 from '../../assets/images/slider-image-2.png';

const SocialMediaFeeds = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="social-media-feed-text mb-4">Social Media Feeds</div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <Carousel autoPlay={true} showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="social-media-wrapper">
                                    <span className="social-media-icon-wrapper"><FontAwesomeIcon className="social-media-icon" icon={faFacebookF} /></span>
                                    <div className="social-media-heading">Tamilnadu Tourism</div>
                                    <div className="social-media-post-time mb-3">2 minutes ago</div>
                                    <div className="social-media-text">
                                        <p className="standard-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ... <span className="see-more-links">See More</span></p>
                                    </div>
                                    <div className="social-media-image">
                                        <Image src={SliderImg2} alt="" />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="social-media-fb-wrapper mt-3">
                                        <span>View on Facebook</span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="social-media-wrapper">
                                    <span className="social-media-icon-wrapper"><FontAwesomeIcon className="social-media-icon" icon={faFacebookF} /></span>
                                    <div className="social-media-heading">Tamilnadu Tourism</div>
                                    <div className="social-media-post-time mb-3">2 minutes ago</div>
                                    <div className="social-media-text">
                                        <p className="standard-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ... <span className="see-more-links">See More</span></p>
                                    </div>
                                    <div className="social-media-image">
                                        <Image src={SliderImg2} alt="" />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="social-media-fb-wrapper mt-3">
                                        <span>View on Facebook</span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="social-media-wrapper">
                                    <span className="social-media-icon-wrapper"><FontAwesomeIcon className="social-media-icon" icon={faFacebookF} /></span>
                                    <div className="social-media-heading">Tamilnadu Tourism</div>
                                    <div className="social-media-post-time mb-3">2 minutes ago</div>
                                    <div className="social-media-text">
                                        <p className="standard-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ... <span className="see-more-links">See More</span></p>
                                    </div>
                                    <div className="social-media-image">
                                        <Image src={SliderImg2} alt="" />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="social-media-fb-wrapper mt-3">
                                        <span>View on Facebook</span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="social-media-wrapper">
                                    <span className="social-media-icon-wrapper"><FontAwesomeIcon className="social-media-icon" icon={faFacebookF} /></span>
                                    <div className="social-media-heading">Tamilnadu Tourism</div>
                                    <div className="social-media-post-time mb-3">2 minutes ago</div>
                                    <div className="social-media-text">
                                        <p className="standard-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ... <span className="see-more-links">See More</span></p>
                                    </div>
                                    <div className="social-media-image">
                                        <Image src={SliderImg2} alt="" />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="social-media-fb-wrapper mt-3">
                                        <span>View on Facebook</span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-3">
                                <div className="social-media-wrapper">
                                    <span className="social-media-icon-wrapper"><FontAwesomeIcon className="social-media-icon" icon={faFacebookF} /></span>
                                    <div className="social-media-heading">Tamilnadu Tourism</div>
                                    <div className="social-media-post-time mb-3">2 minutes ago</div>
                                    <div className="social-media-text">
                                        <p className="standard-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ... <span className="see-more-links">See More</span></p>
                                    </div>
                                    <div className="social-media-image">
                                        <Image src={SliderImg2} alt="" />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="social-media-fb-wrapper mt-3">
                                        <span>View on Facebook</span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="social-media-wrapper">
                                    <span className="social-media-icon-wrapper"><FontAwesomeIcon className="social-media-icon" icon={faFacebookF} /></span>
                                    <div className="social-media-heading">Tamilnadu Tourism</div>
                                    <div className="social-media-post-time mb-3">2 minutes ago</div>
                                    <div className="social-media-text">
                                        <p className="standard-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ... <span className="see-more-links">See More</span></p>
                                    </div>
                                    <div className="social-media-image">
                                        <Image src={SliderImg2} alt="" />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="social-media-fb-wrapper mt-3">
                                        <span>View on Facebook</span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="social-media-wrapper">
                                    <span className="social-media-icon-wrapper"><FontAwesomeIcon className="social-media-icon" icon={faFacebookF} /></span>
                                    <div className="social-media-heading">Tamilnadu Tourism</div>
                                    <div className="social-media-post-time mb-3">2 minutes ago</div>
                                    <div className="social-media-text">
                                        <p className="standard-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ... <span className="see-more-links">See More</span></p>
                                    </div>
                                    <div className="social-media-image">
                                        <Image src={SliderImg2} alt="" />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="social-media-fb-wrapper mt-3">
                                        <span>View on Facebook</span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="social-media-wrapper">
                                    <span className="social-media-icon-wrapper"><FontAwesomeIcon className="social-media-icon" icon={faFacebookF} /></span>
                                    <div className="social-media-heading">Tamilnadu Tourism</div>
                                    <div className="social-media-post-time mb-3">2 minutes ago</div>
                                    <div className="social-media-text">
                                        <p className="standard-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ... <span className="see-more-links">See More</span></p>
                                    </div>
                                    <div className="social-media-image">
                                        <Image src={SliderImg2} alt="" />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="social-media-fb-wrapper mt-3">
                                        <span>View on Facebook</span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default SocialMediaFeeds;
