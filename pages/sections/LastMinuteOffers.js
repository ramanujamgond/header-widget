import Image from 'next/image';

import ThanjavurHotels from '../../assets/images/thanjavurhotels.png';
import KodaikanalBoats from '../../assets/images/kodaikanalboats.png';
import MahabalipuramTemples from '../../assets/images/mahabalipuramtemples.png';
import YercaudForest from '../../assets/images/yercaudforest.png';

const LastMinuteOffers = () => {
    return (
        <>
            <section className="mb-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="last-minute-offer-heading">Last Minute Offers</div>
                            <div className="standard-text mb-4">Book a memorable tour at great price! Grab our last minute offer and pack the things for the journey you dream about. See our recommendations.</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 h-248">
                            <div className="packages-images">
                                <Image src={ThanjavurHotels} alt="Thanjavur Hotel offers" />
                                <div className="package-wrap offer-text-align-left">
                                    <div className="package-name-text">THANJAVUR <br /> HOTELS</div>
                                    <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        <div className="col-md-3 h-248">
                            <div className="packages-images">
                                <Image src={KodaikanalBoats} alt="Kasaikanal hotel offers" />
                                <div className="package-wrap offer-text-align-left">
                                    <div className="package-name-text">KODAIKANAL <br /> BOATS</div>
                                    <div className="package-detail-text">Starting Room From ₹ 2200</div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        <div className="col-md-3 h-248">
                            <div className="packages-images">
                                <Image src={MahabalipuramTemples} alt="Mahabalipuram hotel offers" />
                                <div className="package-wrap offer-text-align-left">
                                    <div className="package-name-text">MAHABALIPURAM <br /> TEMPLES</div>
                                    <div className="package-detail-text">Starting Room From ₹ 3620</div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        <div className="col-md-3 h-248">
                            <div className="packages-images">
                                <Image src={YercaudForest} alt="Yercuad forest hotel offers" />
                                <div className="package-wrap offer-text-align-left">
                                    <div className="package-name-text">YERCAUD <br /> FOREST</div>
                                    <div className="package-detail-text">Starting Room From ₹ 4345</div>
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

export default LastMinuteOffers;
