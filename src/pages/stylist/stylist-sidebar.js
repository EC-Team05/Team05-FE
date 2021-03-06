import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import StylistImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faColumns, faComments, faFileAlt, faHourglassStart, faLock, faShareAlt, faSignOutAlt, faStar, faUser, faUserCog } from '@fortawesome/fontawesome-free-solid';

class StylistSidebar extends React.Component {
    render() {
        return(
            <div>
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <Link to="#" className="booking-doc-img">
                                <img src={StylistImg} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                                <h3>Urban Mauldin</h3>
                                
                                <div className="customer-details">
                                    <h5 className="mb-0">Glitter Nail Art</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to="/stylist-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/appointments">
                                        <FontAwesomeIcon icon={faCalendarCheck} />
                                        <span>L???ch h???n</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-customers">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>Kh??ch h??ng c???a t??i</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/schedule-timings">
                                        <FontAwesomeIcon icon={faHourglassStart} />
                                        <span>L??n l???ch</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/invoices">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>H??a ????n</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/reviews">
                                        <FontAwesomeIcon icon={faStar} />
                                        <span>????nh gi??</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/stylist-profile-settings">
                                        <FontAwesomeIcon icon={faUserCog} />
                                        <span>C??i ?????t c???u h??nh</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/stylist-change-password">
                                        <FontAwesomeIcon icon={faLock} />
                                        <span>Thay ?????i m???t kh???u</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                        <span>????ng xu???t</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Profile Sidebar */}
            </div>
        )
    }
}
export { StylistSidebar };