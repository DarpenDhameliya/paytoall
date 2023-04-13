import React, { useState, useEffect } from "react";
import mob1 from "../../../assets/images/technology/mob1.png";
// import mob1 from "C:/Users/SSTPL-4/react/paytoall/src/assets/images/technology/mob1.png";
import mob2 from "../../../assets/images/technology/mob2.png";
import mob3 from "../../../assets/images/technology/mob3.png";
import mob4 from "../../../assets/images/technology/mob4.png";
import mob5 from "../../../assets/images/technology/mob5.png";
import mob6 from "../../../assets/images/technology/mob6.png";
import mob7 from "../../../assets/images/technology/mob7.png";
import mob8 from "../../../assets/images/technology/mob8.png";
import mob9 from "../../../assets/images/technology/mob9.png";
import mob10 from "../../../assets/images/technology/mob10.png";
import mob11 from "../../../assets/images/technology/mob11.png";
import mob12 from "../../../assets/images/technology/mob12.png";
import mob13 from "../../../assets/images/technology/mob13.png";
import mob14 from "../../../assets/images/technology/mob14.png";
import mob15 from "../../../assets/images/technology/mob15.png";
import mob16 from "../../../assets/images/technology/mob16.png";
import mob17 from "../../../assets/images/technology/mob17.jpg";
import mob18 from "../../../assets/images/technology/mob18.png";
import mob19 from "../../../assets/images/technology/mob19.png";
import mob20 from "../../../assets/images/technology/mob20.png";
import mob21 from "../../../assets/images/technology/mob21.png";
import mob22 from "../../../assets/images/technology/mob22.png";
import mob23 from "../../../assets/images/technology/mob23.png";
import mob24 from "../../../assets/images/technology/mob24.png";

const MyCommission = () => {
  const [workdata, setWorkdata] = useState([]);

  useEffect(() => {
    let data = [
      {
        image: mob1,
        operator: "Airtel",
        service: "Mobile",
        commission_type: "(%)   Percentage",
        commission: "2",
      },
      {
        image: mob2,
        operator: "Vodafone",
        service: "Mobile",
        commission_type: "(%)   Percentage",
        commission: "2.7",
      },
      {
        image: mob3,
        operator: "BSNL STV",
        service: "Mobile",
        commission_type: "(%)   Percentage",
        commission: "2.7",
      },
      {
        image: mob4,
        operator: "BSNL Topup",
        service: "Mobile",
        commission_type: "(%)   Percentage",
        commission: "2.7",
      },
      {
        image: mob5,
        operator: "Idea",
        service: "Mobile",
        commission_type: "(%)   Percentage",
        commission: "2.7",
      },
      {
        image: mob6,
        operator: "JIO Postpaid",
        service: "Postpaid",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob7,
        operator: "Tata Sky",
        service: "DTH",
        commission_type: "(%)   Percentage",
        commission: "2.7",
      },
      {
        image: mob8,
        operator: "Reliance Digital TV",
        service: "DTH",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob9,
        operator: "Videocon D2h",
        service: "DTH",
        commission_type: "(%)   Percentage",
        commission: "2.7",
      },
      {
        image: mob10,
        operator: "Airtel Digital TV",
        service: "DTH",
        commission_type: "(%)   Percentage",
        commission: "2",
      },
      {
        image: mob11,
        operator: "Dish TV",
        service: "DTH",
        commission_type: "(%)   Percentage",
        commission: "2.7",
      },
      {
        image: mob12,
        operator: "Airtel Postpaid",
        service: "Postpaid",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob13,
        operator: "Idea Postpaid",
        service: "Postpaid",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob14,
        operator: "JIO",
        service: "Mobile",
        commission_type: "(%)   Percentage",
        commission: "2.7",
      },
      {
        image: mob15,
        operator: "BSNL Postpaid",
        service: "Postpaid",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob16,
        operator: "Vodafone Postpaid",
        service: "PostpaidDTH",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob17,
        operator: "Gujarat Gas Limited",
        service: "GasElectricity",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob18,
        operator: "Dakshin Gujarat Vij Company Limited",
        service: "Electricity",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob19,
        operator: "Madhya Gujarat Vij Company Limited",
        service: "Electricity",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob20,
        operator: "Torrent Power Ltd. (Ahmedabad",
        service: "Electricity",
        Electricitycommission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob21,
        operator: "Uttar Gujarat Vij Company Limited",
        service: "",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob22,
        operator: "Torrent Power Ltd.",
        service: "Electricity",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob23,
        operator: "Surat Municipal Corporation",
        service: "Water",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
      {
        image: mob24,
        operator: "Paschim Gujarat Vij Company Limited",
        service: "Electricity",
        commission_type: "(₹)   Flat",
        commission: "0",
      },
    ];
    setWorkdata(data);
  }, []);
  // console.log(workdata);
  return (
    <>
      <section className="paytoall_content">
        <div className="container">
          <div className="paytoall_terms">
          <div className="table-responsive">
            <table className="table table-striped " >
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Operator</th>
                  <th scope="col">Operator Name</th>
                  <th scope="col">Service</th>
                  <th scope="col"> Commission Type</th>
                  <th scope="col">Commission</th>
                </tr>
              </thead>
              <tbody>
                {workdata.map((e, index) => {
                  console.log(e);
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <img src={e.image} alt="sstpl" style={{width:'50px'}} />
                      </td>
                      <td>{e.operator}</td>
                      <td>{e.service}</td>
                      <td>{e.commission_type}</td>
                      <td>{e.commission}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCommission;
