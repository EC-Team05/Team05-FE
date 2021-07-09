import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import CustomerImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faBookmark, faColumns, faComments, faLock, faMapMarkerAlt, faSignOutAlt, faUserCog } from '@fortawesome/fontawesome-free-solid';

class CustomerSidebar extends React.Component {
    render() {
        return(
            <div>
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <Link to="#" className="booking-doc-img">
                                <img src={CustomerImg} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                                <h3>Gordan Whelan</h3>
                                <div className="customer-details">
                                    <h5><FontAwesomeIcon icon={faBirthdayCake} /> 24 Jul 1983, 38 years</h5>
                                    <h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to="/customer-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/favourites">
                                        <FontAwesomeIcon icon={faBookmark} />
                                        <span>Favourites</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/chat">
                                        <FontAwesomeIcon icon={faComments} />
                                        <span>Message</span>
                                        <small className="unread-msg">23</small>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile-settings">
                                        <FontAwesomeIcon icon={faUserCog} />
                                        <span>Profile Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/change-password">
                                        <FontAwesomeIcon icon={faLock} />
                                        <span>Change Password</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                        <span>Logout</span>
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
export { CustomerSidebar };