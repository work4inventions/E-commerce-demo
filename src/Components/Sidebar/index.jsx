import React from "react";
import "./sidebar.scss";
import Logo from "../../assets/Images/footerlogo.svg";
import Order from "../../assets/Images/ordertimer.svg";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CgLoadbarDoc } from "react-icons/cg";
import { MdMailOutline, MdClose } from "react-icons/md";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { HiArrowSmRight } from "react-icons/hi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function SideBar(props) {
  let location = useLocation();
  const CURRENT_WB_NAME = location.pathname.split("/")[1];
  const { onHandlebar, active } = props;
  return (
    <div className={`${!active && "inactive"} sidebar-container`}>
      <div className="close-btn" onClick={onHandlebar}>
        {active ? <BiChevronLeft size={40} color="white" /> : <BiChevronRight size={40} color="white" />}
      </div>
      <div className="sidebar-wrapper">
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo" />
          {active && <p>Pomo & co</p>}
        </div>
        <ul>
          <li className={CURRENT_WB_NAME === "home" && "active"}>
            <Link to={"./home"} className="list-item">
              <AiOutlineHome className={active && "sidler-icon"} size={25} />
              {active && "Home"}
            </Link>
          </li>
          <li className={CURRENT_WB_NAME === "orders" && "active"}>
            <Link to={"./orders"} className="list-item">
              <CgLoadbarDoc className={active && "sidler-icon"} size={28} />
              {active && "Orders"}
            </Link>
          </li>
          <li className={CURRENT_WB_NAME === "notifications" && "active"}>
            <Link to={"./notifications"} className="list-item">
              <MdMailOutline className={active && "sidler-icon"} size={25} />
              {active && "Notifications"}
              {active && <div className="noti-icn">2</div>}
            </Link>
          </li>
          <li className={CURRENT_WB_NAME === "helpsupport" && "active"}>
            <Link to={"./helpsupport"} className="list-item">
              <AiOutlineQuestionCircle
                className={active && "sidler-icon"}
                size={25}
              />
              {active && "HelpSupport"}
            </Link>
          </li>
          <li className={CURRENT_WB_NAME === "settings" && "active"}>
            <Link to={"./settings"} className="list-item">
              <AiOutlineSetting className={active && "sidler-icon"} size={25} />
              {active && "Settings"}
            </Link>
          </li>
        </ul>
        {!active && (
          <div className="order-icon">
            <img src={Order} alt="logo" className="order-card-icon" />
          </div>
        )}
        {active && (
          <div className="order-card">
            <MdClose className="close-img" />
            <div className="order-icon">
              <img src={Order} alt="logo" className="order-card-icon" />
            </div>
            <p className="order-ready">Your Order is now Ready </p>
            <div className="Splint-Doumo">
              <p>Splint Doumo</p>
              <p>Order Id: #ED564F</p>
            </div>
            <div className="order-Details">
              <p className="Details">Details</p>
              <HiArrowSmRight size={25} className="right-arrow" />
            </div>
          </div>
        )}
        {active && (
          <div className="email-container">
            <div>
              <p className="name">Mark Clarke</p>
              <p className="name-email">markclarke@gmail.com</p>
            </div>
            <div className="down-up">
              <HiOutlineChevronUpDown size={35} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
