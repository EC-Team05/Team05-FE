import React from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { Form } from "react-bootstrap";

class BookingService extends React.Component {
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
										<li className="breadcrumb-item active" aria-current="page">Dịch vụ</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Dịch vụ</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}
				{/* Search */}
				<div className="card search-widget">
					<div className="card-body">
						<form className="search-form">
							<div className="input-group">
								<input type="text" placeholder="Tìm kiếm..." className="form-control" />
								<div className="input-group-append">
									<button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSearch} /></button>
								</div>
							</div>
						</form>
					</div>
				</div>
				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">

								{/* Search Filter */}
								<div className="card search-filter">
									<div className="card-body">
										<div className="filter-widget">
											<h4>Loại dịch vụ</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" defaultChecked />
													<span className="checkmark"></span> Dịch vụ chăm sóc móng
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" />
													<span className="checkmark"></span> Dịch vụ chăm sóc
												</label>
											</div>
											<h4>Sắp xếp</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" defaultChecked />
													<span className="checkmark"></span> Giá từ thấp đến cao
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" />
													<span className="checkmark"></span> Giá từ cao đến thấp
												</label>
											</div>
										</div>

										<div className="btn-search">
											<button type="button" className="btn btn-block">Tìm kiếm</button>
										</div>
									</div>
								</div>
								{/* Search Filter */}
								{/* Choose service */}
								<div className="card search-filter">
									<div className="card-body">
										<div className="filter-widget">
											<h4>Dịch vụ đã chọn</h4>
											<ul className="list-unstyled mb-0">
												<li>Sơn gel</li>
												<li>Vẽ gel</li>
											</ul>
											<div className="card-header">
												<h4 className="card-title mb-0">Tổng</h4>
											</div>
											<div className="btn-searchsubmit-section proceed-btn text-right btn btn-block">
												<Link to="/booking-stylist" className="btn btn-primary submit-btn">Xác nhận</Link>
											</div>
											{/* <div className="btn-search">
												<button type="button" className="btn btn-block"><Link to="/">Xác nhận</Link></button>
											</div> */}
										</div>
									</div>
								</div>
								{/* Choose service */}
							</div>
							<div className="col-md-12 col-lg-8 col-xl-9">
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Cắt da, sửa móng tay chân</h4>
												<div class="row">
													<div class="col-10 doc-speciality">30 phút</div>
													<div class="col-2 doc-speciality">30.000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Sơn gel</h4>
												<div class="row">
													<div class="col-10 doc-speciality">20 phút</div>
													<div class="col-2 doc-speciality">80.000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Phá sơn sel</h4>
												<div class="row">
													<div class="col-10 doc-speciality">20 phút</div>
													<div class="col-2 doc-speciality">20.000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Phá gel cứng</h4>
												<div class="row">
													<div class="col-10 doc-speciality">25 phút</div>
													<div class="col-2 doc-speciality">50.000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Nổi móng đắp gel IDP Mỹ</h4>
												<div class="row">
													<div class="col-10 doc-speciality">120 phút</div>
													<div class="col-2 doc-speciality">200.000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Úp móng giả</h4>
												<div class="row">
													<div class="col-10 doc-speciality">60 phút</div>
													<div class="col-2 doc-speciality">60.000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Vẽ gel</h4>
												<div class="row">
													<div class="col-10 doc-speciality">5 phút</div>
													<div class="col-2 doc-speciality">5.000/móng</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Ombre - nail cat eyes</h4>
												<div class="row">
													<div class="col-10 doc-speciality">5 phút</div>
													<div class="col-2 doc-speciality">25.000/móng</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Markble, galaxy</h4>
												<div class="row">
													<div class="col-10 doc-speciality">10 phút</div>
													<div class="col-2 doc-speciality">20.000/móng</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Hoa khô/xà cừ/mirror</h4>
												<div class="row">
													<div class="col-10 doc-speciality">5 phút</div>
													<div class="col-2 doc-speciality">25.000/móng</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Đá nhỏ, phụ kiện</h4>
												<div class="row">
													<div class="col-10 doc-speciality">5 phút</div>
													<div class="col-2 doc-speciality">2.500/móng</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Ngâm chân thư giản, giải độc + chà gót + dưỡng mask</h4>
												<div class="row">
													<div class="col-10 doc-speciality">120 phút</div>
													<div class="col-2 doc-speciality">80.000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Massage tay/chân</h4>
												<div class="row">
													<div class="col-10 doc-speciality">120 phút</div>
													<div class="col-2 doc-speciality">100.000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
								{/* Choose service */}
								<div className="row">
									<div className="card col-10">
										<div className="card-body">
											<div className="">
												<h4 className="doc-name">Combo ngâm chân thư giãn + giải độc + chà gót + dưỡng mask</h4>
												<div class="row">
													<div class="col-10 doc-speciality">120 phút</div>
													<div class="col-2 doc-speciality">150.000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" defaultChecked />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* Choose service */}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export { BookingService };