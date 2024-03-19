import React from 'react';
import '../assets/css/Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const Course = () => {
    return (
        <>
   
            <Navbar/>
        <div className="container py-5">
            {/* <h1 className="text-center">Popular Dishes</h1> */}
            <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                <DishCard imgSrc="https://rb.gy/wlzpq0" title="GRANDMASTER ACADEMY" price="190$" />
                <DishCard imgSrc="https://rb.gy/wlzpq0" title="ROOK ACADEMY" price="190$" />
                <DishCard imgSrc="https://rb.gy/wlzpq0" title="QUEEN'S HUB" price="190$" />
                <DishCard imgSrc="https://rb.gy/wlzpq0" title="KNIGHT'S ACADEMY" price="190$" />
                <DishCard imgSrc="https://rb.gy/wlzpq0" title="GRANDMASTER" price="190$" />
                <DishCard imgSrc="https://rb.gy/wlzpq0" title="CHAMPIONS SCHOOL" price="190$" />
            </div>
        </div>
        </>
    );
};

const DishCard = ({ imgSrc, title, price }) => {
    return (
        <div className="col">
            <div className="card">
                <img src={imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                        dignissimos accusantium amet similique velit iste.</p>
                </div>
                <div className="mb-5 d-flex justify-content-around">
                    <h3 className='card-title'>{price}</h3>
                    <Link to="/courseenrollform" className="btn btn-primary">
        Buy Now
    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Course;
