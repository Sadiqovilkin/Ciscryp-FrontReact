import React from "react";
import "./Wrapper.css";
import { FcRight } from "react-icons/fc";

const Wrapper = () => {
  return (
    <section id="wrapper">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="wrapper_content">
              <h3>Never miss a drop!</h3>
              <p>
                Subcribe to our super-exclusive drop list and be the first to
                know abour upcoming drops
              </p>
              <div className="wrp_items">
                <div className="item">
                  <div className="icon"> 01</div>
                  <p>Get more discount</p>
                </div>
                <div className="item">
                  <div className="icon"> 02</div>
                  <p>Get premium magazines</p>
                </div>
              </div>
              <div className="email">
                <input
                  type="email"
                  id="top_search"
                  name="search"
                  placeholder=" Enter your email"
                />
                <FcRight />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="wrapper_img">
              <img
                src="https://chisnghiax.com/ciscryp/static/media/SVG-subcribe2.efb832b25bd6eca32484.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
