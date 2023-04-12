import React from "react";
import mob from "../../../assets/images/1.png";
import Contant from "./Contant";
const Home = () => {
  return (
    <>
      <section className="paytoall_footer_login">
        <div className="Paytoall_background">
          <div className="Paytoall_login_home">
            <img src={mob} alt='ss' className="paytoall_login_homeimg" />
            <div className="Paytoall_login_home_font">
            <h2 className="login_home_h2">PayToAll</h2>
            <h4 className="login_home_h4">Best Services For You</h4>
            </div>
          </div>
        </div>
      </section>
      <Contant />
      
    </>
  );
};

export default Home;
