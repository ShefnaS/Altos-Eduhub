import React from "react";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import '../Style/Footer.css'

function Footer() {
  return (
    <div className="footer mb-5">
      <div className="row mx-5 mt-3">
        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 section">
          <div className="d-flex flex-column flex-wrap">
            <img
              src="images/logo.png"
              alt="logo"
              width="130px"
              height="50px"
              style={{ marginLeft: "30px" }}
            /><br/>
            <p id='about'>
              Get yourself trained in the Best Software Development and Software
              Testing training institute in Kochi.
              <br /> Feel free to contact us for any queries.
            </p>
            <div className="icons">
              <div className="d-flex flex-row flex-wrap container">
                <a href="/#">
                  {" "}
                  <AiOutlineInstagram  style={{color:'tomato'}}/>
                </a>
                <a href="/#">
                  {" "}
                  <AiOutlineTwitter style={{color:'lightblue'}}/>
                </a>
                <a href="/#">
                  {" "}
                  <AiOutlineFacebook style={{color:'dodgerblue'}}/>
                </a>
                <a href="/#">
                  {" "}
                  <AiFillYoutube style={{color:'red'}}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 section">
          <h4>Links</h4><br/>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/cources">Cources</a>
            </li>
            <li>
              <a href="/placement">Placement</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 section">
          <h4>Contact us</h4><br/>
          <b style={{color:'#078f9c',fontSize:'20px'}}>Cochin</b>
          <br />
          <div className="details">Altos Eduhub Infopark,
          <br />
          Kakkanad, Cochin, Kerala-682037
          <br />
          Call - +1235565656
          <br />
          Email : Altoseduhub@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
