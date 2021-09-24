import Image from 'next/image';

// import package images
import BlogPost1 from '../../assets/images/blog-post1.png';
import BlogPost2 from '../../assets/images/blog-post2.png';
import BlogPost3 from '../../assets/images/blog-post3.png';

const LatestBlog = () => {
    return (
        <>
            <section className="mb-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-blog-heading mb-4">Latest Blogs</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="package-carousel">
                                <Image src={BlogPost1} alt="Image of a tourist place in coimbatore" />
                                <div className="blog-section-wrap">
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
                                        <Image src={BlogPost2} alt="Hotel image in madurai" />
                                        <div className="blog-section-wrap">
                                            <div className="blog-title mt-2">Beauty of Kodaikanal, Divine Place</div>
                                            <div className="blog-time-details">24 Aug 2013 | 4 mins read</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={BlogPost2} alt="Ooty a queen of hill station" />
                                        <div className="blog-section-wrap">
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
                                        <Image src={BlogPost3} alt="Hotel image in madurai" />
                                        <div className="blog-section-wrap">
                                            <div className="blog-title mt-2">Beauty of Kodaikanal, Divine Place</div>
                                            <div className="blog-time-details">24 Aug 2013 | 4 mins read</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col">
                            <div className="latest-blog-heading w-200">Blogs Topics</div>
                        </div>
                        <div className="col">
                            <div className="blog-topic-wrapper">
                                <span className="blog-topic-text">Sightseeing</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="blog-topic-wrapper">
                                <span className="blog-topic-text">Things to do</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="blog-topic-wrapper">
                                <span className="blog-topic-text">Places</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="blog-topic-wrapper">
                                <span className="blog-topic-text">Activities</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="blog-topic-wrapper">
                                <span className="blog-topic-text">Hotels</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="blog-topic-wrapper">
                                <span className="blog-topic-text">Beaches</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestBlog;
