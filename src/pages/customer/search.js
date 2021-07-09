import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import StylistThumb from '../../assets/img/stylists/stylist-thumb-01.jpg';
import StylistThumb1 from '../../assets/img/stylists/stylist-thumb-02.jpg';
import StylistThumb2 from '../../assets/img/stylists/stylist-thumb-03.jpg';
import StylistThumb3 from '../../assets/img/stylists/stylist-thumb-04.jpg';
import StylistThumb4 from '../../assets/img/stylists/stylist-thumb-06.jpg';
import SpecialityImg from '../../assets/img/specialities/specialities-05.png';
import SpecialityImg1 from '../../assets/img/specialities/specialities-04.png';
import SpecialityImg2 from '../../assets/img/specialities/specialities-01.png';
import SpecialityImg3 from '../../assets/img/specialities/specialities-03.png';
import GalleryImg1 from '../../assets/img/features/feature-01.jpg';
import GalleryImg2 from '../../assets/img/features/feature-02.jpg';
import GalleryImg3 from '../../assets/img/features/feature-03.jpg';
import GalleryImg4 from '../../assets/img/features/feature-04.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faMapMarkerAlt, faMoneyBillAlt, faStar, faThumbsUp, faComments } from '@fortawesome/fontawesome-free-solid';

class Search extends React.Component {
	
    render() {
        return (
			<div>
				{/* Breadcrumb */}
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-8 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Search</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">2245 matches found for : Nail Artist In US</h2>
							</div>
							<div className="col-md-4 col-12 d-md-block d-none">
								<div className="sort-by">
									<span className="sort-title">Sort by</span>
									<span className="sortby-fliter">
										<select className="select">
											<option>Select</option>
											<option className="sorting">Rating</option>
											<option className="sorting">Popular</option>
											<option className="sorting">Latest</option>
											<option className="sorting">Free</option>
										</select>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
							
								{/* Search Filter */}
								<div className="card search-filter">
									<div className="card-header">
										<h4 className="card-title mb-0">Search Filter</h4>
									</div>
									<div className="card-body">
										<div className="filter-widget">
											<input type="date" className="form-control datetimepicker" placeholder="Select Date" />		
										</div>
										<div className="filter-widget">
											<h4>Gender</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" defaultChecked />
													<span className="checkmark"></span> Male stylist
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" />
													<span className="checkmark"></span> Female stylist
												</label>
											</div>
										</div>
										<div className="filter-widget">
											<h4>Select Departments</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" defaultChecked />
													<span className="checkmark"></span> Paraffin Hands
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" defaultChecked />
													<span className="checkmark"></span> Paraffin Wax
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" />
													<span className="checkmark"></span> Nail Art
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" />
													<span className="checkmark"></span> Nail Filling
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" />
													<span className="checkmark"></span> Drying Polish
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" />
													<span className="checkmark"></span> Foot Care
												</label>
											</div>
										</div>
										<div className="btn-search">
											<button type="button" className="btn btn-block">Search</button>
										</div>	
									</div>
								</div>
								{/* Search Filter */}
								
							</div>

							<div className="col-md-12 col-lg-8 col-xl-9">

								{/* Professor Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={StylistThumb} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Sorell Sexton</Link></h4>
													<p className="doc-speciality">Pedicure</p>
													<h5 className="doc-department"><img src={SpecialityImg} className="img-fluid" alt="Speciality" />Nail Art</h5>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar}  />
														<span className="d-inline-block average-rating">(17)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, USA</p>
														<ul className="clinic-gallery">
															<li>
																<a href={GalleryImg1} data-fancybox="gallery">
																	<img src={GalleryImg1} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={GalleryImg2} data-fancybox="gallery">
																	<img  src={GalleryImg2} alt="Feature" />
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
														<li><FontAwesomeIcon icon={faThumbsUp} /> 98%</li>
														<li><FontAwesomeIcon icon={faComments} /> 17 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $300 - $1000 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /> </li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link to="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Professor Widget */}

								{/* Professor Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={StylistThumb1} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Urban Mauldin</Link></h4>
													<p className="doc-speciality">Glitter Nail Art</p>
													<h5 className="doc-department"><img src={SpecialityImg} className="img-fluid" alt="Speciality" />Nail Art</h5>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar}  />
														<span className="d-inline-block average-rating">(35)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</p>
														<ul className="clinic-gallery">
														<li>
															<a href={GalleryImg1} data-fancybox="gallery">
																<img src={GalleryImg1} alt="Feature" />
															</a>
														</li>
														<li>
															<a href={GalleryImg2} data-fancybox="gallery">
																<img  src={GalleryImg2} alt="Feature" />
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
														<li><FontAwesomeIcon icon={faThumbsUp} /> 100%</li>
														<li><FontAwesomeIcon icon={faComments} /> 35 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $50 - $300 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /></li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link to="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Professor Widget */}

								{/* Professor Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={StylistThumb2} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Cela Spence</Link></h4>
													<p className="doc-speciality">Manicure</p>
													<p className="doc-department"><img src={SpecialityImg1} className="img-fluid" alt="Speciality" />Nail Art</p>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar}  />
														<span className="d-inline-block average-rating">(27)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Georgia, USA</p>
														<ul className="clinic-gallery">
															<li>
																<a href={GalleryImg1} data-fancybox="gallery">
																	<img src={GalleryImg1} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={GalleryImg2} data-fancybox="gallery">
																	<img  src={GalleryImg2} alt="Feature" />
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
														<li><FontAwesomeIcon icon={faComments} /> 35 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $400 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /></li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link to="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Professor Widget */}

								{/* Professor Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={StylistThumb3} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Litia Green</Link></h4>
													<p className="doc-speciality">Nail Art</p>
													<p className="doc-department"><img src={SpecialityImg2} className="img-fluid" alt="Speciality" />Paraffin Hands</p>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar}  />
														<span className="d-inline-block average-rating">(4)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Louisiana, USA</p>
														<ul className="clinic-gallery">
														<li>
																<a href={GalleryImg1} data-fancybox="gallery">
																	<img src={GalleryImg1} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={GalleryImg2} data-fancybox="gallery">
																	<img  src={GalleryImg2} alt="Feature" />
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
														<li><FontAwesomeIcon icon={faThumbsUp} /> 97%</li>
														<li><FontAwesomeIcon icon={faComments} /> 4 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $150 - $250 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /></li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link to="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Professor Widget */}

								{/* Professor Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={StylistThumb4} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Vix Schneider</Link></h4>
													<p className="doc-speciality">Pedicure</p>
													<p className="doc-department"><img src={SpecialityImg3} className="img-fluid" alt="Speciality" />Pedicure</p>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar}  />
														<span className="d-inline-block average-rating">(52)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Texas, USA</p>
														<ul className="clinic-gallery">
														<li>
																<a href={GalleryImg1} data-fancybox="gallery">
																	<img src={GalleryImg1} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={GalleryImg2} data-fancybox="gallery">
																	<img  src={GalleryImg2} alt="Feature" />
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
														<li><FontAwesomeIcon icon={faThumbsUp} /> 100%</li>
														<li><FontAwesomeIcon icon={faComments} /> 52 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Texas, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $500 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /></li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link href="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Professor Widget */}

								<div className="load-more text-center">
									<Link to="" className="btn btn-primary btn-sm">Load More</Link>	
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
export { Search };