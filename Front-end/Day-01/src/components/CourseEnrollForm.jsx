import React from 'react';
import '../assets/css/CourseEnrollForm.css'
import Navbar from './Navbar';

const CourseEnrollForm = () => {
    return (
        <>
        <Navbar />
        <div className="wrapper">
            <div className="title">
                Course  Registration
            </div>
            <div className="form">
                <div className="inputfield">
                    <label>First Name</label>
                    <input type="text" className="input" />
                </div>
                <div className="inputfield">
                    <label>Last Name</label>
                    <input type="text" className="input" />
                </div>
                <div className="inputfield">
                    <label>Email Id</label>
                    <input type="text" className="input" />
                </div>
                <div className="inputfield">
                    <label>Father's Name</label>
                    <input type="text" className="input" />
                </div>
                <div className="inputfield">
                    <label>Mother's Name</label>
                    <input type="text" className="input" />
                </div>
                <div className="inputfield">
                    <label>Gender</label>
                    <div className="custom_select">
                        <select>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="inputfield">
                    <label>Email Address</label>
                    <input type="text" className="input" />
                </div>
                <div className="inputfield">
                    <label>Phone Number</label>
                    <input type="text" className="input" />
                </div>
                <div className="inputfield">
                    <label>Address</label>
                    <textarea className="textarea"></textarea>
                </div>
                <div className="inputfield">
                    <label>Postal Code</label>
                    <input type="text" className="input" />
                </div>
                <div className="inputfield terms">
                    <label className="check">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <p>Agreed to terms and conditions</p>
                </div>
                <div className="inputfield">
                    <input type="submit" value="Register" className="btn" />
                </div>
            </div>
        </div>
        </>
    );
};

export default CourseEnrollForm;
