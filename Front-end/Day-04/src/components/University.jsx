import React, { useEffect } from 'react';
import { RiArrowRightSLine,RiArrowLeftSLine } from 'react-icons/ri';


import '../assets/css/University.css';

const University = () => {
    
  return (
    <div>


    <section class="product-section">
        <div class="container1">
            <h2 class="section-title" data-aos="fade-up">Top Universities</h2>
            <div class="product-wrapper" data-aos="fade-up">
            <button type="button" className="product-arrow prev hidden">
      <RiArrowLeftSLine />
    </button>
                <button type="button" class="product-arrow next">
                <RiArrowRightSLine />
                </button>
                <div class="product-grid product-grid-scroller">
                    <div>
                        <div class="product-item-header">
                            <img src="https://rb.gy/wlzpq0" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Pink Leather Crossbody Bag</a>
                            {/* <div class="product-item-price">&dollar;10</div> */}
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(sold 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                            <img src="https://shorturl.at/elyLX" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Pink Leather Crossbody Bag</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(sold 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                            <img src="https://rb.gy/wlzpq0" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Pink Leather Crossbody Bag</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(sold 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                            <img src="https://rb.gy/wlzpq0" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Pink Leather Crossbody Bag</a>
                           
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(sold 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                            <img src="https://shorturl.at/elyLX" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Pink Leather Crossbody Bag</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(sold 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                            <img src="https://rb.gy/wlzpq0" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Pink Leather Crossbody Bag</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(sold 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                        <img src="https://rb.gy/wlzpq0" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Pink Leather Crossbody Bag</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(sold 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                        <img src="https://rb.gy/wlzpq0" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Pink Leather Crossbody Bag</a>
                                       
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(sold 2k)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end: Special Discount --> */}
      
    </div>
  )
}

export default University
