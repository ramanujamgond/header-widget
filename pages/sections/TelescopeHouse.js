import React from 'react';
import Image from 'next/image';
import TelescopeHouseBg from '../../assets/images/telescope-house-bg.png';

const TelescopeHouse = () => {
    return (
        <>
            <section className="py-5 default-gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="standard-cursive-text">Explore the</div>
                            <div className="package-heading-text mb-4">Tamilnadu Tourism Telescope House</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="telescope-house-wrapper position-relative">
                                <Image src={TelescopeHouseBg} alt="Telescope house background image" />
                                <div className="telescopehouse-banner-text">Old fashioned Telescope house at Coakers Walk was constructed to enable visitors to have a panoramic view of the valley and nearby towns.</div>
                                <div className="image-overlay"></div>
                            </div>
                            <div className="telescope-house-btn-wrapper mt-4">
                                <div className="telescope-house-btn">Book Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TelescopeHouse;
