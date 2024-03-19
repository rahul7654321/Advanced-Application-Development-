import React from 'react';
import '../assets/css/Footer.css';


const Footer = () => {
    return (
        <footer className="section bg-footer">
            <div className="containerfooter">
                <div className="row">
                    <div className="col-lg-3">
                        <div>
                            <h6 className="footer-heading text-uppercase text-white">Information</h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li><a href="">Pages</a></li>
                                <li><a href="">Our Team</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Pricing</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div>
                            <h6 className="footer-heading text-uppercase text-white">Resources</h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li><a href="">Courses </a></li>
                                <li><a href="">Video Tutorial</a></li>
                                <li><a href="">Terms & Services</a></li>
                                <li><a href="">Register</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div>
                            <h6 className="footer-heading text-uppercase text-white">Help</h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li><a href="">Sign Up</a></li>
                                <li><a href="">Login</a></li>
                                <li><a href="">Terms of Service</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div>
                            <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
                            <p className="contact-info mt-4">Contact us if need help with anything</p>
                            <p className="contact-info">+01 123-456-7890</p>
                            <div className="mtt">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f footer-social-icon"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter footer-social-icon"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-google footer-social-icon"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-apple footer-social-icon"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <p className="footer-alt mb-0 f-14">2024 © Rook'sKnigth, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
