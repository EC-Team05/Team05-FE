import React from 'react';
import {Dropdown} from 'react-bootstrap';
import $ from "jquery";
import { Link } from 'react-router-dom';
// import { useContext } from 'react';

// Import Images
import LogoWhite from '../../assets/img/logo-white.png';
import Logo from '../../assets/img/logo.png';
import UserIcon from '../../assets/img/stylists/stylist-thumb-02.jpg';
import { UserRolesContext } from '../../authenticationContext';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faShoppingCart, faTimes, faUser } from '@fortawesome/fontawesome-free-solid';


class Header extends React.Component {

	static contextType = UserRolesContext;

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
	
    handleLogout(){
		localStorage.clear();
		localStorage.removeItem("token");
	}

    render() {
		const {role, isAuthenticated, updateIsAuthenticated} = this.context
		if (!isAuthenticated){
			let token = localStorage.getItem("AccessToken");
			if (token){
				updateIsAuthenticated(true)
			} else {
				updateIsAuthenticated(false)
			}
		}
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
							{role === "admin" && (
								<>
							<li className={pathname === ('/stylist-dashboard') ? 'active' : ''}>
								<Link to = "/stylist-dashboard">Nhân viên nail</Link>
							</li>
							<li className={pathname === ('/staff-dashboard') ? 'active' : ''}>
								<Link to = "/staff-dashboard">Admin</Link>
							</li>
							</>
							)
							}
							<li className={`has-submenu ${pathname === ('/search') ? 'active' : pathname === ('/booking') ? 'active' : pathname === ('/customer-dashboard') ? 'active' : pathname === ('/login') ? 'active' : pathname === ('/register') ? 'active' :''}`}>
								<Link to="">Khách hàng <FontAwesomeIcon icon={faChevronDown} /></Link>
								<ul className="submenu">
									<li className={`${pathname === ('/customer-dashboard') ? 'active' : ''}`}>
										<Link to = "/customer-dashboard">Dashboard</Link>
									</li>
									<li className={`${pathname === ('/register') ? 'active' : ''}`}>
										<Link to = "/register">Đăng ký</Link>
									</li>
									<li className={pathname === ('/checkout') ? 'active' : ''}>
									<Link to = "/checkout">Thanh toán</Link>
									</li>
								</ul>
							</li>
							<li className={pathname === ('/blog-list') ? 'active' : ''}>
								<Link to = "/blog-list">Blog</Link>
							</li>
							<li className={pathname === ('/booking-service') ? 'active' : ''}>
								<Link to = "/booking-service">Dịch vụ</Link>
							</li>
							<li className={pathname === ('/purchase-product') ? 'active' : ''}>
								<Link to = "/purchase-product">Sản phẩm</Link>
							</li>
							
							{(!isAuthenticated ? 
							(
								<li className={pathname === ('/login') ? 'active' : ''}>
									<Link to = "/login">Đăng nhập</Link>
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
											<Dropdown.Item href="/login" onClick={this.handleLogout}>
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
									<Dropdown.Item href="">English</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
						<li>
							<Link to="/checkout" className="add-cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
						</li>
					</ul>
				</nav>
			</header>
        )
    }
}

export { Header };