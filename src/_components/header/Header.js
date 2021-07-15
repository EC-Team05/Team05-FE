import React from 'react';
import {Dropdown} from 'react-bootstrap';
import $ from "jquery";
import { Link } from 'react-router-dom';

// Import Images
import LogoWhite from '../../assets/img/logo-white.png';
import Logo from '../../assets/img/logo.png';
import UserIcon from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faShoppingCart, faTimes, faUser } from '@fortawesome/fontawesome-free-solid';


class Header extends React.Component {
	componentDidMount() {
		// Mobile menu sidebar overlay
	
		$('body').append('<div className="sidebar-overlay"></div>');
		$(document).on('click', '#mobile_btn', function() {
			$('main-wrapper').toggleClass('slide-nav');
			$('.sidebar-overlay').toggleClass('opened');
			$('html').addClass('menu-opened');
			return false;
		});
		
		$(document).on('click', '.sidebar-overlay', function() {
			$('html').removeClass('menu-opened');
			$(this).removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});
		
		$(document).on('click', '#menu_close', function() {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});

		//scroll header
	
		$(window).scroll(function() {
			var sticky = $('.min-header'),
				scroll = $(window).scrollTop();
			if (scroll >= 100) {
				sticky.addClass('nav-sticky');
				$('body').addClass('map-up');
			}
			else {
				sticky.removeClass('nav-sticky');
				$('body').removeClass('map-up');
			} 
	
		});
	}
    
    render() {
		const exclusionArray = []
		if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
			return '';
		}
		
		const pathname = this.props.location.pathname;

