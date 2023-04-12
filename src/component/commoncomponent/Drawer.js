import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/paytoall1.png";
import { FiChevronDown } from "react-icons/fi";

function Drawer({ drawer, action }) {
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
                <div className="offcanvas-brand text-center mb-20">
                  <img src={logo} alt="" />
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu pl-0">
                    <li
                      onClick={(e) => handler(e, "Report", size)}
                      id="Report"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <FiChevronDown />
                      </span>
                      <Link to="#">Report</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "Report" ? size : "0px",
                        }}
                      >
                        <li>
                          <Link to="/paytoall/othertrancation">Other Transaction</Link>
                        </li>
                        <li>
                          <Link to="/paytoall/dmrtrancation">DMR Transaction</Link>
                        </li>
                        <li>
                          <Link to="/paytoall/walletcredit">Wallet Credit/Debit</Link>
                        </li>
                        <li>
                          <Link to="/paytoall/wallet">Wallet Details</Link>
                        </li>
                        <li>
                          <Link to="/paytoall/ledger">Ledger Report</Link>
                        </li>
                        <li>
                          <Link to="/paytoall/commission">Commission Report</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "rs", size)}
                      id="rs"
                      className="menu-item-has-children active"
                    >
                      <Link to="/"> Refill Request</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "os", size)}
                      id="os"
                      className="menu-item-has-children active"
                    >
                      <Link to="/"> OS </Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "wallet", size)}
                      id="wallet"
                      className="menu-item-has-children active"
                    >
                      <Link to="/"> Wallet </Link>
                    </li>
                  </ul>
                  <ul className="offcanvas_main_menu setonly_mobile">
                    <li
                      onClick={(e) => handler(e, "account", size)}
                      id="account"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <FiChevronDown />
                      </span>
                      <Link to="/">Name</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "account" ? size : "0px",
                        }}
                      >
                        <li>
                          <Link to="/paytoall/profile">My Profile</Link>
                        </li>
                        <li>
                          <Link to="/paytoall/changepin">Change Pin</Link>
                        </li>
                        <li>
                          <Link to="/paytoall/mycommission">My Commission</Link>
                        </li>
                        <li>
                          <Link to="/paytoall/ticket">My Ticket</Link>
                        </li>
                        <li>
                          <Link to="/">Logout</Link>
                        </li>
                      </ul>
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
}

export default Drawer;
