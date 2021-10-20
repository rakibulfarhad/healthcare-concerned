import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Doctor Solution</h1>
                
                <p className="mt-4 ">
                  <small>
                  DOCTOR SOLUTION is an international standard hospital with the facilities of 05 ‘Centers of Excellence’. The ‘Center of Excellences’ are Gastro Liver Center, Mother & Child Care Center, Brain & Spine Center, Nephrology & Urology Center, Bone & Joint Center and other most modern ancillary & specialized Services.
                  </small>
                </p>

                <p className="mt-5">
                  <small>Doctor-Solution © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Doctors</li>
                  <li className="footer-menu">About us</li>
                  <li className="footer-menu"> Contact us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  
                  <div>
                    <h5> Cell: +1 8 800 123 45 67</h5>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div>
                    <p>
                      H-43, block-c, Road No-8 ,
                      <br />Niketon, Gulshan-1, Dhaka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;