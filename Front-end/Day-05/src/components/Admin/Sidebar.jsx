import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
        <nav className='nav'>
        <ul>
          <li>
            <Link to='/' className="logo">
              <span className="nav-item">DashBoard</span>
            </Link>
          </li>
          <li>
            <Link to='/dash'>
              <i className="fas fa-home"></i>
              <span className="nav-item">Home</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user"></i>
              <span className="nav-item">Profile</span>
            </a>
          </li>
          <li>
            <Link to='/addcourse'>
              <i className="fas fa-paypal"></i>
                <span className="nav-item">Add Course</span>
              
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">View Courses</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-tasks"></i>
              <span className="nav-item"> Institutions </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
              <span className="nav-item">Add Institutions </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-wallet"></i>
              <span className="nav-item">Payment</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item">Log out</span>
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Sidebar
