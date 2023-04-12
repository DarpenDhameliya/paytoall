import React from "react";
import { Route, Switch } from "react-router-dom";
import Drawer from "../commoncomponent/Drawer";
import Footer from "../commoncomponent/Footer";
import Header from "../commoncomponent/Header";
import useToggle from "../commoncomponent/Hooks/useToggle";
import WorkHeader from "../commoncomponent/Work_Header";
import Dmr from "../home/Dmr";
import Dth from "../home/Dth";
import Electricity from "../home/Electricity";
import Gas from "../home/Gas";
import Postpaid from "../home/Postpaid";
import Prepaid from "../home/Prepaid";
import Water from "../home/Water";
import MyCommission from "../profile/MyCommission";
import MyTicket from "../profile/MyTicket";
import PinChange from "../profile/PinChange";
import Profile from "../profile/Profile";
import CommissionReport from "../report/CommissionReport";
import Dmrtransaction from "../report/Dmrtransaction";
import LedgerReport from "../report/LedgerReport";
import OtherTransaction from "../report/OtherTransaction";
import WalletCredit from "../report/WalletCredit";
import WalletDetails from "../report/WalletDetails";

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
