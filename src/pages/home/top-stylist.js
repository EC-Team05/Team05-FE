import React from 'react';
import { Link } from 'react-router-dom'

// Import Slick Slider
import Slider from "react-slick";

// Import Images
import Stylist1 from '../../assets/img/profile/profile-01.jpg';
import Stylist2 from '../../assets/img/profile/profile-02.jpg';
import Stylist3 from '../../assets/img/profile/profile-03.jpg';
import Stylist4 from '../../assets/img/profile/profile-04.jpg';
import Stylist5 from '../../assets/img/profile/profile-05.jpg';
import Stylist6 from '../../assets/img/profile/profile-06.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid';

class TopStylist extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
        };

        return (
            <div>
                {/* Top Stylist */}
                <section className="section stylists">
                    <div className="container">
                        <div className="row justify-content-center">	
                            <div className="section-header text-center">						
                                <h2>Nhà tạo mẫu hàng đầu</h2>
                                <p className="sub-title">Create an original image for your personality</p>
                            </div>
                        </div>

                        <Slider {...settings} className="stylist-slider">
							{/* Stylist Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/stylist-profile">
										<img className="img-fluid" alt="User Image" src={Stylist1} />
									</Link>
								</div>
								<div className="pro-content">
									<h3 className="title text-center">
										<Link to="/stylist-profile">Ashley Willes</Link> 
									</h3>
									<p className="speciality text-center">Manicure</p>
									<div className="rating text-center">
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar}  />
									</div>
									<div className="row row-sm mb-4 text-center">
										<div className="col-6">
											<p>Experience</p>
											<p className="num">15</p>
										</div>
										<div className="col-6">
											<p>Attended</p>
											<p className="num">250</p>
										</div>
									</div>
									<div className="row row-sm justify-content-center">
										<Link to="/booking" className="btn-pink">Đặt lịch ngay</Link>
									</div>
								</div>
							</div>
							{/* Stylist Widget */}

							{/* Stylist Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/stylist-profile">
										<img className="img-fluid" alt="User Image" src={Stylist2} />
									</Link>
								</div>
								<div className="pro-content">
									<h3 className="title text-center">
										<Link to="/stylist-profile">Amanda</Link> 
									</h3>
									<p className="speciality text-center">Pedicure</p>
									<div className="rating text-center">
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar}  />
									</div>
									<div className="row row-sm mb-4 text-center">
										<div className="col-6">
											<p>Experience</p>
											<p className="num">11</p>
										</div>
										<div className="col-6">
											<p>Attended</p>
											<p className="num">320</p>
										</div>
									</div>
									<div className="row row-sm justify-content-center">
										<Link to="/booking" className="btn-pink">Đặt lịch ngay</Link>
									</div>
								</div>
							</div>
							{/* Stylist Widget */}

							{/* Stylist Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/stylist-profile">
										<img className="img-fluid" alt="User Image" src={Stylist3} />
									</Link>
								</div>
								<div className="pro-content">
									<h3 className="title text-center">
										<Link to="/stylist-profile">Niraj</Link> 
									</h3>
									<p className="speciality text-center">Nail Rat, Paraffin Waxing</p>
									<div className="rating text-center">
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar}  />
									</div>
									<div className="row row-sm mb-4 text-center">
										<div className="col-6">
											<p>Experience</p>
											<p className="num">17</p>
										</div>
										<div className="col-6">
											<p>Attended</p>
											<p className="num">100</p>
										</div>
									</div>
									<div className="row row-sm justify-content-center">
										<Link to="/booking" className="btn-pink">Đặt lịch ngay</Link>
									</div>
								</div>
							</div>
							{/* Stylist Widget */}

							{/* Stylist Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/stylist-profile">
										<img className="img-fluid" alt="User Image" src={Stylist4} />
									</Link>
								</div>
								<div className="pro-content">
									<h3 className="title text-center">
										<Link to="/profile">Hasin</Link> 
									</h3>
									<p className="speciality text-center">Waxing</p>
									<div className="rating text-center">
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar}  />
									</div>
									<div className="row row-sm mb-4 text-center">
										<div className="col-6">
											<p>Experience</p>
											<p className="num">20</p>
										</div>
										<div className="col-6">
											<p>Attended</p>
											<p className="num">150</p>
										</div>
									</div>
									<div className="row row-sm justify-content-center">
										<Link to="/booking" className="btn-pink">Đặt lịch ngay</Link>
									</div>
								</div>
							</div>
							{/* Stylist Widget */}

							{/* Stylist Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/stylist-profile">
										<img className="img-fluid" alt="User Image" src={Stylist5} />
									</Link>
								</div>
								<div className="pro-content">
									<h3 className="title text-center">
										<Link to="/stylist-profile">Kannal Ameena</Link> 
									</h3>
									<p className="speciality text-center">Hot Stone manicure</p>
									<div className="rating text-center">
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar}  />
									</div>
									<div className="row row-sm mb-4 text-center">
										<div className="col-6">
											<p>Experience</p>
											<p className="num">10</p>
										</div>
										<div className="col-6">
											<p>Attended</p>
											<p className="num">200</p>
										</div>
									</div>
									<div className="row row-sm justify-content-center">
										<Link to="/booking" className="btn-pink">Đặt lịch ngay</Link>
									</div>
								</div>
							</div>
							{/* Stylist Widget */}

							{/* Stylist Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/stylist-profile">
										<img className="img-fluid" alt="User Image" src={Stylist6} />
									</Link>
								</div>
								<div className="pro-content">
									<h3 className="title text-center">
										<Link to="/stylist-profile">Katharine</Link> 
									</h3>
									<p className="speciality text-center">Manicure</p>
									<div className="rating text-center">
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar} className="filled" />
										<FontAwesomeIcon icon={faStar}  />
									</div>
									<div className="row row-sm mb-4 text-center">
										<div className="col-6">
											<p>Experience</p>
											<p className="num">19</p>
										</div>
										<div className="col-6">
											<p>Attended</p>
											<p className="num">220</p>
										</div>
									</div>
									<div className="row row-sm justify-content-center">
										<Link to="/booking" className="btn-pink">Đặt lịch ngay</Link>
									</div>
								</div>
							</div>
							{/* Stylist Widget */}
                            
                        </Slider>

						<div className="row justify-content-center">
							<Link to="search.html" className="btn-pink">Tất cả nhà tạo mẫu</Link>
						</div>
                    </div>
                </section>
                
                {/* Top Stylist */}
            </div>
        )
    }
}
export { TopStylist };