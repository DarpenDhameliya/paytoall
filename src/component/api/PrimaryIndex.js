import React from "react";
import { Route, Switch } from "react-router-dom";
import LogoutDrawer from "../logout/common/LogoutDrawer";
import LogoutHeader from "../logout/common/LogoutHeader";
import useToggle from "../commoncomponent/Hooks/useToggle";
import Home from "../logout/page/HomeHeader";
import Footer from "../commoncomponent/Footer";
import AboutPage from "../logout/page/AboutPage";
import BankInfo from "../logout/page/BankInfo";
import ContactUs from "../logout/page/ContactUs";
import TermsPage from "../logout/common/TermsPage";
import PrivacyPage from "../logout/common/PrivacyPage";
import SupportPage from "../logout/common/SupportPage";
import FaqPage from "../logout/common/FaqPage";

const PrimaryIndex = () => {
  const [logoutdrawer, logoutdrawerAction] = useToggle(false);

  return (
    <>
      <LogoutHeader action={logoutdrawerAction.toggle} />
      <LogoutDrawer drawer={logoutdrawer} action={logoutdrawerAction.toggle} />
      <Switch>
        <Route exact path="/login">
          <Home />
        </Route>
        <Route path="/login/about">
          <AboutPage />
        </Route>
        <Route path="/login/service">
        <Home />
        </Route>
        <Route exact path="/login/bank">
        <BankInfo />
        </Route>
        <Route exact path="/login/contact">
        <ContactUs />
        </Route>
        <Route exact path="/login/terms">
        <TermsPage />
        </Route>
        <Route exact path="/login/privacy">
        <PrivacyPage />
        </Route>
        <Route exact path="/login/support">
        <SupportPage />
        </Route>
        <Route exact path="/login/faq">
        <FaqPage />
        </Route>
      </Switch>
      <div className="paytoall_footer_main">
        <Footer />
      </div>
    </>
  );
};

export default PrimaryIndex;
