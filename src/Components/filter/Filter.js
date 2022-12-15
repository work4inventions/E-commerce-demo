import React from "react";
import "./styles.scss";
import { MdClose } from "react-icons/md";

function Filter({ close }) {
  return (
    <div className="modelBackground">
      <div className="modelContainer">
        <div className="topView">
          <p className="searchfiltertext">Search filters</p>
          <button
            className="buttonView"
            onClick={() => {
              close(false);
            }}
          >
            <MdClose size={30} />
          </button>
        </div>
        {/* Filter section */}
        <div className="second-view">
          <p className="sort-text">Sort By</p>
          <div className="first-filter">
            <div className="fire">
              <img
                src="https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-fire-vector-icon-in-flat-style-png-image_2382381.jpg"
                className="fire-image"
                alt=""
              />
            </div>
            <p className="open-text">open</p>
          </div>
        </div>
        <div className="second-view">
          <p className="text">cuisine</p>
          <div className="filter">

            <div className="Cuisine-box">
              <p className="open-text">All</p>
            </div>
            <div className="Cuisine-box1">
              <p className="open-text">Fast food</p>
            </div>
            <div className="Cuisine-box1">
              <p className="open-text">American food</p>
            </div>
            {/* <div className="Cuisine-box1">
            <p className="open-text">All</p>
            </div> */}
          </div>
          <div className="filter1">

            <div className="Cuisine-box1">
              <p className="open-text">Pizza</p>
            </div>
            <div className="Cuisine-box1">
              <p className="open-text">Assian</p>
            </div>
            <div className="Cuisine-box1">
              <p className="open-text">Dessert</p>
            </div>
            <div className="Cuisine-box1">
              <p className="open-text">Mexican</p>
            </div>
          </div>
          <div className="filter1">

            <div className="Cuisine-box1">
              <p className="open-text">Breakfast</p>
            </div>
          </div>
        </div>
        {/* apply button section */}
        <div className="last-btn">
          <button
            className="apply-btn"
            onClick={() => {
              close(false);
            }}
          >
            <p className="apply-filter">Apply Filter</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
