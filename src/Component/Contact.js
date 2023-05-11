import React from "react";
import NavigationBar from "./NavigationBar";
import "../Style/Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Footer from "./Footer";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="nav" style={{ marginTop: "0px" }}>
        <NavigationBar />
      </div>
      <div className="container content" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 mt-5">
            <h1>Contact Us</h1>
            <div className="connect">
              <div className="part">
                <BsFillTelephoneFill
                  style={{ color: "#031130" }}
                  className="icon"
                />
                <div className="detail">
                  <h4>Call us :</h4>
                  <span>+91 1345456569</span>
                </div>
              </div>
              <div className="part">
                <HiOutlineMail style={{ color: "#031130" }} className="icon" />
                <div className="detail">
                  <h4>Email us at :</h4>
                  <span>altoseduhub@gmail.com</span>
                </div>
              </div>
              <div className="part">
                <AiOutlineWhatsApp
                  style={{ color: "#031130" }}
                  className="icon"
                />
                <div className="detail">
                  <h4>Connect us on :</h4>
                  <span>Whatsapp</span>
                </div>
              </div>
              <div className="part">
                <GoLocation style={{ color: "#031130" }} className="icon" />
                <div className="detail">
                  <h4>Locate us on :</h4>
                  <span>Google map</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 mt-5">
            <h2 style={{ color: "#097779" }}>How can we be of assistance?</h2>
            <form onSubmit={handleSubmit}>
              <span style={{ color: "gray" }}>
                If you require clarifications on any of the courses or the
                admission process, we are happy to help
              </span>
              <br />
              <br />
              <input type="text" placeholder="Name" className="form-control" />
              <br />
              <input
                type="text"
                placeholder="Contact number"
                className="form-control"
              />
              <br />
              <input
                type="email"
                placeholder="Email Id"
                className="form-control"
              />
              <br />
              <input type="text" placeholder="City" className="form-control" />
              <br />
              <input
                type="text"
                placeholder="Course name"
                className="form-control"
              />
              <br />
              <textarea
                rows="3"
                placeholder="Enquiry/Message/Question"
                className="form-control"
              ></textarea>
              <br />
              <button
                className="btn"
                style={{
                  background: "transparent",
                  border: "1px solid #097770",
                  borderRadius: "50px",
                  color: "white",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr style={{color:'#078f9c'}}/>
      <Footer />
    </div>
  );
}

export default Contact;
