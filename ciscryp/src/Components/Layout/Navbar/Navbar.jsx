import React from "react";

import styledNav from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5">
            <div className={styledNav.left_nav}>
              <div className="logo">
                <img
                  src="https://chisnghiax.com/ciscryp/static/media/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg"
                  alt=""
                />
              </div>
              <div className={styledNav.nav_search}>
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
            <div className={styledNav.right_nav}>
              <ul>
                <li>
                  Discover<BiChevronDown></BiChevronDown>
                </li>
                <li>Help center</li>
              </ul>
              <div className={styledNav.border_alone}></div>
              <div className={styledNav.far_right_nav}>
                <div className={styledNav.dl_mode}>
                  <BsMoonFill />
                </div>
                <div className={styledNav.nav_blue_btn}>Create</div>
                <a className={styledNav.connect}>Connect Wallet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
