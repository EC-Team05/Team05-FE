import React from 'react';
import { Link } from 'react-router-dom'
import $ from "jquery";
import { DropzoneArea } from 'material-ui-dropzone';

// Import Sidebar
import { StylistSidebar } from './stylist-sidebar';

// Import Images
import UserImg from '../../assets/img/stylists/stylist-thumb-02.jpg';
import formImg from '../../assets/img/features/feature-01.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

class StylistProfileSettings extends React.Component {

	componentDidMount() {
		// Pricing Options Show
		$('#pricing_select input[name="rating_option"]').on('click', function() {
			if ($(this).val() == 'price_free') {
				$('#custom_price_cont').hide();
			}
			if ($(this).val() == 'custom_price') {
				$('#custom_price_cont').show();
			}
			else {
			}
		});
	
		// Education Add More
		
		$(".education-info").on('click','.trash', function () {
			$(this).closest('.education-cont').remove();
			return false;
		});
	
		$(".add-education").on('click', function () {
			
			var educationcontent = '<div class="row form-row education-cont">' +
				'<div class="col-12 col-md-10 col-lg-11">' +
					'<div class="row form-row">' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Degree</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>College/Institute</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Year of Completion</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><Link to="#" class="btn btn-danger trash">&times;</Link></div>' +
			'</div>';
			
			$(".education-info").append(educationcontent);
			return false;
		});
		
		// Experience Add More
		
		$(".experience-info").on('click','.trash', function () {
			$(this).closest('.experience-cont').remove();
			return false;
		});
	
		$(".add-experience").on('click', function () {
			
			var experiencecontent = '<div class="row form-row experience-cont">' +
				'<div class="col-12 col-md-10 col-lg-11">' +
					'<div class="row form-row">' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>University Name</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>From</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>To</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Designation</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><Link to="#" class="btn btn-danger trash">&times;</Link></div>' +
			'</div>';
			
			$(".experience-info").append(experiencecontent);
			return false;
		});
		
		// Awards Add More
		
		$(".awards-info").on('click','.trash', function () {
			$(this).closest('.awards-cont').remove();
			return false;
		});
	
		$(".add-award").on('click', function () {
	
			var regcontent = '<div class="row form-row awards-cont">' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Awards</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Year</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<Link to="#" class="btn btn-danger trash">&times;</Link>' +
				'</div>' +
			'</div>';
			
			$(".awards-info").append(regcontent);
			return false;
		});
		
		// Membership Add More
		
		$(".membership-info").on('click','.trash', function () {
			$(this).closest('.membership-cont').remove();
			return false;
		});
	
		$(".add-membership").on('click', function () {
	
			var membershipcontent = '<div class="row form-row membership-cont">' +
				'<div class="col-12 col-md-10 col-lg-5">' +
					'<div class="form-group">' +
						'<label>Memberships</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<Link to="#" class="btn btn-danger trash">&times;</Link>' +
				'</div>' +
			'</div>';
			
			$(".membership-info").append(membershipcontent);
			return false;
		});
		
		// Registration Add More
		
		$(".registrations-info").on('click','.trash', function () {
			$(this).closest('.reg-cont').remove();
			return false;
		});
	
		$(".add-reg").on('click', function () {
	
			var regcontent = '<div class="row form-row reg-cont">' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Registrations</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Year</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<Link to="#" class="btn btn-danger trash">&times;</Link>' +
				'</div>' +
			'</div>';
			
			$(".registrations-info").append(regcontent);
			return false;
		});


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
										<li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Cài đặt cấu hình</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Cài đặt cấu hình</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">

						<div className="row">
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<StylistSidebar />
							</div>

							<div className="col-md-7 col-lg-8 col-xl-9">

								{/* Basic Information */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Thông tin cơ bản</h4>
										<div className="row form-row">
											<div className="col-md-12">
												<div className="form-group">
													<div className="change-avatar">
														<div className="profile-img">
															<img src={UserImg} alt="User Image" />
														</div>
														<div className="upload-img">
															<div className="change-photo-btn">
																<span><FontAwesomeIcon icon="upload" /> Tải ảnh lên</span>
																<input type="file" className="upload" />
															</div>
															<small className="form-text text-muted">Được phép JPG, GIF hoặc PNG. Kích thước tối đa 2MB</small>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Tên đăng nhập <span className="text-danger">*</span></label>
													<input type="text" className="form-control" readOnly />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Email <span className="text-danger">*</span></label>
													<input type="email" className="form-control" readOnly />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Họ và tên lót <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Tên <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Số điện thoại</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Giới tính</label>
													<select className="form-control select">
														<option>Chọn lựa</option>
														<option>Nam</option>
														<option>Nữ</option>
														<option>Giới tính khác</option>
													</select>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group mb-0">
													<label>Ngày sinh</label>
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Basic Information */}

								{/* About Me */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Về tôi</h4>
										<div className="form-group mb-0">
											<label>Tiểu sử</label>
											<textarea className="form-control" rows="5"></textarea>
										</div>
									</div>
								</div>
								{/* About Me */}

								{/* Contact Details */}
								<div className="card contact-card">
									<div className="card-body">
										<h4 className="card-title">Chi tiết liên hệ</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>Số nhà và tên đường</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Tên phường</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Tên quận</label>
													<input type="text" className="form-control" />
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Thành phố</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Quốc gia</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Mã bưu điện</label>
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Contact Details */}

								{/* Mạng xã hội */}
								<div className="card contact-card">
									<div className="card-body">
										<h4 className="card-title">Mạng xã hội</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>Facebook URL</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Twitter URL</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Instagram URL</label>
													<input type="text" className="form-control" />
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Pinterest URL</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Linkedin URL</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Youtube URL</label>
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Mạng xã hội */}

