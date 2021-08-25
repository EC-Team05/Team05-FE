import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/fontawesome-free-solid';

class DeleteProduct extends React.Component {

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
                                        <li className="breadcrumb-item active" aria-current="page">Xóa sản phẩm</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Xóa sản phẩm</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
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
                                        {/* add service Form */}
                                        <div className="row form-row">
                                            {/* Success Card */}
                                            <div className="card success-card">
                                                <div className="card-body">
                                                    <div className="success-cont">
                                                        <FontAwesomeIcon icon={faQuestion} />
                                                        <h3>Bạn chắc chắn xóa sản phẩm này không?</h3>
                                                        <p>Nếu bạn nhấn "Xác nhận" thì sản phẩm này được xóa, nếu bạn muốn thêm lại sản phẩm thì vào phần "Chỉnh sửa sản phẩm" để thêm sản phẩm mới.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Success Card */}
                                            <div className="submit-section">
                                                <button type="submit" className="btn btn-primary submit-btn">Xác nhận</button>
                                            </div>
                                            {/* add service Form */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* Page Content */}
            </div >
        )
    }
}
export { DeleteProduct };