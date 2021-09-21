import React from 'react';

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhoneSquare, faStar } from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-4">
                        <div className="top-header-wrapper">
                            <div className="top-header-contact-info font-size-90"><FontAwesomeIcon className="top-header-icon" icon={faPhoneSquare} /> 1800 4253 1111</div>
                            <div className="top-header-contact-info font-size-90"><FontAwesomeIcon className="top-header-icon" icon={faPhoneSquare} /> 044-25333113</div>
                            <div className="top-header-contact-info"><FontAwesomeIcon className="top-header-icon" icon={faAt} /> support@ttdconline.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader;
