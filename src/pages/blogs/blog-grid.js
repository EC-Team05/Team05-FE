import React from 'react';
import { Link } from 'react-router-dom'

// Import Blog Sidebar
import { BlogSidebar } from './blog-sidebar';

// Import Images
import BlogImg1 from '../../assets/img/blog/blog-01.jpg';
import StylistThumb1 from '../../assets/img/stylists/stylist-thumb-01.jpg';
import BlogImg2 from '../../assets/img/blog/blog-02.jpg';
import StylistThumb2 from '../../assets/img/stylists/stylist-thumb-02.jpg';
import BlogImg3 from '../../assets/img/blog/blog-03.jpg';
import StylistThumb3 from '../../assets/img/stylists/stylist-thumb-03.jpg';
import BlogImg4 from '../../assets/img/blog/blog-04.jpg';
import StylistThumb4 from '../../assets/img/stylists/stylist-thumb-04.jpg';
import BlogImg5 from '../../assets/img/blog/blog-05.jpg';
import StylistThumb5 from '../../assets/img/stylists/stylist-thumb-05.jpg';
import BlogImg6 from '../../assets/img/blog/blog-06.jpg';
import StylistThumb6 from '../../assets/img/stylists/stylist-thumb-06.jpg';
import BlogImg7 from '../../assets/img/blog/blog-07.jpg';
import StylistThumb7 from '../../assets/img/stylists/stylist-thumb-07.jpg';
import BlogImg8 from '../../assets/img/blog/blog-08.jpg';
import StylistThumb8 from '../../assets/img/stylists/stylist-thumb-08.jpg';
import BlogImg9 from '../../assets/img/blog/blog-09.jpg';
import StylistThumb9 from '../../assets/img/stylists/stylist-thumb-09.jpg';
import BlogImg10 from '../../assets/img/blog/blog-10.jpg';
import StylistThumb10 from '../../assets/img/stylists/stylist-thumb-10.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight, faClock } from '@fortawesome/fontawesome-free-solid';

class BlogGrid extends React.Component {
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
                                <h2 className="breadcrumb-title">Blog Grid</h2>
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
                                <div className="row blog-grid-row">
                                    <div className="col-md-6 col-sm-12">
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg1} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/stylist-profile"><img src={StylistThumb1} alt="Post Author" /> <span>Sorell Sexton</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 4 Dec 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">How to strengthen brittle nails naturally</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg2} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/stylist-profile"><img src={StylistThumb2} alt="Post Author" /> <span>Urban Mauldin</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 3 Dec 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">Why You Should Use  Non-Toxic Nail Polish?</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}
                                    </div>

                                    <div className="col-md-6 col-sm-12">								
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg3} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/stylist-profile"><img src={StylistThumb3} alt="Post Author" /> <span>Cela Spence</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 3 Dec 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">25 Easy Nail Art Ideas</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}                                        
                                    </div>

                                    <div className="col-md-6 col-sm-12">                                    
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg10} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/stylist-profile"><img src={StylistThumb10} alt="Post Author" /> <span>Lorissa Peters</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 23 Nov 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">Online Nail Art Programs</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}                                        
                                    </div>
                                </div>

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
export { BlogGrid };