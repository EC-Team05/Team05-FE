import React from 'react';
import { Link } from 'react-router-dom'

// Import Blog Sidebar
import { BlogSidebar } from './blog-sidebar';

// Import Images
import BlogImg from '../../assets/img/blog/blog-01.jpg';
import StylistThumb from '../../assets/img/stylists/stylist-thumb-02.jpg';
import CustomerImg1 from '../../assets/img/customers/customer4.jpg';
import CustomerImg2 from '../../assets/img/customers/customer5.jpg';
import CustomerImg3 from '../../assets/img/customers/customer3.jpg';
import CustomerImg4 from '../../assets/img/customers/customer6.jpg';
import CustomerImg5 from '../../assets/img/customers/customer7.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faComments, faReply, faTags } from '@fortawesome/fontawesome-free-solid';
import { faFacebook, faGooglePlus, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class BlogDetails extends React.Component {
    render() {
        return(
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Blog Details</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="blog-view">
                                    <div className="blog blog-single-post">
                                        <div className="blog-image">
                                            <Link to="#"><img alt="" src={BlogImg} className="img-fluid" /></Link>
                                        </div>
                                        <h3 className="blog-title">How to strengthen brittle nails naturally</h3>
                                        <div className="blog-info clearfix">
                                            <div className="post-left">
                                                <ul>
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/stylist-profile"><img src={StylistThumb} alt="Post Author" /> <span>Urban Mauldin</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faCalendarCheck} />4 Dec 2020</li>
                                                    <li><FontAwesomeIcon icon={faComments} />12 Comments</li>
                                                    <li><FontAwesomeIcon icon={faTags} />Nail Polish Tips</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="card blog-share clearfix">
                                        <div className="card-header">
                                            <h4 className="card-title">Share the post</h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="social-share">
                                                <li><Link to="#" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                                <li><Link to="#" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                                <li><Link to="#" title="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                                                <li><Link to="#" title="Google Plus"><FontAwesomeIcon icon={faGooglePlus} /></Link></li>
                                                <li><Link to="#" title="Youtube"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card author-widget clearfix">
                                        <div className="card-header">
                                            <h4 className="card-title">About Author</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="about-author">
                                                <div className="about-author-img">
                                                    <div className="author-img-wrap">
                                                        <Link to="/stylist-profile"><img className="img-fluid rounded-circle" alt="" src={StylistThumb} /></Link>
                                                    </div>
                                                </div>
                                                <div className="author-details">
                                                    <Link to="/stylist-profile" className="blog-author-name">Urban Mauldin</Link>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card blog-comments clearfix">
                                        <div className="card-header">
                                            <h4 className="card-title">Comments (12)</h4>
                                        </div>
                                        <div className="card-body pb-0">
                                            <ul className="comments-list">
                                                <li>
                                                    <div className="comment">
                                                        <div className="comment-author">
                                                            <img className="avatar" alt="" src={CustomerImg1} />
                                                        </div>
                                                        <div className="comment-block">
                                                            <span className="comment-by">
                                                                <span className="blog-author-name">Jinnie Escamilla</span>
                                                            </span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            <p className="blog-date">Dec 6, 2017</p>
                                                            <Link to="#" className="comment-btn">
                                                                <FontAwesomeIcon icon={faReply} /> Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <ul className="comments-list reply">
                                                        <li>
                                                            <div className="comment">
                                                                <div className="comment-author">
                                                                    <img className="avatar" alt="" src={CustomerImg2} />
                                                                </div>
                                                                <div className="comment-block">
                                                                    <span className="comment-by">
                                                                        <span className="blog-author-name">Ozie Mcgraw</span>
                                                                    </span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                                    <p className="blog-date">Dec 6, 2017</p>
                                                            <Link to="#" className="comment-btn">
                                                                <FontAwesomeIcon icon={faReply} /> Reply
                                                            </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comment">
                                                                <div className="comment-author">
                                                                    <img className="avatar" alt="" src={CustomerImg3} />
                                                                </div>
                                                                <div className="comment-block">
                                                                    <span className="comment-by">
                                                                        <span className="blog-author-name">Corydon Brittain</span>
                                                                    </span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                                    <p className="blog-date">December 7, 2017</p>
                                                            <Link to="#" className="comment-btn">
                                                                <FontAwesomeIcon icon={faReply} /> Reply
                                                            </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="comment">
                                                        <div className="comment-author">
                                                            <img className="avatar" alt="" src={CustomerImg4} />
                                                        </div>
                                                        <div className="comment-block">
                                                            <span className="comment-by">
                                                                <span className="blog-author-name">Doralia Vigil</span>
                                                            </span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            <p className="blog-date">December 11, 2017</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="comment">
                                                        <div className="comment-author">
                                                            <img className="avatar" alt="" src={CustomerImg5} />
                                                        </div>
                                                        <div className="comment-block">
                                                            <span className="comment-by">
                                                                <span className="blog-author-name">Kaylia Elias</span>
                                                            </span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            <p className="blog-date">December 13, 2017</p>
                                                            <Link to="#" className="comment-btn">
                                                                <FontAwesomeIcon icon={faReply} /> Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="card new-comment clearfix">
                                        <div className="card-header">
                                            <h4 className="card-title">Leave Comment</h4>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label>Name <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Your Email AdStylistsess <span className="text-danger">*</span></label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Comments</label>
                                                    <textarea rows="4" className="form-control"></textarea>
                                                </div>
                                                <div className="submit-section">
                                                    <button className="btn btn-primary submit-btn" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            {/* Blog Sidebar */}
                            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                                <BlogSidebar />
                            </div>
                            {/* Blog Sidebar */}
                        </div>
                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export { BlogDetails };