import React from "react";
import { Route, Switch } from "react-router-dom";
import Drawer from "../login/LoginCommon/Drawer";
import Footer from "../login/LoginCommon/Footer";
import Header from "../login/LoginCommon/Header";
import useToggle from "../commoncomponent/Hooks/useToggle";
import WorkHeader from "../login/LoginCommon/Work_Header";
import Dmr from "../login/home/Dmr";
import Dth from "../login/home/Dth";
import Electricity from "../login/home/Electricity";
import Gas from "../login/home/Gas";
import Postpaid from "../login/home/Postpaid";
import Prepaid from "../login/home/Prepaid";
import Water from "../login/home/Water";
import MyCommission from "../login/profile/MyCommission";
import MyTicket from "../login/profile/MyTicket";
import PinChange from "../login/profile/PinChange";
import Profile from "../login/profile/Profile";
import CommissionReport from "../login/report/CommissionReport";
import Dmrtransaction from "../login/report/Dmrtransaction";
import LedgerReport from "../login/report/LedgerReport";
import OtherTransaction from "../login/report/OtherTransaction";
import WalletCredit from "../login/report/WalletCredit";
import WalletDetails from "../login/report/WalletDetails";

const MainIndex = () => {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      <Header action={drawerAction.toggle} />
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <WorkHeader />
      <Switch>
        <Route path="/paytoall/prepaid">
          <Prepaid />
        </Route>
        <Route path="/paytoall/postpaid">
          <Postpaid />
        </Route>
        <Route path="/paytoall/dth">
          <Dth />
        </Route>
        <Route path="/paytoall/electricity">
          <Electricity />
        </Route>
        <Route path="/paytoall/gas">
          <Gas />
        </Route>
        <Route path="/paytoall/water">
          <Water />
        </Route>
        <Route path="/paytoall/dmr">
          <Dmr />
        </Route>
        <Route path="/paytoall/othertrancation">
          <OtherTransaction />
        </Route>
        <Route path="/paytoall/dmrtrancation">
          <Dmrtransaction />
        </Route>
        <Route path="/paytoall/walletcredit">
          <WalletCredit />
        </Route>
        <Route path="/paytoall/wallet">
          <WalletDetails />
        </Route>
        <Route path="/paytoall/ledger">
          <LedgerReport />
        </Route>
        <Route path="/paytoall/commission">
          <CommissionReport />
        </Route>
        <Route path="/paytoall/profile">
          <Profile />
        </Route>
        <Route path="/paytoall/changepin">
          <PinChange />
        </Route>
        <Route path="/paytoall/mycommission">
          <MyCommission />
        </Route>
        <Route path="/paytoall/ticket">
          <MyTicket />
        </Route>
      </Switch>
      <div className="paytoall_footer_main">
        <Footer />
      </div>
    </>
  );
};

export default MainIndex;
