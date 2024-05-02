import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css"

function Hero() {
  var settings = {
    arrow: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='slider' >
      <Slider {...settings}>
        <div className="image-container">
          <img src='https://png.pngtree.com/background/20240112/original/pngtree-shipping-containers-for-international-trade-3d-rendered-image-picture-image_7232575.jpg' />
          <div className="text-overlay">Royal Trade Zone</div>
        </div>
        <div>
          <img
            src='https://png.pngtree.com/thumb_back/fw800/background/20231007/pngtree-container-filled-truck-docked-in-the-harbor-stunning-3d-render-and-image_13547837.png'/>
        </div>
        <div>
          <img src='https://png.pngtree.com/thumb_back/fw800/background/20231009/pngtree-stunning-3d-renderings-and-illustrations-of-container-cargo-ships-and-cargo-image_13579159.png' />
        </div>
        {/* <div>
          <img src='product-16-sv7hfE4J.png' />
        </div> */}


      </Slider>
    </div>
  )
}

export default Hero