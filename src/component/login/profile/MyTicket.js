import React, { useState } from "react";
import Select from "react-select";

const MyTicket = () => {
  const [selectval, setSelectval] = useState([]);
  const [isClearable] = useState(true);
  const [todate, setTodate] = useState("");
  const [fromdate, setFromdate] = useState("");
  const colourOptions = [
    { value: "purple", label: "Purple" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
  ];
  return (
    <>
      <section className="paytoall_content">
        <div className="container">
          <div className="paytoall_prepaid">
            <h4 className="paytoall_h4">My Ticket</h4>
            <div className="row m-0">
              <div className="col-md-6 col-lg-3 col-sm-6  paytoall_tebscr">
                <input
                  type="date"
                  name="fromdate"
                  value={fromdate}
                  className="paytoall_transaction_input"
                  onChange={(e) => setFromdate(e.target.value)}
                />
              </div>
              <div className="col-md-6 col-lg-3 col-sm-6  paytoall_tebscr">
                <input
                  type="date"
                  name="todate"
                  placeholder="Phone Number *"
                  value={todate}
                  className="paytoall_transaction_input"
                  onChange={(e) => setTodate(e.target.value)}
                />
              </div>
              <div className="col-md-6 col-lg-3 col-sm-6  paytoall_tebscr">
                <Select
                  maxMenuHeight={"200px"}
                  isClearable={isClearable}
                  classNamePrefix="select"
                  name="color"
                  placeholder="All"
                  value={selectval}
                  onChange={setSelectval}
                  options={colourOptions}
                />
              </div>
              <div className="col-md-6 col-lg-3 col-sm-6  paytoall_tebscr">
                <Select
                  maxMenuHeight={"200px"}
                  isClearable={isClearable}
                  classNamePrefix="select"
                  name="color"
                  placeholder="All"
                  value={selectval}
                  onChange={setSelectval}
                  options={colourOptions}
                />
              </div>
              <div className="col-md-6 col-lg-3 col-sm-6  paytoall_tebscr paytoall_changepin">
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

export default MyTicket;