		console.log(pathname, "Pathnames")
        return (
			<header className={`header ${(pathname === ('/') ? 'min-header' : '')}`}>
				<nav className="navbar navbar-expand-lg header-nav">
					<div className="navbar-header">
						<Link to="" id="mobile_btn">
							<span className="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</Link>
						<Link to="/" className="navbar-brand logo">
							<img src={pathname === ('/') ? LogoWhite : Logo } className="img-fluid" alt="Logo" />
						</Link>
					</div>
					<div className="main-menu-wrapper">
						<div className="menu-header">
							<Link to="/" className="menu-logo">
								<img src={Logo} className="img-fluid" alt="Logo" />
							</Link>
							<Link to="" id="menu_close" className="menu-close">
								<FontAwesomeIcon icon={faTimes} />
							</Link>
						</div>
						<ul className="main-nav">
							<li className={pathname === ('/') ? 'active' : ''}>
								<Link to = "/">Trang chủ</Link>
							</li>

							<li className={`has-submenu ${pathname === ('/stylist-dashboard') ? 'active' : pathname === ('/appointments') ? 'active' : pathname === ('/schedule-timings') ? 'active' : pathname === ('/my-customers') ? 'active' : pathname === ('/customer-profile') ? 'active' : pathname === ('/chat-stylist') ? 'active' : pathname === ('/stylist-profile-settings') ? 'active' : pathname === ('/reviews') ? 'active' : pathname === ('/stylist-register') ? 'active' : ''}`}>
								<Link to="">Nhà tạo mẫu<FontAwesomeIcon icon={faChevronDown} /></Link>
								<ul className="submenu">
									<li className={`${pathname === ('/stylist-dashboard') ? 'active' : ''}`}>
										<Link to = "/stylist-dashboard">Dashboard</Link>
									</li>	
									<li className={`${pathname === ('/stylist-register') ? 'active' : ''}`}>
										<Link to = "/login">Đăng nhập</Link>
									</li>							
									<li className={`${pathname === ('/stylist-register') ? 'active' : ''}`}>
										<Link to = "/stylist-register">Đăng kí nhà tạo mẫu</Link>
									</li>
								</ul>
							</li>	
							<li className={`has-submenu ${pathname === ('/map-grid') ? 'active' : pathname === ('/map-list') ? 'active' : pathname === ('/search') ? 'active' : pathname === ('/stylist-profile') ? 'active' : pathname === ('/booking') ? 'active' : pathname === ('/checkout') ? 'active' : pathname === ('/booking-success') ? 'active' : pathname === ('/customer-dashboard') ? 'active' : pathname === ('/favourites') ? 'active' : pathname === ('/chat') ? 'active' : pathname === ('/profile-settings') ? 'active' : pathname === ('/change-password') ? 'active' : ''}`}>
								<Link to="">Khách hàng <FontAwesomeIcon icon={faChevronDown} /></Link>
								<ul className="submenu">
									<li className={`${pathname === ('/search') ? 'active' : ''}`}>
										<Link to = "/search">Tìm kiếm nhà tạo mẫu</Link>
									</li>
									<li className={`${pathname === ('/booking') ? 'active' : ''}`}>
										<Link to = "/booking">Đặt lịch</Link>
									</li>
									<li className={`${pathname === ('/customer-dashboard') ? 'active' : ''}`}>
										<Link to = "/customer-dashboard">Dashboard</Link>
									</li>
									<li className={`${pathname === ('/login') ? 'active' : ''}`}>
										<Link to = "/login">Đăng nhập</Link>
									</li>
									<li className={`${pathname === ('/login') ? 'active' : ''}`}>
										<Link to = "/register">Đăng ký</Link>
									</li>
								</ul>
							</li>
							<li className={`has-submenu ${pathname === ('/blog-list') ? 'active' : pathname === ('/blog-grid') ? 'active' : pathname === ('/blog-details') ? 'active' : ''}`}>
								<Link to="">Blog <FontAwesomeIcon icon={faChevronDown} /></Link>
								<ul className="submenu">
									<li className={`${pathname === ('/blog-list') ? 'active' : ''}`}>
										<Link to = "/blog-list">Blog List</Link>
									</li>
									<li className={`${pathname === ('/blog-grid') ? 'active' : ''}`}>
										<Link to = "/blog-grid">Blog Grid</Link>
									</li>
								</ul>
							</li>
							
							{(pathname === ('/') || pathname === ('login') ? 
							(
								<li className="dropdown log-menu">
									<span className="dropdown-toggle log-select" id="log-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"><FontAwesomeIcon icon={faUser} /> Đăng nhập </span>
									<div className="dropdown-menu dropdown-menu-right" aria-labelledby="language-dropdown">
										<Link to="/login" className="dropdown-item">Đăng nhập</Link>
									</div>
								</li>
							) : 
							(
								<li className="nav-item dropdown has-arrow logged-item user-listdrop">
									<Dropdown>
										<Dropdown.Toggle variant="light" id="dropdown-basic">
											<span className="user-img">
												<img className="rounded-circle" src={UserIcon} width="31" alt="Ryan Taylor" />
											</span>
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="">
												<div className="user-header">
													<div className="avatar avatar-sm">
														<img src={UserIcon} alt="User Image" className="avatar-img rounded-circle" />
													</div>
													<div className="user-text">
														<h6>Darren Elder</h6>
														<p className="text-muted mb-0">Nhà tạo mẫu</p>
													</div>
												</div>
											</Dropdown.Item>
											<Dropdown.Item href="/stylist-dashboard">
												Dashboard
											</Dropdown.Item>
											<Dropdown.Item href="/stylist-profile-settings">
												Cài đặt cấu hình
											</Dropdown.Item>
											<Dropdown.Item href="/">
												Đăng xuất
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</li>								
							))}
						</ul>		 
					</div>		 
					<ul className="nav header-navbar-rht menu-select">
						<li className="dropdown language-select">
							<Dropdown>
								<Dropdown.Toggle variant="light" id="dropdown-basic2">
									<span>VIỆT NAM</span>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="">Spanish</Dropdown.Item>
									<Dropdown.Item href="">Portuguese</Dropdown.Item>
									<Dropdown.Item href="">Russian</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</ul>
				</nav>
			</header>
        )
    }
}

export { Header };