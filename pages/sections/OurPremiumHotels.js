import Image from 'next/image';

// import property images
import mallapuramHotel from '../../assets/images/property-image-1.png';
import rameshwaramHotel from '../../assets/images/property-image-2.png';
import thanjavurHotel from '../../assets/images/property-image-3.png';
import thirukadaiyurHotel from '../../assets/images/property-image-4.png';
import maduraiHotel from '../../assets/images/property-image-5.png';
import kanyakumariHotel from '../../assets/images/property-image-6.png';
import courtallamHotel from '../../assets/images/property-image-7.png';

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const OurPremiumHotels = () => {
    return (
        <>
            <section className="my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 h-320px">
                            <div className="d-flex align-items-center h-100">
                                <div>
                                    <div className="our-premium-hotel-text">Our <br />Premium <br />Hotels</div>
                                    <hr className="our-hotel-underline" />
                                    <p className="standard-text">Lorem Ipsum is simply dummy text of the printing </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 h-320px">
                            <div className="premium-hotel-img-wrapper">
                                <Image src={mallapuramHotel} alt="Picture Mamallapuram Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">Mamallapuram</div>
                                    <div className="starting-rom-price-text">Starting Room From ₹ 7640</div>
                                    <div className="star-rating-wrapper">
                                        <div className="star-rating-value"><FontAwesomeIcon className="icon-style" icon={faStar} /> <span>5/5</span></div>
                                        <div className="star-rating-likes"><FontAwesomeIcon className="icon-style" icon={faHeart} /><span>84K</span></div>
                                    </div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="col-md-3 h-320px">
                            <div className="premium-hotel-img-wrapper">
                                <Image src={rameshwaramHotel} alt="Picture Rameshwaram Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />tamilnadu</div>
                                    <div className="our-hotel-location">RAMESHWARAM</div>
                                    <div className="starting-rom-price-text">Starting Room From ₹ 7800</div>
                                    <div className="star-rating-wrapper">
                                        <div className="star-rating-value"><FontAwesomeIcon className="icon-style" icon={faStar} /> <span>5/4.5</span></div>
                                        <div className="star-rating-likes"><FontAwesomeIcon className="icon-style" icon={faHeart} /><span>82K</span></div>
                                    </div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="col-md-3 h-320px">
                            <div className="premium-hotel-img-wrapper">
                                <Image src={thanjavurHotel} alt="Picture Thanjavur Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />tamilnadu</div>
                                    <div className="our-hotel-location">THANJAVUR</div>
                                    <div className="starting-rom-price-text">Starting Room From ₹ 8940</div>
                                    <div className="star-rating-wrapper">
                                        <div className="star-rating-value"><FontAwesomeIcon className="icon-style" icon={faStar} /> <span>5/4.2</span></div>
                                        <div className="star-rating-likes"><FontAwesomeIcon className="icon-style" icon={faHeart} /><span>97K</span></div>
                                    </div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-3 h-320px">
                            <div className="premium-hotel-img-wrapper">
                                <Image src={thirukadaiyurHotel} alt="Picture Thirukadaiyur Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />tamilnadu</div>
                                    <div className="our-hotel-location">thirukadaiyur</div>
                                    <div className="starting-rom-price-text">Starting Room From ₹ 4560</div>
                                    <div className="star-rating-wrapper">
                                        <div className="star-rating-value"><FontAwesomeIcon className="icon-style" icon={faStar} /> <span>5/4.8</span></div>
                                        <div className="star-rating-likes"><FontAwesomeIcon className="icon-style" icon={faHeart} /><span>79K</span></div>
                                    </div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="col-md-3 h-320px">
                            <div className="premium-hotel-img-wrapper">
                                <Image src={maduraiHotel} alt="Picture Madurai Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />tamilnadu</div>
                                    <div className="our-hotel-location">MADURAI</div>
                                    <div className="starting-rom-price-text">Starting Room From ₹ 4590</div>
                                    <div className="star-rating-wrapper">
                                        <div className="star-rating-value"><FontAwesomeIcon className="icon-style" icon={faStar} /> <span>5/4.0</span></div>
                                        <div className="star-rating-likes"><FontAwesomeIcon className="icon-style" icon={faHeart} /><span>63K</span></div>
                                    </div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="col-md-3 h-320px">
                            <div className="premium-hotel-img-wrapper">
                                <Image src={kanyakumariHotel} alt="Picture Kanyakumari Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />tamilnadu</div>
                                    <div className="our-hotel-location">KANYAKUMARI</div>
                                    <div className="starting-rom-price-text">Starting Room From ₹ 8900</div>
                                    <div className="star-rating-wrapper">
                                        <div className="star-rating-value"><FontAwesomeIcon className="icon-style" icon={faStar} /> <span>5/4.6</span></div>
                                        <div className="star-rating-likes"><FontAwesomeIcon className="icon-style" icon={faHeart} /><span>50K</span></div>
                                    </div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="col-md-3 h-320px">
                            <div className="premium-hotel-img-wrapper">
                                <Image src={courtallamHotel} alt="Picture Courtallam Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />tamilnadu</div>
                                    <div className="our-hotel-location">Courtallam</div>
                                    <div className="starting-rom-price-text">Starting Room From ₹ 6720</div>
                                    <div className="star-rating-wrapper">
                                        <div className="star-rating-value"><FontAwesomeIcon className="icon-style" icon={faStar} /> <span>5/4.7</span></div>
                                        <div className="star-rating-likes"><FontAwesomeIcon className="icon-style" icon={faHeart} /><span>100K</span></div>
                                    </div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurPremiumHotels;
