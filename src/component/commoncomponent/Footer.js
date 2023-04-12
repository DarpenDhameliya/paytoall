import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faThumbsUp,
  // faHeadphones,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const [userInsert, setUserInsert] = useState(false);

  const useinfo = localStorage.getItem("info");
  useEffect(() => {
    if (useinfo === null) {
      setUserInsert(false);
    } else {
      setUserInsert(true);
    }
  }, [useinfo]);

  return (
    <>
      <section className="paytoall_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="paytoall_footer_div">
                <FontAwesomeIcon
                  icon={faLock}
                  className="paytoall_footer_icon"
                />
                <h4 className="paytoall_footer_h4">100% Secure Payments</h4>
                <p className="paytoall_footer_p">
                  Moving Your Card to a Much More Secure Place
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="paytoall_footer_div">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="paytoall_footer_icon"
                />
                <h4 className="paytoall_footer_h4">Trust Pay</h4>
                <p className="paytoall_footer_p">
                  100% Payment Protection. Easy Return Policy
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="paytoall_footer_div">
                <FontAwesomeIcon icon={faHeadset} className="paytoall_footer_icon"/>
                <h4 className="paytoall_footer_h4">24 X 7 </h4>
                <p className="paytoall_footer_p">
                  We're here to help. Have a query and need help ?{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="paytoall_footer_copyright">
        <ul className={`nav justify-content-center ${userInsert ? 'handle_footer_data' : ''}`}>
          <li className="nav-item">
            {" "}
            <Link className="nav_link_footer" to="/login/about">
              About Us
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav_link_footer" to="/login/faq">
              Faq
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link
              className="nav_link_footer"
              to="/login/contact"
            >
              Contact
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav_link_footer" to="/login/support">
              Support
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link
              className="nav_link_footer"
              to="/login/terms"
            >
              Terms of Use
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link
              className="nav_link_footer"
              to="/login/privacy"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
        <p>Copyright © 2023 Paytoall. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
