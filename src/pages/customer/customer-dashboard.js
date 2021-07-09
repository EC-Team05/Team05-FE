import React from 'react';
import { Link } from 'react-router-dom'

import { CustomerSidebar } from './customer-sidebar';

// Import Components
import { Tabs, Tab } from "react-bootstrap";

// Import Images
import UserAvatar from '../../assets/img/stylists/stylist-thumb-01.jpg';
import UserAvatar1 from '../../assets/img/stylists/stylist-thumb-02.jpg';
import UserAvatar2 from '../../assets/img/stylists/stylist-thumb-03.jpg';
import UserAvatar3 from '../../assets/img/stylists/stylist-thumb-04.jpg';
import UserAvatar4 from '../../assets/img/stylists/stylist-thumb-05.jpg';
import UserAvatar5 from '../../assets/img/stylists/stylist-thumb-06.jpg';
import UserAvatar6 from '../../assets/img/stylists/stylist-thumb-07.jpg';
import UserAvatar7 from '../../assets/img/stylists/stylist-thumb-08.jpg';
import UserAvatar8 from '../../assets/img/stylists/stylist-thumb-09.jpg';
import UserAvatar9 from '../../assets/img/stylists/stylist-thumb-10.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEye, faPrint, faTimes } from '@fortawesome/fontawesome-free-solid';

