import React, { useEffect, useState } from "react";
import axios from "axios";
import { Apis } from '../../utils/environment'
import "./home.scss";
import Logo from "../../../src/assets/Images/icon.svg";
import { HiOutlineChevronUpDown, HiShoppingCart } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import { Category } from "../../utils/common";
import { Link } from "react-router-dom";
import Model from "../../Components/filter/Filter";

function Home() {
  const [openModel, setOpenModel] = useState(false);
  const [res, setRes] = useState([]);
  const fetchData = () => {
    return axios
      .get(Apis.restaurants)
      .then((response) => setRes(response.data.allRestaurants));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="nav-container">
      <div className="main-container">
        <img src={Logo} alt="logo" className="logo" />
        <p className="Da-Otto mb-0"> Da Otto</p>
        <HiOutlineChevronUpDown size={25} className="down-up-arrow" />
        <div className="search">
          <AiOutlineSearch className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            maxLength="50"
            size="15"
            placeholder="Search for Restaurants  (Press Enter to search)"
          />
        </div>
        <div
          className="filter-container"
          onClick={() => {
            setOpenModel(true);
          }}
        >
          <BiFilter size={30} />
        </div>
        {openModel && <Model close={setOpenModel} />}
        <div className="shopping-container">
          <HiShoppingCart size={25} />
        </div>
      </div>
      <h4 className="category-title">Category</h4>
      <div className="d-flex mt-4">
        {Category.map((item, index) => {
          return (
            <div className="d-flex align-items-center justify-content-center category">
              <img src={item.img} alt="logo" className="ms-2" />
              <p className="mb-0">{item.name}</p>
            </div>
          );
        })}
      </div>
      <h4 className="mt-5">Restaurants</h4>
      <div className="row">
        {res.map((item, index) => {
          return (
            <Link
              to={`/details/${item.restaurantName}`}
              className="restaurants-container mt-4 "
            >
              <img src={item.restaurantImage} alt="logo" className="ms-2" />
              <div className="d-flex justify-content-between mt-2">
                <p className="burger-mania">{item.restaurantName}</p>
                <div
                  className={item.isOpen ? "status open-now" : " status closed"}
                >
                  <p>{item.isOpen ? "open now" : "closed"}</p>
                </div>
              </div>
              <div>
                <p className="details-restaurant">
                  {item.restaurantDescription}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
