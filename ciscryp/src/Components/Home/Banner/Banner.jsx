import React from "react";
import "./Banner.css";
import { FcApproval } from "react-icons/fc";
import { MdOutlineTimer } from "react-icons/md";
const Banner = () => {
  return (
    <section id="timer_cart">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 banner_content">
            <div className="cart-time">
              <h3>Wolf Face #1</h3>
              <div className="middle_side">
                <div className="creator">
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-1.90baa8cc883db8970fda.png"
                    alt=""
                  />
                  <div className="creator_txt">
                    <span>Creator</span>
                    <p>
                      Jane Cooper <FcApproval />
                    </p>
                  </div>
                </div>

                <div className="collection">
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/collection.6624a7ff4b0f48fc6e24.png"
                    alt=""
                  />
                  <div className="inner_left_cart_text">
                    <span>Collection</span>
                    <p>Marscapes </p>
                  </div>
                </div>
              </div>

              <div className="current">
                <span id="price">1.000 ETH</span>
                <span id="value">(≈ $3,221.22)</span>
              </div>

              <p id="ending_time">
                <MdOutlineTimer /> Auction ending in:
              </p>
              <div className="timer">
                <div className="time">
                  <p>21</p>
                  <span>Days</span>
                </div>
                <div className="time">
                  <p>4</p>
                  <span>hours</span>
                </div>
                <div className="time">
                  <p>67</p>
                  <span>mins</span>
                </div>
                <div className="time">
                  <p>21</p>
                  <span>secs</span>
                </div>
              </div>

              <div className="left_footer">
                <a href="#" id="bid">
                  Place a bid
                </a>
                <a href="#" id="items">
                  View item
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 banner_img">
            <img
              src="https://chisnghiax.com/ciscryp/static/media/large1.501744b97da258c84cca.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
