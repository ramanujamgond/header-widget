import React from 'react';
import Image from 'next/image';

// import offer image
import LivePackageImage1 from '../../assets/images/live-package-image1.png';
import LivePackageImage2 from '../../assets/images/live-package-image2.png';
import LivePackageImage3 from '../../assets/images/live-package-image3.png';

const LiveTourPackage = () => {
    return (
        <>
            <div className="row mb-5">
                <div className="col-md-4">
                    <div className="live-tour-package-wrapper position-relative">
                        <Image src={LivePackageImage1} alt="live offer package image" />
                        <div className="live-offer-text-wrapper position-absolute">
                            <div className="live-tour-text">TIRUPATHI</div>
                            <div className="live-tour-price-text">Starting Room From ₹ 5200</div>
                        </div>
                        <div className="image-gradient-bottom"></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="live-tour-package-wrapper position-relative">
                        <Image src={LivePackageImage2} alt="live offer package image" />
                        <div className="live-offer-text-wrapper position-absolute">
                            <div className="live-tour-text">OOTY</div>
                            <div className="live-tour-price-text">Starting Room From ₹ 5200</div>
                        </div>
                        <div className="image-gradient-bottom"></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="live-tour-package-wrapper position-relative">
                        <Image src={LivePackageImage3} alt="live offer package image" />
                        <div className="live-offer-text-wrapper position-absolute">
                            <div className="live-tour-text">KODAIKANAL</div>
                            <div className="live-tour-price-text">Starting Room From ₹ 5200</div>
                        </div>
                        <div className="image-gradient-bottom"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveTourPackage;
