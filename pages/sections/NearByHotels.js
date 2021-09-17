import Link from 'next/link';

// import react tabs
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// import LiveTourPackage
import LiveTourPackage from './LiveTourPackage';

const NearByHotels = () => {
    resetIdCounter();
    return (
        <>
            <section className="py-5 default-gray-bg nearby-hotel-bg">
                <div className="container">
                    {/* Disable the latest offer section */}
                    {/* <div className="row my-5">
                        <div className="col-md-6">
                            <div className="footer-latest-offer">
                                <div className="image-offer-wraper">
                                    <div className="offer-cricle-first-image">
                                        <Image src={Offer1} alt="Hotel Offer Image" />
                                    </div>
                                    <div className="offer-cricle-second-image">
                                        <Image src={Offer2} alt="Hotel Offer Image" />
                                    </div>
                                </div>

                                <div className="offer-text-wrap">
                                    <div className="offer-text-heading">Latest Offer</div>
                                    <div className="standard-text">Lorem Ipsum is simply dummy text of the printing </div>
                                </div>

                                <div className="offer-btn-wrap">
                                    <div className="offer-btn">Book Now</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="footer-latest-offer">
                                <div className="image-offer-wraper">
                                    <div className="offer-cricle-first-image">
                                        <Image src={Offer3} alt="Hotel Offer Image" />
                                    </div>
                                    <div className="offer-cricle-second-image">
                                        <Image src={Offer4} alt="Hotel Offer Image" />
                                    </div>
                                </div>

                                <div className="offer-text-wrap">
                                    <div className="offer-text-heading">Latest Offer</div>
                                    <div className="standard-text">Lorem Ipsum is simply dummy text of the printing </div>
                                </div>

                                <div className="offer-btn-wrap">
                                    <div className="offer-btn">Book Now</div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <LiveTourPackage />

                    <div className="row">
                        <div className="col-md-12">
                            <div className="nearby-hotel-text mb-4">Nearby Hotels</div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-12">
                            <Tabs>
                                <TabList>
                                    <Tab>Cities</Tab>
                                    <Tab>Budget Hotels</Tab>
                                    <Tab>Couple Friendly Hotels</Tab>
                                    <Tab>Hotels Near Airport </Tab>
                                    <Tab>Hotels Near Railway Station</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="container px-0">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Chennai</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Coimbatorei</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Madurai</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Tiruchirappalli</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Tiruppur</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Salem</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Erode</a></Link></div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Tirunelveli</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Vellore</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Thoothukkudi</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Dindigul</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Ranipet</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Sivakasi</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Karur</a></Link></div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Udhagamandalam</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Hosur</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Nagercoil</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Kanchipuram</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Kumarapalayam</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Karaikkudi</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Neyveli</a></Link></div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Cuddalore</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Kumbakonam</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Tiruvannamalai</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Pollachi</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Rajapalayam</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Gudiyatham</a></Link></div>
                                                <div className="tab-items-list"><Link href="#"><a>Hotels in Pudukkottai</a></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Budget Hotels</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Couple Friendly Hotels</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Hotels Near Airport</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Hotels Near Railway Station</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NearByHotels;
