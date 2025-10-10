import React from 'react';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const About = () => {
	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / About"/>
		 	<section className="section section-center">
		        <div className="title">
		          <span />
		          <h2>Welcome to Belvia</h2>
		          <span />
		        </div>
		        <p className="about-text">
		          Welcome to Belvia, your trusted destination for high-quality, thoughtfully curated beauty and personal care products. At Belvia, we believe that beauty is not just about appearance — it's about confidence, self-expression, and feeling your best every day. Our mission is to empower individuals of all skin types, tones, and lifestyles with premium products that enhance natural beauty while nurturing skin, hair, and body health. We proudly offer an extensive range of cosmetics and personal care essentials across multiple categories, including Skincare, Makeup, Haircare, Fragrances, Bath & Body, Men’s Grooming, Sun Care, Nail Care, Anti-Aging, and Natural & Organic. Every product we feature is selected with a commitment to quality, safety, and performance — whether you're looking for a luxurious anti-aging cream, a high-performance sunscreen, nourishing hair treatments, or vegan and cruelty-free skincare. At Belvia, we celebrate authenticity and inclusivity, ensuring that beauty is accessible, enjoyable, and empowering for all. Join us on this journey of self-care, confidence, and conscious beauty.
		        </p>
		    </section>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}

export default About;
