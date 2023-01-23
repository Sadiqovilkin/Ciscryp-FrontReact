import React from "react";
import "./Carts.css";
import { FcApproval } from "react-icons/fc";
import { AiOutlineDown } from "react-icons/ai";
import CartMock from "./CartsMock";
const Carts = () => {
  return (
    <section id="creator_carts">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="popular">
              <span>Popular</span>
              <span>
                Creators <AiOutlineDown style={{ fontSize: "25px" }} />
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {CartMock &&
            CartMock.map((el) => (
              <div className="col-lg-3 g-3" key={el.id}>
                <div className="cart">
                  <div className="imgs">
                    <img src={el.ImgSrc1} alt="" />
                    <img src={el.ImgSrc2} alt="" />
                    <img src={el.ImgSrc3} alt="" />
                    <div className="img-absolute">
                      <img id="center-img" src={el.CreatorImg} alt="" />
                    </div>
                  </div>
                  <div className="cart_body">
                    <div className="inner_cart">
                      <div className="creator_name">
                        <p>
                          {el.Name} <FcApproval />
                        </p>
                        <span>@Creator </span>
                      </div>
                      <a href="#">Follow</a>
                    </div>
                  </div>
                  <div className="cart_footer">
                    <p>
                      X-Metaverse is a Star Wars game based on NFT+ blockchain
                      exploration, mining, trading ...
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4">
            <div className="btns">
              <button>Show me more</button>
              <button id="blues">Became a author</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carts;
