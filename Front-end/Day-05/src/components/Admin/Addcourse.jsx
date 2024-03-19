import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import '../../assets/css/Addcourse.css';


function Addcourse() {
  const [userData, setUserData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formValues, setFormValues] = useState({
    picture: './image/Profile Icon.webp',
    employeeName: '',
    employeeAge: '',
    employeeCity: '',
    employeeEmail: '',
    employeePhone: '',
    employeePost: '',
    startDate: ''
  });

  useEffect(() => {
    const data = localStorage.getItem('userProfile');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...userData];
    if (!isEdit) {
      updatedData.push(formValues);
    } else {
      updatedData[editId] = formValues;
      setIsEdit(false);
    }
    setUserData(updatedData);
    localStorage.setItem('userProfile', JSON.stringify(updatedData));
    setFormValues({
      picture: './image/Profile Icon.webp',
      employeeName: '',
      employeeAge: '',
      employeeCity: '',
      employeeEmail: '',
      employeePhone: '',
      employeePost: '',
      startDate: ''
    });
  };

  const handleEdit = (index) => {
    setIsEdit(true);
    setEditId(index);
    setFormValues(userData[index]);
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure want to delete?')) {
      const updatedData = [...userData];
      updatedData.splice(index, 1);
      setUserData(updatedData);
      localStorage.setItem('userProfile', JSON.stringify(updatedData));
    }
  };

  return (
    // Your JSX code here
      <div className='addcourse'>
        <Sidebar/>
    <div className='curd'>

   
      {/* <Sidebar/> */}

      <section className="p-3">
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary newUser" data-bs-toggle="modal" data-bs-target="#userForm">Add Course <i className="bi bi-people"></i></button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-hover mt-3 text-center table-bordered">
            <thead>
              <tr>
                <th>Course_Id </th>
                <th>Institution</th>
                <th>Course Name</th>
                <th>Duration</th>
              
                <th>Start Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="data"></tbody>
          </table>
        </div>
      </div>

      <div className="modal fade" id="userForm">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Fill the Form</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} id="myForm">
              

<div class="card imgholder">
    {/* <img src="./image/Profile Icon.webp" alt="" width="200" height="200" class="showImg"> */}
</div>

<div class="inputField">
    <div>
        <label for="name">Name:</label>
        <input type="text" name="" id="showName" disabled/>
    </div>
    <div>
        <label for="age">Age:</label>
        <input type="number" name="" id="showAge" disabled/>
    </div>
    <div>
        <label for="city">City:</label>
        <input type="text" name="" id="showCity" disabled/>
    </div>
    <div>
        <label for="email">E-mail:</label>
        <input type="email" name="" id="showEmail" disabled/>
    </div>
    <div>
        <label for="phone">Number:</label>
        <input type="text" name="" id="showPhone" minlength="11" maxlength="11" disabled/>
    </div>
    <div>
        <label for="post">Post:</label>
        <input type="text" name="" id="showPost" disabled/>
    </div>
    <div>
        <label for="sDate">Start Date:</label>
        <input type="date" name="" id="showsDate" disabled/>
    </div>
</div>


              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" form="myForm" className="btn btn-primary submit">Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Read Data Modal */}
      <div className="modal fade" id="readData">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Profile</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Your read data form goes here */}
            </div>
          </div>
        </div>
      </div>
    </section>

      </div>
      </div>
    );
}

export default Addcourse;
