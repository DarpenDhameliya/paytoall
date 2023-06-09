import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../assets/images/paytoallnew.png";
import { FiMenu } from "react-icons/fi";
// import Modal from "react-bootstrap/Modal";
import Modallogin from "./Modal";

const LogoutHeader = ({ action }) => {
  const [show, setShow] = useState(false);

  const history = useHistory();
  const loginbtn = () => {
    setShow(true);
  };
  const handleClose = (call) => {
    setShow(false)
  }
  const handleLogin = (chielddata) => {
    // console.log(chielddata)
    setShow(false);
    localStorage.setItem("info", "darpen");
    history.push("/paytoall/prepaid");
  }

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
                    <Link to="/login/about">About</Link>
                  </li>

                  <li>
                    <Link to="/login/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/login/bank">Bank Info</Link>
                  </li>
                  <li>
                    <Link to="/login/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="paytoall_header_login_menu d-flex ">
                <ul>
                  <li>
                    <span onClick={loginbtn} className="Logout_header_loginli">
                      Login
                    </span>
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

      <Modallogin parentCallback={handleLogin}  logshow={show} parentcall={handleClose}/>
       {/* <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="Login_modal_body">
          <h4 className="login_header">Login</h4>
          <p className="login_p">We are glad to see you again!</p>
          <input type="text" placeholder="Mobile" />
          <input type="text" placeholder="password" />

          <div className="handle_login_forgor">
            <Link to="/login" className="forgorpas">
              Forgot Password ?
            </Link>
          </div>

          <button
            type="button"
            className="main-btn_login"
            onClick={handleClose}
          >
            Login
          </button>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default LogoutHeader;
