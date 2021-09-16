import Image from 'next/image';

// import react responsive slider
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import package images
import MaduraiPackage from '../../assets/images/madurai-package.png';
import OotyPackage from '../../assets/images/ooty-package.png';
import ThanjavurPackage from '../../assets/images/thanjavur-package.png';
import MudumalaiNationalParkPackage from '../../assets/images/mudumalai-national-park-package.png';
import KanyakumariPackage from '../../assets/images/kanyakumari-package.png';
import MahabalipuramPackage from '../../assets/images/mahabalipuram-package.png';
import RameshwaramPackage from '../../assets/images/rameshwaram-package.png';
import ThirukadaiyurPackage from '../../assets/images/thirukadaiyur-package.png';

// import slider images
import SliderImg0 from '../../assets/images/slider-image-0.png';
import SliderImg1 from '../../assets/images/slider-image-1.jpg';
import SliderImg2 from '../../assets/images/slider-image-2.png';
import SliderImg3 from '../../assets/images/slider-image-3.jpg';

const HotelPackages = () => {
    return (
        <>
            <section className="mt-5 py-5 default-gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="standard-cursive-text">Explore the</div>
                            <div className="package-heading-text mb-4">Tamilnadu Tourism Packages</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Carousel autoPlay={true} showArrows={false} showThumbs={false} showStatus={false}>
                                <div className="package-carousel">
                                    <Image src={SliderImg0} alt="Image of a tourist place in coimbatore" />
                                    <div className="package-slider-wrap">
                                        <div className="package-slider-text">COIMBATORE</div>
                                        <div className="package-slider-detail">Starting Room From ₹ 5200</div>
                                    </div>
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="package-carousel">
                                    <Image src={SliderImg1} alt="Image of a tourist place in courtallam" />
                                    <div className="package-slider-wrap">
                                        <div className="package-slider-text">COURTALLAM</div>
                                        <div className="package-slider-detail">Starting Room From ₹ 5200</div>
                                    </div>
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="package-carousel">
                                    <Image src={SliderImg2} alt="Image of a tourist place in trichy" />
                                    <div className="package-slider-wrap">
                                        <div className="package-slider-text">TRICHY</div>
                                        <div className="package-slider-detail">Starting Room From ₹ 5200</div>
                                    </div>
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="package-carousel">
                                    <Image src={SliderImg3} alt="Image of a tourist place in yercaud" />
                                    <div className="package-slider-wrap">
                                        <div className="package-slider-text">YERCAUD</div>
                                        <div className="package-slider-detail">Starting Room From ₹ 5200</div>
                                    </div>
                                    <div className="image-overlay"></div>
                                </div>
                            </Carousel>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={MaduraiPackage} alt="Hotel image in madurai" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">MADURAI</div>
                                            <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={OotyPackage} alt="Ooty a queen of hill station" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">OOTY-QUEEN OF HILL STATIONS</div>
                                            <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={ThanjavurPackage} alt="A aesthetic place in thanjavur" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">THANJAVUR</div>
                                            <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={MudumalaiNationalParkPackage} alt="Mudumalai national park image" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">MUDUMALAI<br /> NATIONAL PARK</div>
                                            <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-3 h-200">
                            <div className="packages-images">
                                <Image src={KanyakumariPackage} alt="Alluring Places To Visit In Kanyakumari" />
                                <div className="package-wrap">
                                    <div className="package-name-text">KANYAKUMARI</div>
                                    <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        <div className="col-md-3 h-200">
                            <div className="packages-images">
                                <Image src={MahabalipuramPackage} alt="The Serenity Mahabalipuram" />
                                <div className="package-wrap">
                                    <div className="package-name-text">MAHABALIPURAM</div>
                                    <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        <div className="col-md-3 h-200">
                            <div className="packages-images">
                                <Image src={RameshwaramPackage} alt="Cherish every sunset Rameshwaram" />
                                <div className="package-wrap">
                                    <div className="package-name-text">RAMESHWARAM</div>
                                    <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        <div className="col-md-3 h-200">
                            <div className="packages-images">
                                <Image src={ThirukadaiyurPackage} alt="Explore The City Of Lord Shiva In Thirukadaiyur" />
                                <div className="package-wrap">
                                    <div className="package-name-text">THIRUKADAIYUR</div>
                                    <div className="package-detail-text">Starting Room From ₹ 5200</div>
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

export default HotelPackages;
