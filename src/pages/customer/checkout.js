import React from 'react';
import { Link } from 'react-router-dom'

// Import Image
import UserImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faStar } from '@fortawesome/fontawesome-free-solid';

class Checkout extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Checkout</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Checkout</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-7 col-lg-8">
								<div className="card">
									<div className="card-body">
									
										{/* Checkout Form */}
										<form action="/booking-success">
										
											{/* Personal Information */}
											<div className="info-widget">
												<h4 className="card-title">Personal Information</h4>
												<div className="row">
													<div className="col-md-6 col-sm-12">
														<div className="form-group card-label">
															<label>First Name</label>
															<input className="form-control" type="text" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group card-label">
															<label>Last Name</label>
															<input className="form-control" type="text" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group card-label">
															<label>Email</label>
															<input className="form-control" type="email" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group card-label">
															<label>Phone</label>
															<input className="form-control" type="text" />
														</div>
													</div>
												</div>
												<div className="exist-customer">Existing Customer? <Link to="#">Click here to login</Link></div>
											</div>
											{/* Personal Information */}
											
											<div className="payment-widget">
												<h4 className="card-title">Payment Method</h4>
												
												{/* Credit Card Payment */}
												<div className="payment-list">
													<label className="payment-radio credit-card-option">
														<input type="radio" name="radio" defaultChecked />
														<span className="checkmark"></span>
														Credit card
													</label>
													<div className="row">
														<div className="col-md-6">
															<div className="form-group card-label">
																<label>Name on Card</label>
																<input className="form-control" id="card_name" type="text" />
															</div>
														</div>
														<div className="col-md-6">
															<div className="form-group card-label">
																<label>Card Number</label>
																<input className="form-control" id="card_number" placeholder="1234  5678  9876  5432" type="text" />
															</div>
														</div>
														<div className="col-md-4">
															<div className="form-group card-label">
																<label>Expiry Month</label>
																<input className="form-control" id="expiry_month" placeholder="MM" type="text" />
															</div>
														</div>
														<div className="col-md-4">
															<div className="form-group card-label">
																<label>Expiry Year</label>
																<input className="form-control" id="expiry_year" placeholder="YY" type="text" />
															</div>
														</div>
														<div className="col-md-4">
															<div className="form-group card-label">
																<label>CVV</label>
																<input className="form-control" id="cvv" type="text" />
															</div>
														</div>
													</div>
												</div>
												{/* Credit Card Payment */}
												
												{/* Paypal Payment */}
												<div className="payment-list">
													<label className="payment-radio paypal-option">
														<input type="radio" name="radio" />
														<span className="checkmark"></span>
														Paypal
													</label>
												</div>
												{/* Paypal Payment */}
												
												{/* Terms Accept */}
												<div className="terms-accept">
													<div className="custom-checkbox">
													<input type="checkbox" id="terms_accept" />
													<label>I have read and accept <Link to="#">Terms &amp; Conditions</Link></label>
													</div>
												</div>
												{/* Terms Accept */}
												
												{/* Submit Section */}
												<div className="submit-section mt-4">
													<button type="submit" className="btn btn-primary submit-btn">Confirm and Pay</button>
												</div>
												{/* Submit Section */}
												
											</div>
										</form>
										{/* Checkout Form */}
										
									</div>
								</div>
								
							</div>
							
							<div className="col-md-5 col-lg-4 theiaStickySidebar">
							
								{/* Booking Summary */}
								<div className="card booking-card">
									<div className="card-header">
										<h4 className="card-title">Booking Summary</h4>
									</div>
									<div className="card-body">
									
										{/* Booking professor Info */}
										<div className="booking-doc-info">
											<Link to="/stylist-profile" className="booking-doc-img">
												<img src={UserImg} alt="User Image" />
											</Link>
											<div className="booking-info">
												<h4><Link to="/stylist-profile">Urban Mauldin</Link></h4>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">35</span>
												</div>
												<div className="clinic-details">
													<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} className="filled" /> Newyork, USA</p>
												</div>
											</div>
										</div>
										{/* Booking professor Info */}
										
										<div className="booking-summary">
											<div className="booking-item-wrap">
												<ul className="booking-date">
													<li>Date <span>16 Nov 2019</span></li>
													<li>Time <span>10:00 AM</span></li>
												</ul>
												<ul className="booking-fee">
													<li>Service Fee <span>$100</span></li>
													<li>Booking Fee <span>$10</span></li>
													<li>Video Call <span>$50</span></li>
												</ul>
												<div className="booking-total">
													<ul className="booking-total-list">
														<li>
															<span>Total</span>
															<span className="total-cost">$160</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Booking Summary */}
								
							</div>
						</div>
					</div>
				</div>		
				{/* Page Content */}
			</div>
        )
    }
}
export { Checkout };