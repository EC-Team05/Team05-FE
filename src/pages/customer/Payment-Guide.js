import React from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/fontawesome-free-solid';
import QR from '../../assets/img/qr-code.png';
import Scan from '../../assets/img/scan.png';

class PaymentGuide extends React.Component {
    render() {
        return (
            <div>
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Hướng dẫn thanh toán</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Hướng dẫn thanh toán</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content success-page-cont">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                {/* Success Card */}
                                <div className="card success-card">
                                    <div className="card-body">
                                        <div className="success-cont">
                                            <div className="img_payment">
                                                <img className="img-fluid" src={QR} alt="Post Image" />
                                            </div>
                                            <div className="img_payment">
                                                <img className="img-fluid" src={Scan} alt="Post Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Success Card */}
                            </div>
                        </div>

                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export { PaymentGuide };