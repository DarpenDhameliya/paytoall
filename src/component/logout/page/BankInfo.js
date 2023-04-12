import React from "react";

const BankInfo = () => {
  return (
    <>
      <section className="paytoall_about_content">
        <div className="paytoall_about_maincontent">
          <div className="container">
            <div className="paytoall_prepaid">
              <div className="about_contant_bank">
                <h2 className="text-center">Bank Info</h2>
                <hr />
                <div className="about_contant_bank_details">
                <p className=" about_contant_bank_detail_p">
                  For Customer Customers can make payments to below bank.
                </p>
                <div className="row about_contant_bank_detail">
                  <div className="col-md-6 col-sm-12">
                    <b>Bank Holder Name</b> :{" "}
                    <sapn>SoftStorm India Pvt. Ltd.</sapn>
                  </div>
                  <div className="col-md-6 col-sm-12"> </div>
                </div>
                <div className="row about_contant_bank_detail">
                  <div className="col-md-6 col-sm-12">
                    <b>Account No</b> : <sapn>100001000000046388</sapn>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <b>Branch</b> : <span>Mumbai CMS Head office</span>
                  </div>
                </div>
                <div className="row pt-10">
                  <div className="col-md-6 col-sm-12">
                    <b>IFSC Code No</b> : <span>YESB0CMSNOC</span>{" "}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <b>Account Type</b> : <span>Current</span>{" "}
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

export default BankInfo;
