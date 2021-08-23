import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import StylistImg from '../../assets/img/stylists/stylist-thumb-02.jpg';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { setMinutes, setHours } from 'date-fns';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCheck, faChevronCircleDown, faChevronDown, faChevronLeft, faChevronRight, faMapMarkerAlt, faStar } from '@fortawesome/fontawesome-free-solid';
class Booking extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: new Date(),
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
        startDate: date
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
        var time = ''
        var day = ''
        var month = ''

        if (this.state.startDate.getHours().toString().length < 2)
        {
            time += '0'
            time += this.state.startDate.getHours().toString()
        }
        else
        {
            time += this.state.startDate.getHours().toString()
        }

        if (this.state.startDate.getDate().toString().length < 2)
        {
            day += '0'
            day += this.state.startDate.getDate().toString()
        }
        else
        {
            day += this.state.startDate.getDate().toString()
        }
        
        if ((this.state.startDate.getMonth()+1).toString().length < 2)
        {
            month += '0'
            month += (this.state.startDate.getMonth()+1).toString()
        }
        else
        {
            month += (this.state.startDate.getMonth()+1).toString()
        }

        var result = this.state.startDate.getFullYear().toString() + '-' + month + '-' + day
        + "@" + time 
        const data = {
            chosen_date: result,
            id_appoint: localStorage.getItem("id_app")
        }

        axios.post('http://localhost:3000/booking',data)
        .then(res => {
            console.log(res.data)
            this.setState({redirect:true})
            localStorage.setItem("date_booking",result)
        })
        .catch(err => {
            console.log(err);
        })
        // $.getJSON('/nailsalon/booking-service/info?date='+res, function(data){
        //     console.log(data)
        // })
    }
    render() {
        const { redirect } = this.state;
		console.log(redirect)
     	if (redirect) {
       		return <Redirect to='/booking-stylist'/>;
     	}
        return(
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Đặt lịch</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Đặt lịch</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                    <div className="row">
                            <div className="col-12 col-sm-4 col-md-6">
                                <span>
                                    Quý khách vui lòng chọn ngày giờ đặt lịch ở khung bên cạnh.
                                </span>
                            </div>
                            <div className="col-12 col-sm-8 col-md-6 text-sm-right">
                                <form onSubmit={ this.onFormSubmit }>
                                    <div className="form-group">
                                    <DatePicker
                                        selected={ this.state.startDate }
                                        onChange={ this.handleChange }
                                        minTime = {setHours(this.state.startDate, 9)}
                                        maxTime = {setHours(this.state.startDate, 21)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={60}
                                        timeCaption="time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                    <button className="btn btn-primary">Đặt lịch</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                                    </div>
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
export { Booking };