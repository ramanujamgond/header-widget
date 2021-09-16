import Image from 'next/image';

// import property images
import thirukadaiyurHotel from '../../assets/images/hotel-thirukadaiyur.png';
import thiruvannamalaiHotel from '../../assets/images/hotel-thiruvannamalai.png';
import krishnagiriHotel from '../../assets/images/hotel-krishnagiri.png';
import hosurHotel from '../../assets/images/hotel-hosur.png';
import otty1Hotel from '../../assets/images/hotel-ooty-1.png';
import otty2Hotel from '../../assets/images/hotel-ooty-2.png';
import madurai1Hotel from '../../assets/images/hotel-madurai-1.png';
import madurai2Hotel from '../../assets/images/hotel-madurai-2.png';
import trichyHotel from '../../assets/images/hotel-trichy.png';
import coimbatoreHotel from '../../assets/images/hotel-coimbatore.png';
import thanjavurHotel from '../../assets/images/hotel-thanjavur.png';

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const OurPremiumHotels = () => {
    return (
        <>
            <section className="my-5 pb-5">
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={thirukadaiyurHotel} alt="Picture Thirukadaiyur Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">THIRUKADAIYUR</div>
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={thiruvannamalaiHotel} alt="Picture Thiruvannamalai Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">THIRUVANNAMALAI</div>
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={krishnagiriHotel} alt="Picture Krishnagiri Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">KRISHNAGIRI</div>
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={hosurHotel} alt="Picture Hosur Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">HOSUR</div>
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={otty1Hotel} alt="Picture Ooty 1 Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">OOTY-I</div>
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={otty2Hotel} alt="Picture Ooty 2 Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">OOTY-II</div>
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={madurai1Hotel} alt="Picture Madurai 1 Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">MADURAI-I</div>
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

                    <div className="row mt-4">
                        <div className="col-md-3 h-320px">
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={madurai2Hotel} alt="Picture Madurai 2 Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">MADURAI-II</div>
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={trichyHotel} alt="Picture Trichy Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">TRICHY</div>
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={coimbatoreHotel} alt="Picture Coimbatore Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">COIMBATORE</div>
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
                            <div className="premium-hotel-img-wrapper hover-transition">
                                <Image src={thanjavurHotel} alt="Picture Thanjavur Hotel Location" />
                                <div className="hotel-details-wrapper">
                                    <div className="our-hotel-name">Hotel <br />Tamilnadu</div>
                                    <div className="our-hotel-location">THANJAVUR</div>
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
