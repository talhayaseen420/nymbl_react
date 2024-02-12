import React from 'react';
import "./nav.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark">
      <a className="navbar-brand" href="/">
        <i className="fa fa-cube"></i>NYMBL<b>Company</b>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarCollapse"
        className="collapse navbar-collapse justify-content-start"
      >
        <div className="navbar-nav">
          <a href="/" className="nav-item nav-link">
            <i className="fa fa-home"></i>
            <span>Home</span>
          </a>
          <a href="/Appointments" className="nav-item nav-link">
            <i className="fa fa-calendar"></i>
            <span>Appointments</span>
          </a>
          <a href="/Billing" className="nav-item nav-link">
            <i className="fa fa-bitcoin"></i>
            <span>Billing</span>
          </a>
          <a href="/TreatmentPlans" className="nav-item nav-link">
            <i className="fa fa-tasks"></i>
            <span>TreatmentPlans</span>
          </a>
          <a href="/PatientHistory" className="nav-item nav-link">
            <i className="fa fa-history"></i>
            <span>PatientHistory</span>
          </a>
        </div>
        <div className="navbar-nav ml-auto">
          <div className="nav-item dropdown bell d-none d-xl-flex">
            <a data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">
              <i className="fa fa-bell"></i>
              <span className="badge badge-light">2</span>
            </a>
            <div className="dropdown-menu">
              <a>John invited you</a>
              <div className="divider dropdown-divider"></div>
              <a>You have a message from Peter</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action">
              <img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar" alt="Avatar" />
              {' '}
              {/* {'username'} <b className="caret"></b> */}
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item">
                <i className="fa fa-sliders"></i> Settings
              </a>
              <div className="divider dropdown-divider"></div>
              <a className="dropdown-item" href="/login" onClick={() => {}}>
                <i className="fa fa-sign-out">&#xE8AC;</i> Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
