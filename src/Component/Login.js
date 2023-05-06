import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "../Style/Login.css";

function Login() {
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="images/logo.png"
                style={{ width: "185px" }}
                alt="logo"
              />
            </div>

            <p className="mt-5" style={{ color: "#088187" }}>
              Please login to your account
            </p>

            <MDBInput
              wrapperClass="mb-4"
              id="form1"
              type="email"
              placeholder="Email address"
            />
            <MDBInput
              wrapperClass="mb-4"
              id="form2"
              placeholder="Password"
              type="password"
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <button className="form-control signin"><a
                  href="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign in
                </a></button><br/>
              <a className="text-muted mt-5" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0" style={{ color: "white" }}>
                Don't have an account?
              </p>
              <button className="btn mx-2 login-btn">
                <a
                  href="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Signup
                </a>
              </button>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">
                We are focused on providing advanced level software training
                like Big Data Training, Hadoop Training, Data Science Training,
                Python Training, Machine Learning Training, Selenium Training in
                Cochin Kerala.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
