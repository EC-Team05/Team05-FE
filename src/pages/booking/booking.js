import React, { useState } from "react";
import { Link } from 'react-router-dom';
import StylistImg from '../../assets/img/stylists/stylist-thumb-02.jpg';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

import DatePicker from 'react-datepicker'
import "../../assets/css/datepicker.css";

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCheck, faChevronCircleDown, faChevronDown, faChevronLeft, faChevronRight, faMapMarkerAlt, faStar } from '@fortawesome/fontawesome-free-solid';

function Booking() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Đặt lịch</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Đặt lịch</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb */}

            {/* Page Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => date && setSelectedDate(date)}
                                    dateFormat="dd/mm/yyyy"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Submit Section */}
                    <div className="submit-section proceed-btn text-right">
                        <Link to="/booking-stylist" className="btn btn-primary submit-btn">Đặt lịch</Link>
                    </div>
                    {/* Submit Section */}
                </div>
            </div>
            {/* Page Content */}
        </div>
    )
}
export { Booking };