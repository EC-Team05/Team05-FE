import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import CustomerImg from '../../assets/img/customers/customer1.jpg';
import VoiceImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAltV, faCog, faMicrophoneAlt, faPhone, faUserPlus, faVideo } from '@fortawesome/fontawesome-free-solid';

class VoiceCall extends React.Component {

	constructor() {
		super();
		this.state = {
			showDiv: false
		}
	}
	showMenu = () => {
		this.setState({ showDiv: !this.state.showDiv })
	}
	
    render() {
        return (
			<div>
				{/* Page Content */}
				<div className="content">
					<div className="container-fluid">
						{/* Call Wrapper */}
						<div className="call-wrapper">
							<div className="call-main-row">
								<div className="call-main-wrapper">
									<div className="call-view">
										<div className="call-window">
										
											{/* Call Header */}
											<div className="fixed-header">
												<div className="navbar">
													<div className="user-details">
														<div className="float-left user-img">
															<Link to="/customer-profile" className="avatar avatar-sm mr-2" title="Charlene Reed">
																<img src={CustomerImg} alt="User Image" className="rounded-circle" />
																<span className="status online"></span>
															</Link>
														</div>
														<div className="user-info float-left">
															<Link to="/customer-profile"><span>Charlene Reed</span></Link>
															<span className="last-seen">Online</span>
														</div>
													</div>

													<ul className="nav float-right custom-menu">
														<li className="nav-item dropdown dropdown-action">
															<Link to="#" className="nav-link" onClick={()=>this.showMenu()}><FontAwesomeIcon icon={faCog} /></Link>
															
															{this.state.showDiv && 
																<div className="dropdown-menu-open dropdown-menu-right">
																	<Link to="#" className="dropdown-item">Settings</Link>
																</div>
															}
															
														</li>
													</ul>

												</div>
											</div>
											{/* Call Header */}
											
											{/* Call Contents */}
											<div className="call-contents">
												<div className="call-content-wrap">
													<div className="voice-call-avatar">
														<img src={VoiceImg} alt="User Image" className="call-avatar" />
														<span className="username">Urban Mauldin</span>
														<span className="call-timing-count">00:59</span>
													</div>
													<div className="call-users">
														<ul>
															<li>
																<Link to="#">
																	<img src={CustomerImg} className="img-fluid" alt="User Image" />
																	<span className="call-mute"><i className="fa fa-microphone-slash"></i></span>
																</Link>
															</li>
														</ul>
													</div>
												</div>
											</div>
											{/* Call Contents */}
											
											{/* Call Footer */}
											<div className="call-footer">
												<div className="call-icons">
													<ul className="call-items">
														<li className="call-item">
															<Link to="#" title="Enable Video" data-placement="top" data-toggle="tooltip">
																<FontAwesomeIcon icon={faVideo} className="camera" />
															</Link>
														</li>
														<li className="call-item">
															<Link to="#" title="Mute Audio" data-placement="top" data-toggle="tooltip">
																<FontAwesomeIcon icon={faMicrophoneAlt} className="microphone" />
															</Link>
														</li>
														<li className="call-item">
															<Link to="#" title="Add User" data-placement="top" data-toggle="tooltip">
																<FontAwesomeIcon icon={faUserPlus} className="microphone" />
															</Link>
														</li>
													</ul>
													<div className="end-call">
														<Link to="#">
															<FontAwesomeIcon icon={faPhone} />
														</Link>
													</div>
												</div>
											</div>
											{/* Call Footer */}
											
										</div>
									</div>
									
								</div>
							</div>
						</div>
						{/* Call Wrapper */}
					</div>

				</div>		
				{/* Page Content */}
			</div>
        )
    }
}
export { VoiceCall };