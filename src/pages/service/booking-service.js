import React from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid';

class BookingService extends React.Component {
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
										<li className="breadcrumb-item active" aria-current="page">Dịch vụ</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Dịch vụ</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}
				{/* Search */}
				<div className="card search-widget">
					<div className="card-body">
						<form className="search-form">
							<div className="input-group">
								<input type="text" placeholder="Tìm kiếm..." className="form-control" />
								<div className="input-group-append">
									<button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSearch} /></button>
								</div>
							</div>
						</form>
					</div>
				</div>
				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">

								{/* Search Filter */}
								<div className="card search-filter">
									<div className="card-body">
										<div className="filter-widget">
											<h4>Loại dịch vụ</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" defaultChecked />
													<span className="checkmark"></span> Dịch vụ chăm sóc móng
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" />
													<span className="checkmark"></span> Dịch vụ chăm sóc
												</label>
											</div>
											<h4>Sắp xếp</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" defaultChecked />
													<span className="checkmark"></span> Giá từ thấp đến cao
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" />
													<span className="checkmark"></span> Giá từ cao đến thấp
												</label>
											</div>
										</div>

										<div className="btn-search">
											<button type="button" className="btn btn-block">Tìm kiếm</button>
										</div>
									</div>
								</div>
								{/* Search Filter */}
								{/* Choose service */}
								<div className="card search-filter">
									<div className="card-body">
										<div className="filter-widget">
											<div className="card-header">
												<h4 className="card-title mb-0">Dịch vụ đã chọn</h4>
											</div>
											<div>
												<label>Sơn gel</label>
											</div>
											<div>
												<label>Vẽ gel</label>
											</div>
											<div className="card-header">
												<h4 className="card-title mb-0">Tổng</h4>
											</div>
										</div>
									</div>
								</div>
								{/* Choose service */}

							</div>

							<div className="col-md-12 col-lg-8 col-xl-9">

							</div>
						</div>
					</div>

				</div>
				{/* Page Content */}


			</div>
		)
	}
}
export { BookingService };