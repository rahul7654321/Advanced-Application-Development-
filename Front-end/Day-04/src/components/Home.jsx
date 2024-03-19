import React, { useState,useEffect } from 'react';
import '../assets/css/Navbar.css';
import '../assets/css/color.css';

import Navbar from './Navbar';
import University from './University';
import Footer from './Footer';


function Home() {
  const [menuShown, setMenuShown] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);



  const toggleNavbarMenu = () => {
    setMenuShown(!menuShown);
    document.body.classList.toggle('no-scroll');
  };

  const closeNavbarMenu = () => {
    setMenuShown(false);
    document.body.classList.remove('no-scroll');
  };

  const handleFormFocus = () => {
    setFormActive(true);
  };

  const handleFormBlur = () => {
    setFormActive(false);
  };


  useEffect(() => {
    const heroAnimate = () => {
      const heroImages = document.querySelectorAll('.hero-image');
      const heroItems = document.querySelectorAll('.hero-item');

      if (heroImages.length !== heroItems.length) return;

      heroImages.forEach((el) => {
        el.classList.remove('active');
      });
      heroItems.forEach((el) => {
        el.classList.remove('active');
      });
      heroImages[currentIndex].classList.add('active');
      heroItems[currentIndex].classList.add('active');

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 >= heroImages.length ? 0 : prevIndex + 1));
      }, 1000); // Change the delay here (in milliseconds) to adjust the timing of the animation

      // requestAnimationFrame(heroAnimate); // Remove this line as it's not necessary anymore
    };

    const interval = setInterval(heroAnimate, 1000); // Run heroAnimate every 10 seconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, [currentIndex]);


  
  

  return (
    <div>

<Navbar/>

    {/* <!-- start: Category --> */}
    <section class="category-section">
        <div class="container1">
            <div class="category-wrapper">
                <button type="button" class="category-arrow prev hidden"><i class="ri-arrow-left-s-line"></i></button>
                <button type="button" class="category-arrow next"><i class="ri-arrow-right-s-line"></i></button>
                <div class="category-link">
                    {/* <a href="#">Online chess</a>
                    <a href="#">Summer camps</a>
                    <a href="#">Tournaments</a>
                    <a href="#">Careers</a>
                    <a href="#">Sports & Outdoors</a>
                    <a href="#">Toys & Games</a>
                    <a href="#">Pet Supplies</a> */}
                   
                </div>
            </div>
        </div>
    </section>



    <header>
      <div className="container1">
        <div className="hero-wrapper">
          <div data-aos="fade-up">
            <img
              src="https://shorturl.at/tAJP7"
              alt=""
              className="hero-image active"
            />
            <img
              src="https://shorturl.at/cpBP7"
              alt=""
              className="hero-image"
            />
            <img
              src="https://shorturl.at/clrzH"
              alt=""
              className="hero-image"
            />
          </div>
          <div className="hero-item-wrapper" data-aos="fade-up" data-aos-delay="100">
            <div className="hero-item active">
              <div>
                <div className="hero-item-title">
                  Summer Camp Chess
                </div>
                <p className="hero-item-description">
                Joining a chess academy for a summer camp can be an enriching and enjoyable experience, especially for those interested in improving their chess skills. Here are some aspects to consider 
                </p>
                <a href="#" className="link-blue">
                  View more <i className="ri-arrow-right-s-line"></i>
                </a>
              </div>
            </div>
            <div className="hero-item">
              <div>
                <div className="hero-item-title">Online Chess Courses</div>
                <p className="hero-item-description">
                Online chess teaching offers the convenience of learning from the comfort of home, with access to experienced instructors worldwide. Through interactive lessons and personalized feedback, students can sharpen their skills and deepen their understanding of the game at their own pace.






                </p>
                <a href="#" className="link-blue">
                  View more <i className="ri-arrow-right-s-line"></i>
                </a>
              </div>
            </div>
            <div className="hero-item">
              <div>
                <div className="hero-item-title">
                  Individuals Traniee
                </div>
                <p className="hero-item-description">
                Enrolling your child in chess lessons with national champions provides a unique opportunity for mentorship from seasoned experts who have excelled in competitive play. These champions offer invaluable insights, strategic guidance, and inspiration, nurturing your child's chess proficiency and fostering a passion for the game.







                </p>
                <a href="#" className="link-blue">
                  View more <i className="ri-arrow-right-s-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    

    <section className="features-section">
      <div className="container">
        <div className="features-wrapper">
          <div data-aos="fade-up">
            
            <div className="features-item-title">Affordable Prices</div>
            <p className="features-item-description">We offer competitive prices on all our products, so you can save money without compromising on quality.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="features-item-title">Fast Learning</div>
            <p className="features-item-description">We offer fast and free shipping on all orders over a certain amount, so you can receive your purchases quickly and without any additional costs.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="features-item-title">Largest community</div>
            <p className="features-item-description">We offer a hassle-free returns policy, so if you're not satisfied with your purchase, you can return it for a refund or exchange.</p>
          </div>
        </div>
      </div>
    <University></University>
    </section>
<Footer></Footer>


    
    </div>
  );
}

export default Home;
