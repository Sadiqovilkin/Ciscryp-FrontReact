import React, { useState } from "react";
import SearchStyled from "./Search.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillAlarmFill } from "react-icons/bs";
import Searchmock from "./SearchMock";
const Search = () => {
  const [filteredList, setFilteredList] = new useState(Searchmock);
  const filterBySearch = (event) => {
    const query = event.target.value;

    var updatedList = [...Searchmock];

    updatedList = updatedList.filter((item) => {
      return item.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
  return (
    <section className={SearchStyled.searchcart}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-5">
            <div className={SearchStyled.header}>
              <h3>Featured NFTs</h3>
              <p>Discover the most outstanding NFTs in all topics of life.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className={SearchStyled.categories}>
              <ul>
                <li>
                  {" "}
                  <a href="#">All NFTs</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Art</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Musics</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Sports</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Photography</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={SearchStyled.searchfilter}>
              <input
                type="text"
                onChange={filterBySearch}
                id="srcbtn"
                placeholder="Search"
              />
              <a href="">
                Filter <BsArrowUpShort />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {filteredList &&
            filteredList.map((el) => (
              <div className="col-lg-3 g-4" key={el.id}>
                <div className={SearchStyled.card}>
                  <div className={SearchStyled.card_img}>
                    <img src={el.ImgSrc} alt="" />
                    <span>
                      <BsFillCameraVideoFill />
                    </span>
                  </div>
                  <div className={SearchStyled.card_content}>
                    <h2>{el.Name}</h2>
                    <div className="border-top pt-3">
                      <div className={SearchStyled.price}>
                        <div className={SearchStyled.fieldset}>
                          <p>{el.Price} ETH</p>
                          <span>Price</span>
                        </div>

                        <a href="">
                          {" "}
                          <BsFillAlarmFill />
                          {el.Hour} hours left
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
