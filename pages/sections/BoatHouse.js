import Image from 'next/image';

// import package images
import KodaikanalBoatHouse1 from '../../assets/images/kodaikannal-boat-house-1.png';
import OotyBoatHouse1 from '../../assets/images/ooty-boat-house-1.png';
import KodaikanalBoatHouse2 from '../../assets/images/kodaikannal-boat-house-2.png';
import MuttukadumBoatHouse from '../../assets/images/muttukadu-boat-house.png';
import OotyBoatHouse2 from '../../assets/images/ooty-boat-house2.png';

const BoatHouse = () => {
    return (
        <>
            <section className="my-6 py-5">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="boat-house-wrapper">
                                <div className="standard-cursive-text">Tamilnadu Tourism</div>
                                <div className="boat-house-heading-text mb-4">Boat House</div>
                                <div className="image-gradient-bottom"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="package-carousel">
                                <Image src={KodaikanalBoatHouse1} alt="Image of a tourist place in coimbatore" />
                                <div className="package-slider-wrap">
                                    <div className="package-slider-text">Kodaikanal</div>
                                    <div className="package-slider-detail">Starting Room From ₹ 5200</div>
                                </div>
                                <div className="image-gradient-bottom"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={OotyBoatHouse1} alt="Hotel image in madurai" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">OOTY <br /> BOAT HOUSE</div>
                                            <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                        </div>
                                        <div className="image-gradient-bottom"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={KodaikanalBoatHouse2} alt="Ooty a queen of hill station" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">KODAIKANNAL <br /> BOAT HOUSE</div>
                                            <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                        </div>
                                        <div className="image-gradient-bottom"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={MuttukadumBoatHouse} alt="A aesthetic place in thanjavur" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">MUTTUKADU <br /> BOAT HOUSE</div>
                                            <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                        </div>
                                        <div className="image-gradient-bottom"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={OotyBoatHouse2} alt="Mudumalai national park image" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">OOTY <br /> BOAT HOUSE</div>
                                            <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                        </div>
                                        <div className="image-gradient-bottom"></div>
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

export default BoatHouse;
