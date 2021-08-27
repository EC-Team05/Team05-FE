import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/fontawesome-free-solid';

class Accept extends React.Component {

    render() {
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
                                        <li className="breadcrumb-item active" aria-current="page">Chấp nhận đặt lịch</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Chấp nhận đặt lịch</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <form action="" method="POST" onSubmit={this.handleSubmit}>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                {/* Profile Sidebar */}
                                <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                    <StaffSidebar />
                                </div>
                                {/* Profile Sidebar */}

                                <div className="col-md-7 col-lg-8 col-xl-9">
                                    <div className="card">
                                        <div className="card-body">
                                            {/* accept */}
                                            <div className="row form-row">
                                                {/* Success Card */}
                                                <div className="card success-card">
                                                    <div className="card-body">
                                                        <div className="success-cont">
                                                            <FontAwesomeIcon icon={faQuestion} />
                                                            <h3>Bạn muốn chấp nhận lịch hẹn này không?</h3>
                                                            <p>Nếu bạn nhấn "Xác nhận" thì lịch hẹn này được đặt thành công, nếu bạn muốn hủy lịch hẹn này thì vào phần "Dashboard" để hủy lịch hẹn.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* accept */}
                                                <div className="submit-section">
                                                    <button type="submit" className="btn btn-primary submit-btn">Xác nhận</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </form>
                {/* Page Content */}
            </div >
        )
    }
}
export { Accept };