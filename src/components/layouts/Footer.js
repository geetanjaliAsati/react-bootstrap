import React from 'react';
import "./footer.css";
import {ReactComponent as Facebook} from "../UI/icons/facebook.svg"
import { FaArrowRight } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import FooterIcon from "./FooterIcon";
function Footer() {
  return (
   <div className="footer">
    <div className="footer-header">
    <FooterIcon />
    <FooterIcon />
    <FooterIcon />
    <FooterIcon />
    <FooterIcon />
    <FooterIcon />
    </div>
   <div className="footer-container">
    <div className="footer-section footer-section-left">
      <div className="footer-section-column">
        <h5 className="footer-section-column-head">about us</h5>
        <p>our story</p>
        <p>contact us</p>
        <p>locate stores</p>
      </div>
      <div className="footer-section-column">
        <h5 className="footer-section-column-head">customer care</h5>
        <p>track order</p>
        <p>shipping policy</p>
        <p>terms and conditions</p>
        <p>privacy policy</p>
        <p>FAQs</p>
        <p>terms of service</p>
        <p>refund policy</p>
      </div>
      <div className="footer-section-column">
        <h5 className="footer-section-column-head">offers &amp; rewards</h5>
        <p>plant parent club</p>
        <p>ugaoo coupons</p>
      </div>
    </div>
    <div className="footer-section footer-section-right">
      <div className="footer-section-column">
        <h5 className="footer-section-column-head">SIGN UP FOR OUR NEWSLETTER</h5>
        <em>        
For plant care tips, our featured plant <br />of the week, exclusive offers and discounts</em>
        <p><input type="text" placeholder="Enter email address" className='email__input'/><FaArrowRight /></p>
        <p className="footer-section-column-head" style={{marginBottom: "0.8rem", fontWeight: "500"}}>follow us</p>
        {/* <Facebook width={"30px"}/> */}
          <div class="right-column-icons" style={{ fontSize: "1.5rem"}}>
          <span>  
          <AiFillFacebook />

          </span>
          <span>
          <AiOutlineTwitter />

          </span>
          <span>
          <FaInstagram />

          </span>
          <span>
          <GrLinkedinOption />

          </span>
          <span>
          <AiFillYoutube />

          </span>
          
          
          
          </div>
       

      </div>
    </div>
    
   </div>
  
   <div className="footer-bottom">
   
   © 2022, GrowPlants. All rights reserved.
   </div>
   </div>
   
  
  )
}

export default Footer
