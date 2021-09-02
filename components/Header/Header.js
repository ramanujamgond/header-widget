import Image from 'next/image';

// import TTDC logo
import ttdcLogo from '../../assets/images/logo.png';

// import masthead image
import mastHead from '../../assets/images/masthead.png';

const Header = () => {
    return (
        <>
            <section className="position-relative">
                <div className="position-relative">
                    <div className="header-glass-wrapper">
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-transparent">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    <Image src={ttdcLogo} alt="Picture of the author" height="65" />
                                </a>
                                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="navbar-collapse collapse" id="collapseNavbar">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <a className="nav-link nav-text-color mx-4" href="" data-bs-target="#myModal" data-bs-toggle="modal">Home</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link nav-text-color mx-4" href="" data-bs-target="#myModal" data-bs-toggle="modal">About Us</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link nav-text-color mx-4" href="" data-bs-target="#myModal" data-bs-toggle="modal">Packages</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link nav-text-color mx-4" href="" data-bs-target="#myModal" data-bs-toggle="modal">Hotels</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link nav-text-color mx-4" href="" data-bs-target="#myModal" data-bs-toggle="modal">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="containetr">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-3"></div>
                            <div className="col-md-3"></div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>


                    <header>
                        <Image src={mastHead} className="masthead" alt="Hero Image" />
                    </header>
                </div>

                <div className="cloud-pattern"></div>
            </section>
        </>
    );
};

export default Header;
