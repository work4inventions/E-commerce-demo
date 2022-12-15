import React, { useEffect, useState } from "react";
import axios from "axios";
import { Apis } from '../../utils/environment';
import "./details.scss";
import Default from "../../../src/assets/Images/default.jpg";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { SiAiohttp } from "react-icons/si";
import { HiShoppingCart } from "react-icons/hi";
import { useParams } from "react-router-dom";
function DetailsPage() {
  const [res, setRes] = useState([]);
  const [menu, setMenu] = useState([]);

  const { name } = useParams();
  const fetchRes = () => {
    return axios
      .get(Apis.restaurantDetails)
      .then((response) => {
        const filterData = response.data.restaurantDetails.filter((data) => {
          return data.restaurantName === name;
        });
        setRes(filterData);
      });
  };
  const fetchMenu = () => {
    let menu = [];
    axios
      .get(Apis.menu)
      .then((response) => {
        const filterData = response.data.menu.forEach((data) => {
          if (data.restaurantName.includes(name)) {
            console.log(true);
            menu.push(data);
          }
        });
      });
    setMenu(menu);
  };
  useEffect(() => {
    fetchRes();
    fetchMenu();
  }, []);

  return (
    <div className="nav-container">
      <div className="details-res">
        {res.map((item, index) => {
          return (
            <div className="restaurants-container-details">
              <div className="shopping-container">
                <HiShoppingCart size={25} />
              </div>
              <div className="restaurants-container mt-4 d-flex">
                <div className="details-container">
                  <p className="burger-mania">{item.restaurantName}</p>
                  <p className="details-restaurant">
                    {item.restaurantDescription}
                  </p>
                  <div className="sub-container">
                    <div className="timer">
                      <MdOutlineWatchLater size={22} />
                      <p>{item.openingHours}</p>
                    </div>
                    <div className="timer">
                      <BsTelephoneFill size={20} />
                      <p>{item.contactNumber}</p>
                    </div>
                    <div className="timer">
                      <SiAiohttp size={20} />
                      <p>{item.websiteUrl}</p>
                    </div>
                  </div>
                </div>
                <div className="image-res">
                  <img src={item.restaurantImage} alt="logo" className="ms-2" />
                </div>
              </div>
              <div>
                <div className="menu-container">
                  <div className="d-flex gap-4">
                  <div className="itemCategory">
                    <p>All</p>
                  </div>
                  <div className="itemCategory-other">
                    <p>Baked (2)</p>
                  </div>
                  <div className="itemCategory-other">
                    <p>Sweet (4)</p>
                  </div>
                  <div className="itemCategory-other">
                    <p>Hot Dish (29)</p>
                  </div>
                  </div>
                  <h4>Menu</h4>
                  <div className="row">
                    {menu.map((item, index) => {
                      return (
                        <div className="menu-item">
                          <img
                            src={item.itemPhoto ? item.itemPhoto : Default}
                            alt="logo"
                            className="ms-2"
                          />
                          <div className=" d-flex justify-content-between mt-2">
                            <p className="item-name">{item.itemName}</p>
                            <p className="item-price">£{item.itemCost}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailsPage;
