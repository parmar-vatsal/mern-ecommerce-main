import React from 'react';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../images/products/slider1.jpg';
import slider2 from '../images/products/slider2.jpg';
import slider3 from '../images/products/slider3.jpg';
import slider4 from '../images/products/slider4.jpg';


const Slider = () => {
	var settings = {
	    dots: true,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 1,
	    slidesToScroll: 1
	  };

	return(
			<>
 			    <section className="hero" style={{overflow: 'hidden'}}>
 			        <div className="hero-container">
 			        	<SliderSlick {...settings}>
 					      <div>
 					        <img src={slider1} style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
 					      </div>
 					      <div>
 					        <img src={slider2} style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
 					      </div>
 					      <div>
 					        <img src={slider3} style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
 					      </div>
 					      <div>
 					        <img src={slider4} style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
 					      </div>					     
 					    </SliderSlick>
 			        </div>
 			    </section>
			</>
		)
}

export default Slider;