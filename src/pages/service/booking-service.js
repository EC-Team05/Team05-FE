import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom'
// Import Icons
import { faRProject } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';


class BookingService extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			services: [],
			serviceOrder:[],
			redirect: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		fetch("http://localhost:3000/booking-service")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						services: result.service
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)

	}
	handleChange(event) {
		let isChecked = event.target.checked;
		const newServiceOrder=this.state.serviceOrder;
		if(isChecked){
			newServiceOrder.push(event.target.value);
		}
		else{
			let value =event.target.value;
			let index =newServiceOrder.indexOf(value);
			if (index => 0)
			newServiceOrder.splice(index,1)
		}
		this.setState({
			...this.state,
			serviceOrder: newServiceOrder
		})
		console.log( this.state.serviceOrder)
	}
	handleSubmit(event) {
		event.preventDefault();
		//console.log(this.state)
		axios.post('http://localhost:3000/booking-service',this.state.serviceOrder)
			.then(res => {
				console.log(res.data)
				this.setState({redirect:true})
				localStorage.setItem("id_app",res.data.id_apppoint)
			})
			.catch(error => {
				console.log(error)
			})
	}
	render() {
		const { redirect } = this.state;
		console.log(redirect)
     	if (redirect) {
       		return <Redirect to='/booking'/>;
     	}
		let {serviceOrder,services}=this.state
		console.log(serviceOrder)
		let  sum =0 ;
		let serviceObj;
		return (
			<div>
				{/* Breadcrumb */}
				<form action="/booking-service" method="POST" onSubmit={this.handleSubmit}>
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
														<input type="checkbox" name="gender_type"/>
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
														<input type="checkbox" name="gender_type"/>
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
										<div className="card category-widget">
											<div className="card-header">
												<h4 className="card-title">Dịch vụ đã chọn</h4>
											</div>
											<div className="card-body">
												<ul className="categories">
												{
													serviceOrder.map((idsv) => {
														serviceObj = services.find((service)=>(service.idservice==idsv));
														sum+=Number(serviceObj.price);
														return<li>{serviceObj.name}<span>{serviceObj.price}</span>
													</li>
													})
												}
												</ul>
											</div>
											<div className="card-header">
												<h4 className="card-title mb-0">Tổng: <span>{String(sum)+".000"}</span></h4>
											</div>
											<div className="btn-searchsubmit-section proceed-btn text-right btn btn-block">
												<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Xác nhận</button>
											</div>
										</div>
								</div>
								<div className="col-md-12 col-lg-8 col-xl-9">
									{/* Choose service */}
									<ul>
											{
												this.state.services.map(service =>
													<div className="row">
														<div className="card col-10">
															<div className="card-body">
																<div className="">
																	<h4 className="doc-name">{service.name}</h4>
																	<div class="row">
																		<div class="col-10 doc-speciality">{service.duration}</div>
																		<div class="col-2 doc-speciality">{service.price}</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="card col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(256, 256, 256, 0)', border: 'none' }}>
															<label className="custom_check">
																<input type="checkbox" name="gender_type" value = {service.idservice} onChange={(event)=>this.handleChange(event)} />
																<span className="checkmark"></span>
															</label>
														</div>
													</div>)
											}
									</ul>
									{/* Choose service */}
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
export { BookingService };