import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  return (
    <>
      <section className="paytoall_about_content">
        <div className="paytoall_about_maincontent">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="paytoall_prepaid_contact">
                  <iframe
                    className="handlemap"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2511780843033!2d72.83197811493592!3d21.2218860858941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f50264611d1%3A0x76746ef930af1752!2sSoftStorm%20Technosys%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1585860623345!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="paytoall_contact_right">
                  <h3>Get in touch</h3>
                  <hr />
                  <p>For Customer Support and Query, Get in touch with us : </p>
                  <div className="featured-box">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="contact_icon"
                    />
                    <div className="ml-3">
                      <h4>PayToAll</h4>
                      <p className="pt-2">
                        Amby Valley Arcade, Manisha Garnala, opp. Santosa
                        Height, Uttran, Surat, Gujarat 394105
                      </p>
                    </div>
                  </div>
                  <div className="featured-box">
                    <FontAwesomeIcon icon={faPhone} className="contact_icon" />
                    <div className="ml-3">
                      <h4>Telephone</h4>
                      <p className="pt-2">(+91) 9099 9199 47</p>
                    </div>
                  </div>
                  <div className="featured-box">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="contact_icon"
                    />
                    <div className="ml-3">
                      <h4>Business Inquiries</h4>
                      <p className="pt-2">paytoall.in@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
