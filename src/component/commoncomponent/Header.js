import React, { useState } from "react";
import logo from "../../assets/images/paytoallnew.png";
import { Link, useHistory } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = ({ action }) => {
  const [isHovering, setIsHovering] = useState(false);
  const history = useHistory();
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handlelogout = () => {
    localStorage.removeItem("info");
    history.push("/login");
  };

  return (
    <>
      <header className="paytoall_header">
        <div className="container">
          <div className="paytoall_header_nav">
            <div className="paytoall_header_logo">
              <Link to="/">
                <img src={logo} alt="" className="handle_headerimg" />
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <div className="paytoall_header_main_menu d-flex ">
                <ul>
                  <li>
                    <Link to="#">Report</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/paytoall/othertrancation">
                          Other Transaction
                        </Link>
                      </li>
                      <li>
                        <Link to="/paytoall/dmrtrancation">
                          DMR Transaction
                        </Link>
                      </li>
                      <li>
                        <Link to="/paytoall/walletcredit">
                          Wallet Credit/Debit
                        </Link>
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
                  <li>
                    <Link to="/">REFILL REQUEST</Link>
                  </li>

                  <li>
                    <Link to="/">OS</Link>
                  </li>
                  <li>
                    <Link to="/">WALLET</Link>
                  </li>
                </ul>
              </div>
              <div className="paytoall_header_main_menu1 d-flex ">
                <ul>
                  <li>
                    <Link to="#" className="handle_leftborder">
                      Nilesh Sutariya
                    </Link>
                    <ul className="sub-menu_name">
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
                        <span onClick={handlelogout}>Logout</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="paytoall_header_mobile text-right hidetogglebtn">
                <div
                  className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                  onClick={(e) => action(e)}
                >
                  <FiMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`marquee ${isHovering ? "marquee-hover" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="marque_heading">
          {" "}
          PAYTOALL WORKING FINE. IF YOU HAVE ANY QUERY YOU MAY CONTACT ON 9099
          9199 47.{" "}
        </p>
      </div>
    </>
  );
};

export default Header;
