import StyledFooter from "./Footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-top">
      <div className="container">
        <div className="row justify-content-between mb-5 pb-5">
          <div className="col-lg-3 col-6">
            <div className={StyledFooter.logo}>
              <img
                src="https://chisnghiax.com/ciscryp/static/media/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg"
                alt="Logo"
              />
            </div>
            <ul className={StyledFooter.logos}>
              <li>
                <img
                  src="https://chisnghiax.com/ciscryp/static/media/facebook.8291c7f7c187e8f09292cced2ed0278d.svg"
                  alt=""
                />
                Facebook
              </li>
              <li>
                <img
                  src="https://chisnghiax.com/ciscryp/static/media/vimeo.539e4985d2c0dced329fe8bfebf273db.svg"
                  alt=""
                />
                Vimeo
              </li>
              <li>
                <img
                  src="https://chisnghiax.com/ciscryp/static/media/youtube.bb2387598b5621f3a2e92ab928da4fe0.svg"
                  alt=""
                />
                Youtube
              </li>
              <li>
                <img
                  src="https://chisnghiax.com/ciscryp/static/media/telegram.5acad1587076bc12320cadff0f4aa3f3.svg"
                  alt=""
                />
                Telegram
              </li>
              <li>
                <img
                  src="https://chisnghiax.com/ciscryp/static/media/twitter.f56ce1bc9eb5120250ac80ed561cf82f.svg"
                  alt=""
                />
                Twitter
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <ul>
              <h6>About</h6>
              <li>Style Guide</li>
              <li>Features</li>
              <li>Contact</li>
              <li>Contact</li>
              <li>404</li>
              <li>Get Theme</li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <ul>
              <h6>Features</h6>
              <li>Demos</li>
              <li>Light version</li>
              <li>Color version</li>
              <li>Partial version</li>
              <li>Partial version</li>
              <li>Dark version</li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <ul>
              <h6>Membership</h6>
              <li>Account</li>
              <li>Membership</li>
              <li>Subscribe</li>
              <li>Subscribe</li>
              <li>Tags</li>
              <li>Authors</li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <ul>
              <h6>Membership</h6>
              <li>Account</li>
              <li>Membership</li>
              <li>Subscribe</li>
              <li>Tags</li>
              <li>Authors</li>
              <li>Authors</li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center pb-4">
          <div className="col-lg-6">
            <p>© 2022 Qurno. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
