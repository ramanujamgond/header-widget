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
                            <div className="top-header-contact-info font-size-90"><FontAwesomeIcon className="top-header-icon" icon={faPhoneSquare} /> xxx xxx xxx</div>
                            <div className="top-header-contact-info font-size-90"><FontAwesomeIcon className="top-header-icon" icon={faPhoneSquare} /> xxx xxx xxx</div>
                            <div className="top-header-contact-info"><FontAwesomeIcon className="top-header-icon" icon={faAt} /> support@xxx.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader;
