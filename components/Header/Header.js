import Image from 'next/image';

// import logo
import Logo from '../../assets/images/logo.png';

// import masthead image
import mastHead from '../../assets/images/masthead.png';

// import property overview icon details
import PropertryDetails from '../../assets/images/53-plus-hotels.svg';
import Location100Plus from '../../assets/images/100-locations.svg';
import BestPriceGurantee from '../../assets/images/best-guarantee.svg';
import Travelers74Mn from '../../assets/images/74mn-travelers.svg';
import TopHeader from './TopHeader';

// import widget
import Widget from '../Widget/Widget';

const Header = () => {
    return (
        <>
            <section className="position-relative">
                <div className="header-glass-wrapper">
                    <TopHeader />
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-transparent margin-top">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <Image src={Logo} alt="Picture of the author" height="65" />
                            </a>
                            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="navbar-collapse collapse" id="collapseNavbar">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link nav-text-color mx-4" href="">Menu 1</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-text-color mx-4" href="">Menu 2</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-text-color mx-4" href="">Menu 3</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-text-color mx-4" href="">Menu 4</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-text-color mx-4" href="">Menu 5</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <header>
                    <Image src={mastHead} className="masthead" alt="Hero Image" />
                    <div className="widget-select-wrapper">
                        <div className="widget-heading-wrapper">
                            <div className="standard-cursive-text">Explore the</div>
                            <div className="widget-heading">Unexplored</div>
                        </div>

                        <Widget />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-center">
                                <div className="website-overview">
                                    <Image src={PropertryDetails} alt="Property detail icon" />
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center">
                                <div className="website-overview">
                                    <Image src={Location100Plus} alt="Property detail icon" />
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center">
                                <div className="website-overview">
                                    <Image src={BestPriceGurantee} alt="Property detail icon" />
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center">
                                <div className="website-overview">
                                    <Image src={Travelers74Mn} alt="Property detail icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="cloud-pattern"></div>
            </section>
        </>
    );
};

export default Header;
