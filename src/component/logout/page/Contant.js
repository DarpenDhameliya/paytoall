import React from "react";
import mob from "../../../assets/images/1.png";
import Mobile1 from "../../../assets/images/mobile.png";
import data from "../../../assets/images/datacard.png";
import dth from "../../../assets/images/dth.png";
import recharge from "../../..//assets/images/postpaid.png";
import utility from "../../../assets/images/utility_pay.png";
import mony from "../../../assets/images/money_transfer.png";
import appstore from '../../../assets/images/app-store.png';
import playstore from '../../../assets/images/google-play-store.png'
const Contant = () => {
  return (
    <>
      <section className="paytoall_content">
        <div className="container">
          <div className="paytoall_prepaid">
            <div className="row home_withoutlogin">
              <div className=" col-md-4 col-sm-12 paytoall_contantrow">
                <img src={Mobile1} alt="ss" className="paytoall_contantimage" />
              </div>
              <div className=" col-md-8 col-sm-12">
                <h3>Super Quick Online Mobile Recharge</h3>
                <p>
                  We provide online mobile recharges for Airtel, Idea, Vodafone,
                  BSNL, RelianceJio and other can be recharged using our
                  service..
                </p>
              </div>
            </div>
            <hr />
            <div className="row home_withoutlogin">
              <div className=" col-md-8 col-sm-12 ">
                <h3>Data Card Recharge</h3>
                <p>
                  All major data card operators like Airtel, Idea, Vodafone,can
                  be recharged using our service.
                </p>
              </div>
              <div className=" col-md-4 col-sm-12 paytoall_contantrow">
                <img src={data} alt="ss" className="paytoall_contantimage" />
              </div>
            </div>{" "}
            <hr />
            <div className="row home_withoutlogin">
              <div className=" col-md-4 col-sm-12 paytoall_contantrow">
                <img src={dth} alt="ss" className="paytoall_contantimage" />
              </div>
              <div className=" col-md-8 col-sm-12">
                <h3>DTH Recharge</h3>
                <p>
                  We provide online DTH recharges for AirtelDTH, DishTV,TataSky,
                  SunDirect,VideoconD2H .
                </p>
              </div>
            </div>
            <hr />
            <div className="row home_withoutlogin">
              <div className=" col-md-8 col-sm-12">
                <h3>Post Paid Recharge</h3>
                <p>
                  Postpaid recharges of all the operators can be done instantly
                  with our system.
                </p>
              </div>
              <div className=" col-md-4 col-sm-12 paytoall_contantrow">
                <img
                  src={recharge}
                  alt="ss"
                  className="paytoall_contantimage"
                />
              </div>
            </div>{" "}
            <hr />
            <div className="row home_withoutlogin">
              <div className=" col-md-4 col-sm-12 paytoall_contantrow">
                <img src={utility} alt="ss" className="paytoall_contantimage" />
              </div>
              <div className=" col-md-8 col-sm-12">
                <h3>Utility Payment</h3>
                <p>
                  We provide online Utility recharges for Electricity,
                  GasBill,WalterBill, BroadBandBill,etc can be recharged using
                  our service.
                </p>
              </div>
            </div>
            <hr />
            <div className="row home_withoutlogin">
              <div className=" col-md-8 col-sm-12">
                <h3>Money Transfer</h3>
                <p>
                  Instant money transfer across all the major banks in India can
                  be done within seconds by registering with us.
                </p>
              </div>
              <div className=" col-md-4 col-sm-12 paytoall_contantrow">
                <img src={mony} alt="ss" className="paytoall_contantimage" />
              </div>
            </div>{" "}
            <hr />
            <div className="row home_withoutloginfooter">
              <div className=" col-md-5 col-sm-12 home_withoutlogin">
                <img src={mob} alt="ss" className="paytoall_login_footerimg" />
              </div>
              <div className=" col-md-7 col-sm-12 home_withoutlogin_footer">
                <h3>
                  Download Our PayToAll <br /> Mobile App Now
                </h3>
                <p>
                  Your mobile recharge either prepaid or postpaid is just a
                  click away with PayToAll PAY!, PayToAll PAY is your one-stop
                  shop solution for online recharge.
                </p>
                <ul className="pt-2">
                  <li>Recharge</li>
                  <li>DTH Recharge</li>
                  <li>Electricity Bill</li>
                  <li>Gas Bill</li>
                  <li>Water Bill</li>
                  <li>Data Card Recharge</li>
                  <li>Money Transfer</li>
                </ul>
                <div className="appstore_store pt-3">
                <img src={appstore} alt="ss" className="appstore_icon "/>
                <img src={playstore} alt="ss" className="appstore_icon ml-4"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contant;
