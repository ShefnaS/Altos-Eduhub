import React from "react";
import NavigationBar from "./NavigationBar";
import "../Style/Gallery.css";
import Footer from "./Footer";

function Gallery() {
  return (
    <div className="gallery">
      <div className="nav" style={{ marginTop: "0px" }}>
        <NavigationBar />
      </div>
      <div className="container content" style={{ marginTop: "100px" }}>
        <div className="part1">
          <h1>Kerala's Leading IT Company</h1>
          <h4>Welcome to the world of Empowerment</h4>
          <p>
            Altos Eduhub is a No.1 Software Training Institute in Kochi,
            offering you Job Oriented courses on Data Science, Data Analytics,
            Machine Learning, Python, Big Data & Other Certified IT programs
          </p>
        </div>
        <div className="d-flex flex-row flex-wrap mt-5">
          <img
            src="images/company/pic1.jpg"
            alt="company1"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic2.jpg"
            alt="company2"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic3.jpg"
            alt="company3"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic4.jpg"
            alt="company4"
            width="20%"
            height="300px"
          />
        </div>
        <div className="d-flex flex-row flex-wrap">
          <img
            src="images/company/pic1.jpg"
            alt="company1"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic2.jpg"
            alt="company2"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic3.jpg"
            alt="company3"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic4.jpg"
            alt="company4"
            width="20%"
            height="300px"
          />
        </div>
        <div className="d-flex flex-row flex-wrap">
          <img
            src="images/company/pic1.jpg"
            alt="company1"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic2.jpg"
            alt="company2"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic3.jpg"
            alt="company3"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic4.jpg"
            alt="company4"
            width="20%"
            height="300px"
          />
        </div>
        <div className="d-flex flex-row flex-wrap">
          <img
            src="images/company/pic1.jpg"
            alt="company1"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic2.jpg"
            alt="company2"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic3.jpg"
            alt="company3"
            width="20%"
            height="300px"
          />
          <img
            src="images/company/pic4.jpg"
            alt="company4"
            width="20%"
            height="300px"
          />
        </div>
      </div>
      <hr style={{ color: "#088187" }} />
      <Footer />
    </div>
  );
}

export default Gallery;
