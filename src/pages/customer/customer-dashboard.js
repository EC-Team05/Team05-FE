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
import { ThreeSixtySharp } from '@material-ui/icons';

class CustomerDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			appointment: [],
			status: "",
			info:[],
			redirect: false
		};
	}
	handleButtonClick(value) {
		localStorage.setItem("status",value)
	}
	componentDidMount() {
		fetch(`http://localhost:3000/user/profile/${localStorage.getItem("AccessToken")}`)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						appointment: result.appoint,
						info: result.info
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}
    render() {
		let {appointment}=this.state;
		let temp=appointment.filter(item=>{
			return item.customer == this.state.info.idc;
		})
        return (
			<div>
				{/* Breadcrumb */}
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-12 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Trang ch???</Link></li>
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
											<Tab eventKey="appointments" title="L???ch h???n">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Nh?? t???o m???u</th>
																		<th>Ng??y ?????t l???ch</th>
																		<th>Ng??y l??m ?????p</th>
																		<th>Chi ph??</th>
																		<th>Status</th>
																		<th></th>
																	</tr>
																</thead>
																{temp.map(item=>
																<tbody>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">{item.emp[0].lastname+' '+item.emp[0].firstname} <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>{item.date_created} <span className="d-block text-info">{item.start_time+':00'}</span></td>
																		<td>{item.date_reserved}</td>
																		<td>{item.price}</td>
																		<td><span className="badge badge-pill bg-danger-light">{item.status}</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<button>
																					<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																						<FontAwesomeIcon icon={faEye} /> Xem
																					</Link>
																				</button>
																				<button onClick={() => this.handleButtonClick(item.ida+" H???y")}>
																					<Link to="/cancel-booking" className="btn btn-sm bg-danger-light">
																						<FontAwesomeIcon icon={faTimes} /> H???y
																					</Link>
																				</button>
																			</div>
																		</td>
																	</tr>
																</tbody>
																)}
															</table>		
														</div>
													</div>
												</div>
				
											</Tab>
											<Tab eventKey="customer-history" title="L???ch s??? c???a kh??ch h??ng">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>ID h??a ????n</th>
																		<th>Ng??y </th>
																		<th>D???ch v???</th>
																		<th>???????c th???c hi???n b???i</th>
																		<th></th>
																	</tr>     
																</thead>
																<tbody>
																	<tr>
																		<td><Link to="/invoice-view">#MR-0010</Link></td>
																		<td>14 Nov 2020</td>
																		<td>Nail Filling</td>
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
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
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