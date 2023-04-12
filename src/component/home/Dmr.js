import React, { useState } from "react";
import Select from "react-select";
import image from "../../assets/images/20230101_115506.jpg";

const Dmr = () => {
  const [selectval, setSelectval] = useState([]);
  const [isClearable] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

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
            <div className="row m-0">
              <div className="col-md-5">
                <h4 className="paytoall_content_heading">Water</h4>
                <input
                  type="text"
                  name="amount"
                  placeholder="Enter Mobile Number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <button type="button" className="main-btn">
                  DMR Login
                </button>
              </div>
              <div className="col-md-7">
                <img src={image} alt="img" className="paytoall_prepaid_image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dmr