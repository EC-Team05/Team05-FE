import React from 'react';
import { Link } from 'react-router-dom'
import { Modal, Tabs, Tab } from 'react-bootstrap';

// Import Images
import UserImg from '../../assets/img/stylists/stylist-thumb-02.jpg';
import SplImg from '../../assets/img/specialities/specialities-05.png';
import GalleryImg1 from '../../assets/img/features/feature-01.jpg';
import GalleryImg2 from '../../assets/img/features/feature-02.jpg';
import GalleryImg3 from '../../assets/img/features/feature-03.jpg';
import GalleryImg4 from '../../assets/img/features/feature-04.jpg';
import CustomerImg from '../../assets/img/customers/customer.jpg';
import CustomerImg1 from '../../assets/img/customers/customer1.jpg';
import CustomerImg2 from '../../assets/img/customers/customer2.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faCommentAlt, faMapMarkerAlt, faMoneyBillAlt, faStar, faThumbsUp, faPhone, faPhoneSlash, faVideo, faThumbsDown, faReply } from '@fortawesome/fontawesome-free-solid';

class StylistProfile extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			showModalVideo: false
		}
	}

	openVoiceModal = () => {
		this.setState({
			showModal: !this.state.showModal
		})
	}

	openModal = () => {
		this.setState({
			showModalVideo: !this.state.showModalVideo
		})
	}
	
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
										<li className="breadcrumb-item active" aria-current="page">stylist Profile</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Stylist Profile</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content professor-pro">
					<div className="container">
						{/* Professor Widget */}
						<div className="card">
							<div className="card-body">
								<div className="stylist-widget">
									<div className="doc-info-left">
										<div className="stylist-img">
											<img src={UserImg} className="img-fluid" alt="User Image" />
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name">Urban Mauldin</h4>
											<p className="doc-speciality">Glitter Nail Art</p>
											<p className="doc-department"><img src={SplImg} className="img-fluid" alt="Speciality" />Nail Art</p>
											<div className="rating">
												<FontAwesomeIcon icon={faStar} className="filled" />
												<FontAwesomeIcon icon={faStar} className="filled" />
												<FontAwesomeIcon icon={faStar} className="filled" />
												<FontAwesomeIcon icon={faStar} className="filled" />
												<FontAwesomeIcon icon={faStar} />
												<span className="d-inline-block average-rating">(35)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA - <Link to="#">Get Directions</Link></p>
												<ul className="clinic-gallery">
													<li>
														<a href={GalleryImg1} data-fancybox="gallery">
															<img src={GalleryImg1} alt="Feature" />
														</a>
													</li>
													<li>
														<a href={GalleryImg2} data-fancybox="gallery">
															<img  src={GalleryImg2} alt="Feature Image" />
														</a>
													</li>
													<li>
														<a href={GalleryImg3} data-fancybox="gallery">
															<img src={GalleryImg3} alt="Feature" />
														</a>
													</li>
													<li>
														<a href={GalleryImg4} data-fancybox="gallery">
															<img src={GalleryImg4} alt="Feature" />
														</a>
													</li>
												</ul>
											</div>
											<div className="clinic-services">
												<span>Nail Fillings</span>
												<span> Waxing</span>
											</div>
										</div>
									</div>
									<div className="doc-info-right">
										<div className="clini-infos">
											<ul>
												<li><FontAwesomeIcon icon={faThumbsUp} /> 99%</li>
												<li><FontAwesomeIcon icon={faComment} /> 35 Feedback</li>
												<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</li>
												<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $100 per hour </li>
											</ul>
										</div>
										<div className="stylist-action">
											<Link to="#" className="btn btn-white fav-btn">
												<FontAwesomeIcon icon={faBookmark} />
											</Link>
											<Link to="/chat" className="btn btn-white msg-btn">
												<FontAwesomeIcon icon={faCommentAlt} />
											</Link>

											<a className="btn btn-white call-btn">
												<FontAwesomeIcon icon={faPhone} onClick={()=>this.openVoiceModal()} />
											</a>

											{/* Voice Call Modal */}
											<Modal show={this.state.showModal} className="call-modal">
												<Modal.Body>
													{/* Outgoing Call */}
													<div className="call-box incoming-box">
														<div className="call-wrapper">
															<div className="call-inner">
																<div className="call-user">
																	<img alt="User Image" src={UserImg} className="call-avatar" />
																	<h4>Prof. Darren Elder</h4>
																	<span>Connecting...</span>
																</div>							
																<div className="call-items">
																	<Link to="#" className="btn call-item call-end" onClick={()=>this.openVoiceModal()}>
																		<FontAwesomeIcon icon ={faPhoneSlash} />
																	</Link>
																	<Link to="/voice-call" className="btn call-item call-start">
																		<FontAwesomeIcon icon ={faPhone} />
																	</Link>
																</div>
															</div>
														</div>
													</div>
													{/* Outgoing Call */}
												</Modal.Body>											
											</Modal>
											{/* Voice Call Modal */}

											<a className="btn btn-white call-item call-end">
												<FontAwesomeIcon icon={faVideo} onClick={()=>this.openModal()} />
											</a>

											{/* Video Call Modal */}
											<Modal show={this.state.showModalVideo} className="call-modal">
												<Modal.Body>
													{/* Outgoing Call */}
													<div className="call-box incoming-box">
														<div className="call-wrapper">
															<div className="call-inner">
																<div className="call-user">
																	<img alt="User Image" src={UserImg} className="call-avatar" />
																	<h4>Prof. Darren Elder</h4>
																	<span>Connecting...</span>
																</div>							
																<div className="call-items">
																	<Link to="#" className="btn call-item call-end" onClick={()=>this.openModal()}>
																		<FontAwesomeIcon icon ={faPhoneSlash} />
																	</Link>
																	<Link to="/voice-call" className="btn call-item call-start">
																		<FontAwesomeIcon icon ={faVideo} />
																	</Link>
																</div>
															</div>
														</div>
													</div>
													{/* Outgoing Call */}
												</Modal.Body>											
											</Modal>
											{/* Video Call Modal */}
										</div>
										<div className="clinic-booking">
											<Link to="/booking" className="apt-btn">Book Appointment</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Professor Widget */}

						{/* Professor Details Tab */}
						<div className="card">
							<div className="card-body pt-0">
								<Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
									<Tab eventKey="overview" title="Overview">
										<div className="row">
											<div className="col-md-12 col-lg-9">
											
												{/* About Details */}
												<div className="widget about-widget">
													<h4 className="widget-title">About Me</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
												</div>
												{/* About Details */}
											
												{/* Education Details */}
												<div className="widget education-widget">
													<h4 className="widget-title">Education</h4>
													<div className="experience-box">
														<ul className="experience-list">
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<Link to="#/" className="name">International College Of Cosmetology</Link>
																		<div>Cosmetology</div>
																		<span className="time">1998 - 2003</span>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<Link to="#/" className="name">Inspire London College</Link>
																		<div>Beauty Therapy & Saloon Management</div>
																		<span className="time">2003 - 2005</span>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>
												{/* Education Details */}
										
												{/* Experience Details */}
												<div className="widget experience-widget">
													<h4 className="widget-title">Work & Experience</h4>
													<div className="experience-box">
														<ul className="experience-list">
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<Link to="#/" className="name">Roose Nails Beauty Clinic</Link>
																		<span className="time">2010 - Present (5 years)</span>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<Link to="#/" className="name">Salon Next Beauty Parlour</Link>
																		<span className="time">2007 - 2010 (3 years)</span>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<Link to="#/" className="name">Dream Nails Center</Link>
																		<span className="time">2005 - 2007 (2 years)</span>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>
												{/* Experience Details */}
									
												{/* Awards Details */}
												<div className="widget awards-widget">
													<h4 className="widget-title">Awards</h4>
													<div className="experience-box">
														<ul className="experience-list">
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<p className="exp-year">July 2020</p>
																		<h4 className="exp-title">Social Media Hair & Beauty Awards</h4>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<p className="exp-year">March 2011</p>
																		<h4 className="exp-title">The Scratch Stars Award</h4>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<p className="exp-year">May 2008</p>
																		<h4 className="exp-title"> Scottish Nail Art & Glitter Award</h4>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>
												{/* Awards Details */}
												
												
												{/* Services List */}
												<div className="service-list">
													<h4>Services</h4>
													<ul className="clearfix">
														<li>Nail Art </li>
														<li>Nail Filling</li>
														<li>Manicure</li>
														<li>Gel Nail Art</li>
														<li>Food Care</li>
														<li>Pedicure</li>
													</ul>
												</div>
												{/* Services List */}

												{/* Specializations List */}
												<div className="service-list">
													<h4>Specializations</h4>
													<ul className="clearfix">
														<li>Manicure</li>
														<li>Nail Art</li>	
														<li>Pedicure </li>	
														<li>Dry Polishing</li>	
														<li>Waxing</li>	
														<li>Food Care</li>	
													</ul>
												</div>
												{/* Specializations List */}

											</div>
										</div>
									</Tab>
									<Tab eventKey="locations" title="Locations">

										{/* Location List */}
										<div className="location-list">
											<div className="row">
											
												{/* Clinic Content */}
												<div className="col-md-6">
													<div className="clinic-content">
														<h4 className="clinic-name"><Link to="#">Purple Beauty Center</Link></h4>
														<p className="doc-speciality">Nail Art</p>
														<div className="rating">
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} />
															<span className="d-inline-block average-rating">(4)</span>
														</div>
														<div className="clinic-details mb-0">
															<h5 className="clinic-direction"> <FontAwesomeIcon icon={faMapMarkerAlt}  /> 2286  Sundown Lane, Austin, Texas 78749, USA <br /><Link to="#">Get Directions</Link></h5>
															<ul>
																<li>
																	<a href={GalleryImg1} data-fancybox="gallery2">
																		<img src={GalleryImg1} alt="Feature Image" />
																	</a>
																</li>
																<li>
																	<a href={GalleryImg2}data-fancybox="gallery2">
																		<img src={GalleryImg2} alt="Feature Image" />
																	</a>
																</li>
																<li>
																	<a href={GalleryImg3} data-fancybox="gallery2">
																		<img src={GalleryImg3} alt="Feature Image" />
																	</a>
																</li>
																<li>
																	<a href={GalleryImg4} data-fancybox="gallery2">
																		<img src={GalleryImg4} alt="Feature Image" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												{/* Clinic Content */}
												
												{/* Clinic Timing */}
												<div className="col-md-4">
													<div className="clinic-timing">
														<div>
															<p className="timings-days">
																<span> Mon - Sat </span>
															</p>
															<p className="timings-times">
																<span>10:00 AM - 2:00 PM</span>
																<span>4:00 PM - 9:00 PM</span>
															</p>
														</div>
														<div>
														<p className="timings-days">
															<span>Sun</span>
														</p>
														<p className="timings-times">
															<span>10:00 AM - 2:00 PM</span>
														</p>
														</div>
													</div>
												</div>
												{/* Clinic Timing */}
												
												<div className="col-md-2">
													<div className="consult-price">
														$250
													</div>
												</div>
											</div>
										</div>
										{/* Location List */}

										{/* Location List */}
										<div className="location-list">
											<div className="row">
											
												{/* Clinic Content */}
												<div className="col-md-6">
													<div className="clinic-content">
														<h4 className="clinic-name"><Link to="#">Colors Beauty Clinic</Link></h4>
														<p className="doc-speciality">Praraffin Wax</p>
														<div className="rating">
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} />
															<span className="d-inline-block average-rating">(4)</span>
														</div>
														<div className="clinic-details mb-0">
															<h5 className="clinic-direction"> <FontAwesomeIcon icon={faMapMarkerAlt}  /> 2883 University Street, Seattle, Texas Washington, 98155 <br /><Link to="#">Get Directions</Link></h5>
															<ul>
																<li>
																	<a href={GalleryImg1} data-fancybox="gallery2">
																		<img src={GalleryImg1} alt="Feature Image" />
																	</a>
																</li>
																<li>
																	<a href={GalleryImg2}data-fancybox="gallery2">
																		<img src={GalleryImg2} alt="Feature Image" />
																	</a>
																</li>
																<li>
																	<a href={GalleryImg3} data-fancybox="gallery2">
																		<img src={GalleryImg3} alt="Feature Image" />
																	</a>
																</li>
																<li>
																	<a href={GalleryImg4} data-fancybox="gallery2">
																		<img src={GalleryImg4} alt="Feature Image" />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												{/* Clinic Content */}
												
												{/* Clinic Timing */}
												<div className="col-md-4">
													<div className="clinic-timing">
														<div>
															<p className="timings-days">
																<span> Tue - Fri </span>
															</p>
															<p className="timings-times">
																<span>11:00 AM - 1:00 PM</span>
																<span>6:00 PM - 11:00 PM</span>
															</p>
														</div>
														<div>
														<p className="timings-days">
															<span>Sat - Sun</span>
														</p>
														<p className="timings-times">
															<span>8:00 AM - 10:00 AM</span>
															<span>3:00 PM - 7:00 PM</span>
														</p>
														</div>
													</div>
												</div>
												{/* Clinic Timing */}
												
												<div className="col-md-2">
													<div className="consult-price">
														$350
													</div>
												</div>
											</div>
										</div>
										{/* Location List */}

									</Tab>
									<Tab eventKey="reviews" title="Reviews">
										{/* Review Listing */}
										<div className="widget review-listing">
											<ul className="comments-list">
											
												{/* Comment List */}
												<li>
													<div className="comment">
														<img className="avatar avatar-sm rounded-circle" alt="User Image" src={CustomerImg} />
														<div className="comment-body">
															<div className="meta-data">
																<span className="comment-author">Gordan Whelan</span>
																<span className="comment-date">Reviewed 2 Days ago</span>
																<div className="review-count rating">
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} />
																</div>
															</div>
															<p className="recommended"><FontAwesomeIcon icon={faThumbsUp} /> I recommend the stylist</p>
															<p className="comment-content">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																Ut enim ad minim veniam, quis nostrud exercitation.
																Curabitur non nulla sit amet nisl tempus
															</p>
															<div className="comment-reply">
																<Link to="#" className="comment-btn">
																	<FontAwesomeIcon icon={faReply} /> Reply
																</Link>
															<p className="recommend-btn">
																<span>Recommend?</span>
																<Link to="#" className="like-btn">
																	<FontAwesomeIcon icon={faThumbsUp} /> Yes
																</Link>
																<Link to="#" className="dislike-btn">
																	<FontAwesomeIcon icon={faThumbsDown} /> No
																</Link>
															</p>
															</div>
														</div>
													</div>
													
													{/* Comment Reply */}
													<ul className="comments-reply">
														<li>
															<div className="comment">
																<img className="avatar avatar-sm rounded-circle" alt="User Image" src={CustomerImg1} />
																<div className="comment-body">
																	<div className="meta-data">
																		<span className="comment-author">Terilynn Toler</span>
																		<span className="comment-date">Reviewed 3 Days ago</span>
																		<div className="review-count rating">
																			<FontAwesomeIcon icon={faStar} className="filled" />
																			<FontAwesomeIcon icon={faStar} className="filled" />
																			<FontAwesomeIcon icon={faStar} className="filled" />
																			<FontAwesomeIcon icon={faStar} className="filled" />
																			<FontAwesomeIcon icon={faStar} />
																		</div>
																	</div>
																	<p className="comment-content">
																		Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																		Ut enim ad minim veniam.
																		Curabitur non nulla sit amet nisl tempus
																	</p>
																	<div className="comment-reply">
																		<Link to="#" className="comment-btn">
																			<FontAwesomeIcon icon={faReply} /> Reply
																		</Link>
																		<p className="recommend-btn">
																			<span>Recommend?</span>
																			<Link to="#" className="like-btn">
																				<FontAwesomeIcon icon={faThumbsUp} /> Yes
																			</Link>
																			<Link to="#" className="dislike-btn">
																				<FontAwesomeIcon icon={faThumbsDown} /> No
																			</Link>
																		</p>
																	</div>
																</div>
															</div>
														</li>
													</ul>
													{/* Comment Reply */}
													
												</li>
												{/* Comment List */}
												
												{/* Comment List */}
												<li>
													<div className="comment">
														<img className="avatar avatar-sm rounded-circle" alt="User Image" src={CustomerImg2} />
														<div className="comment-body">
															<div className="meta-data">
																<span className="comment-author">Achav Ryder</span>
																<span className="comment-date">Reviewed 4 Days ago</span>
																<div className="review-count rating">
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} />
																</div>
															</div>
															<p className="comment-content">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																Ut enim ad minim veniam, quis nostrud exercitation.
																Curabitur non nulla sit amet nisl tempus
															</p>
															<div className="comment-reply">
																<Link to="#" className="comment-btn">
																	<FontAwesomeIcon icon={faReply} /> Reply
																</Link>
																<p className="recommend-btn">
																	<span>Recommend?</span>
																	<Link to="#" className="like-btn">
																	<FontAwesomeIcon icon={faThumbsUp} /> Yes
																	</Link>
																	<Link to="#" className="dislike-btn">
																		<FontAwesomeIcon icon={faThumbsDown} /> No
																	</Link>
																</p>
															</div>
														</div>
													</div>
												</li>
												{/* Comment List */}
												
											</ul>
											
											{/* Show All */}
											<div className="all-feedback text-center">
												<Link to="#" className="btn btn-primary btn-sm">
													Show all feedback <strong>(167)</strong>
												</Link>
											</div>
											{/* Show All */}
											
										</div>
										{/* Review Listing */}

										{/* Write Review */}
										<div className="write-review">
											<h4>Write a review for <strong>Urban Mauldin</strong></h4>
											
											{/* Write Review Form */}
											<form>
												<div className="form-group">
													<label>Review</label>
													<div className="star-rating">
														<input id="star-5" type="radio" name="rating" value="star-5" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
														<input id="star-4" type="radio" name="rating" value="star-4" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
														<input id="star-3" type="radio" name="rating" value="star-3" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
														<input id="star-2" type="radio" name="rating" value="star-2" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
														<input id="star-1" type="radio" name="rating" value="star-1" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
													</div>
												</div>
												<div className="form-group">
													<label>Title of your review</label>
													<input className="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?" />
												</div>
												<div className="form-group">
													<label>Your review</label>
													<textarea id="review_desc" maxLength="100" className="form-control"></textarea>
												
												<div className="d-flex justify-content-between mt-3"><small className="text-muted"><span id="chars">100</span> characters remaining</small></div>
												</div>
												<hr />
												<div className="form-group">
													<div className="terms-accept">
														<div className="custom-checkbox">
														<input type="checkbox" id="terms_accept" />
														<label>I have read and accept <Link to="#">Terms &amp; Conditions</Link></label>
														</div>
													</div>
												</div>
												<div className="submit-section">
													<button type="submit" className="btn btn-primary submit-btn">Add Review</button>
												</div>
											</form>
											{/* Write Review Form */}
											
										</div>
										{/* Write Review */}
									
									</Tab>
									<Tab eventKey="business-hours" title="Business Hours">
										<div className="row">
											<div className="col-md-6 offset-md-3">
											
												{/* Business Hours Widget */}
												<div className="widget business-widget">
													<div className="widget-content">
														<div className="listing-hours">
															<div className="listing-day current">
																<div className="day">Today <span>5 Nov 2019</span></div>
																<div className="time-items">
																	<span className="open-status"><span className="badge bg-success-light">Open Now</span></span>
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Monday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Tuesday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Wednesday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Thursday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Friday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Saturday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day closed">
																<div className="day">Sunday</div>
																<div className="time-items">
																	<span className="time"><span className="badge bg-danger-light">Closed</span></span>
																</div>
															</div>
														</div>
													</div>
												</div>
												{/* Business Hours Widget */}
										
											</div>
										</div>
									</Tab>
								</Tabs>
							</div>
						</div>
						{/* Professor Details Tab */}

					</div>
				</div>		
				{/* Page Content */}

			</div>
        )
    }
}
export { StylistProfile };