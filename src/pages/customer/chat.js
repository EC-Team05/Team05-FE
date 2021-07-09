import React from 'react';
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import $ from 'jquery';

// Import Images
import UserImg from '../../assets/img/stylists/stylist-thumb-01.jpg';
import UserImg1 from '../../assets/img/stylists/stylist-thumb-02.jpg';
import UserImg2 from '../../assets/img/stylists/stylist-thumb-03.jpg';
import UserImg3 from '../../assets/img/stylists/stylist-thumb-04.jpg';
import UserImg4 from '../../assets/img/stylists/stylist-thumb-05.jpg';
import UserImg5 from '../../assets/img/stylists/stylist-thumb-06.jpg';
import UserImg6 from '../../assets/img/stylists/stylist-thumb-07.jpg';
import UserImg7 from '../../assets/img/stylists/stylist-thumb-08.jpg';
import UserImg8 from '../../assets/img/stylists/stylist-thumb-09.jpg';
import UserImg9 from '../../assets/img/stylists/stylist-thumb-10.jpg';
import ChatRightImg from '../../assets/img/stylists/stylist-02.jpg';
import PlaceholderImg from '../../assets/img/img-02.jpg';
import PlaceholderImg1 from '../../assets/img/img-03.jpg';
import PlaceholderImg2 from '../../assets/img/img-04.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faEllipsisV, faPaperclip, faPhone, faPhoneSlash, faPlusCircle, faSearch, faVideo } from '@fortawesome/fontawesome-free-solid';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

