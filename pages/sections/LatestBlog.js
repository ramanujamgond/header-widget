import Image from 'next/image';

// import package images
import Kodaikanal from '../../assets/images/kodaikanal.png';
import Ooty from '../../assets/images/ooty.png';
import Yercaud from '../../assets/images/yercaud.png';
import Pichawaram from '../../assets/images/pichawaram.png';
import MudumalaiNationalPark from '../../assets/images/mudumalaiNationalPark.png';

const LatestBlog = () => {
    return (
        <>
            <section className="mb-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-blog-heading mb-4">Latest Blogs</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="package-carousel">
                                <Image src={Kodaikanal} alt="Image of a tourist place in coimbatore" />
                                <div className="blog-section-wrap">
                                    <div className="blog-section-label">
                                        <span className="blog-tab-line">Sightseeing</span>
                                        <span className="blog-tab-line">Places</span>
                                    </div>
                                    <div className="blog-title mt-2">Beauty of Kodaikanal, Divine Place</div>
                                    <div className="blog-time-details">24 Aug 2013 | 4 mins read</div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={Ooty} alt="Hotel image in madurai" />
                                        <div className="blog-section-wrap">
                                            <div className="blog-section-label">
                                                <span className="blog-tab-line">Sightseeing</span>
                                                <span className="blog-tab-line">Places</span>
                                            </div>
                                            <div className="blog-title mt-2">Beauty of Kodaikanal, Divine Place</div>
                                            <div className="blog-time-details">24 Aug 2013 | 4 mins read</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={Yercaud} alt="Ooty a queen of hill station" />
                                        <div className="blog-section-wrap">
                                            <div className="blog-section-label">
                                                <span className="blog-tab-line">Sightseeing</span>
                                                <span className="blog-tab-line">Places</span>
                                            </div>
                                            <div className="blog-title mt-2">Beauty of Kodaikanal, Divine Place</div>
                                            <div className="blog-time-details">24 Aug 2013 | 4 mins read</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-12 h-200">
                                    <div className="packages-images">
                                        <Image src={Ooty} alt="Hotel image in madurai" />
                                        <div className="blog-section-wrap">
                                            <div className="blog-section-label">
                                                <span className="blog-tab-line">Sightseeing</span>
                                                <span className="blog-tab-line">Places</span>
                                            </div>
                                            <div className="blog-title mt-2">Beauty of Kodaikanal, Divine Place</div>
                                            <div className="blog-time-details">24 Aug 2013 | 4 mins read</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestBlog;
