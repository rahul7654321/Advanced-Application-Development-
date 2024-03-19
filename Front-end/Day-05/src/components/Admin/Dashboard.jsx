import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/css/Dashboard.css';
import Sidebar from './Sidebar';


function Dashboard() {
  return (
    <div className="container-dash">
      <Sidebar/>

      <section className="main">
        <div className="main-top">
          <h1>Students and Universities</h1>
          <i className="fas fa-user-cog"></i>
        </div>
        <div className="main-skills">
          <div className="carddash">
            <i className="fas fa-laptop-code"></i>
            <h3>King Safety </h3>
            <p>Join Over 1 million Students.</p>
            <button>Read more</button>
          </div>
          <div className="carddash">
            <i className="fab fa-wordpress"></i>
            <h3>Open Strat</h3>
            <p>Join Over 3 million Students.</p>
            <button>Read more</button>
          </div>
          <div className="carddash">
            <i className="fas fa-palette"></i>
            <h3>Pawn tat </h3>
            <p>Join Over 2 million Students.</p>
            <button>Read more </button>
          </div>
          <div className="carddash">
            <i className="fab fa-app-store-ios"></i>
            <h3>Queen Tactics</h3>
            <p>Join Over 1 million Students.</p>
            <button>
              Read more 
            </button>
          </div>
        </div>

        <section className="main-course">
          <h1>Courses</h1>
          <div className="course-box">
            <ul>
              <li className="active">In progress</li>
              <li>explore</li>
              <li>incoming</li>
              <li>finished</li>
            </ul>
           </div>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
