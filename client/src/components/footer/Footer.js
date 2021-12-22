import React from "react";

const Footer = () => {
  return (
    <div className="wrapper__div">
      <div className="fluid-container">
        <footer className="py-5">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    Home
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    Features
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    About
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    Home
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    Features
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    About
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    Home
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    Features
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p href="#" className="nav-link p-0 text-muted">
                    About
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="">
            <p className="text-center">
              &copy; 2021 Company, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
