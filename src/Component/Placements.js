import React from "react";
import "../Style/Placements.css";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function Placements() {
  return (
    <div className="placement">
      <div className="nav" style={{ marginTop: "0px" }}>
        <NavigationBar />
      </div>
      <div className="container content" style={{ marginTop: "100px" }}>
        <div className="part1">
          <h1>Placements</h1>
          <h5>
            Our mission is to provide 100% placements to students those who
            enrol for our specialised courses.
          </h5>
          <br />
          <p>
            Our mission is to provide 100% placements to students those who
            enrol for our specialised courses. Our Placement assistance starts
            with Resume preparation, Mock Interviews by real working
            professionals, Aptitude test training & Interviews. We will provide
            unlimited placement assistance till the student is placed
            satisfactorily.
          </p>
          <br />
          <h5>
            We had a 100% placement rate for those who enrolled in our most
            recent batch.
          </h5>
        </div>
        <hr style={{ color: "#088187" }} />
        <div className="part2 mt-5">
          <div className="d-flex flex-row flex-wrap placed">
            <div className="placed1" style={{marginBottom:'10px'}}>
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
            <div className="placed1">
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap placed">
            <div className="placed1" style={{marginBottom:'10px'}}>
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
            <div className="placed1">
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap placed">
            <div className="placed1" style={{marginBottom:'10px'}}>
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
            <div className="placed1">
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap placed">
            <div className="placed1" style={{marginBottom:'10px'}}>
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
            <div className="placed1">
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap placed">
            <div className="placed1" style={{marginBottom:'10px'}}>
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
            <div className="placed1">
              <div className="d-flex flex-row flex-wrap">
                <div className="image">
                  <img
                    src="images/placement/user.png"
                    alt="placement"
                    height="100px"
                  />
                </div>
                <div className="details">
                  <h6>Arathy</h6>
                  <span>Junior Python Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "#088187" }} />
      <Footer/>
    </div>
  );
}

export default Placements;
