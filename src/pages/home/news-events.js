import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import EventImg1 from '../../assets/img/profile/blog-01.jpg';
import EventImg2 from '../../assets/img/profile/blog-02.jpg';
import EventImg3 from '../../assets/img/profile/blog-03.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/fontawesome-free-solid';

class NewsandEvents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            blogs: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        blogs: result.blog
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

    render() {
        return (
            <div>
                {/* Events Section */}
                <section className="section event">
                    <div className="container">

                        {/* Section Header */}
                        <div className="section-header text-center">
                            <h2>Blog</h2>
                            <p className="text-center">Xem những bài blog mới nhất</p>
                        </div>
                        {/* Section Header */}

                        <div className="row blog-grid-row">
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                {/* Blog Post */}
                                {
                                    this.state.blogs.slice(0, 3).map(blog => (
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={blog.img} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <h3 className="blog-title"><Link to="/blog-details">Top Colors for Nail Polish</Link></h3>
                                                <p className="mb-0">.....</p>
                                                <Link to="/blog-details" className="btn btn-pink">Đọc thêm</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* Blog Post */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Events Section */}
            </div>
        )
    }
}
export { NewsandEvents };