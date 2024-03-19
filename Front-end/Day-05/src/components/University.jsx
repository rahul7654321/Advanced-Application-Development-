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
                            <a href="#" class="product-item-title">Crimson Knights</a>
                            {/* <div class="product-item-price">&dollar;10</div> */}
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(Students 2k)</span>
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
                            <a href="#" class="product-item-title">Cardinal Masters</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(Students 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                            <img src="https://shorturl.at/dfyCM" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Bulldog Chess</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(Students 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                            <img src="https://shorturl.at/deCS0" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Golden Bears Chess</a>
                           
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(Students 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                            <img src="https://shorturl.at/eNPWX" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Quaker Queens</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(Students 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                            <img src="https://cdn.dribbble.com/users/65103/screenshots/9928909/dribble_artboard_1-100.jpg" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Maroon Rooks</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(Students 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                        <img src="https://images-platform.99static.com/jfb-Wgr30ghXqtqT7bB9XROw7sA=/1x0:961x960/500x500/top/smart/99designs-contests-attachments/93/93208/attachment_93208124" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Tech Knights</a>
                            
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(Students 2k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="product-item-header">
                        <img src="https://rb.gy/e3pdol" alt="" class="product-item-image"/>
                            {/* <a href="#" class="product-item-cart"><i class="ri-shopping-cart-line"></i></a> */}
                        </div>
                        <div class="product-item-body">
                            <div class="product-item-tag"><span>New</span></div>
                            <a href="#" class="product-item-title">Checkmate knigth</a>
                                       
                            <div class="product-item-rating">
                                <i class="ri-star-fill"></i>
                                4.8
                                <span class="product-item-sold">(Students 2k)</span>
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
