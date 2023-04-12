import React, { useState } from "react";

const WalletDetails = () => {
  const [todate, setTodate] = useState("");
  const [fromdate, setFromdate] = useState("");
  return (
    <>
      <section className="paytoall_content">
        <div className="container">
          <div className="paytoall_prepaid">
            <h4 className="paytoall_h4">Wallet Details</h4>
            <div className="row m-0">
              <div className="col-md-6 col-lg-4 col-sm-6  paytoall_tebscr ">
                <input
                  type="date"
                  name="fromdate"
                  placeholder="Phone Number *"
                  value={fromdate}
                  className="paytoall_transaction_input"
                  onChange={(e) => setFromdate(e.target.value)}
                />
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6  paytoall_tebscr">
                <input
                  type="date"
                  name="todate"
                  placeholder="Phone Number *"
                  value={todate}
                  className="paytoall_transaction_input"
                  onChange={(e) => setTodate(e.target.value)}
                />
              </div>

              <div className="col-md-6 col-lg-4 col-sm-6  paytoall_tebscr">
                <button type="button" className="main-btn">
                  Show
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WalletDetails;
