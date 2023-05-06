import React from "react";
import "../Style/Home.css";
import NavigationBar from "./NavigationBar";
import Carousel from "react-bootstrap/Carousel";
import { TbUserSearch } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { GiOfficeChair } from "react-icons/gi";
import { TbCertificate2 } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-page">
      <div className="nav">
        <NavigationBar />
      </div>
      <div className="section1">
        <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
          <div className="part1">
            <h1>Kerala's Leading IT Company</h1>
            <h4>Welcome to the world of Empowerment</h4>
            <p>
              Altos Eduhub is a No.1 Software Training Institute in Kochi,
              offering you Job Oriented courses on Data Science, Data Analytics,
              Machine Learning, Python, Big Data & Other Certified IT programs
            </p>
          </div>
          <div className="list">
            <ul>
              <li>Infopark based No.1 Professional Training Center.</li>
              <li>We are the Frontrunner in IT Training.</li>
              <li>Our Students are Well Placed across the Globe.</li>
              <li>Thank You For Making us No.1</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/company/pic3.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/company/pic4.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/company/pic2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/company/pic1.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        </div>
      </div>
      <br />
      <hr style={{ color: "#088187" }} />
      <br />
      <div className="section2 container mt-5">
        <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 placement2">
          <Carousel>
            <Carousel.Item>
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/placement/user.png" alt="placement" />
                <div class="card-body">
                  <h4 class="card-title">Congratulations</h4>
                  <p class="card-text">Succesfully placed @</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/placement/user.png" alt="placement" />
                <div class="card-body">
                  <h4 class="card-title">Congratulations</h4>
                  <p class="card-text">Succesfully placed @</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/placement/user.png" alt="placement" />
                <div class="card-body">
                  <h4 class="card-title">Congratulations</h4>
                  <p class="card-text">Succesfully placed @</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/placement/user.png" alt="placement" />
                <div class="card-body">
                  <h4 class="card-title">Congratulations</h4>
                  <p class="card-text">Succesfully placed @</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/placement/user.png" alt="placement" />
                <div class="card-body">
                  <h4 class="card-title">Congratulations</h4>
                  <p class="card-text">Succesfully placed @</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/placement/user.png" alt="placement" />
                <div class="card-body">
                  <h4 class="card-title">Congratulations</h4>
                  <p class="card-text">Succesfully placed @</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/placement/user.png" alt="placement" />
                <div class="card-body">
                  <h4 class="card-title">Congratulations</h4>
                  <p class="card-text">Succesfully placed @</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/placement/user.png" alt="placement" />
                <div class="card-body">
                  <h4 class="card-title">Congratulations</h4>
                  <p class="card-text">Succesfully placed @</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 placement1">
          <span style={{ fontStyle: "italic" }}>Our mission is to provide</span>
          <h1 style={{ color: "#088187" }}>100% placements to students</h1>
          <p>
            Our mission is to provide 100% placements to students those who
            enrol for our specialised courses. Our Placement assistance starts
            with Resume preparation, Mock Interviews by real working
            professionals, Aptitude test training & Interviews. We will provide
            unlimited placement assistance till the student is placed
            satisfactorily.
          </p>
          <button className="btn">
            <a href="/#" style={{ textDecoration: "none", color: "#078f9c" }}>
              More
            </a>
          </button>
        </div>
        </div>
      </div>
      <br />
      <hr style={{ color: "#088187" }} />
      <br />
      <div className="section3">
        <div className="d-flex flex-wrap flex-row">
          <div className="rect" id="rect1">
            <TbUserSearch style={{ fontSize: "65px" }} />
            <br />
            <h3>ABOUT US</h3>
          </div>
          <div className="rect" id="rect2">
            <AiOutlineFileDone style={{ fontSize: "65px" }} />
            <br />
            <h3>PLACEMENTS</h3>
          </div>
          <div className="rect" id="rect3">
            <MdComputer style={{ fontSize: "65px" }} />
            <br />
            <h3>COURCES</h3>
          </div>
          <div className="rect" id="rect4">
            <HiLocationMarker style={{ fontSize: "65px" }} />
            <br />
            <h3>CONTACT</h3>
          </div>
        </div>
      </div>
      <br />
      <hr style={{ color: "#088187" }} />
      <br />
      <div className="section4 container">
        <h3>What more about ALTOS EDUHUB ?</h3>
        <div className="d-flex flex-row flex-wrap mt-5">
          <div className="rect">
            <GiOfficeChair style={{ fontSize: "45px", color: "white" }} />
            <br />
            <h4>Placement Assurance</h4>
            <br />
            <p>
              Our mission is to provide 100% placements to students those who
              enrol for our specialised courses. Our Placement assistance starts
              with Resume preparation, Mock Interviews by real working
              professionals, Aptitude test training & Interviews.
            </p>
          </div>
          <div className="rect">
            <TbCertificate2 style={{ fontSize: "45px", color: "white" }} />
            <br />
            <h4>Certification worth</h4>
            <br />
            <p>
              Our mission is to provide 100% placements to students those who
              enrol for our specialised courses. Our Placement assistance starts
              with Resume preparation, Mock Interviews by real working
              professionals, Aptitude test training & Interviews.
            </p>
          </div>
          <div className="rect">
            <GiTeacher style={{ fontSize: "45px", color: "white" }} />
            <br />
            <h4>Professional team & tutors</h4>
            <br />
            <p>
              Our mission is to provide 100% placements to students those who
              enrol for our specialised courses. Our Placement assistance starts
              with Resume preparation, Mock Interviews by real working
              professionals, Aptitude test training & Interviews.
            </p>
          </div>
        </div>
      </div>
      <br />
      <hr style={{ color: "#088187" }} />
      <br />
      <div className="section5 container mt-3">
        <div className="enguiry">
          <h4 style={{ textAlign: "center" , color:'white'}}>Any enquiry ?</h4>
          <form className="mt-5">
            <div className="d-flex flex-wrap flex-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email ID" />
            </div>
            <div className="d-flex flex-wrap flex-row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Course" />
            </div><br/>
            <button className="btn">SUBMIT</button>
          </form>
        </div>
      </div>
      <br />
      <hr style={{ color: "#088187" }} />
      <br />
      <div className="section6">
        <div className="content">
        <h1>Wait is over, now it's the time to start your career...</h1><br/>
        <button className="btn">Join now</button>
        </div>
      </div>
      <br />
      <hr style={{ color: "#088187" }} />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
