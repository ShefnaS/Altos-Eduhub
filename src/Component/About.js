import React from "react";
import NavigationBar from "./NavigationBar";
import "../Style/About.css";
import { MdDoneOutline } from "react-icons/md";
import Footer from "./Footer";

function About() {
  return (
    <div className="about">
      <div className="nav" style={{ marginTop: "0px" }}>
        <NavigationBar />
      </div>
      <div className="content" style={{ marginTop: "100px" }}>
        <div className="row container">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="part1">
              <h1>Kerala's Leading IT Company</h1>
              <h4>Welcome to the world of Empowerment</h4>
              <p>
                Altos Eduhub is a No.1 Software Training Institute in Kochi,
                offering you Job Oriented courses on Data Science, Data
                Analytics, Machine Learning, Python, Big Data & Other Certified
                IT programs
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img
              src="images/about.jpg"
              alt="about"
              width='500px'
              height="350px"
              style={{ marginTop: "-10px" }}
            />
          </div>
        </div>
        <div className="section2 container mt-5">
          <h1>Provide Best Education Services For You</h1>
          <div className="row mt-5">
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
            >
              <h4>
                Altos Eduhub - ISO 9001:2015 Certified Institution - Software
                Training Institute.
              </h4>
              <p className="mt-5">
                Providing advanced level Gen 4.0 software training to students,
                Altos Eduhub is an IT finishing school situated at Kakkanad,
                near Infopark Cochin & Mavoor Road Calicut. Luminar Technolab is
                affiliated to National Council for Technology and Training
                (NACTET). NACTET is an autonomous organisation registered under
                Govt of Kerala and Government of India NCT, New Delhi under
                Indian trust act.
                <br />
                <br /> Born out from a group IT professionals with more than 15
                years of industry experience, Luminar Technolab offers best
                software training and placement in emerging technologies like
                Big Data Analytics, Machine Learning, Artificial Intelligence,
                Data Science, Automation Testing, Full Stack Development,
                Python, MEAN Stack, Digital Marketing, PHP, Angular, Power BI &
                Tableau.
                <br />
                <br /> Our mission is to provide 100% placements to students
                those who enrol for our specialised courses. The firm’s vision
                is to become the premium training centre that maximises value
                for customers by delivering high-quality training and placement
                services driven by intellect, innovation, and integrity in a fun
                and healthy environment.
              </p>
            </div>

            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
              style={{ marginLeft: "50px" }}
            >
              <h4>Why Altos Eduhub</h4>
              <ul className="mt-5">
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp; ISO 9001:2015
                  Certified Institution
                </li>
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp;
                  Affiliated to NACTET
                  (http://www.nactetindia.org/affiliation.php)
                </li>
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp;
                  Training by highly experienced and certified professionals
                </li>
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp; No slideshow
                  (PPT) training, fully Hands-on training
                </li>
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp; Interactive
                  session with interview QA’s
                </li>
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp; Real-time
                  projects scenarios & Certification Help
                </li>
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp; Most
                  competitive & affordable course fees
                </li>
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp; Placement
                  support for all courses
                </li>
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp; List of
                  established & satisfied clients & students
                </li>
                <li>
                  <MdDoneOutline style={{ color: "#088187" }} />&nbsp; Located Near
                  Infopark Cochin.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="content">
            <h1>Wait is over, now it's the time to start your career...</h1>
            <br />
            <button className="btn">Join now</button>
          </div>
        </div>
      </div>
      <hr style={{color:'#078f9c'}}/>
      <Footer />
    </div>
  );
}

export default About;