								{/* Pricing */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Định giá</h4>
										
										<div className="form-group mb-0">
											<div id="pricing_select">
												<div className="custom-control custom-radio custom-control-inline">
													<input type="radio" id="price_free" name="rating_option" className="custom-control-input" defaultValue="price_free" defaultChecked />
													<label className="custom-control-label">Miễn phí</label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
													<input type="radio" id="price_custom" name="rating_option" value="custom_price" className="custom-control-input" />
													<label className="custom-control-label">Giá tùy chỉnh (mỗi giờ)</label>
												</div>
											</div>

										</div>
										
										<div className="row custom_price_cont" id="custom_price_cont" style={{display: 'none'}}>
											<div className="col-md-4">
												<input type="text" className="form-control" id="custom_rating_input" name="custom_rating_count" value="" placeholder="20" readOnly />
												<small className="form-text text-muted">Bạn có thể thêm giá tùy chỉnh</small>
											</div>
										</div>
										
									</div>
								</div>
								{/* Pricing */}

								{/* Awards */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Giải thưởng</h4>
										<div className="awards-info">
											<div className="row form-row awards-cont">
												<div className="col-12 col-md-5">
													<div className="form-group">
														<label>Giải thưởng</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
												<div className="col-12 col-md-5">
													<div className="form-group">
														<label>Năm</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
											</div>
										</div>
										<div className="add-more">
											<Link to="#" className="add-award"><FontAwesomeIcon icon={faPlusCircle} /> Thêm</Link>
										</div>
									</div>
								</div>
								{/* Awards */}
								
								{/* Memberships */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Thành viên</h4>
										<div className="membership-info">
											<div className="row form-row membership-cont">
												<div className="col-12 col-md-10 col-lg-5">
													<div className="form-group">
														<label>Thành viên</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
											</div>
										</div>
										<div className="add-more">
											<Link to="#" className="add-membership"><FontAwesomeIcon icon={faPlusCircle} /> Thêm</Link>
										</div>
									</div>
								</div>
								{/* Memberships */}
								
								{/* Registrations */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Đăng ký</h4>
										<div className="registrations-info">
											<div className="row form-row reg-cont">
												<div className="col-12 col-md-5">
													<div className="form-group">
														<label>Đăng ký</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
												<div className="col-12 col-md-5">
													<div className="form-group">
														<label>Năm</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
											</div>
										</div>
										<div className="add-more">
											<Link to="#" className="add-reg"><FontAwesomeIcon icon={faPlusCircle} /> Thêm</Link>
										</div>
									</div>
								</div>
								{/* Registrations */}
								
								<div className="submit-section submit-btn-bottom">
									<button type="submit" className="btn btn-primary submit-btn">Lưu thay đổi</button>
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
export { StylistProfileSettings };