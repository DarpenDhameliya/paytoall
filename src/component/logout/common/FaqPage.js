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
                  <Accordion.Header>
                    {" "}
                    <h6>I need more information about PayToAll. </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      PayToAll was established in 2020. We are the only start-up
                      in the digital payments industry to be certified by the
                      Department for Promotion of Industry and Internal Trade
                      (DPIIT). Our major accomplishments within a short span of
                      three years are:
                    </p>
                    <p>– 11% market share in DMT business</p>
                    <p>– 33% market share in AePS</p>
                    <p>– 10 lakh registered retailers</p>
                    <p>– More than 12 crore customers availing the services</p>
                    <p>– Presence in 28 States and 8 UTs</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h6>I don’t have time to learn a new app.</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      PayToAll is simple and easy. Our app and web portal are
                      currently available in English, Hindi and Marathi. 7
                      regional languages will be available shortly.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h6>
                      What is the minimum amount required to start a business
                      with PayToAll?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Starting a business with PayToAll is very easy and simple.
                      You do not need any employee for this. You can complete a
                      transaction within 2 to 3 minutes. You need to pay a
                      one-time license fee of Rs. 1000.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h6>
                      In case I face any problem, how do I get the solution for
                      the same?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our customer service team is available from 8 am to 8 pm
                      to assist you. Customer service is available in many
                      regional languages. You can also contact your local
                      Relationship Manager for assistance.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h6>When and how will I receive my commission?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      PayToAll commissions are credited to your wallet on the
                      very same day, whereas other companies pay it after one
                      day.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <h6>
                      How will I get any help in providing insurance to my
                      customers?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      It is very easy to understand our insurance products and
                      services. We provide product and insurance selling
                      training through videos. You can download marketing
                      collaterals from our app and display it in your store.
                      Should you need any help, please contact our customer
                      service team or our Relationship Manager.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <h6>
                      How can I get help in the marketing of PayToAll Products?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      You can download all the marketing materials from our app
                      or web portal and print it. Go to the ‘Download’ section,
                      select ‘Language’ and ‘Service’ and print your
                      poster/banner or leaflet.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <h6>I do not want to share my PAN Card.</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      PayToAll is an ISO 27001 and DIPP certified fintech
                      company. Your PAN Card information will be safe with us.
                      PAN Card is mandatory for all financial transactions.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <h6>Can I keep a record of all my past transactions?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes. All the reports are available on the App for your
                      reference and download.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <h6>
                      What is the minimum amount I need to upload in the wallet?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Minimum Rs. 1000 can be uploaded in the wallet.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    <h6>Can I create 2 retailer IDs with one document?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      No. You cannot run 2 IDs simultaneously with the same
                      documents. For security purposes, both the IDs will get
                      blocked. If your IDs get blocked, you can send an email to
                      paytoall.in@gmail.com along with details of the ID you
                      want to continue with.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    <h6>Who can unlock a retailer ID?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      You can contact our customer care on (+91) 9099 9199 47
                      for assistance on this matter.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    <h6>
                      What are the modes of topping up wallet for the Retailer?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>- Branch deposit</p>
                    <p>- CDM deposit</p>
                    <p>- Net banking (Payment gateway)</p>
                    <p>- Same/Other bank transfer</p>
                    <p>- CDM card</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    <h6>
                      What are the modes of topping up wallet for the Retailer?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>- Branch deposit</p>
                    <p>- CDM deposit</p>
                    <p>- Net banking (Payment gateway)</p>
                    <p>- Same/Other bank transfer</p>
                    <p>- CDM card</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    <h6>
                      Are there any charge for retailers to load the main
                      wallet?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Yes. The charges are mentioned below :</p>
                    <p>
                      - Branch Deposit: ₹ 25, if the amount is less than ₹
                      35,000
                    </p>
                    <p>
                      - CDM Deposit: ₹ 25, if the amount is less than ₹ 35,000
                    </p>
                    <p>- Payment Gateway: ₹ 12 per transaction</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="15">
                  <Accordion.Header>
                    <h6>
                      What banks are available for Branch &amp; CDM deposit?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>There are 6 banks available for Branch & CDM deposit.</p>
                    <p>- Yes Bank</p>
                    <p>- ICICI Bank</p>
                    <p>- Axis Bank</p>
                    <p>- State Bank of India</p>
                    <p>- Karur Vysya Bank</p>
                    <p>- Federal Bank</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="16">
                  <Accordion.Header>
                    <h6>
                      How can I load my main wallet through ‘Branch deposit’?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>- Go to ‘Banking & Finance’ option on the Web portal.</p>
                    <p>- Get the prefilled deposit slip.</p>
                    <p>- Fill the required details.</p>
                    <p>- Submit at the branch.</p>
                    <p>- Upload the deposit slip received from your bank.</p>
                    <p>
                      - After submitting the slip, top-up will be credited
                      within 30 minutes.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="17">
                  <Accordion.Header>
                    <h6>
                      How can I load the main wallet through online bank
                      transfer?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>- Log in to your Netbanking portal.</p>
                    <p>- Go to the transfer option.</p>
                    <p>
                      - Add PayToAll as beneficiary, enter Account number & IFSC
                      code.
                    </p>
                    <p>- Enter the required amount and pay.</p>
                    <p>- Take a screenshot of the successful transaction.</p>
                    <p>- Upload the screenshot of the transaction.</p>
                    <p>
                      - After submitting the screenshot, top up will be credited
                      within 30 minutes.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="18">
                  <Accordion.Header>
                    <h6>
                      I have attempted to load my wallet through Payment
                      Gateway. However, the transaction status shows ‘In
                      progress’. What should I do?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We regret the inconvenience caused. Kindly wait for 72
                      working hours, the amount will be credited to your
                      account.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="19">
                  <Accordion.Header>
                    <h6>
                      I have attempted to load my wallet through Payment
                      Gateway. However, the transaction has failed and the
                      amount is debited. What should I do?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We regret the inconvenience caused. Kindly wait for 72
                      working hours, the amount will be reversed to your bank
                      account. After 72 hours, please raise a complaint from
                      your ‘Complaint and Enquiry’ section with ‘Updated
                      passbook/Bank statement’. You will receive a revert soon.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="20">
                  <Accordion.Header>
                    <h6>What is ‘Move to Bank’ and how can I use it?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      When you transfer your trade balance amount to your linked
                      bank account it is ‘Move to Bank’. Move to Bank option is
                      available under the Trade Wallet option in the mobile app.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="21">
                  <Accordion.Header>
                    <h6>
                      Please find the amount, charges and mode of payment
                      details given below:
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Amount&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp;Mode of payment
                    </p>
                    <p>
                      ₹ 10 to ₹ 24,999&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ₹ 05 IMPS
                    </p>
                    <p>
                      ₹ 25001 to 99,999&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; ₹ 10 IMPS
                    </p>
                    <p>
                      No limit&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; ₹ 03 NEFT
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="22">
                  <Accordion.Header>
                    <h6>
                      I have done a ‘Move to Bank’ transaction that has failed.
                      However, the amount has been debited from my trade
                      balance. What should I do?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Kindly wait for 24 bank working hours. The amount will be
                      reversed to your trade balance.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="23">
                  <Accordion.Header>
                    <h6>
                      I have done a ‘Move to Bank’ transaction and the status is
                      ‘In-progress’. What should I do?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Kindly wait for 24 bank working hours for the status to be
                      updated. If the status is success, the amount will be
                      credited to your bank account. If the credit has failed,
                      the amount will be reversed to your trade wallet.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="24">
                  <Accordion.Header>
                    <h6>
                      I have done a ‘Move to Bank’ transaction and status is
                      time-out. What should I do?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Due to some technical issue, the transaction could not be
                      processed. Please wait for 3 bank working days and you
                      will know if the transaction status is ‘Success’ or
                      ‘Failed’.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="25">
                  <Accordion.Header>
                    <h6>What is the limit for ‘Move to Bank’ transactions?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>There are no limits for ‘Move to Bank’ transactions.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="26">
                  <Accordion.Header>
                    <h6>How can I change my linked bank account?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      You can change your linked bank account from ‘My Profile’.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="27">
                  <Accordion.Header>
                    <h6>Can a retailer become a distributor?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Yes. The retailer can.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="28" className="lastchild_support">
                  <Accordion.Header>
                    <h6>
                      Can a retailer become a distributor with the same mobile
                      number?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes. The retailer can become a distributor with the same
                      mobile number.
                    </p>
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
