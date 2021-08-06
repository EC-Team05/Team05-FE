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
                                            <p>Quyét mã để thanh toán</p>
                                            <div className="img_payment">
                                                <img className="img-fluid" src={QR} alt="Post Image" />
                                            </div>
                                            <div className="img_payment">
                                                <img className="img-fluid" src={Scan} alt="Post Image" />
                                                <p>Sử dụng app MoMo hoặc
                                                    ứng dụng Camera hỗ trợ QR để quét mã</p>
                                            </div>
                                            <div className="btn-searchsubmit-section proceed-btn btn btn-block">
                                                <Link to="/booking-stylist" className="btn btn-primary submit-btn">Hoàn thành</Link>
                                            </div>
                                            <h4>Hướng dẫn sử dụng</h4>
                                            <p>1. Mở ví MoMo, chọn "Quét Mã"
                                                2. Quét mã QR
                                                3. Nhập số tiền cần thanh toán và lời nhắn theo yêu cầu (hệ thống sẽ hiện lời nhắn yêu cầu theo cú pháp
                                                sau: ID lịch hẹn + tổng tiền lên màn hình. Ví dụ: ID lịch hẹn là LH01, tổng tiền 235.000
                                                và ghi nội dung chuyển khoản: "LH01+235000")
                                                Kiểm tra & Bấm "Xác nhận"
                                                Sau khi hoàn tất thanh toán trên ứng dụng MoMo, quý khách bấm nút “Hoàn thành” trên giao diện.
                                            </p>
                                            <h4>Lưu ý</h4>
                                            <p>1. Trong trường hợp quý khách đã thanh toán trước qua MoMo và lịch hẹn không thực hiện được, Nàng Beauty sẽ hoàn tiền cho quý khách qua MoMo trong 3 tiếng tính từ thời gian đặt lịch hẹn. 2. Trong trường hợp quý khách đã thanh toán nhưng số tiền chuyển khoản không khớp với tổng số tiền của lịch hẹn, Nàng Beauty sẽ cập nhật tình trạng của lịch hẹn sang tình trạng “Không xác nhận” và hoàn trả tiền cho quý khách qua Momo trong 3 tiếng tính từ thời gian đặt lịch hẹn

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Success Card */}
                        </div>
                    </div>
                </div>
                {/* Page Content */}
            </div >
        )
    }
}
export { PaymentGuide };