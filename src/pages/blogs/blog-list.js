import React from 'react';
import { Link } from 'react-router-dom'

// Import Blog Sidebar
import { BlogSidebar } from './blog-sidebar';

// Import Images
import BlogImg1 from '../../assets/img/blog/blog-01.jpg';
import StylistThumb1 from '../../assets/img/stylists/stylist-thumb-01.jpg';
import BlogImg2 from '../../assets/img/blog/blog-02.jpg';
import StylistThumb2 from '../../assets/img/stylists/stylist-thumb-02.jpg';
import StylistThumb3 from '../../assets/img/stylists/stylist-thumb-03.jpg';
import StylistThumb4 from '../../assets/img/stylists/stylist-thumb-04.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight, faClock, faComments, faTags } from '@fortawesome/fontawesome-free-solid';

class BlogList extends React.Component {
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
                                <h2 className="breadcrumb-title">Blog List</h2>
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

                                {/* Blog Post */}
                                <div className="blog">
                                    <div className="blog-image">
                                        <Link to="/blog-details"><img className="img-fluid" src={BlogImg1} alt="Post Image" /></Link>
                                    </div>
                                    <h3 className="blog-title"><Link to="/blog-details">How to strengthen brittle nails naturally</Link></h3>
                                    <div className="blog-info clearfix">
                                        <div className="post-left">
                                            <ul>
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/stylist-profile"><img src={StylistThumb1} alt="Post Author" /> <span>Sorell Sexton</span></Link>
                                                    </div>
                                                </li>
                                                <li><FontAwesomeIcon icon={faClock} />4 Dec 2020</li>
                                                <li><FontAwesomeIcon icon={faComments} />12 Comments</li>
                                                <li><FontAwesomeIcon icon={faTags} />Nail Polish Tips</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Link to="/blog-details" className="read-more">Read More</Link>
                                    </div>
                                </div>
                                {/* Blog Post */}

                                {/* Blog Post */}
                                <div className="blog">
                                    <div className="blog-image">
                                        <Link to="/blog-details"><img className="img-fluid" src={BlogImg2} alt="" /></Link>
                                    </div>
                                    <h3 className="blog-title"><Link to="/blog-details">Your Best Manicure Tips</Link></h3>
                                    <div className="blog-info clearfix">
                                        <div className="post-left">
                                            <ul>
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/stylist-profile"><img src={StylistThumb2} alt="Post Author" /> <span>Urban Mauldin</span></Link>
                                                    </div>
                                                </li>
                                                <li><FontAwesomeIcon icon={faClock} />3 Dec 2020</li>
                                                <li><FontAwesomeIcon icon={faComments} />7 Comments</li>
                                                <li><FontAwesomeIcon icon={faTags} />Nail Art</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Link to="/blog-details" className="read-more">Read More</Link>
                                    </div>
                                </div>
                                {/* Blog Post */}

                                {/* Blog Post */}
                                <div className="blog">
                                    <div className="blog-image">
                                        <div className="video">
                                            <iframe width="940"  src="https://www.youtube.com/embed/nXUVH28Sios" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <h3 className="blog-title"><Link to="/blog-details">Organize Your Nail Polishes! 5 Creative Ways to Do It</Link></h3>
                                    <div className="blog-info clearfix">
                                        <div className="post-left">
                                            <ul>
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/stylist-profile"><img src={StylistThumb3} alt="Post Author" /> <span>Cela Spence</span></Link>
                                                    </div>
                                                </li>
                                                <li><FontAwesomeIcon icon={faClock} />3 Dec 2020</li>
                                                <li><FontAwesomeIcon icon={faComments} />2 Comments</li>
                                                <li><FontAwesomeIcon icon={faTags} />Foot Care</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Link to="/blog-details" className="read-more">Read More</Link>
                                    </div>
                                </div>
                                {/* Blog Post */}

                                {/* Blog Post */}
                                <div className="blog">
                                    <div className="blog-image">
                                        <div className="video">
                                            <iframe width="940" src="https://www.youtube.com/embed/jfcaQVvLsMs" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <h3 className="blog-title"><Link to="/blog-details">How to Nourish and Protect Your Nails</Link></h3>
                                    <div className="blog-info clearfix">
                                        <div className="post-left">
                                            <ul>
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/stylist-profile"><img src={StylistThumb4} alt="Post Author" /> <span>Litia Green</span></Link>
                                                    </div>
                                                </li>
                                                <li><FontAwesomeIcon icon={faClock} />2 Dec 2020</li>
                                                <li><FontAwesomeIcon icon={faComments} />41 Comments</li>
                                                <li><FontAwesomeIcon icon={faTags} />Nail Polish Tips</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Link to="/blog-details" className="read-more">Read More</Link>
                                    </div>
                                </div>
                                {/* Blog Post */}

                                {/* Blog Pagination */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="blog-pagination">
                                            <nav>
                                                <ul className="pagination justify-content-center">
                                                    <li className="page-item disabled">
                                                        <Link to="#" className="page-link" tabIndex="-1"><FontAwesomeIcon icon={faAngleDoubleLeft} /></Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link to="#" className="page-link">1</Link>
                                                    </li>
                                                    <li className="page-item active">
                                                        <Link to="#" className="page-link">2 <span className="sr-only">(current)</span></Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link to="#" className="page-link">3</Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link to="#" className="page-link"><FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                {/* Blog Pagination */}
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
export { BlogList };