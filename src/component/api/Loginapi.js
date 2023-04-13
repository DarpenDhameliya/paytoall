import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../login/LoginCommon/Footer";
import useToggle from "../commoncomponent/Hooks/useToggle";
import LogoutDrawer from "../logout/common/LogoutDrawer";
import LogoutHeader from "../logout/common/LogoutHeader";
import Home from "../logout/page/HomeHeader";

const Loginapi = () => {
  const [logoutdrawer, logoutdrawerAction] = useToggle(false);

  return (
    <>
      <LogoutHeader action={logoutdrawerAction.toggle} />
      <LogoutDrawer drawer={logoutdrawer} action={logoutdrawerAction.toggle} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <div className="paytoall_footer_main">
        <Footer />
      </div>
    </>
  );
};

export default Loginapi;
