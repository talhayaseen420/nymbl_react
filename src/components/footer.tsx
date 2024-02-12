import React from 'react';
import "./footer.css"

function Footer() {
  return (
    <footer className="footer-main">
      <div>
        <div className="container">
          <div className="cta d-block d-md-flex align-items-center px-5">
            <div>
              <h3 className="text-dark mb-0">Let's get started!</h3>
            </div>
            <div className="ml-auto">
              <a href="#" className="btn btn-dark py-2 px-3">
                Contact us
              </a>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm">
              <span>Copyright © nymbl-company 2023</span>
            </div>
            <div className="col-md-3">
              <h3>Follow us</h3>
              <ul className="list-unstyled social">
                <li>
                  <a href="#">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
