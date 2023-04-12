import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/paytoall1.png";
import { FiChevronDown } from "react-icons/fi";

const LogoutDrawer = ({ drawer, action }) => {
  const [size, setSize] = useState("0px");
  const [item, setItem] = useState("Report");
  const handler = (e, value, sizes) => {
    e.preventDefault();
    if (sizes > "0px") {
      setSize("0px");
      console.log(size);
    } else {
      const getItems = document.querySelectorAll(`#${value} li`).length;

      if (getItems > 0) {
        setSize(`${43 * getItems}px`);
        setItem(value);
      }
    }
  };
  return (
    <>
      <div
        onClick={(e) => action(e)}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="offcanvas-brand text-center mb-40">
                  <img src={logo} alt="" />
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={(e) => handler(e, "about", size)}
                      id="rs"
                      className="menu-item-has-children active"
                    >
                      <Link to="/"> About</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "service", size)}
                      id="os"
                      className="menu-item-has-children active"
                    >
                      <Link to="/"> Service</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "bankinfo", size)}
                      id="wallet"
                      className="menu-item-has-children active"
                    >
                      <Link to="/"> Bank Info </Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact", size)}
                      id="wallet"
                      className="menu-item-has-children active"
                    >
                      <Link to="/"> Contact </Link>
                    </li>
                  </ul>
                  <ul className="offcanvas_main_menu setonly_mobile">
                    <li
                      onClick={(e) => handler(e, "login", size)}
                      id="Login"
                      className="menu-item-has-children active"
                    >
                      <Link to="/"> Login </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutDrawer;
