import React from "react";
import support from "../../../assets/images/support.png";

const SupportPage = () => {
  return (
    <>
      <section className="paytoall_about_content">
        <div className="paytoall_about_maincontent">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="paytoall_prepaid_contact ">
                  <h3 className="text-center mb-4">Send a Request</h3>
                  <hr />
                  <div className="support_inquery">
                    <lable>Subject : </lable>
                    <input type="text" placeholder="Subject" />
                    <lable>Your Name : </lable>
                    <input type="text" placeholder="Name" />
                    <lable>Your Email : </lable>
                    <input type="email" placeholder="Email" />
                    <lable>Mobile Number : </lable>
                    <input type="text" placeholder="Number" />
                    <lable>Your Query : </lable>
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="3"
                      cols="50"
                    />
                    <div>

                    <button
                      type="button"
                      className="main-btn mt-4"
                      // onClick={handleClose}
                    >
                      Submit
                    </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <img src={support} alt="supportimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;
