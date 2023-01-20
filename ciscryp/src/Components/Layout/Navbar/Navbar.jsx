import React from "react";

import StyledNavbar from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5">
            <div className={StyledNavbar.left_nav}>
              <div className="logo">
                <img
                  src="https://chisnghiax.com/ciscryp/static/media/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg"
                  alt=""
                />
              </div>
              <div className={StyledNavbar.nav_search}>
                <input
                  type="search"
                  id="top_search"
                  name="search"
                  placeholder="Search items"
                />
                <BsSearch />
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className={StyledNavbar.right_nav}>
              <ul>
                <li>
                  Discover<BiChevronDown></BiChevronDown>
                </li>
                <li>Help center</li>
              </ul>
              <div className={StyledNavbar.border_alone}></div>
              <div className={StyledNavbar.far_right_nav}>
                <div className={StyledNavbar.dl_mode}>
                  <BsMoonFill />
                </div>
                <div className={StyledNavbar.nav_blue_btn}>Create</div>
                <a className={StyledNavbar.connect}>Connect Wallet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
