import React from 'react';
import { Link } from 'react-router-dom'

// Import Slick Slider
import Slider from "react-slick";

// Import Images
import Service1 from '../../assets/img/service/service-01.jpg';
import Service2 from '../../assets/img/service/service-02.jpg';
import Service3 from '../../assets/img/service/service-03.jpg';
import Service4 from '../../assets/img/service/service-04.jpg';
import Service5 from '../../assets/img/service/service-05.jpg';
import Service6 from '../../assets/img/service/service-06.jpg';
import Service7 from '../../assets/img/service/service-07.jpg';
import Service8 from '../../assets/img/service/service-08.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid';

class BestService extends React.Component {

	state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    }

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
                {/* Top Courses */}
                <section className="section services">
                    <div className="container">
						<div className="row justify-content-center">	
							<div className="section-header text-center">						
								<h2>Những dịch vụ tốt nhất của chúng tôi</h2>
								<p className="sub-title">Nàng Beauty cung cấp các dịch vụ làm đẹp chuyên nghiệp với mức giá hợp lý. Bạn sẽ trở nên xinh đẹp và tiết kiệm túi tiền của bạn với mức giá tuyệt vời của chúng tôi.</p>
							</div>
						</div>

						<Slider {...settings} className="stylist-slider">
							{/* Servcie Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/service-details">
										<img className="img-fluid" alt="User Image" src={Service1} />
										<div className="wrap-sec">
											<div>
												<h3>Sơn gel</h3>
											</div>
										</div>
									</Link>
								</div>
							</div>
							{/* Servcie Widget */}

							{/* Servcie Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/service-details">
										<img className="img-fluid" alt="User Image" src={Service2} />
										<div className="wrap-sec">
											<div>
												<h3>Cắt da</h3>
											</div>
										</div>
									</Link>
								</div>
							</div>
							{/* Servcie Widget */}

							{/* Servcie Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/service-details">
										<img className="img-fluid" alt="User Image" src={Service3} />
										<div className="wrap-sec">
											<div>
												<h3>Massage</h3>
											</div>
										</div>
									</Link>
								</div>
							</div>
							{/* Servcie Widget */}

							{/* Servcie Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/service-details">
										<img className="img-fluid" alt="User Image" src={Service4} />
										<div className="wrap-sec">
											<div>
												<h3>Ẩn xà cừ</h3>
											</div>
										</div>
									</Link>
								</div>
							</div>
							{/* Servcie Widget */}

							{/* Servcie Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/service-details">
										<img className="img-fluid" alt="User Image" src={Service5} />
										<div className="wrap-sec">
											<div>
												<h3>Up móng giả</h3>
											</div>
										</div>
									</Link>
								</div>
							</div>
							{/* Servcie Widget */}

							{/* Servcie Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/service-details">
										<img className="img-fluid" alt="User Image" src={Service6} />
										<div className="wrap-sec">
											<div>
												<h3>Phá gel</h3>
											</div>
										</div>
									</Link>
								</div>
							</div>
							{/* Servcie Widget */}

							{/* Servcie Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/service-details">
										<img className="img-fluid" alt="User Image" src={Service7} />
										<div className="wrap-sec">
											<div>
												<h3>Vẽ mắt mèo</h3>
											</div>
										</div>
									</Link>
								</div>
							</div>
							{/* Servcie Widget */}

							{/* Servcie Widget */}
							<div className="profile-widget">
								<div className="doc-img">
									<Link to="/service-details">
										<img className="img-fluid" alt="User Image" src={Service8} />
										<div className="wrap-sec">
											<div>
												<h3>Phủ gel dày móng</h3>
											</div>
										</div>
									</Link>
								</div>
							</div>
							{/* Servcie Widget */}

						</Slider>

						<div className="row justify-content-center">
							<Link to="/service-details" className="btn-pink">tất cả dịch vụ</Link>
						</div>
					</div>
                </section>
                
                {/* Top Stylist */}
            </div>
        )
    }
}
export { BestService };