import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
// Import Image
import LoginImg from '../../assets/img/register-banner.png';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';



function Register(props) {

	const [userName, setUserName] = useState()
	const [phone, setPhone] = useState()
	const [address, setAddress] = useState()
	const [password, setPassword] = useState()
	const [email, setEmail] = useState()
	const [statusCode, setStatusCode] = useState()
	const history = useHistory();

	const registerUser = async (credentials) => {
		console.log("username", credentials)
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		return fetch('http://localhost:3000/register', {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify(credentials)
		}).then(res => res.status)
			.catch(error => console.log(error))
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		const status = await registerUser(
			{
				name: userName,
				phone: phone,
				email: email,
				password: password,
				address: address
			}
		)
		setStatusCode(status)
	}
	useEffect(() => {
		console.log("STATUSCODE", statusCode)
		if (statusCode === 200) {
			history.push("/login")
			alert("Đăng ký thành công!")
		} else if (statusCode === 400) {
			alert("Đăng ký không thành công ! Kiểm tra lại thông tin đăng ký không phù hợp.")
		}
	}, [statusCode]
	)

	return (
		<div>
			{/* Page Content */}
			<div className="account-page">
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-8 offset-md-2">

								{/* Account Content */}
								<div className="account-content">
									<div className="row align-items-center justify-content-center">
										<div className="col-md-7 col-lg-6 login-left">
											<img src={LoginImg} className="img-fluid" alt="Login Banner" />
										</div>
										<div className="col-md-12 col-lg-6 login-right">
											<div className="login-header">
												<h3>Khách Hàng Đăng Ký <Link to="/stylist-register">Là nhà tạo mẫu?</Link></h3>
											</div>

											{/* Register Form */}
											<form action="/stylist-dashboard" onSubmit={handleSubmit}>
												<div className="form-group form-focus">
													<input type="text" className="form-control floating" onChange={(e) => { setUserName(e.target.value) }} />
													<label className="focus-label">Tên</label>
												</div>
												<div className="form-group form-focus">
													<input type="text" className="form-control floating" onChange={(e) => { setPhone(e.target.value) }} />
													<label className="focus-label">Số điện thoại</label>
												</div>
												<div className="form-group form-focus">
													<input type="text" className="form-control floating" onChange={(e) => { setAddress(e.target.value) }} />
													<label className="focus-label">Địa chỉ</label>
												</div>
												<div className="form-group form-focus">
													<input type="text" className="form-control floating" onChange={(e) => { setEmail(e.target.value) }} />
													<label className="focus-label">Email</label>
												</div>
												<div className="form-group form-focus">
													<input type="password" className="form-control floating" onChange={(e) => { setPassword(e.target.value) }} />
													<label className="focus-label">Mật khẩu</label>
												</div>
												<div className="terms-and-policy pt-2 pb-2">
													<input type="checkbox" required name="checkbox" defaultValue="check" id="agree" /><span className="agree">Tôi đồng ý với các <span className="terms"><Link to="/terms-condition" target="_blank">Điều khoản sử dụng</Link> và <Link to="/privacy-policy" target="_blank">Chính sách bảo mật</Link> này.</span></span>
												</div>
												<div className="text-right">
													<Link to="/login" className="forgot-link">Bạn đã có sẵn tài khoản?</Link>
												</div>
												<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Đăng ký</button>
												<div className="login-or">
													<span className="or-line"></span>
													<span className="span-or">hoặc</span>
												</div>
												<div className="row form-row social-login">
													<div className="col-6">
														<Link to="#" className="btn btn-facebook btn-block"><FontAwesomeIcon icon={faFacebookF} className="mr-1" /> Đăng nhập</Link>
													</div>
													<div className="col-6">
														<Link to="#" className="btn btn-google btn-block"><FontAwesomeIcon icon={faGoogle} className="mr-1" /> Đăng nhập</Link>
													</div>
												</div>
											</form>
											{/* Register Form */}

										</div>
									</div>
								</div>
								{/* Account Content */}

							</div>
						</div>
					</div>

				</div>
			</div>
			{/* Page Content */}
		</div>
	)
}
export { Register };