class Chat extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			showModalVideo: false
		}
	}

	openModal = () => {
		this.setState({
			showModal: !this.state.showModal,
			showModalVideo: !this.state.showModalVideo
		})
	}

	componentDidMount() {
		let chatAppTarget = $('.chat-window');
		(function() {
			if ($(window).width() > 991)
				chatAppTarget.removeClass('chat-slide');
			
			$(document).on("click",".chat-window .chat-users-list a.media",function () {
				if ($(window).width() <= 991) {
					chatAppTarget.addClass('chat-slide');
				}
				return false;
			});
			$(document).on("click","#back_user_list",function () {
				if ($(window).width() <= 991) {
					chatAppTarget.removeClass('chat-slide');
				}	
				return false;
			});
		})();
	}


	
    render() {
        return (
			<div>
				
				{/* Page Content */}
				<div className="content p-0">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="chat-window">

									{/* Chat Left */}
									<div className="chat-cont-left">
										<div className="chat-header">
											<span>Chats</span>
											<Link to="#" className="chat-compose">
												<FontAwesomeIcon icon={faPlusCircle}/>
											</Link>
										</div>
										<form className="chat-search">
											<div className="input-group">
												<div className="input-group-prepend">
													<FontAwesomeIcon icon={faSearch} />
												</div>
												<input type="text" className="form-control" placeholder="Search" />
											</div>
										</form>


										<div className="chat-users-list">
											<div className="chat-scroll">
												<Link to="#" className="media">
													<div className="media-img-wrap">
														<div className="avatar avatar-away">
															<img src={UserImg} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Sorell Sexton</div>
															<div className="user-last-chat">Hey, How are you?</div>
														</div>
														<div>
															<div className="last-chat-time block">2 min</div>
															<div className="badge badge-success badge-pill">15</div>
														</div>
													</div>
												</Link>
												<Link to="#" className="media read-chat active">
													<div className="media-img-wrap">
														<div className="avatar avatar-online">
															<img src={UserImg1} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Urban Mauldin</div>
															<div className="user-last-chat">I'll call you later </div>
														</div>
														<div>
															<div className="last-chat-time block">8:01 PM</div>
														</div>
													</div>
												</Link>
												<Link to="#" className="media">
													<div className="media-img-wrap">
														<div className="avatar avatar-away">
															<img src={UserImg2} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Cela Spence</div>
															<div className="user-last-chat">Give me a full explanation about our project</div>
														</div>
														<div>
															<div className="last-chat-time block">7:30 PM</div>
															<div className="badge badge-success badge-pill">3</div>
														</div>
													</div>
												</Link>
												<Link to="#" className="media read-chat">
													<div className="media-img-wrap">
														<div className="avatar avatar-online">
															<img src={UserImg3} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Litia Green</div>
															<div className="user-last-chat">That's very good UI design</div>
														</div>
														<div>
															<div className="last-chat-time block">6:59 PM</div>
														</div>
													</div>
												</Link>
												<Link to="#" className="media read-chat">
													<div className="media-img-wrap">
														<div className="avatar avatar-offline">
															<img src={UserImg4} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Aditi Menard</div>
															<div className="user-last-chat">Yesterday i completed the task</div>
														</div>
														<div>
															<div className="last-chat-time block">11:21 AM</div>
														</div>
													</div>
												</Link>
												<Link to="#" className="media read-chat">
													<div className="media-img-wrap">
														<div className="avatar avatar-online">
															<img src={UserImg5} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Vix Schneider</div>
															<div className="user-last-chat">What is the major functionality?</div>
														</div>
														<div>
															<div className="last-chat-time block">10:05 AM</div>
														</div>
													</div>
												</Link>
												<Link to="#" className="media read-chat">
													<div className="media-img-wrap">
														<div className="avatar avatar-away">
															<img src={UserImg6} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Jonalyn Graff</div>
															<div className="user-last-chat">This has allowed me to showcase not only my technical skills</div>
														</div>
														<div>
															<div className="last-chat-time block">Yesterday</div>
														</div>
													</div>
												</Link>
												<Link to="#" className="media read-chat">
													<div className="media-img-wrap">
														<div className="avatar avatar-offline">
															<img src={UserImg7} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Yara Sauls</div>
															<div className="user-last-chat">Let's talk briefly in the evening. </div>
														</div>
														<div>
															<div className="last-chat-time block">Sunday</div>
														</div>
													</div>
												</Link>
												<Link to="#" className="media read-chat">
													<div className="media-img-wrap">
														<div className="avatar avatar-online">
															<img src={UserImg8} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Jaydee Mack </div>
															<div className="user-last-chat">Do you have any collections? If so, what of?</div>
														</div>
														<div>
															<div className="last-chat-time block">Saturday</div>
														</div>
													</div>
												</Link>
												<Link to="#" className="media read-chat">
													<div className="media-img-wrap">
														<div className="avatar avatar-away">
															<img src={UserImg9} alt="User Image" className="avatar-img rounded-circle" />
														</div>
													</div>
													<div className="media-body">
														<div>
															<div className="user-name">Lorissa Peters</div>
															<div className="user-last-chat">Connect the two modules with in 1 day.</div>
														</div>
														<div>
															<div className="last-chat-time block">Friday</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
									{/* Chat Left */}

									{/* Chat Right */}
									<div className="chat-cont-right">
										<div className="chat-header">
											<a id="back_user_list" href="" className="back-user-list">
												<FontAwesomeIcon icon={faChevronCircleLeft} />
											</a>
											<div className="media">
												<div className="media-img-wrap">
													<div className="avatar avatar-online">
														<img src={ChatRightImg} alt="User Image" className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div className="user-name">Urban Mauldin</div>
													<div className="user-status">online</div>
												</div>
											</div>
											<div className="chat-options">

												<a data-toggle="modal" data-target="#voice_call">
													<FontAwesomeIcon icon={faPhone} onClick={()=>this.openModal()} />
												</a>

												{/* Voice Call Modal */}
												<Modal show={this.state.showModal} className="call-modal">
													<Modal.Body>
														{/* Outgoing Call */}
														<div className="call-box incoming-box">
															<div className="call-wrapper">
																<div className="call-inner">
																	<div className="call-user">
																		<img alt="User Image" src={ChatRightImg} className="call-avatar" />
																		<h4>Darren Elder</h4>
																		<span>Connecting...</span>
																	</div>							
																	<div className="call-items">
																		<a className="btn call-item call-end" onClick={()=>this.openModal()}>
																			<FontAwesomeIcon icon ={faPhoneSlash} />
																		</a>
																		<Link to="/voice-call" className="btn call-item call-start">
																			<FontAwesomeIcon icon ={faPhone} />
																		</Link>
																	</div>
																</div>
															</div>
														</div>
														{/* Outgoing Call */}
													</Modal.Body>											
												</Modal>
												{/* Voice Call Modal */}

												<a>
													<FontAwesomeIcon icon={faVideo} onClick={()=>this.openModal()} />
												</a>

												{/* Video Call Modal */}
												<Modal show={this.state.showModalVideo} className="call-modal">
													<Modal.Body>
														{/* Outgoing Call */}
														<div className="call-box incoming-box">
															<div className="call-wrapper">
																<div className="call-inner">
																	<div className="call-user">
																		<img alt="User Image" src={ChatRightImg} className="call-avatar" />
																		<h4>Darren Elder</h4>
																		<span>Connecting...</span>
																	</div>							
																	<div className="call-items">
																		<Link to="#" className="btn call-item call-end" onClick={()=>this.openModal()}>
																			<FontAwesomeIcon icon ={faPhoneSlash} />
																		</Link>
																		<Link to="/voice-call" className="btn call-item call-start">
																			<FontAwesomeIcon icon ={faVideo} />
																		</Link>
																	</div>
																</div>
															</div>
														</div>
														{/* Outgoing Call */}
													</Modal.Body>											
												</Modal>
												{/* Video Call Modal */}

												<Link to="#">
													<FontAwesomeIcon icon={faEllipsisV} />
												</Link>
											</div>
										</div>
										<div className="chat-body">
											<div className="chat-scroll">
												<ul className="list-unstyled">
													<li className="media sent">
														<div className="media-body">
															<div className="msg-box">
																<div>
																	<p>Hello. What can I do for you?</p>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>8:30 AM</span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</li>
													<li className="media received">
														<div className="avatar">
															<img src={ChatRightImg} alt="User Image" className="avatar-img rounded-circle" />
														</div>
														<div className="media-body">
															<div className="msg-box">
																<div>
																	<p>I'm just looking around.</p>
																	<p>Will you tell me something about yourself?</p>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>8:35 AM</span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
															<div className="msg-box">
																<div>
																	<p>Are you there? That time!</p>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>8:40 AM</span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
															<div className="msg-box">
																<div>
																	<div className="chat-msg-attachments">
																		<div className="chat-attachment">
																			<img src={PlaceholderImg} alt="Attachment" />
																			<div className="chat-attach-caption">placeholder.jpg</div>
																			<Link to="#" className="chat-attach-download">
																				<i className="fas fa-download"></i>
																			</Link>
																		</div>
																		<div className="chat-attachment">
																			<img src={PlaceholderImg1} alt="Attachment" />
																			<div className="chat-attach-caption">placeholder.jpg</div>
																			<Link to="#" className="chat-attach-download">
																				<i className="fas fa-download"></i>
																			</Link>
																		</div>
																	</div>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>8:41 AM</span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</li>
													<li className="media sent">
														<div className="media-body">
															<div className="msg-box">
																<div>
																	<p>Where?</p>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>8:42 AM</span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
															<div className="msg-box">
																<div>
																	<p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>8:42 AM</span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
															<div className="msg-box">
																<div>
																	<div className="chat-msg-attachments">
																		<div className="chat-attachment">
																			<img src={PlaceholderImg2} alt="Attachment" />
																			<div className="chat-attach-caption">placeholder.jpg</div>
																			<Link to="#" className="chat-attach-download">
																				<i className="fas fa-download"></i>
																			</Link>
																		</div>
																	</div>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>8:50 AM</span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</li>
													<li className="media received">
														<div className="avatar">
															<img src={ChatRightImg} alt="User Image" className="avatar-img rounded-circle" />
														</div>
														<div className="media-body">
															<div className="msg-box">
																<div>
																	<p>You wait for notice.</p>
																	<p>Consectetuorem ipsum dolor sit?</p>
																	<p>Ok?</p>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>8:55 PM</span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</li>
													<li className="chat-date">Today</li>
													<li className="media received">
														<div className="avatar">
															<img src={ChatRightImg} alt="User Image" className="avatar-img rounded-circle" />
														</div>
														<div className="media-body">
															<div className="msg-box">
																<div>
																	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>10:17 AM</span>
																			</div>
																		</li>
																		<li><Link to="#">Edit</Link></li>
																	</ul>
																</div>
															</div>
														</div>
													</li>
													<li className="media sent">
														<div className="media-body">
															<div className="msg-box">
																<div>
																	<p>Lorem ipsum dollar sit</p>
																	<div className="chat-msg-actions dropdown">
																		<Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																			<i className="fe fe-elipsis-v"></i>
																		</Link>
																		<div className="dropdown-menu dropdown-menu-right">
																			<a className="dropdown-item" href="#">Delete</a>
																		</div>
																	</div>
																	<ul className="chat-msg-info">
																		<li>
																			<div className="chat-time">
																				<span>10:19 AM</span>
																			</div>
																		</li>
																		<li><Link to="#">Edit</Link></li>
																	</ul>
																</div>
															</div>
														</div>
													</li>
													<li className="media received">
														<div className="avatar">
															<img src={ChatRightImg} alt="User Image" className="avatar-img rounded-circle" />
														</div>
														<div className="media-body">
															<div className="msg-box">
																<div>
																	<div className="msg-typing">
																		<span></span>
																		<span></span>
																		<span></span>
																	</div>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
										<div className="chat-footer">
											<div className="input-group">
												<div className="input-group-prepend">
													<div className="btn-file btn">
														<FontAwesomeIcon icon={faPaperclip} />
														<input type="file" />
													</div>
												</div>
												<input type="text" className="input-msg-send form-control" placeholder="Type something" />
												<div className="input-group-append">
													<button type="button" className="btn msg-send-btn"><FontAwesomeIcon icon={faTelegramPlane} /></button>
												</div>
											</div>
										</div>
									</div>
									{/* Chat Right */}

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
export { Chat };