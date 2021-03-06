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
										<li className="breadcrumb-item"><Link to="/">Trang ch???</Link></li>
										<li className="breadcrumb-item active" aria-current="page">C??i ?????t c???u h??nh</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">C??i ?????t c???u h??nh</h2>
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
										<h4 className="card-title">Th??ng tin c?? b???n</h4>
										<div className="row form-row">
											<div className="col-md-12">
												<div className="form-group">
													<div className="change-avatar">
														<div className="profile-img">
															<img src={UserImg} alt="User Image" />
														</div>
														<div className="upload-img">
															<div className="change-photo-btn">
																<span><FontAwesomeIcon icon="upload" /> T???i ???nh l??n</span>
																<input type="file" className="upload" />
															</div>
															<small className="form-text text-muted">???????c ph??p JPG, GIF ho???c PNG. K??ch th?????c t???i ??a 2MB</small>
														</div>
													</div>
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
													<label>S??? ??i???n tho???i <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>H??? v?? t??n l??t <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>T??n <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group mb-0">
													<label>Ng??y sinh</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Gi???i t??nh</label>
													<select className="form-control select">
														<option>Ch???n l???a</option>
														<option>Nam</option>
														<option>N???</option>
														<option>Gi???i t??nh kh??c</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Basic Information */}

								{/* About Me */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">V??? t??i</h4>
										<div className="form-group mb-0">
											<label>Ti???u s??? <span className="text-danger">*</span></label>
											<textarea className="form-control" rows="5"></textarea>
										</div>
									</div>
								</div>
								{/* About Me */}

								{/* Contact Details */}
								<div className="card contact-card">
									<div className="card-body">
										<h4 className="card-title">Chi ti???t li??n h???</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>S??? nh?? v?? t??n ???????ng <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>T??n ph?????ng <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>T??n qu???n <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Th??nh ph??? <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Qu???c gia <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Contact Details */}

								{/* M???ng x?? h???i */}
								<div className="card contact-card">
									<div className="card-body">
										<h4 className="card-title">M???ng x?? h???i</h4>
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
										</div>
									</div>
								</div>
								{/* M???ng x?? h???i */}

								<div className="submit-section submit-btn-bottom">
									<button type="submit" className="btn btn-primary submit-btn">L??u thay ?????i</button>
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