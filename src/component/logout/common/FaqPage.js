import React, { useState } from "react";
import faqimage from "../../../assets/images/faqbanner.png";
import Accordion from "react-bootstrap/Accordion";

const FaqPage = () => {
  // const [tabshow, setTabshow] = useState("");
  // const opencoallps = (data) => {
  //   setTabshow(data);
  // };

  return (
    <>
      <section className="paytoall_about_content">
        <div className="paytoall_about_maincontent">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center flex-column">
                <h3>Help</h3>
                <h5>We are happy to answer your questions</h5>
              </div>
              <div className="col-md-6 col-sm-12 ">
                <img
                  src={faqimage}
                  alt="faqimage"
                  className="paytoall_faqimage"
                />
              </div>
            </div>
            <div className="paytoall_terms">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