class CustomerDashboard extends React.Component {
	
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
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Dashboard</h2>
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
								<CustomerSidebar />
							</div>
							{/* Profile Sidebar */}

							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="card database-tbl">
									<div className="card-body">
										<Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
											<Tab eventKey="appointments" title="Lịch hẹn">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Nhà tạo mẫu</th>
																		<th>Ngày đặt lịch</th>
																		<th>Ngày làm đẹp</th>
																		<th>Chi phí</th>
																		<th>Status</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Sorell Sexton <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
																		<td>12 Nov 2019</td>
																		<td>$160</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Urban Mauldin <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>12 Nov 2019 <span className="d-block text-info">8.00 PM</span></td>
																		<td>12 Nov 2019</td>
																		<td>$250</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Cela Spence <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>11 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
																		<td>10 Nov 2019</td>
																		<td>$400</td>
																		<td><span className="badge badge-pill bg-danger-light">Cancelled</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Litia Green <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td>10 Nov 2019 <span className="d-block text-info">3.00 PM</span></td>
																		<td>10 Nov 2019</td>
																		<td>$350</td>
																		<td><span className="badge badge-pill bg-warning-light">Pending</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Aditi Menard <span>Glitter</span></Link>
																			</h2>
																		</td>
																		<td>9 Nov 2019 <span className="d-block text-info">7.00 PM</span></td>
																		<td>8 Nov 2019</td>
																		<td>$75</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Vix Schneider <span>Pedicure</span></Link>
																			</h2>
																		</td>
																		<td>8 Nov 2019 <span className="d-block text-info">9.00 AM</span></td>
																		<td>6 Nov 2019</td>
																		<td>$175</td>
																		<td><span className="badge badge-pill bg-danger-light">Cancelled</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Jonalyn Graff <span>Paraffin Hands	</span></Link>
																			</h2>
																		</td>
																		<td>8 Nov 2019 <span className="d-block text-info">6.00 PM</span></td>
																		<td>6 Nov 2019</td>
																		<td>$450</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar7} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Yara Sauls <span>Waxing</span></Link>
																			</h2>
																		</td>
																		<td>7 Nov 2019 <span className="d-block text-info">9.00 PM</span></td>
																		<td>7 Nov 2019</td>
																		<td>$275</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar8} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Jaydee Mack <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>6 Nov 2019 <span className="d-block text-info">8.00 PM</span></td>
																		<td>4 Nov 2019</td>
																		<td>$600</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar9} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Lorissa Peters  <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>5 Nov 2019 <span className="d-block text-info">5.00 PM</span></td>
																		<td>1 Nov 2019</td>
																		<td>$100</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>		
														</div>
													</div>
												</div>
											</Tab>
											<Tab eventKey="customer-follow-up" title="Theo dõi khách hàng">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Date </th>
																		<th>Tên khách hàng</th>									
																		<th>Được thực hiện bởi </th>
																		<th></th>
																	</tr>     
																</thead>
																<tbody>
																	<tr>
																		<td>14 Nov 2020</td>
																		<td>Follow-up 1</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Sorell Sexton <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> In
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>13 Nov 2020</td>
																		<td>Follow-up 2</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Urban Mauldin <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>12 Nov 2020</td>
																		<td>Follow-up 3</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Cela Spence <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>11 Nov 2020</td>
																		<td>Follow-up 4</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Litia Green <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>10 Nov 2020</td>
																		<td>Follow-up 5</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Aditi Menard <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>9 Nov 2020</td>
																		<td>Follow-up 6</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Vix Schneider <span>Pedicure</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>8 Nov 2020</td>
																		<td>Follow-up 7</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Jonalyn Graff <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>7 Nov 2020</td>
																		<td>Follow-up 8</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar7} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Yara Sauls <span>Waxing</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>6 Nov 2020</td>
																		<td>Follow-up 9</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar8} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Jaydee Mack <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>5 Nov 2020</td>
																		<td>Follow-up 10</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar9} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Lorissa Peters <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>	
															</table>
														</div>
													</div>
												</div>
											</Tab>
											<Tab eventKey="customer-history" title="Customer History">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>ID</th>
																		<th>Date </th>
																		<th>Description</th>
																		<th>Attachment</th>
																		<th>Created</th>
																		<th></th>
																	</tr>     
																</thead>
																<tbody>
																	<tr>
																		<td><Link to="#">#MR-0010</Link></td>
																		<td>14 Nov 2020</td>
																		<td>Nail Filling</td>
																		<td><Link to="#">skin-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Sorell Sexton <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0009</Link></td>
																		<td>13 Nov 2020</td>
																		<td>Nail Art</td>
																		<td><Link to="#">skin-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Urban Mauldin <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0008</Link></td>
																		<td>12 Nov 2020</td>
																		<td>Gel Nail Art</td>
																		<td><Link to="#">alergy-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Cela Spence <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0007</Link></td>
																		<td>11 Nov 2020</td>
																		<td>Paraffin Wax</td>
																		<td><Link to="#">skin-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Litia Green <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0006</Link></td>
																		<td>10 Nov 2020</td>
																		<td>Waxing</td>
																		<td><Link to="#">alergy-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Aditi Menard <span>Glitter</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0005</Link></td>
																		<td>9 Nov 2020</td>
																		<td>Dying Polish</td>
																		<td><Link to="#">skin-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Vix Schneider <span>Pedicure</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0004</Link></td>
																		<td>8 Nov 2020</td>
																		<td>manicure</td>
																		<td><Link to="#">alergy-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Jonalyn Graff <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0003</Link></td>
																		<td>7 Nov 2020</td>
																		<td>Food Care</td>
																		<td><Link to="#">alergy-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar7} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Yara Sauls <span>Waxing</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0002</Link></td>
																		<td>6 Nov 2020</td>
																		<td>Waxing</td>
																		<td><Link to="#">skin-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar8} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Jaydee Mack <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0001</Link></td>
																		<td>5 Nov 2020</td>
																		<td>Nail Filling</td>
																		<td><Link to="#">skin-test.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar9} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Lorissa Peters <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>  	
															</table>
														</div>
													</div>
												</div>
											</Tab>
											<Tab eventKey="billing" title="Billing">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Invoice No</th>
																		<th>stylist</th>
																		<th>Amount</th>
																		<th>Paid On</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0010</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Ruby Perrin <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>$450</td>
																		<td>14 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0009</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Urban Mauldin <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>$300</td>
																		<td>13 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0008</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Cela Spence <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>$150</td>
																		<td>12 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0007</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Litia Green <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td>$50</td>
																		<td>11 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0006</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Aditi Menard <span>Glitter</span></Link>
																			</h2>
																		</td>
																		<td>$600</td>
																		<td>10 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0005</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Vix Schneider <span>Pedicure</span></Link>
																			</h2>
																		</td>
																		<td>$200</td>
																		<td>9 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0004</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Jonalyn Graff <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td>$100</td>
																		<td>8 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0003</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar7} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Yara Sauls <span>Waxing</span></Link>
																			</h2>
																		</td>
																		<td>$250</td>
																		<td>7 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0002</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar8} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Jaydee Mack <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>$175</td>
																		<td>6 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0001</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar9} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Lorissa Peters <span>#0010</span></Link>
																			</h2>
																		</td>
																		<td>$550</td>
																		<td>5 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</Tab>
										</Tabs>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>		
				{/* Page Content */}
			</div>
        )
    }
}
export { CustomerDashboard };