import React from 'react';

// import react tabs
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Widget = () => {
    resetIdCounter();
    return (
        <>
            <div className="multiple-widget-item-wrapper">
                <Tabs>
                    <TabList>
                        <Tab>Hotels</Tab>
                        <Tab>Holiday Packages</Tab>
                        <Tab>Boat Houses</Tab>
                        <Tab>Sightseeing</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="widget-date-range-picker">
                            <div className="location-search-wrapper"><input className="form-control location-search" type="text" placeholder="Enter Location" /></div>
                            <div className="date-picker-wrapper-checkIn"><input className="form-control date-picker-check-in" type="text" placeholder="22 Sept 2021" /></div>
                            <div className="date-picker-wrapper-checkOut"><input className="form-control date-picker-check-out" type="text" placeholder="23 Sept 2021" /></div>
                            <div className="guest-select-wrapper">
                                <select className="form-select guest-select-dropdown" aria-label="Default select example">
                                    <option defaultValue>Select Guests</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div><button type="button" className="btn standard-search-btn">Search</button></div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="widget-date-range-picker">
                            <div className="guest-select-wrapper">
                                <select className="form-select guest-select-dropdown" aria-label="Default select example">
                                    <option defaultValue>Select Guests</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="guest-select-wrapper">
                                <select className="form-select guest-select-dropdown" aria-label="Default select example">
                                    <option defaultValue>Select Guests</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="date-picker-wrapper-checkOut"><input className="form-control date-picker-check-out" type="text" placeholder="23 Sept 2021" /></div>
                            <div><button type="button" className="btn standard-search-btn">Search</button></div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="widget-date-range-picker">
                            <div className="location-search-wrapper"><input className="form-control location-search" type="text" placeholder="Enter Location" /></div>
                            <div className="date-picker-wrapper-checkIn"><input className="form-control date-picker-check-in" type="text" placeholder="22 Sept 2021" /></div>
                            <div className="date-picker-wrapper-checkOut"><input className="form-control date-picker-check-out" type="text" placeholder="23 Sept 2021" /></div>
                            <div className="guest-select-wrapper">
                                <select className="form-select guest-select-dropdown" aria-label="Default select example">
                                    <option defaultValue>Select Guests</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div><button type="button" className="btn standard-search-btn">Search</button></div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="widget-date-range-picker">
                            <div className="location-search-wrapper"><input className="form-control location-search" type="text" placeholder="Enter Location" /></div>
                            <div className="date-picker-wrapper-checkIn"><input className="form-control date-picker-check-in" type="text" placeholder="22 Sept 2021" /></div>
                            <div className="date-picker-wrapper-checkOut"><input className="form-control date-picker-check-out" type="text" placeholder="23 Sept 2021" /></div>
                            <div className="guest-select-wrapper">
                                <select className="form-select guest-select-dropdown" aria-label="Default select example">
                                    <option defaultValue>Select Guests</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div><button type="button" className="btn standard-search-btn">Search</button></div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default Widget;
