import Image from 'next/image';

// import react responsive slider
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// import user Icon
import userImage from '../../assets/images/userImage.jpg';

const Testamonial = () => {
    return (
        <>
            <section className="mb-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testamonial-wrapper">
                                <Carousel autoPlay={false} showArrows={false} showThumbs={false} showStatus={false}>
                                    <div className="testamonial-carousel">
                                        <div className="standard-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                                        <div className="container mt-3 px-0">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="testamonial-user-details">
                                                        <div className="testamonial-user-pic">
                                                            <Image src={userImage} alt="Profile user details" />
                                                        </div>
                                                        <div className="testamonial-user-name">
                                                            <div className="user-name">Firstname Lastname</div>
                                                            <div className="user-designation">Guest</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="star-ratings">
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="testamonial-carousel">
                                        <div className="standard-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</div>
                                        <div className="container mt-3 px-0">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="testamonial-user-details">
                                                        <div className="testamonial-user-pic">
                                                            <Image src={userImage} alt="Profile user details" />
                                                        </div>
                                                        <div className="testamonial-user-name">
                                                            <div className="user-name">Firstname Lastname</div>
                                                            <div className="user-designation">Guest</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="star-ratings">
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="testamonial-carousel">
                                        <div className="standard-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                        <div className="container mt-3 px-0">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="testamonial-user-details">
                                                        <div className="testamonial-user-pic">
                                                            <Image src={userImage} alt="Profile user details" />
                                                        </div>
                                                        <div className="testamonial-user-name">
                                                            <div className="user-name">Firstname Lastname</div>
                                                            <div className="user-designation">Guest</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="star-ratings">
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="testamonial-carousel">
                                        <div className="standard-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                        <div className="container mt-3 px-0">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="testamonial-user-details">
                                                        <div className="testamonial-user-pic">
                                                            <Image src={userImage} alt="Profile user details" />
                                                        </div>
                                                        <div className="testamonial-user-name">
                                                            <div className="user-name">Firstname Lastname</div>
                                                            <div className="user-designation">Guest</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="star-ratings">
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="star-rating-icon" icon={faStar} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testamonial;