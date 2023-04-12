import React from "react";
import aboutimg from "../../../assets/images/about.png";

const AboutPage = () => {
  return (
    <>
      <section className="paytoall_about_content">
        <div className="paytoall_about_maincontent">
          <div className="container">
            <div className="paytoall_prepaid">
              <div className="d-flex justify-content-center ">
                <img src={aboutimg} alt="about_image" />
              </div>
              <div className="about_contant">
                <h2>About</h2>
                <p className="pt-3">
                  Your mobile recharge either prepaid or postpaid is just a
                  click away with PayToAll PAY!, PayToAll PAY is your one-stop
                  shop solution for online recharge.
                </p>
                <p className="pt-3">
                  Our specialty is to provide the recharge without gmail,
                  facebook interface. PayToAll PAY is one of the best recharge
                  level website in the India. PayToAll PAY gives you to multiple
                  operator recharge in single balance. It means the retailer
                  does't have to invest separately for each operator and hence
                  saving the hassle of maintaining separate sims and mobiles for
                  different operators.
                </p>
                <p className="pt-3">
                  The recharge solutions have been developed and scrubbed to
                  ensure its availability at no extra cost to the end user so
                  that the user can transact securely from any location at his
                  convenience. We would like to take the opportunity to thank
                  our patrons for helping us help them and essentially for
                  shaping our growth.
                </p>
                <p className="pt-3">
                  PayToAll PAY Service came into existence as one of the fastest
                  online mobile recharge service provider in India. We believe
                  in providing quality services to our customers and are
                  constantly working towards it. As a result we are always one
                  step ahead of our competitors and have been able to gain
                  popularity among our users within such a short span of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
