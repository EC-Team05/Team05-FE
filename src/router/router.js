import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import {
    Home,
    AddBilling,
    EditBilling,
    AddFollowUp,
    EditFollowUp,
    BlankPage,
    BlogDetails,
    BlogGrid,
    BlogList,
    Booking,
    BookingSuccess,
    ChangePassword,
    Chat,
    ChatStylist,
    Checkout,
    Components,
    Favourites,
    ForgotPassword,
    Invoices,
    InvoiceView,
    Login,
    PrivacyPolicy,
    TermsCondition,    
    StylistChangePassword,
    StylistDashboard,
    StylistProfileSettings,
    StylistProfile,
    StylistRegister,
    Register,
    Reviews,
    ProfileSettings,
    Search,
    Session,
    SocialMedia,
    CustomerDashboard,
    CustomerProfile,    
    VideoCall,
    VoiceCall,
    MyCustomers,
    StylistGrid,
    StylistList,
    Calendar,
    ScheduleTimings,
    ServiceDetails,
    Appointments

} from '../pages';

import { Header, Footer } from '../_components';

import config from 'config';
// CSS Files
// Bootstrap CSS
import '../assets/plugins/bootstrap/css/bootstrap.min.css';

// Font Awesome
import '../assets/plugins/fontawesome/css/fontawesome.min.css';
import '../assets/plugins/fontawesome/css/all.min.css';

// Custom CSS
import '../assets/css/style.css';

class RouterComponent extends React.Component {
    render() {
        return (
            
            <Router basename={`${config.publicPath}`} >

                <div className="main-wrapper">
                
                    <Route render={(props) => <Header {...props} />} />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/add-billing" component={AddBilling} />
                        <Route path="/edit-billing" component={EditBilling} />
                        <Route path="/add-follow-up" component={AddFollowUp} />
                        <Route path="/edit-follow-up" component={EditFollowUp} />
                        <Route path="/blank-page" component={BlankPage} />
                        <Route path="/blog-details" component={BlogDetails} />
                        <Route path="/blog-grid" component={BlogGrid} />
                        <Route path="/blog-list" component={BlogList} />
                        <Route path="/booking" component={Booking} />
                        <Route path="/booking-success" component={BookingSuccess} />
                        <Route path="/calendar" component={Calendar} />
                        <Route path="/change-password" component={ChangePassword} />
                        <Route path="/chat" component={Chat} />
                        <Route path="/chat-stylist" component={ChatStylist} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/components" component={Components} />
                        <Route path="/favourites" component={Favourites} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        <Route path="/invoices" component={Invoices} />
                        <Route path="/invoice-view" component={InvoiceView} />
                        <Route path="/login" component={Login} />
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="/terms-condition" component={TermsCondition} />                        
                        <Route path="/stylist-change-password" component={StylistChangePassword} />
                        <Route path="/stylist-dashboard" component={StylistDashboard} />
                        <Route path="/stylist-profile-settings" component={StylistProfileSettings} />
                        <Route path="/stylist-profile" component={StylistProfile} />
                        <Route path="/stylist-register" component={StylistRegister} />
                        <Route path="/register" component={Register} />
                        <Route path="/reviews" component={Reviews} />
                        <Route path="/profile-settings" component={ProfileSettings} />
                        <Route path="/search" component={Search} />
                        <Route path="/service-details" component={ServiceDetails} />
                        <Route path="/social-media" component={SocialMedia} />
                        <Route path="/customer-dashboard" component={CustomerDashboard} />
                        <Route path="/customer-profile" component={CustomerProfile} />
                        <Route path="/video-call" component={VideoCall} />
                        <Route path="/voice-call" component={VoiceCall} />
                        <Route path="/my-customers" component={MyCustomers} />
                        <Route path="/map-grid" component={StylistGrid} />
                        <Route path="/map-list" component={StylistList} />                        
                        <Route path="/schedule-timings" component={ScheduleTimings} />
                        <Route path="/appointments" component={Appointments} />
                    </Switch>
                    <Route render={(props) => <Footer {...props} />} />
                    
                </div>                    

            </Router>
                    
        )
    }
}
export { RouterComponent };
