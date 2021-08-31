import Image from 'next/image';
import Link from 'next/link'

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import app and play store icon
import PlayStore from '../../assets/images/play-store.svg';
import AppStore from '../../assets/images/app-store.svg';

// import qr-code
import QrCode from '../../assets/images/qr-code.svg';

// import bookingjini logo
import BookingJiniLogo from '../../assets/images/bookingjini-logo-white.svg';

// import payment icon
import PaymentIcon from '../../assets/images/payment-icon.svg';

const Footer = () => {
    return (
        <>
            <section className="mt-5 pt-5 footer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">Book Us Direct</div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 footer-border-right">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="footer-heading-text">TTDC</div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">About Us</a>
                                        </Link>
                                    </div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Careers</a>
                                        </Link>
                                    </div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Press</a>
                                        </Link>
                                    </div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Travel Blog</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="footer-heading-text">Partner With Us</div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Be our Franchisee</a>
                                        </Link>
                                    </div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Travel Agent</a>
                                        </Link>
                                    </div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Corporate Enquiries</a>
                                        </Link>
                                    </div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Quarantine Hotels</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="footer-heading-text">Policies</div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Terms & Conditions</a>
                                        </Link>
                                    </div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Privacy Policy</a>
                                        </Link>
                                    </div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">Cancellation Policy</a>
                                        </Link>
                                    </div>
                                    <div className="footer-menu-list">
                                        <Link href="#">
                                            <a className="cursor-pointer">FAQs</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-5">
                                    <div className="powered-bt-text">Powered By <Image src={BookingJiniLogo} alt="Logo of Bookingjini" /></div>
                                </div>
                                <div className="col-md-7">
                                    <div className="we-accept-text">We Accept <Image src={PaymentIcon} alt="Payment icon" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="footer-download-text">Download our free app</div>
                                    <div className="download-number">(1M + Downloads)</div>
                                    <div className="footer-input">
                                        <input className="form-control" placeholder="Enter your Mobile number" />
                                        <span><FontAwesomeIcon className="footer-right-arrow" icon={faArrowRight} /></span>
                                    </div>
                                    <div className="row download-icon-wrapper">
                                        <div className="col-md-6">
                                            <Image src={PlayStore} alt="Playstore icon" />
                                        </div>
                                        <div className="col-md-6">
                                            <Image src={AppStore} alt="Appstore icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="qr-code-scanner-wrapper">
                                        <div className="mb-3">Scan to get the link</div>
                                        <div className="app-qr-code">
                                            <Image src={QrCode} alt="Qr Code image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 pt-4 pb-2">
                        <div className="col-md-12">
                            <div className="footer-horizontal"></div>
                        </div>
                    </div>

                    <div className="row mt-2 py-4">
                        <div className="col-md-12">
                            <div className="footer-copyright-text">Copyright © 2021 All Rights Reserved TTDC</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
